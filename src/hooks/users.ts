import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const getManyUsers = async () => {
  const { userId } = auth();

  return await db.user.findMany({
    where: {
      NOT: {
        id: userId!,
      },
    },
    orderBy: {
      firstName: "asc",
    },
  });
};

const getIndividualUser = async (id: string) => {
  return await db.user.findUnique({
    where: {
      id,
    },
    include: {
      course: true,
      class: true,
    },
  });
};

export { getIndividualUser, getManyUsers };
