import { meetingMinutes, project } from "@/data/project";

export const metadata = {
  title: `Meeting Minutes | ${project.name}`,
  description: "Official team meeting minutes, agenda notes, and action item logs.",
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

        <p className="mt-6 text-lg leading-relaxed text-foreground/90 max-w-2xl">
          Weekly logs documenting team attendance, agenda discussion topics, operational decisions,
          and assigned action items for the Clean Slate Project.
        </p>
      </header>

      {/* Meeting Logs */}
      <section className="space-y-8 border-t border-rule pt-8 font-sans">
        {meetingMinutes.map((meeting, index) => (
          <div
            key={meeting.id}
            className="rounded-2xl border border-rule bg-background p-6 shadow-2xs transition hover:border-accent/30 sm:p-8"
          >
            {/* Top row: Meeting # and Date */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">
                  Meeting #{meetingMinutes.length - index}
                </span>
                <h2 className="mt-1 font-serif text-2xl font-semibold text-foreground">
                  {meeting.title}
                </h2>
              </div>
              <time className="rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-medium text-muted">
                {meeting.date}
              </time>
            </div>

            {/* Attendees */}
            <div className="mt-5 text-sm">
              <span className="font-semibold text-foreground">Attendees: </span>
              <span className="text-muted">{meeting.attendees.join(", ")}</span>
            </div>

            {/* Agenda */}
            <div className="mt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
                Agenda Items
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/90">
                {meeting.agenda.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Discussion & Summary */}
            <div className="mt-5 rounded-xl bg-neutral-50/80 p-4 text-sm leading-relaxed text-foreground/90">
              <span className="font-semibold text-accent">Summary &amp; Decisions: </span>
              {meeting.summary}
            </div>

            {/* Action Items */}
            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
                Action Items
              </h3>
              <div className="mt-2 overflow-x-auto rounded-lg border border-rule">
                <table className="w-full min-w-[30rem] text-left text-xs">
                  <thead className="bg-neutral-50 text-muted uppercase tracking-wider">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Action Task</th>
                      <th className="py-2.5 px-4 font-semibold">Assignee</th>
                      <th className="py-2.5 px-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rule">
                    {meeting.actionItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50/50">
                        <td className="py-2.5 px-4 font-medium text-foreground">
                          {item.task}
                        </td>
                        <td className="py-2.5 px-4 text-muted">{item.assignee}</td>
                        <td className="py-2.5 px-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                              item.status === "Completed"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : item.status === "In Progress"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-neutral-100 text-neutral-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
