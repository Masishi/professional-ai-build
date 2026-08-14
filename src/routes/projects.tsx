import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "@/lib/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nonhlanhla Sishi | Admin & Literacy Work" },
      {
        name: "description",
        content:
          "Four practical projects: a service delivery complaints tracker, a Nali'Bali reading club programme, a school filing and budget system, and this portfolio website.",
      },
      { property: "og:title", content: "Projects — Nonhlanhla Sishi" },
      {
        property: "og:description",
        content: "Real work I designed and ran, with the tools and methods used for each.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects I designed and ran"
        lead="Each of these started as a problem in the office or the classroom, and ended as a system somebody else could keep using."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="font-display text-sm text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 text-xl font-semibold">{p.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <p className="mt-4 border-l-2 border-accent pl-3 text-sm italic text-foreground">
                {p.impact}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
