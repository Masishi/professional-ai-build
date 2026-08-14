import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { profile, references } from "@/lib/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nonhlanhla Sishi — Administrator in Johannesburg" },
      {
        name: "description",
        content:
          "Who I am, how I work and what I value: an office administrator and client support agent from Bram Fischerville, Johannesburg.",
      },
      { property: "og:title", content: "About Nonhlanhla Sishi" },
      {
        property: "og:description",
        content: "My background, working style and professional references.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="Organised, calm with people, and precise with detail."
        lead="I work where the public meets the office — answering the call, capturing the record, and making sure someone actually follows up."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            My name is {profile.name} and I live in Bram Fischerville, Johannesburg. I completed my
            NQF Level 4 National Certificate (Vocational) in Office Administration at South West
            Gauteng College in Dobsonville, and I have been working in administration, education
            support and public service ever since.
          </p>
          <p>
            Most recently I worked as a Call Centre Agent at the Office of the Premier, where I
            handled public inquiries, logged service delivery complaints and escalated urgent
            matters to the right department. Before that I was a Teacher Assistant at Moses Kotane
            Primary School and a Literacy Facilitator with Nali&apos;Bali, running reading sessions
            and tracking learner progress.
          </p>
          <p>
            What connects all of these roles is the same thing: people need something, and there
            has to be a system behind them getting it. I am the person who keeps the register, sends
            the follow-up, files the document where it can be found again, and speaks to the person
            in front of me with respect.
          </p>
          <p>
            I am currently strengthening my digital skills — spreadsheets, reporting and
            web basics — so that I can grow into office coordination and administrative
            systems work. This website is part of that: I built it with AI-assisted tools and
            learned how the routing, layout and design tokens fit together.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
            <p className="eyebrow">Personal details</p>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Date of birth</dt>
                <dd className="font-medium">{profile.dateOfBirth}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Location</dt>
                <dd className="text-right font-medium">Bram Fischerville, JHB</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Languages</dt>
                <dd className="font-medium">English, isiZulu</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Availability</dt>
                <dd className="font-medium">Immediate</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
            <p className="eyebrow">References</p>
            <ul className="mt-3 space-y-3 text-sm">
              {references.map((r) => (
                <li key={r.name}>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-muted-foreground">
                    {r.role} — {r.org}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Contact details available on request.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
