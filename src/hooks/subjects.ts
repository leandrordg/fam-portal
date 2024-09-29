import { db } from "@/lib/db";

const getSubjectsByClassId = async (classId: string) => {
  return await db.subject.findMany({
    where: {
      classes: {
        some: {
          id: classId,
        },
      },
    },
  });
};

export { getSubjectsByClassId };