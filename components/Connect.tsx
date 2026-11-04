import type { SocialLink } from "@/lib/site";

export function ConnectSections({
  sections,
}: {
  sections: { title: string; links: SocialLink[]; level?: "h2" | "h3" }[];
}) {
  return (
    <>
      {sections.map((section) => {
        const Heading = section.level === "h3" ? "h3" : "h2";
        const visible = section.links.filter((item) => item.href.trim().length > 0);
        return (
          <div key={section.title}>
            <Heading className={section.level === "h3" ? "connect-label" : undefined}>{section.title}</Heading>
            <ul className="connect-grid">
              {visible.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <strong>{item.label}</strong>
                    <span>{item.handle.trim() || "Open profile"}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
