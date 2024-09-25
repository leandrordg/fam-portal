import { db } from "@/lib/db";

const getAllCourses = async () => {
  return await db.course.findMany({
    include: {
      classes: true,
    },
  });
};

const getCourseById = async (id: string) => {
  return await db.course.findUnique({
    where: { id },
    include: {
      classes: true,
    },
  });
};

export { getAllCourses, getCourseById };