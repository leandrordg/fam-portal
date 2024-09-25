import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TriangleAlertIcon } from "lucide-react";

type Props = {
  title: string;
  message: string;
  url: string;
};

export function ErrorAlert({ title, message, url }: Props) {
  return (
    <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-4 items-center justify-center p-6 lg:p-10">
      <TriangleAlertIcon className="size-16 text-muted-foreground" />

      <h1 className="text-lg font-medium">{title}</h1>

      <p className="text-muted-foreground">{message}</p>

      <Button variant="link" asChild>
        <Link href={url}>Voltar</Link>
      </Button>
    </div>
  );
}
