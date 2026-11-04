import type { Dictionary } from "@/lib/i18n";

export function LegalDocument({
  eyebrow,
  updated,
  doc,
}: {
  eyebrow: string;
  updated: string;
  doc: Dictionary["legal"]["terms"];
}) {
  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{doc.title}</h1>
        <p>{doc.summary}</p>
      </section>
      <article className="legal-prose">
        <p className="fine-print">{updated}</p>
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
