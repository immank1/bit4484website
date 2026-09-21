import { project, teamContract } from "@/data/project";

export const metadata = {
  title: `Team Contract | ${project.name}`,
  description: "Official team charter, working agreement, member responsibilities, and code of conduct.",
};

export default function TeamContractPage() {
  return (
    <article className="space-y-10">
      {/* Header */}
      <header>
        <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-accent">
          Governance &bull; Charter
        </p>
        <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl text-foreground">
          Team Working Agreement
        </h1>
        <p className="mt-2 text-xl font-sans text-muted">
          {teamContract.title} &bull; {project.term}
        </p>

        {/* Accent Bar */}
        <div aria-hidden className="mt-6 flex h-[3px] w-28">
          <span className="flex-1 bg-accent" />
          <span className="w-8 bg-accent-orange" />
        </div>

        <p className="mt-6 text-lg leading-relaxed text-foreground/90 max-w-2xl">
          This document establishes the operational ground rules, communication standards,
          individual responsibilities, and mutual accountability agreement for members of {project.team}.
        </p>
      </header>

      {/* Contract Articles */}
      <section className="space-y-8 border-t border-rule pt-8 font-sans">
        {teamContract.sections.map((section, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-rule/80 bg-neutral-50/40 p-6 sm:p-8"
          >
            <h2 className="font-serif text-xl font-semibold text-foreground text-accent">
              {section.heading}
            </h2>
            <div className="mt-3 whitespace-pre-line text-base leading-relaxed text-foreground/90">
              {section.content}
            </div>

            {section.signers && (
              <div className="mt-8 border-t border-rule/80 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
                  Member Endorsements &amp; Signatures
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {section.signers.map((name) => (
                    <div
                      key={name}
                      className="rounded-lg border border-rule bg-background p-3.5 text-center shadow-2xs"
                    >
                      <p className="font-serif text-sm font-semibold italic text-foreground">
                        {name}
                      </p>
                      <div className="mt-2 border-t border-dashed border-rule pt-1">
                        <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold">
                          Signed &bull; Fall 2026
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </article>
  );
}
