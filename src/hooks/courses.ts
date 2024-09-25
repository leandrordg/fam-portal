import { db } from "@/lib/db";

const getAllCourses = async () => {
  return await db.course.findMany();
};

const getCourseById = async (id: string) => {
  return await db.course.findUnique({
    where: { id },
  });
};

export { getAllCourses, getCourseById };
