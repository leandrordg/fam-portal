import type { LucideIcon } from "lucide-react";

export {};

declare global {
  interface UserPublicMetadata {
    isAdmin: boolean;
  }

  interface CustomJwtSessionClaims {
    metadata: {
      isAdmin: boolean;
    };
  }
}

export interface Link {
  id: string;
  url: string;
  name: string;
  icon: LucideIcon;
}
