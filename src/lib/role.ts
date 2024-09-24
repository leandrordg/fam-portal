import { auth } from "@clerk/nextjs/server";
import type { ROLE } from "@prisma/client";

const checkRole = (role: ROLE) => {
  const { sessionClaims } = auth();

  return sessionClaims?.metadata.user_role === role;
};

const currentRole = () => {
  const { sessionClaims } = auth();

  return sessionClaims?.metadata.user_role!;
};

export { checkRole, currentRole };
