import { Link } from "@tanstack/react-router";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{profile.title}</p>
        </div>

        <div>
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                href={`mailto:${profile.email}`}
              >
                <Mail className="size-4" /> {profile.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                href={`tel:+27${profile.phone.replace(/\D/g, "").slice(1)}`}
              >
                <Phone className="size-4" /> {profile.phone}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Pages</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/skills", label: "Skills" },
              { to: "/projects", label: "Projects" },
              { to: "/experience", label: "Experience" },
              { to: "/education", label: "Education" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Built with React, TanStack Router and Tailwind CSS.
      </div>
    </footer>
  );
}
