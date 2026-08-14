import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { experience } from "@/lib/profile";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Work Experience — Nonhlanhla Sishi" },
      {
        name: "description",
        content:
          "Work history: Call Centre Agent at the Office of the Premier, Teacher Assistant, Nali'Bali Literacy Facilitator, exam Invigilator and Administrative Assistant.",
      },
      { property: "og:title", content: "Work Experience — Nonhlanhla Sishi" },
      {
        property: "og:description",
        content: "Six years across public service, education support and school administration.",
      },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Work history"
        title="Where I've worked"
        lead="Public service, primary schools and a TVET college — every role built on communication and accurate records."
      />

      <section className="mx-auto max-w-4xl px-5 py-16">
        <ol className="relative space-y-10 border-l border-border pl-6">
          {experience.map((e) => (
            <li key={`${e.role}-${e.period}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-background bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {e.period}
              </p>
              <h2 className="mt-1 text-xl font-semibold">{e.role}</h2>
              <p className="text-sm font-medium text-accent">{e.org}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
