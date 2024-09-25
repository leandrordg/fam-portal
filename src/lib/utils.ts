import { ROLE } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatRole(role: ROLE) {
  switch (role) {
    case ROLE.GUEST:
      return "Visitante";
    case ROLE.STUDENT:
      return "Aluno";
    case ROLE.TEACHER:
      return "Professor";
    case ROLE.ADMIN:
      return "Administrador";
    default:
      return "Desconhecido";
  }
}

function formatTimestamp(date: Date, dateStyle: "short" | "medium" = "short") {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle }).format(date);
}

export const formatPath = (path: string) => {
  switch (path) {
    case "admin":
      return "Admin";
    case "users":
      return "Usuários";
    case "courses":
      return "Cursos";
    case "students":
      return "Alunos";
    case "teachers":
      return "Professores";
    case "settings":
      return "Configurações";
    default:
      return path;
  }
};

export { cn, formatRole, formatTimestamp };
