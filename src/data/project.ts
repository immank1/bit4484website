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
  image: string;
  bio?: string;
};

export const members: Member[] = [
  {
    name: "Sarah Veepujarla",
    role: "Project Management",
    email: "sarahv05@vt.edu",
    image: "/team/sarah-veepujarla.jpeg",
    bio: "Project Manager leading overall team coordination, schedule tracking, and stakeholder communication for Team 2.",
  },
  {
    name: "Brandon Tapawan",
    role: "Team Member",
    email: "brandont04@vt.edu",
    image: "/team/brandon-tapawan.png",
    bio: "Contributing to fundraiser planning, logistics execution, and community outreach.",
  },
  {
    name: "Immanuel Kim",
    role: "Team Member",
    email: "immanuelkim@vt.edu",
    image: "/team/immanuel-kim.jpg",
    bio: "Focused on project deliverables, website architecture, and technical coordination.",
  },
  {
    name: "Jenna Skoric",
    role: "Team Member",
    email: "jennas04@vt.edu",
    image: "/team/jenna-skoric.png",
    bio: "Assisting in partner relations, event scheduling, and volunteer operations.",
  },
];

export type Stakeholder = {
  name: string;
  position: string;
  scope: "Internal" | "External";
  role: string;
  email: string;
  notes?: string;
};

export const stakeholders: Stakeholder[] = [
  {
    name: "Jenna Skoric",
    position: "Student",
    scope: "Internal",
    role: "Team Member",
    email: "jennas04@vt.edu",
  },
  {
    name: "Sarah Veepujarla",
    position: "Student",
    scope: "Internal",
    role: "Project Management",
    email: "sarahv05@vt.edu",
  },
  {
    name: "Immanuel Kim",
    position: "Student",
    scope: "Internal",
    role: "Team Member",
    email: "immanuelkim@vt.edu",
  },
  {
    name: "Brandon Tapawan",
    position: "Student",
    scope: "Internal",
    role: "Team Member",
    email: "brandont04@vt.edu",
  },
  {
    name: "Jill Sible",
    position: "Vice-Provost",
    scope: "External",
    role: "Project Sponsor",
    email: "siblej@vt.edu",
  },
  {
    name: "Mimi Harris",
    position: "Vice-Provost",
    scope: "External",
    role: "Project Sponsor",
    email: "mimih@vt.edu",
  },
  {
    name: "Jason Deane",
    position: "Professor",
    scope: "Internal",
    role: "Project Champion",
    email: "jdeane1@vt.edu",
  },
];

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

export type MeetingMinute = {
  id: string;
  date: string;
  title: string;
  attendees: string[];
  agenda: string[];
  summary: string;
  actionItems: { task: string; assignee: string; status: "Completed" | "In Progress" | "Upcoming" }[];
};

export const meetingMinutes: MeetingMinute[] = [
  {
    id: "mm-01",
    date: "September 8, 2026",
    title: "Project Kickoff & Sponsor Alignment",
    attendees: ["Sarah Veepujarla", "Brandon Tapawan", "Immanuel Kim", "Jenna Skoric"],
    agenda: [
      "Finalize team roles and project manager election",
      "Establish primary communication channels and team cadence",
      "Review potential community partners and project scope",
    ],
    summary:
      "The team officially formed Team 2 for BIT 4484. Sarah Veepujarla was designated as Project Manager. Established weekly recurring coordination meetings and drafted initial project milestones.",
    actionItems: [
      { task: "Draft initial Team Contract", assignee: "Sarah Veepujarla", status: "Completed" },
      { task: "Set up communication hub and repository", assignee: "Immanuel Kim", status: "Completed" },
      { task: "Initiate contact with community partner", assignee: "Jenna Skoric & Brandon Tapawan", status: "Completed" },
    ],
  },
  {
    id: "mm-02",
    date: "September 15, 2026",
    title: "Partner Confirmation & Fundraiser Scoping",
    attendees: ["Sarah Veepujarla", "Brandon Tapawan", "Immanuel Kim", "Jenna Skoric"],
    agenda: [
      "Review community partnership confirmation with Laundry Love",
      "Brainstorm fundraising initiatives and operational requirements",
      "Draft project charter components and deliverables timeline",
    ],
    summary:
      "Confirmed official partnership with Laundry Love to cover laundry fees for local families in financial hardship. Finalized the four fundraising vehicles: Percentage Night, LOVE Coffee, Pass the Plate, and The Hamper.",
    actionItems: [
      { task: "Contact prospective restaurants for Percentage Night", assignee: "Brandon Tapawan", status: "In Progress" },
      { task: "Campus permitting inquiries for LOVE Coffee sales", assignee: "Jenna Skoric", status: "In Progress" },
      { task: "Develop project management website v1", assignee: "Immanuel Kim", status: "Completed" },
      { task: "Complete Stakeholder Register documentation", assignee: "Sarah Veepujarla", status: "Completed" },
    ],
  },
  {
    id: "mm-03",
    date: "September 19, 2026",
    title: "Milestone Review & Website Restructuring",
    attendees: ["Sarah Veepujarla", "Brandon Tapawan", "Immanuel Kim", "Jenna Skoric"],
    agenda: [
      "Review website deployment on Vercel and GitHub repository",
      "Structure multi-page architecture with About Us and Documents dropdown",
      "Update project deliverables ahead of faculty review",
    ],
    summary:
      "Reviewed online website presence and restructured navigation into separate dedicated pages for Overview, About Us (team introduction with photos), and a Documents tab with dropdown for Meeting Minutes, Stakeholders, and Team Contract.",
    actionItems: [
      { task: "Publish revised multi-tab site layout", assignee: "Immanuel Kim", status: "In Progress" },
      { task: "Finalize venue dates for campus fundraisers", assignee: "Sarah Veepujarla", status: "Upcoming" },
    ],
  },
];

export const teamContract = {
  title: "Team 2 Charter & Working Agreement",
  course: "BIT 4484: Project Management",
  semester: "Fall 2026",
  sections: [
    {
      heading: "1. Team Mission & Purpose",
      content:
        "Team 2 is committed to delivering a high-impact, professionally executed project supporting Laundry Love. Our goal is to achieve all academic deliverables with excellence while generating meaningful community contributions in Blacksburg.",
    },
    {
      heading: "2. Member Roles & Responsibilities",
      content:
        "• Project Manager (Sarah Veepujarla): Lead agendas, track deliverables against milestones, interface with course faculty and project sponsors.\n• Technical & Documentation Lead (Immanuel Kim): Manage repository, digital infrastructure, website publishing, and documentation integrity.\n• Operations & Logistics (Brandon Tapawan): Coordinate venue logistics, materials sourcing, and vendor communication.\n• Outreach & Community Liaison (Jenna Skoric): Coordinate partner relations, volunteer staffing schedule, and promotional activities.",
    },
    {
      heading: "3. Communication Protocols",
      content:
        "• Primary communications occur via our designated team chat group and email for formal correspondence.\n• Team members agree to acknowledge messages within 24 hours on weekdays and 12 hours during critical submission weeks.\n• Shared project documents and minutes are maintained in the central project repository.",
    },
    {
      heading: "4. Meeting Norms & Attendance",
      content:
        "• Weekly team meetings are held regularly, with punctual attendance required.\n• If an unavoidable conflict arises, notification must be sent at least 6 hours in advance with updates on assigned action items.\n• Every meeting will conclude with documented action items and explicit deadlines.",
    },
    {
      heading: "5. Decision-Making & Conflict Resolution",
      content:
        "• Decisions are reached by consensus whenever possible. In the event of a tie, the Project Manager will cast the deciding vote after thorough open discussion.\n• Constructive, respectful peer feedback is expected. Interpersonal issues are addressed immediately within the team; if unresolved, Professor Jason Deane will be consulted.",
    },
    {
      heading: "6. Code of Conduct & Signatures",
      content:
        "All team members adhere strictly to the Virginia Tech Honor Code and commit their best professional effort to this project.",
      signers: [
        "Sarah Veepujarla",
        "Brandon Tapawan",
        "Immanuel Kim",
        "Jenna Skoric",
      ],
    },
  ],
};
