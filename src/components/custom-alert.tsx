import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlertIcon, CircleXIcon, InfoIcon } from "lucide-react";

type Props = {
  title: string;
  message: string;
  type?: "info" | "warning" | "error";
};

export function CustomAlert({ title, message, type = "info" }: Props) {
  const Icon = {
    info: InfoIcon,
    warning: CircleAlertIcon,
    error: CircleXIcon,
  }[type];

  const variant =
    type === "info"
      ? "default"
      : type === "warning"
      ? "warning"
      : "destructive";

  return (
    <Alert variant={variant}>
      <Icon className="size-4" />
      <AlertTitle className="text-">{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
