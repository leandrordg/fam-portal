import { db } from "@/lib/db";

const getAllUsers = async () => {
  return await db.user.findMany();
};

const getIndividualUser = async (id: string) => {
  return await db.user.findUnique({
    where: {
      id,
    },
  });
};

export { getAllUsers, getIndividualUser };
