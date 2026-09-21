import { project, stakeholders } from "@/data/project";

export const metadata = {
  title: `Stakeholders Register | ${project.name}`,
  description: "Project stakeholders, internal and external partners, sponsors, and champions.",
};

export default function StakeholdersPage() {
  const internalCount = stakeholders.filter((s) => s.scope === "Internal").length;
  const externalCount = stakeholders.filter((s) => s.scope === "External").length;

  return (
    <article className="space-y-10">
      {/* Header */}
      <header>
        <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-accent">
          Project Governance &bull; Documents
        </p>
        <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl text-foreground">
          Stakeholder Register
        </h1>
        <p className="mt-2 text-xl font-sans text-muted">
          BIT 4484: Project Management &bull; Fall 2026
        </p>

        {/* Accent Bar */}
        <div aria-hidden className="mt-6 flex h-[3px] w-28">
          <span className="flex-1 bg-accent" />
          <span className="w-8 bg-accent-orange" />
        </div>

        <p className="mt-6 text-lg leading-relaxed text-foreground/90 max-w-2xl">
          The Stakeholder Register identifies key individuals and groups actively involved in,
          influencing, or affected by the Clean Slate Project. It categorizes stakeholders by organizational
          scope and formal project responsibilities.
        </p>
      </header>

      {/* Scope Metric Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 font-sans">
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-muted">Total Stakeholders</p>
          <p className="mt-1 text-2xl font-semibold text-foreground">{stakeholders.length}</p>
        </div>
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4">
          <p className="text-xs uppercase tracking-wider text-accent">Internal Scope</p>
          <p className="mt-1 text-2xl font-semibold text-accent">{internalCount}</p>
        </div>
        <div className="rounded-xl border border-rule bg-neutral-50/50 p-4 col-span-2 sm:col-span-1">
          <p className="text-xs uppercase tracking-wider text-accent-orange">External Scope</p>
          <p className="mt-1 text-2xl font-semibold text-accent-orange">{externalCount}</p>
        </div>
      </div>

      {/* Stakeholders Table */}
      <section className="border-t border-rule pt-8">
        <div className="overflow-x-auto rounded-xl border border-rule bg-background shadow-2xs">
          <table className="w-full min-w-[38rem] border-collapse text-left font-sans text-sm">
            <thead>
              <tr className="border-b border-rule bg-neutral-50 text-xs font-semibold uppercase tracking-wider text-muted">
                <th className="py-3.5 pl-6 pr-4">Name</th>
                <th className="py-3.5 px-4">Position</th>
                <th className="py-3.5 px-4">Scope</th>
                <th className="py-3.5 px-4">Project Role</th>
                <th className="py-3.5 pl-4 pr-6">Contact Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {stakeholders.map((person) => (
                <tr
                  key={person.email}
                  className="transition hover:bg-neutral-50/60"
                >
                  <td className="py-3.5 pl-6 pr-4 font-medium text-foreground">
                    {person.name}
                  </td>
                  <td className="py-3.5 px-4 text-muted">
                    {person.position}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        person.scope === "Internal"
                          ? "bg-accent/10 text-accent"
                          : "bg-accent-orange/10 text-accent-orange"
                      }`}
                    >
                      {person.scope}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-foreground/90">
                    {person.role}
                  </td>
                  <td className="py-3.5 pl-4 pr-6">
                    <a
                      href={`mailto:${person.email}`}
                      className="text-muted hover:text-accent font-mono text-xs transition"
                    >
                      {person.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
