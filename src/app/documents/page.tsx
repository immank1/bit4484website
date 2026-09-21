import Link from "next/link";
import { project } from "@/data/project";

export const metadata = {
  title: `Documents | ${project.name}`,
  description: "Official project management documents, stakeholder register, meeting logs, and charter.",
};

const docCards = [
  {
    title: "Stakeholders Register",
    href: "/documents/stakeholders",
    badge: "Section 4",
    description:
      "Comprehensive directory of all internal and external project stakeholders, project champions, academic sponsors, and active team member roles.",
  },
  {
    title: "Meeting Minutes",
    href: "/documents/meeting-minutes",
    badge: "In Progress",
    description:
      "Weekly team meeting records and progress report logs (currently being prepared).",
  },
  {
    title: "Team Working Agreement",
    href: "/documents/team-contract",
    badge: "Signed PDF",
    description:
      "Official signed team contract and working agreement document for Team 2.",
  },
];

export default function DocumentsHubPage() {
  return (
    <article className="space-y-10">
      <header>
        <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-accent">
          Repository &bull; Governance
        </p>
        <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl text-foreground">
          Project Documents
        </h1>
        <p className="mt-2 text-xl font-sans text-muted">
          BIT 4484: Project Management &bull; Fall 2026
        </p>

        <div aria-hidden className="mt-6 flex h-[3px] w-28">
          <span className="flex-1 bg-accent" />
          <span className="w-8 bg-accent-orange" />
        </div>

        <p className="mt-6 text-lg leading-relaxed text-foreground/90 max-w-2xl">
          Select a document category below or use the navigation dropdown above to access
          the Stakeholder Register, Meeting Minutes, and Team Contract.
        </p>
      </header>

      <section className="border-t border-rule pt-8 font-sans">
        <div className="grid gap-6 sm:grid-cols-3">
          {docCards.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group flex flex-col justify-between rounded-2xl border border-rule bg-background p-6 transition hover:border-accent hover:shadow-md"
            >
              <div>
                <span className="inline-flex rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {doc.badge}
                </span>
                <h2 className="mt-4 font-serif text-xl font-semibold text-foreground group-hover:text-accent">
                  {doc.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {doc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-rule/60 flex items-center text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                <span>View Document &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
