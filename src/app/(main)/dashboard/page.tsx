import { getIndividualUser } from "@/hooks/users";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = auth();

  const user = await getIndividualUser(userId!);

  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <h1 className="text-lg font-medium">Dashboard ({user?.course?.title})</h1>
    </main>
  );
}
