import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { education, certifications } from "@/lib/profile";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Certifications — Nonhlanhla Sishi" },
      {
        name: "description",
        content:
          "NQF Level 4 National Certificate (Vocational) in Office Administration from South West Gauteng College, plus literacy, teaching assistant and call centre certifications.",
      },
      { property: "og:title", content: "Education & Certifications — Nonhlanhla Sishi" },
      {
        property: "og:description",
        content: "Formal qualification, subjects covered and professional training completed.",
      },
    ],
  }),
  component: Education,
});

function Education() {
  return (
    <>
      <PageHeader
        eyebrow="Learning"
        title="Education & certifications"
        lead="A vocational office administration qualification, extended by on-the-job training in public service and education."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {education.year}
              </p>
              <h2 className="mt-1 text-xl font-semibold">{education.qualification}</h2>
              <p className="text-sm font-medium text-accent">{education.institution}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="eyebrow">Subjects</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.subjects.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-14 text-2xl font-semibold">Certifications & training</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((c) => (
            <article key={c.name} className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <Award className="size-5 text-brass" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.year}
                </p>
              </div>
              <h3 className="mt-2 text-base font-semibold">{c.name}</h3>
              <p className="text-sm text-accent">{c.issuer}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
