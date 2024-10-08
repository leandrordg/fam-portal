import { db } from "@/lib/db";

const getManyClasses = async () => {
  return await db.class.findMany({
    include: {
      students: true,
      rooms: true,
    },
    orderBy: {
      title: "asc",
    },
  });
};

const getClassesByCourseId = async (courseId: string) => {
  return await db.class.findMany({
    where: { courseId },
    include: {
      students: true,
      rooms: true,
    },
    orderBy: {
      title: "asc",
    },
  });
};

const getIndividualClassById = async (classId: string) => {
  return await db.class.findUnique({
    where: { id: classId },
    include: {
      students: true,
      rooms: true,
    },
  });
};

export { getClassesByCourseId, getIndividualClassById, getManyClasses };
