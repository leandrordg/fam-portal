import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Class, User } from "@prisma/client";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  classes: (Class & {
    students: User[];
  })[];
};

export function GridClasses({ classes }: Props) {
  if (!classes.length) {
    return <p className="text-muted-foreground">Nenhuma classe encontrada.</p>;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classItem) => (
        <Card key={classItem.id}>
          <CardHeader>
            <CardTitle>{classItem.title}</CardTitle>
            <CardDescription>{classItem.identifier}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Qtd de alunos: {classItem.students.length}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" asChild>
              <Link href={`/classes/${classItem.id}`}>Acessar classe</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
