import { db } from "@/lib/db";
import { clerkClient, WebhookEvent } from "@clerk/nextjs/server";
import { ROLE } from "@prisma/client";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  switch (eventType) {
    case "user.created":
      await db.user.create({
        data: {
          id: evt.data.id,
          firstName: evt.data.first_name!,
          lastName: evt.data.last_name!,
          email: evt.data.email_addresses.find(
            (e) => e.id === evt.data.primary_email_address_id
          )?.email_address!,
          username: evt.data.username,
          phone: evt.data.phone_numbers.find(
            (p) => p.id === evt.data.primary_phone_number_id
          )?.phone_number,
          imageUrl: evt.data.image_url,
          createdAt: new Date(evt.data.created_at).toISOString(),
          updatedAt: new Date(evt.data.updated_at).toISOString(),
        },
      });

      await clerkClient.users.updateUserMetadata(evt.data.id, {
        publicMetadata: {
          user_role: ROLE.GUEST,
        },
      });

      console.log(`[SVIX] User created with ID: ${id}`);
      break;
    case "user.updated":
      await db.user.update({
        where: { id: evt.data.id },
        data: {
          firstName: evt.data.first_name!,
          lastName: evt.data.last_name!,
          email: evt.data.email_addresses.find(
            (e) => e.id === evt.data.primary_email_address_id
          )?.email_address!,
          username: evt.data.username,
          phone: evt.data.phone_numbers.find(
            (p) => p.id === evt.data.primary_phone_number_id
          )?.phone_number,
          imageUrl: evt.data.image_url,
          updatedAt: new Date(evt.data.updated_at).toISOString(),
          role: evt.data.public_metadata?.user_role,
        },
      });

      console.log(`[SVIX] User updated with ID: ${id}`);
      break;
    case "user.deleted":
      await db.user.delete({
        where: { id: evt.data.id },
      });

      console.log(`[SVIX] User deleted with ID: ${id}`);
      break;
    default:
      console.log(`[SVIX] Unknown event type: ${eventType}`);
  }

  return new Response("[SVIX] Request registered successfully", {
    status: 200,
  });
}
