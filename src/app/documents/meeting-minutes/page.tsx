import { project } from "@/data/project";

export const metadata = {
  title: `Meeting Minutes | ${project.name}`,
  description: "Meeting minutes and progress report logs for Team 2.",
};

export default function MeetingMinutesPage() {
  return (
    <article className="space-y-10">
      {/* Header */}
      <header>
        <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-accent">
          Documentation &bull; Governance
        </p>
        <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl text-foreground">
          Meeting Minutes
        </h1>
        <p className="mt-2 text-xl font-sans text-muted">
          {project.team} &bull; {project.course} &bull; {project.term}
        </p>

        {/* Accent Bar */}
        <div aria-hidden className="mt-6 flex h-[3px] w-28">
          <span className="flex-1 bg-accent" />
          <span className="w-8 bg-accent-orange" />
        </div>
      </header>

      {/* Under Construction / In Progress Card */}
      <section className="border-t border-rule pt-10 font-sans">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-rule bg-neutral-50/60 p-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">
            Meeting Minutes In Progress
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted leading-relaxed">
            Progress reports and weekly meeting logs are currently being prepared and will be uploaded to this page as deliverables are finalized.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center rounded-full bg-neutral-200/70 px-3 py-1 text-xs font-medium text-muted">
              Status: Pending Progress Report Upload
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
