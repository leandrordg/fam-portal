import { Badge } from "@/components/ui/badge";
import { formatRole } from "@/lib/utils";
import type { User } from "@prisma/client";
import Image from "next/image";

type Props = {
  user: User;
};

export function UserHead({ user }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Image
          src={user.imageUrl}
          alt={user.firstName}
          width={48}
          height={48}
          className="rounded-full object-cover size-8 md:size-12"
        />

        <h1 className="md:text-lg font-medium">
          {user.firstName + " " + user.lastName}
        </h1>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">{user.email}</Badge>
        {user.username && <Badge variant="secondary">{user.username}</Badge>}
        {user.phone && <Badge variant="secondary">{user.phone}</Badge>}
        <Badge>{formatRole(user.role)}</Badge>
      </div>
    </div>
  );
}
