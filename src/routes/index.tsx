import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, experience, softSkills } from "@/lib/profile";
import photoAsset from "@/assets/nonhlanhla-sishi.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nonhlanhla Sishi — Office Administration & Client Support" },
      {
        name: "description",
        content:
          "Portfolio of Nonhlanhla Sishi: call centre agent, teacher assistant and office administrator in Johannesburg with an NQF Level 4 Office Administration certificate.",
      },
      { property: "og:title", content: "Nonhlanhla Sishi — Office Administration & Client Support" },
      {
        property: "og:description",
        content:
          "Portfolio of Nonhlanhla Sishi: call centre agent, teacher assistant and office administrator in Johannesburg with an NQF Level 4 Office Administration certificate.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="hero-surface border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-24 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.05] sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-display text-xl text-accent sm:text-2xl">{profile.title}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View my work <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Contact me
              </Link>
              <a
                href="/nonhlanhla-sishi-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Download className="size-4" /> Download CV
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={photoAsset.url}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-4 grid grid-cols-2 gap-5">
                <div>
                  <dt className="text-3xl font-semibold font-display">6+</dt>
                  <dd className="text-sm text-muted-foreground">years of work experience</dd>
                </div>
                <div>
                  <dt className="text-3xl font-semibold font-display">5</dt>
                  <dd className="text-sm text-muted-foreground">roles across public service &amp; education</dd>
                </div>
                <div>
                  <dt className="text-3xl font-semibold font-display">NQF 4</dt>
                  <dd className="text-sm text-muted-foreground">Office Administration certificate</dd>
                </div>
                <div>
                  <dt className="text-3xl font-semibold font-display">4</dt>
                  <dd className="text-sm text-muted-foreground">documented projects</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">What I bring to a team</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-14 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Recent roles</h2>
          <Link to="/experience" className="text-sm font-semibold text-accent hover:underline">
            Full history
          </Link>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {experience.slice(0, 3).map((e) => (
            <li key={e.role} className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {e.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{e.role}</h3>
              <p className="text-sm text-accent">{e.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.points[0]}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
