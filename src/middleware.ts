import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/(.*)",
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware((auth, request) => {
  const { sessionClaims } = auth();

  if (!isPublicRoute(request)) {
    auth().protect();
  }

  // check if the user is an admin
  const isAdmin = sessionClaims?.metadata.isAdmin;

  // if is an admin route and the user is not an admin, protect the route, returning a 404
  if (isAdminRoute(request) && !isAdmin) {
    auth().protect((has) => {
      return has({ role: "isAdmin" });
    });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
