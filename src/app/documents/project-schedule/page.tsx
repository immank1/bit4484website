import Link from "next/link";
import { project } from "@/data/project";

export const metadata = {
  title: `Project Schedule | ${project.name}`,
  description:
    "Official project schedule, work breakdown schedule, and milestone tracking for Team 2.",
};

export default function ProjectSchedulePage() {
  return (
    <article className="space-y-8 font-sans">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-[0.2em]">
            <Link href="/documents" className="hover:underline">
              Documents
            </Link>
            <span className="text-muted">&bull;</span>
            <span>Schedule Baseline</span>
          </div>

          <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl text-foreground">
            Project Schedule
          </h1>
          <p className="mt-2 text-xl text-muted">
            {project.team} &bull; {project.course} &bull; {project.term}
          </p>

          {/* Accent Bar */}
          <div aria-hidden className="mt-6 flex h-[3px] w-28">
            <span className="flex-1 bg-accent" />
            <span className="w-8 bg-accent-orange" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 sm:shrink-0">
          <a
            href="/documents/project-schedule.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-rule bg-background px-4 py-2.5 text-xs font-semibold text-foreground shadow-2xs transition hover:border-accent hover:text-accent"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            <span>Open in Tab</span>
          </a>
          <a
            href="/documents/project-schedule.pdf"
            download="Draft_Schedule_Laundry_Love_New.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs font-semibold text-white shadow-2xs transition hover:bg-accent/90"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Highlights */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-muted font-semibold">Deliverable</p>
          <p className="mt-1 text-lg font-semibold text-foreground">Project Schedule Baseline</p>
          <p className="mt-1 text-xs text-muted">Work packages, milestones, &amp; task owners</p>
        </div>
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold">Timeline Window</p>
          <p className="mt-1 text-lg font-semibold text-accent">Fall Semester 2026</p>
          <p className="mt-1 text-xs text-muted">Weekly progression &amp; event deliverables</p>
        </div>
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-accent-orange font-semibold">Focus</p>
          <p className="mt-1 text-lg font-semibold text-accent-orange">Fundraising &amp; Outreach</p>
          <p className="mt-1 text-xs text-muted">Percent nights, media features, &amp; volunteering</p>
        </div>
      </section>

      {/* Embedded Scrollable PDF Document Viewer */}
      <section className="border-t border-rule pt-6">
        <div className="flex items-center justify-between pb-3 text-xs text-muted">
          <span className="font-semibold uppercase tracking-wider">
            Scrollable Document Viewer
          </span>
          <span className="font-mono">Draft_Schedule_Laundry_Love_New.pdf</span>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-rule bg-neutral-100 shadow-sm">
          <iframe
            src="/documents/project-schedule.pdf#toolbar=1&navpanes=0"
            title="Project Schedule Document"
            className="h-[800px] w-full border-0 sm:h-[950px]"
          />
        </div>

        <p className="mt-3 text-center text-xs text-muted">
          Having trouble viewing the embedded document? You can{" "}
          <a
            href="/documents/project-schedule.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-2 hover:opacity-80"
          >
            open it directly in a new tab
          </a>{" "}
          or use the download button above.
        </p>
      </section>
    </article>
  );
}
