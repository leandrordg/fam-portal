import { db } from "@/lib/db";

const getNavigationLinks = async () => {
  return await db.link.findMany();
};

export { getNavigationLinks };
