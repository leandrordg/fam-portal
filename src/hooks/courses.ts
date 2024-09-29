import { db } from "@/lib/db";

const getManyCourses = async () => {
  return await db.course.findMany({
    include: {
      classes: true,
    },
    orderBy: {
      title: "asc",
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

export { getCourseById, getManyCourses };
