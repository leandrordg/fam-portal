import type { ROLE } from "@prisma/client";
import type { LucideIcon } from "lucide-react";

export {};

declare global {
  interface UserPublicMetadata {
    user_role?: ROLE;
    course_id?: string;
    class_id?: string;
  }

  interface CustomJwtSessionClaims {
    metadata: {
      user_role?: ROLE;
    };
  }
}

export interface Link {
  id: string;
  url: string;
  name: string;
  icon: LucideIcon;
}
