import Link from "next/link";
import { project, meetingMinutes } from "@/data/project";

export const metadata = {
  title: `Meeting Minutes | ${project.name}`,
  description:
    "Official meeting minutes, progress logs, sponsor discussions, and action registers for Team 2.",
};

export default function MeetingMinutesPage() {
  return (
    <article className="space-y-10">
      {/* Page Header */}
      <header>
        <div className="flex items-center gap-2 text-xs font-sans font-semibold text-accent uppercase tracking-[0.2em]">
          <Link href="/documents" className="hover:underline">
            Documents
          </Link>
          <span className="text-muted">&bull;</span>
          <span>Governance &amp; Logs</span>
        </div>

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

        <p className="mt-6 text-lg leading-relaxed text-foreground/90 max-w-3xl font-sans">
          Official records of team meetings, sponsor sessions with Vice-Provost Jill Sible,
          fundraising agendas, and agreed action items supporting Laundry Love. All meeting documents
          are available below in full scrollable view.
        </p>
      </header>

      {/* Summary Metrics */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4 font-sans">
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-muted">Total Records</p>
          <p className="mt-1 text-2xl font-semibold text-foreground">
            {meetingMinutes.length} Logs
          </p>
        </div>
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-accent">Date Range</p>
          <p className="mt-1 text-base font-semibold text-accent sm:text-lg">
            Sep 21 – Oct 16
          </p>
        </div>
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-accent-orange">Sponsor Sessions</p>
          <p className="mt-1 text-2xl font-semibold text-accent-orange">2 Meetings</p>
        </div>
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-muted">Meeting Format</p>
          <p className="mt-1 text-base font-semibold text-foreground sm:text-lg">
            Zoom / Online
          </p>
        </div>
      </section>

      {/* Sticky Quick-Jump Navigation Bar */}
      <nav
        aria-label="Meeting quick navigation"
        className="sticky top-16 z-30 -mx-4 px-4 py-3 bg-background/95 backdrop-blur-md border-y border-rule flex flex-wrap items-center justify-between gap-3 font-sans"
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
          <span>Jump to:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {meetingMinutes.map((doc) => (
            <a
              key={doc.id}
              href={`#${doc.id}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-rule bg-background px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-accent hover:text-accent shadow-2xs"
            >
              <span className="font-semibold text-accent">{doc.number}</span>
              <span className="text-muted hidden sm:inline">&bull;</span>
              <span className="text-muted hidden sm:inline">{doc.date}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Stacked Scrollable Meeting Documents */}
      <div className="space-y-16 font-sans">
        {meetingMinutes.map((doc, index) => (
          <section
            key={doc.id}
            id={doc.id}
            className="scroll-mt-32 space-y-6 rounded-2xl border border-rule bg-background p-6 shadow-2xs sm:p-8"
          >
            {/* Header & Quick Action Buttons */}
            <div className="flex flex-col justify-between gap-4 border-b border-rule pb-6 sm:flex-row sm:items-start">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                    {doc.number}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-0.5 text-xs font-medium text-muted">
                    {doc.date}
                  </span>
                  {doc.time && (
                    <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-0.5 text-xs font-medium text-muted">
                      {doc.time}
                    </span>
                  )}
                  <span className="text-xs text-muted">
                    Log #{index + 1} of {meetingMinutes.length}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {doc.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted max-w-3xl">
                  {doc.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:shrink-0">
                <a
                  href={doc.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-rule bg-background px-4 py-2.5 text-xs font-semibold text-foreground shadow-2xs transition hover:border-accent hover:text-accent"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  <span>Open in Tab</span>
                </a>
                <a
                  href={doc.pdfPath}
                  download={doc.downloadName}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs font-semibold text-white shadow-2xs transition hover:bg-accent/90"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Meeting Metadata: Attendees, Format, and Venue */}
            <div className="grid gap-4 sm:grid-cols-2 rounded-xl bg-neutral-50/70 p-4 border border-rule/70">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-2">
                  Attendees
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {doc.attendees.map((attendee) => {
                    const isSponsor = attendee.includes("Sponsor");
                    return (
                      <span
                        key={attendee}
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          isSponsor
                            ? "bg-accent-orange/15 text-accent-orange font-semibold"
                            : "bg-white border border-rule text-foreground/80"
                        }`}
                      >
                        {attendee}
                      </span>
                    );
                  })}
                </div>
                {doc.absent && doc.absent.length > 0 && (
                  <p className="mt-2 text-xs text-muted">
                    <span className="font-semibold">Absent:</span>{" "}
                    {doc.absent.join(", ")}
                  </p>
                )}
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-2">
                  Session Details
                </p>
                <div className="space-y-1 text-xs text-foreground/80">
                  <p>
                    <span className="font-semibold">Venue:</span> {doc.location}
                  </p>
                  {doc.time && (
                    <p>
                      <span className="font-semibold">Time:</span> {doc.time}
                    </p>
                  )}
                  <p>
                    <span className="font-semibold">Original File:</span>{" "}
                    <span className="font-mono">{doc.downloadName}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Key Discussion Points & Agendas */}
            {doc.keyTopics && (
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Key Discussion Points &amp; Agendas
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-foreground/85">
                  {doc.keyTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">&bull;</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Agreed Action Items */}
            {doc.actionItems && doc.actionItems.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Agreed Action Items
                </h3>
                <div className="overflow-x-auto rounded-xl border border-rule bg-white shadow-2xs">
                  <table className="w-full text-left text-xs font-sans">
                    <thead>
                      <tr className="border-b border-rule bg-neutral-50/90 text-muted uppercase tracking-wider font-semibold">
                        <th className="py-2.5 pl-4 pr-3">Action Item</th>
                        <th className="py-2.5 px-3">Assignee</th>
                        <th className="py-2.5 pl-3 pr-4">Target Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-rule">
                      {doc.actionItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/50">
                          <td className="py-2.5 pl-4 pr-3 font-medium text-foreground">
                            {item.what}
                          </td>
                          <td className="py-2.5 px-3 text-muted">
                            <span className="inline-flex rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-foreground/80">
                              {item.who}
                            </span>
                          </td>
                          <td className="py-2.5 pl-3 pr-4 text-accent font-medium">
                            {item.when}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Embedded Scrollable PDF Viewer */}
            <div className="pt-4 border-t border-rule space-y-3">
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="font-semibold uppercase tracking-wider">
                  Full Document Preview ({doc.number})
                </span>
                <span className="font-mono text-[11px]">{doc.downloadName}</span>
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-rule bg-neutral-100 shadow-sm">
                <iframe
                  src={`${doc.pdfPath}#toolbar=1&navpanes=0`}
                  title={`${doc.title} PDF Document`}
                  className="h-[750px] w-full border-0 sm:h-[900px]"
                />
              </div>
              <p className="text-center text-xs text-muted">
                Having trouble viewing the embedded preview? You can{" "}
                <a
                  href={doc.pdfPath}
                  download={doc.downloadName}
                  className="font-medium text-accent hover:underline"
                >
                  download {doc.downloadName} directly
                </a>{" "}
                or{" "}
                <a
                  href={doc.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  open it in a full browser tab
                </a>
                .
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* Footer Back to Top Navigation */}
      <footer className="border-t border-rule pt-6 flex items-center justify-between font-sans text-xs text-muted">
        <span>Team 2 &bull; Clean Slate Project</span>
        <a href="#top" className="font-semibold text-accent hover:underline">
          Back to Top &uarr;
        </a>
      </footer>
    </article>
  );
}
