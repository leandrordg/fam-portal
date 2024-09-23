import { db } from "@/lib/db";

const getNavigationLinks = async () => {
  return await db.link.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
};

export { getNavigationLinks };
