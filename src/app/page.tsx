import {
  currentWork,
  members,
  priorProposal,
  project,
  stakeholders,
} from "@/data/project";

const frontMatter = [
  { label: "Course", value: project.course },
  { label: "Team", value: project.team },
  { label: "Community partner", value: project.partner },
  { label: "Term", value: project.term },
];

const contents = [
  { href: "#overview", label: "Overview" },
  { href: "#background", label: "Background" },
  { href: "#team", label: "Team" },
  { href: "#stakeholders", label: "Stakeholders" },
];

export default function Home() {
  return (
    <article className="py-16 sm:py-24">
      <header>
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent">
          {project.course}
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 text-xl text-muted">{project.term}</p>
        <div aria-hidden className="mt-8 flex h-[3px] w-24">
          <span className="flex-1 bg-accent" />
          <span className="w-6 bg-accent-orange" />
        </div>
        <p className="mt-7 text-lg leading-relaxed">{project.tagline}</p>
      </header>

      <dl className="mt-12 border-t border-rule font-sans text-sm">
        {frontMatter.map((item) => (
          <div
            key={item.label}
            className="flex gap-6 border-b border-rule py-3"
          >
            <dt className="w-44 shrink-0 text-muted">{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <nav className="mt-10 font-sans text-sm">
        <ol className="flex flex-wrap gap-x-6 gap-y-2 text-muted">
          {contents.map((item, index) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-accent">
                <span className="tabular-nums">{index + 1}.</span> {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <Section id="overview" number={1} title="Overview">
        <p>{currentWork.what}</p>
        <p>{currentWork.how}</p>
        <p>
          Our work this semester is raising money for the program through four
          fundraisers.
        </p>
        <ul className="mt-6 border-t border-rule font-sans text-sm">
          {currentWork.fundraisers.map((item) => (
            <li key={item.name} className="border-b border-rule py-3">
              <span className="font-medium text-accent">{item.name}.</span>{" "}
              <span className="text-muted">{item.detail}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="background" number={2} title="Background">
        <p>
          The first proposal was the {priorProposal.name}, sponsored by{" "}
          {priorProposal.sponsor} and built around bed builds. Time and funding
          conflicts ended that work before it began.
        </p>
        <ul className="mt-6 space-y-2 text-base text-muted">
          {priorProposal.blockers.map((blocker) => (
            <li key={blocker} className="flex gap-3">
              <span aria-hidden className="text-accent-orange">
                &bull;
              </span>
              <span>{blocker}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          {project.partner} has since confirmed the partnership, and the project
          moved to supporting its program.
        </p>
      </Section>

      <Section id="team" number={3} title="Team">
        <ul className="border-t border-rule font-sans text-sm">
          {members.map((member) => (
            <li
              key={member.email}
              className="flex flex-wrap gap-x-6 gap-y-1 border-b border-rule py-3"
            >
              <span className="w-44 shrink-0">{member.name}</span>
              <span className="text-muted">{member.role}</span>
              <a
                href={`mailto:${member.email}`}
                className="ml-auto text-muted hover:text-accent"
              >
                {member.email}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="stakeholders" number={4} title="Stakeholders">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left font-sans text-sm">
            <thead>
              <tr className="border-y border-rule text-xs uppercase tracking-wider text-muted">
                <th className="py-3 pr-6 font-normal">Name</th>
                <th className="py-3 pr-6 font-normal">Position</th>
                <th className="py-3 pr-6 font-normal">Scope</th>
                <th className="py-3 pr-6 font-normal">Project role</th>
                <th className="py-3 font-normal">Contact</th>
              </tr>
            </thead>
            <tbody>
              {stakeholders.map((person) => (
                <tr key={person.email} className="border-b border-rule">
                  <td className="py-3 pr-6 align-top">{person.name}</td>
                  <td className="py-3 pr-6 align-top text-muted">
                    {person.position}
                  </td>
                  <td className="py-3 pr-6 align-top text-muted">
                    {person.scope}
                  </td>
                  <td className="py-3 pr-6 align-top text-muted">
                    {person.role}
                  </td>
                  <td className="py-3 align-top">
                    <a
                      href={`mailto:${person.email}`}
                      className="text-muted hover:text-accent"
                    >
                      {person.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </article>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-16">
      <h2 className="font-sans text-sm font-medium uppercase tracking-[0.14em]">
        <span className="tabular-nums text-accent-orange">{number}.</span> {title}
      </h2>
      <div className="mt-5 space-y-4 text-lg leading-relaxed">{children}</div>
    </section>
  );
}
