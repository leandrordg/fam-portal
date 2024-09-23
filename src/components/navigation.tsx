import { NavigationLink } from "@/components/navigation-link";
import { getNavigationLinks } from "@/hooks/links";

export async function NavigationMenu() {
  const links = await getNavigationLinks();

  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <NavigationLink key={link.id} url={link.url} name={link.name} />
      ))}
    </ul>
  );
}
