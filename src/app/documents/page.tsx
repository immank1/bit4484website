import Link from "next/link";
import { project } from "@/data/project";

export const metadata = {
  title: `Documents Hub | ${project.name}`,
  description:
    "Official project management documents repository organized into Project Documents, Project Deliverables, and Meeting Minutes Logs.",
};

type DocItem = {
  title: string;
  href: string;
  badge: string;
  format: string;
  description: string;
  iconType: "pdf" | "presentation" | "table" | "log";
};

const projectDocuments: DocItem[] = [
  {
    title: "Project Charter",
    href: "/documents/project-charter",
    badge: "Initiating Baseline",
    format: "Scrollable PDF",
    iconType: "pdf",
    description:
      "Official foundational document authorizing the Laundry Love service project, establishing sponsor alignment, project manager authority, and primary project scope.",
  },
  {
    title: "Communication Management Plan",
    href: "/documents/communication-management-plan",
    badge: "Governance Protocol",
    format: "Scrollable PDF",
    iconType: "pdf",
    description:
      "Formal stakeholder communication matrix detailing communication frequency, channels, meeting agendas, and escalation protocols for Team 2.",
  },
  {
    title: "Summary of Communications",
    href: "/documents/summary-of-communications",
    badge: "Outreach Record",
    format: "Scrollable PDF",
    iconType: "pdf",
    description:
      "Chronological record of partner interactions, meetings with sponsor Jill Sible, local business percentage night partnerships, and Blacksburg Living media pitches.",
  },
  {
    title: "Stakeholders Register",
    href: "/documents/stakeholders",
    badge: "Directory Matrix",
    format: "Interactive Matrix",
    iconType: "table",
    description:
      "Directory of all internal team members, academic sponsors (Jill Sible, Mimi Harris), course faculty champion (Jason Deane), and community partner liaisons.",
  },
  {
    title: "Team Working Agreement",
    href: "/documents/team-contract",
    badge: "Governance Code",
    format: "Scrollable PDF",
    iconType: "pdf",
    description:
      "Official signed team contract and working agreement defining ground rules, participation standards, communications, and decision-making protocols.",
  },
];

const projectDeliverables: DocItem[] = [
  {
    title: "Project Scope Statement",
    href: "/documents/scope-statement",
    badge: "Scope Baseline",
    format: "Scrollable PDF",
    iconType: "pdf",
    description:
      "Comprehensive definition of project boundaries, short- and long-term deliverables, percentage night fundraising targets, and social media campaign objectives.",
  },
  {
    title: "Project Schedule",
    href: "/documents/project-schedule",
    badge: "Schedule Baseline",
    format: "Scrollable PDF",
    iconType: "pdf",
    description:
      "Work breakdown schedule (WBS) mapping out semester timeline milestones, task ownership, partner coordination buffers, and fundraiser execution dates.",
  },
  {
    title: "Progress & Performance Report",
    href: "/documents/performance-report",
    badge: "Midterm Audit",
    format: "Scrollable PDF",
    iconType: "pdf",
    description:
      "Official midterm performance report assessing deliverable progress, earned value milestones, North Main Laundromat volunteer shifts, and campaign metrics.",
  },
  {
    title: "Risk Analysis",
    href: "/documents/risk-analysis",
    badge: "Risk Register",
    format: "Scrollable PDF",
    iconType: "pdf",
    description:
      "Qualitative risk matrix evaluating event turnout, weather contingencies, business partner commitments, and structured risk mitigation plans.",
  },
  {
    title: "Risk Analysis Presentation",
    href: "/documents/risk-analysis-presentation",
    badge: "Slide Deck Deliverable",
    format: "PPTX & Scrollable Slides",
    iconType: "presentation",
    description:
      "Presentation slide deck reviewing key risk ratings and mitigation responses, featuring an embedded scrollable slide deck preview and PowerPoint (.pptx) download.",
  },
];

const meetingMinutesLogs: DocItem[] = [
  {
    title: "Meeting Minutes Archive",
    href: "/documents/meeting-minutes",
    badge: "Central Repository",
    format: "All Logs & PDFs",
    iconType: "log",
    description:
      "Central hub containing complete meeting agendas, attendance registers, discussions with sponsor Jill Sible, action items, and official PDF downloads.",
  },
  {
    title: "Meeting 1: Project Kick-off & Needs Assessment",
    href: "/documents/meeting-minutes#meeting-1",
    badge: "Sept 21, 2026",
    format: "Minutes Log & PDF",
    iconType: "log",
    description:
      "Initial team kick-off session reviewing Laundry Love partner needs, historical semester fundraising averages ($150–$500), microbusiness ideas, and shift planning.",
  },
  {
    title: "Meeting 2: Fundraising Strategy & Media Outreach",
    href: "/documents/meeting-minutes#meeting-2",
    badge: "Sept 29, 2026",
    format: "Minutes Log & PDF",
    iconType: "log",
    description:
      "Official sponsor check-in with Jill Sible targeting local business percent nights (Roots, Coffeeholics, Church on Main) and pitching Blacksburg Living.",
  },
  {
    title: "Meeting 3: Scope Statement & Percent Night Rollout",
    href: "/documents/meeting-minutes#meeting-3",
    badge: "Oct 16, 2026",
    format: "Minutes Log & PDF",
    iconType: "log",
    description:
      "Progress review finalizing the Blacksburg Living questionnaire, establishing short-term vs long-term scope, and confirming October laundromat shifts.",
  },
];

function RenderIcon({ type }: { type: DocItem["iconType"] }) {
  if (type === "presentation") {
    return (
      <svg className="h-6 w-6 text-accent-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    );
  }
  if (type === "table") {
    return (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    );
  }
  if (type === "log") {
    return (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    );
  }
  return (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

export default function DocumentsHubPage() {
  return (
    <article className="space-y-16 font-sans">
      {/* Header */}
      <header>
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">
          Repository &bull; Governance &amp; Deliverables
        </p>
        <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl text-foreground">
          Project Documents
        </h1>
        <p className="mt-2 text-xl text-muted">
          BIT 4484: Project Management &bull; Fall 2026 &bull; {project.team}
        </p>

        <div aria-hidden className="mt-6 flex h-[3px] w-28">
          <span className="flex-1 bg-accent" />
          <span className="w-8 bg-accent-orange" />
        </div>

        <p className="mt-6 text-lg leading-relaxed text-foreground/90 max-w-3xl">
          Welcome to the official Clean Slate Project document repository. Explore our complete documentation organized into three core categories:
          governing <strong>Project Documents</strong>, required <strong>Project Deliverables</strong>, and chronological <strong>Meeting Minutes Logs</strong>.
          Every document includes an interactive embedded viewer or downloadable source files.
        </p>

        {/* Category Quick Jump Anchors */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#project-documents"
            className="inline-flex items-center gap-2 rounded-xl border border-rule bg-background px-4 py-2.5 text-xs font-semibold text-foreground shadow-2xs transition hover:border-accent hover:text-accent"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span>Project Documents</span>
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-muted">5</span>
          </a>
          <a
            href="#project-deliverables"
            className="inline-flex items-center gap-2 rounded-xl border border-rule bg-background px-4 py-2.5 text-xs font-semibold text-foreground shadow-2xs transition hover:border-accent hover:text-accent"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent-orange" />
            <span>Project Deliverables</span>
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-muted">5</span>
          </a>
          <a
            href="#meeting-minutes-log"
            className="inline-flex items-center gap-2 rounded-xl border border-rule bg-background px-4 py-2.5 text-xs font-semibold text-foreground shadow-2xs transition hover:border-accent hover:text-accent"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
            <span>Meeting Minutes Log</span>
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-muted">4</span>
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* Category 1: Project Documents */}
      {/* ========================================================================= */}
      <section id="project-documents" className="scroll-mt-24 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-rule pb-4 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent/10 text-xs font-semibold text-accent">
                1
              </span>
              <h2 className="text-2xl font-serif font-semibold text-foreground sm:text-3xl">
                Project Documents
              </h2>
            </div>
            <p className="mt-1 text-sm text-muted">
              Foundational governance charters, communication frameworks, stakeholder directories, and signed team agreements.
            </p>
          </div>
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            5 Documents
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectDocuments.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-rule bg-background p-7 transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 transition group-hover:scale-105">
                    <RenderIcon type={item.iconType} />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold text-accent">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-rule/70 pt-4 text-xs font-semibold text-accent">
                <span className="text-muted font-normal">{item.format}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Open Document</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Category 2: Project Deliverables */}
      {/* ========================================================================= */}
      <section id="project-deliverables" className="scroll-mt-24 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-rule pb-4 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent-orange/15 text-xs font-semibold text-accent-orange">
                2
              </span>
              <h2 className="text-2xl font-serif font-semibold text-foreground sm:text-3xl">
                Project Deliverables
              </h2>
            </div>
            <p className="mt-1 text-sm text-muted">
              Core academic and operational baselines: scope definitions, work breakdown schedules, progress reports, and risk assessments.
            </p>
          </div>
          <span className="text-xs font-semibold text-accent-orange uppercase tracking-wider">
            5 Deliverables
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectDeliverables.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-rule bg-background p-7 transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-orange/10 transition group-hover:scale-105">
                    <RenderIcon type={item.iconType} />
                  </div>
                  <span className="rounded-full bg-accent-orange/10 px-2.5 py-1 text-[11px] font-semibold text-accent-orange">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-rule/70 pt-4 text-xs font-semibold text-accent">
                <span className="text-muted font-normal">{item.format}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Open Deliverable</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Category 3: Meeting Minutes Log */}
      {/* ========================================================================= */}
      <section id="meeting-minutes-log" className="scroll-mt-24 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-rule pb-4 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-xs font-semibold text-emerald-800">
                3
              </span>
              <h2 className="text-2xl font-serif font-semibold text-foreground sm:text-3xl">
                Meeting Minutes Log
              </h2>
            </div>
            <p className="mt-1 text-sm text-muted">
              Weekly team proceedings, sponsor agendas with Jill Sible, fundraiser milestones, and downloadable official signed PDFs.
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            4 Entries &bull; Fall 2026
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {meetingMinutesLogs.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-rule bg-background p-7 transition duration-200 hover:-translate-y-1 hover:border-emerald-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 transition group-hover:scale-105">
                    <RenderIcon type={item.iconType} />
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-foreground group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-rule/70 pt-4 text-xs font-semibold text-emerald-700">
                <span className="text-muted font-normal">{item.format}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Minutes &rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
