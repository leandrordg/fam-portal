"use client";

import { Button } from "@/components/ui/button";
import { TriangleAlertIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  message: string;
};

export function ErrorAlert({ title, message }: Props) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-4 items-center justify-center p-6 lg:p-10">
      <TriangleAlertIcon className="size-16 text-muted-foreground" />

      <h1 className="text-lg font-medium">{title}</h1>

      <p className="text-muted-foreground">{message}</p>

      <Button variant="link" onClick={handleBack}>
        Voltar
      </Button>
    </div>
  );
}
