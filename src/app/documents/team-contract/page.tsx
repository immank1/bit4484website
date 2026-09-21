import { project } from "@/data/project";

export const metadata = {
  title: `Team Contract | ${project.name}`,
  description: "Official team contract, code of conduct, and sign-off agreement for Team 2.",
};

export default function TeamContractPage() {
  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-accent">
            Governance &bull; Documents
          </p>
          <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl text-foreground">
            Team Contract
          </h1>
          <p className="mt-2 text-xl font-sans text-muted">
            {project.team} &bull; {project.course} &bull; {project.term}
          </p>
          
          {/* Accent Bar */}
          <div aria-hidden className="mt-6 flex h-[3px] w-28">
            <span className="flex-1 bg-accent" />
            <span className="w-8 bg-accent-orange" />
          </div>
        </div>

        {/* Download / Open Fullscreen Button */}
        <div className="font-sans">
          <a
            href="/documents/team-contract.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-rule bg-background px-4 py-2.5 text-xs font-semibold text-foreground shadow-2xs transition hover:border-accent hover:text-accent"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            <span>Open PDF in New Tab</span>
          </a>
        </div>
      </header>

      {/* Embedded Scrollable PDF Document Viewer */}
      <section className="border-t border-rule pt-6 font-sans">
        <div className="w-full overflow-hidden rounded-2xl border border-rule bg-neutral-100 shadow-sm">
          <iframe
            src="/documents/team-contract.pdf#toolbar=1&navpanes=0"
            title="Team Contract Document"
            className="h-[800px] w-full border-0 sm:h-[950px]"
          />
        </div>

        <p className="mt-3 text-center text-xs text-muted">
          Having trouble viewing the embedded document? You can{" "}
          <a
            href="/documents/team-contract.pdf"
            download="Team-2-Contract.pdf"
            className="font-medium text-accent hover:underline"
          >
            download the PDF directly here
          </a>
          .
        </p>
      </section>
    </article>
  );
}
