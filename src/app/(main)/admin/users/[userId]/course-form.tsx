"use client";

import { useState } from "react";

import { ClassCombobox } from "@/components/class-combobox";
import { CourseCombobox } from "@/components/course-combobox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Class, Course, User } from "@prisma/client";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { updateRegistration } from "./actions/update-registration";

const formSchema = z.object({
  courseId: z.string().min(2, { message: "Curso obrigatório" }).max(50),
  classId: z.string().min(2, { message: "Curso obrigatório" }).max(50),
});

type Props = {
  user: User;
  courses: Course[] | null;
  classes: Class[] | null;
};

export function CourseForm({ user, courses, classes }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseId: user.courseId ?? "",
      classId: user.classId ?? "",
    },
  });

  // const that returns the value of classes based on the chosen course
  const classesFromCourse =
    classes?.filter(
      (individualClass) => individualClass.courseId === form.watch("courseId")
    ) ?? classes;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await updateRegistration({
      id: user.id,
      courseId: values.courseId,
      classId: values.classId,
    });

    if (res?.data?.success) {
      toast.success(res.data.success);
      setIsEditing(false);
    }

    if (res?.data?.error) {
      toast.error(res?.data?.error);
      return;
    }
  }

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <FormField
            control={form.control}
            name="courseId"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Selecione o curso</FormLabel>
                <FormControl>
                  <CourseCombobox
                    value={field.value}
                    onChange={field.onChange}
                    courses={courses}
                    disabled={!isEditing}
                  />
                </FormControl>
                <FormDescription>
                  O curso que o aluno está matriculado.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="classId"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Selecione a turma</FormLabel>
                <FormControl>
                  <ClassCombobox
                    value={field.value}
                    onChange={field.onChange}
                    classes={classesFromCourse}
                    disabled={!isEditing || !!!form.getValues("courseId")}
                  />
                </FormControl>
                <FormDescription>
                  A turma que o aluno está matriculado, refere-se ao curso.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <Button
            type="button"
            onClick={() => {
              form.reset();
              setIsEditing((prev) => !prev);
            }}
          >
            {isEditing ? "Cancelar" : "Editar"}
          </Button>

          {isEditing && (
            <Button
              variant="outline"
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
            >
              {isSubmitting ? (
                <Loader2Icon className="size-3 animate-spin" />
              ) : (
                "Salvar"
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
