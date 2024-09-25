import { db } from "@/lib/db";

const getClassesByCourseId = async (courseId: string) => {
  return await db.class.findMany({
    where: { courseId },
    include: {
      students: true,
    },
  });
};

export { getClassesByCourseId };
