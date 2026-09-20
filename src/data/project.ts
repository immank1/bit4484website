export const project = {
  name: "Clean Slate Project",
  term: "Fall 2026",
  course: "BIT 4484: Project Management",
  team: "Team 2",
  partner: "Laundry Love",
  tagline:
    "A Virginia Tech service project supporting Laundry Love, which pays the laundry costs of people who are struggling financially.",
};

export type Member = {
  name: string;
  role: string;
  email: string;
};

export const members: Member[] = [
  { name: "Sarah Veepujarla", role: "Project Management", email: "sarahv05@vt.edu" },
  { name: "Brandon Tapawan", role: "Team Member", email: "brandont04@vt.edu" },
  { name: "Immanuel Kim", role: "Team Member", email: "immanuelkim@vt.edu" },
  { name: "Jenna Skoric", role: "Team Member", email: "jennas04@vt.edu" },
];

export type Stakeholder = {
  name: string;
  position: string;
  scope: "Internal" | "External";
  role: string;
  email: string;
};

export const stakeholders: Stakeholder[] = [
  { name: "Jenna Skoric", position: "Student", scope: "Internal", role: "Team Member", email: "jennas04@vt.edu" },
  { name: "Sarah Veepujarla", position: "Student", scope: "Internal", role: "Project Management", email: "sarahv05@vt.edu" },
  { name: "Immanuel Kim", position: "Student", scope: "Internal", role: "Team Member", email: "immanuelkim@vt.edu" },
  { name: "Brandon Tapawan", position: "Student", scope: "Internal", role: "Team Member", email: "brandont04@vt.edu" },
  { name: "Jill Sible", position: "Vice-Provost", scope: "External", role: "Project Sponsor", email: "siblej@vt.edu" },
  { name: "Mimi Harris", position: "Vice-Provost", scope: "External", role: "Project Sponsor", email: "mimih@vt.edu" },
  { name: "Jason Deane", position: "Professor", scope: "Internal", role: "Project Champion", email: "jdeane1@vt.edu" },
];

// original proposal, dropped before work started
export const priorProposal = {
  name: "Rest Assured Initiative",
  sponsor: "Sleep in Heavenly Peace",
  activity: "Bed builds",
  blockers: [
    "The bed builds for the year had already been planned",
    "About $10,000 in funding required",
    "At least 80 volunteers required",
    "An indoor space required",
  ],
};

export const currentWork = {
  what: "Laundry Love pays the laundry costs of people who are struggling financially.",
  how: "Volunteers staff the laundromat during the hours the program runs.",
  fundraisers: [
    {
      name: "Percentage night",
      detail:
        "A local restaurant donates a share of one evening's sales when customers mention the project.",
    },
    {
      name: "LOVE coffee",
      detail: "Coffee sold on campus, with the proceeds going to the program.",
    },
    {
      name: "Pass the Plate",
      detail:
        "A collection taken up at partner gatherings and community events.",
    },
    {
      name: "The Hamper",
      detail:
        "A standing donation hamper, hosted on campus by local clubs.",
    },
  ],
};
