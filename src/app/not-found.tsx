import { ErrorAlert } from "@/components/error-alert";

export default function Page() {
  return (
    <ErrorAlert
      title="Página não encontrada"
      message="A página que você está tentando acessar não existe."
    />
  );
}
