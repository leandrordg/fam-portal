import { Badge } from "@/components/ui/badge";
import type { Class, Room, User } from "@prisma/client";

type Props = {
  individualClass: Class & {
    rooms: Room[];
    students: User[];
  };
};

export function IndividualClassHead({ individualClass }: Props) {
  const rooms = individualClass.rooms.map((room) => room.title).join(", ");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-medium">{individualClass.title}</h1>

      <div className="flex flex-wrap gap-2">
        {rooms && <Badge className="w-fit">{rooms}</Badge>}
        <Badge className="w-fit">
          Alunos: {individualClass.students.length}
        </Badge>
      </div>
    </div>
  );
}
