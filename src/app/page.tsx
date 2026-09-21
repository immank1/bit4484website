import Link from "next/link";
import { currentWork, project } from "@/data/project";

const frontMatter = [
  { label: "Course", value: project.course },
  { label: "Team", value: project.team },
  { label: "Community partner", value: project.partner },
  { label: "Term", value: project.term },
];

export default function Home() {
  return (
    <article className="space-y-12">
      {/* Header Banner */}
      <header>
        <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-accent">
          {project.course}
        </p>
        <h1 className="mt-4 text-4xl font-serif font-semibold leading-tight tracking-tight sm:text-5xl text-foreground">
          {project.name}
        </h1>
        <p className="mt-2 text-xl font-sans text-muted">{project.term}</p>
        
        {/* VT Maroon & Orange Accent Line */}
        <div aria-hidden className="mt-6 flex h-[3px] w-28">
          <span className="flex-1 bg-accent" />
          <span className="w-8 bg-accent-orange" />
        </div>

        <p className="mt-6 text-lg leading-relaxed max-w-3xl text-foreground/90">
          {project.tagline}
        </p>
      </header>

      {/* Project Metadata Table */}
      <dl className="border-t border-rule font-sans text-sm">
        {frontMatter.map((item) => (
          <div
            key={item.label}
            className="flex gap-6 border-b border-rule py-3.5"
          >
            <dt className="w-48 shrink-0 text-muted">{item.label}</dt>
            <dd className="font-medium text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>

      {/* Main Overview Section */}
      <section id="overview" className="mt-12">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Project Overview
        </h2>
        <div className="mt-4 space-y-4 text-lg leading-relaxed">
          <p>{currentWork.what}</p>
          <p>{currentWork.how}</p>
          <p className="text-muted">
            Our team&apos;s active mission this semester is securing critical program funding through four coordinated fundraising initiatives:
          </p>
        </div>

        {/* Fundraisers List */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {currentWork.fundraisers.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-rule/80 bg-neutral-50/50 p-5 transition hover:border-accent/30 hover:bg-neutral-50"
            >
              <h3 className="font-sans text-sm font-semibold text-accent">
                {item.name}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access to Newly Organized Tabs */}
      <section className="border-t border-rule pt-10">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Explore Project Sections
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Link
            href="/about-us"
            className="group block rounded-xl border border-rule bg-background p-6 transition hover:border-accent hover:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent">
                About Us &rarr;
              </h3>
              <span className="font-sans text-xs font-medium text-accent-orange bg-accent-orange/10 px-2.5 py-0.5 rounded-full">
                Team 2
              </span>
            </div>
            <p className="mt-2 font-sans text-sm text-muted">
              Meet our project management team members, roles, contact information, and team profile pictures.
            </p>
          </Link>

          <Link
            href="/documents/stakeholders"
            className="group block rounded-xl border border-rule bg-background p-6 transition hover:border-accent hover:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent">
                Documents &rarr;
              </h3>
              <span className="font-sans text-xs font-medium text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                Stakeholders &amp; Minutes
              </span>
            </div>
            <p className="mt-2 font-sans text-sm text-muted">
              Access the Stakeholders Register, Meeting Minutes logs, and our official Team Charter / Contract.
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
