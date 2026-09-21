import Image from "next/image";
import { members, project } from "@/data/project";

export const metadata = {
  title: `About Us | ${project.name}`,
  description: "Meet the Virginia Tech student team managing the Clean Slate Project.",
};

export default function AboutUsPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <header>
        <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-accent">
          Team Introduction
        </p>
        <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl text-foreground">
          About Our Team
        </h1>
        <p className="mt-2 text-xl font-sans text-muted">
          {project.team} &bull; {project.course} &bull; {project.term}
        </p>
        
        {/* Accent Bar */}
        <div aria-hidden className="mt-6 flex h-[3px] w-28">
          <span className="flex-1 bg-accent" />
          <span className="w-8 bg-accent-orange" />
        </div>

        <p className="mt-6 text-lg leading-relaxed text-foreground/90 max-w-2xl">
          We are undergraduate students in the Pamplin College of Business at Virginia Tech,
          collaborating with community partner <strong className="text-foreground">{project.partner}</strong> to
          help eliminate laundry costs for local families facing financial hardship.
        </p>
      </header>

      {/* Team Members Grid with Photos */}
      <section className="border-t border-rule pt-10">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Team Members &amp; Leadership
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {members.map((member) => (
            <div
              key={member.email}
              className="flex flex-col overflow-hidden rounded-2xl border border-rule bg-background shadow-xs transition hover:border-accent/40 hover:shadow-md"
            >
              {/* Member Photo Container */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition duration-300 hover:scale-102"
                  priority
                />
              </div>

              {/* Member Details */}
              <div className="flex flex-1 flex-col p-6 font-sans">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-orange">
                      {member.role}
                    </p>
                  </div>
                </div>

                {member.bio && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {member.bio}
                  </p>
                )}

                <div className="mt-auto pt-5 border-t border-rule/60">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-accent transition"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Roster Summary Table */}
      <section className="border-t border-rule pt-10">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Contact Directory
        </h2>
        <ul className="mt-4 divide-y divide-rule font-sans text-sm">
          {members.map((member) => (
            <li
              key={member.email}
              className="flex flex-wrap items-center justify-between gap-3 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground">{member.name}</span>
                <span className="text-xs text-muted">({member.role})</span>
              </div>
              <a
                href={`mailto:${member.email}`}
                className="text-muted hover:text-accent text-sm"
              >
                {member.email}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
