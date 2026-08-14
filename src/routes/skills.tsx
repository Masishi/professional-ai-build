import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { technicalSkills, softSkills } from "@/lib/profile";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Nonhlanhla Sishi | Admin & Client Support" },
      {
        name: "description",
        content:
          "Technical skills including Microsoft Office, data capturing, bookkeeping and report writing, plus soft skills in communication and customer service.",
      },
      { property: "og:title", content: "Skills — Nonhlanhla Sishi" },
      {
        property: "og:description",
        content: "Technical and soft skills for office administration and client support roles.",
      },
    ],
  }),
  component: Skills,
});

const levels: Record<string, number> = {
  "Microsoft Word": 90,
  "Microsoft Excel": 80,
  "Data capturing & accuracy checks": 90,
  "Report writing": 75,
  "Bookkeeping & petty cash": 70,
  "Records & filing management": 90,
  "Call centre / CRM logging": 85,
  "Minute taking": 80,
};

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Technical and soft skills"
        lead="The tools I use daily, and the way I work with the people around them."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Technical skills</h2>
          <ul className="mt-6 space-y-5">
            {technicalSkills.map((s) => {
              const level = levels[s] ?? 75;
              return (
                <li key={s}>
                  <div className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="font-medium">{s}</span>
                    <span className="text-muted-foreground">{level}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${level}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Soft skills</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {softSkills.map((s) => (
              <div
                key={s}
                className="rounded-xl border border-border bg-card p-4 text-sm font-medium shadow-soft"
              >
                {s}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-brass/60 bg-brass/15 p-5">
            <p className="eyebrow">Currently learning</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Advanced Excel (pivot tables and lookups), professional report design, and the basics
              of web development — HTML, CSS and how a modern React site is structured.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
