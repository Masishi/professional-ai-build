import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nonhlanhla Sishi — Email, GitHub & LinkedIn" },
      {
        name: "description",
        content:
          "Get in touch with Nonhlanhla Sishi by email at ririsishi@gmail.com, by phone, or connect on GitHub and LinkedIn. CV available to download.",
      },
      { property: "og:title", content: "Contact Nonhlanhla Sishi" },
      {
        property: "og:description",
        content: "Email, phone, GitHub and LinkedIn — plus a downloadable CV.",
      },
    ],
  }),
  component: Contact,
});

const cards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:+27845277888`,
    Icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/nonhlanhlasishi",
    href: profile.github,
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nonhlanhla-sishi",
    href: profile.linkedin,
    Icon: Linkedin,
  },
];

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's work together"
        lead="I'm open to office administration, client support and data capturing roles in Johannesburg and surrounds."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <span className="block text-sm font-medium break-all">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-secondary/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> {profile.location}
            </p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Prefer paper? Download my full CV with work history, qualification and references.
            </p>
          </div>
          <a
            href="/nonhlanhla-sishi-cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" /> Download CV
          </a>
        </div>
      </section>
    </>
  );
}
