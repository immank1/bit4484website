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
    image: "/team/sarah-veepujarla.jpg",
    bio: "Project Manager leading overall team coordination, schedule tracking, and stakeholder communication for Team 2.",
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
  number: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  attendees: string[];
  absent?: string[];
  summary: string;
  pdfPath: string;
  downloadName: string;
  actionItems?: { what: string; who: string; when: string }[];
  keyTopics?: string[];
};

export const meetingMinutes: MeetingMinute[] = [
  {
    id: "meeting-1",
    number: "Meeting 1",
    title: "Project Kick-off & Needs Assessment",
    date: "September 21, 2026",
    time: "12:00 PM – 12:25 PM",
    location: "Online (Zoom)",
    attendees: ["Sarah Veepujarla", "Immanuel Kim", "Jenna Skoric"],
    absent: [],
    summary:
      "Team kick-off session exploring Laundry Love's core mission and funding constraints. Discussed semester fundraising benchmarks ($150–$500), microbusiness initiatives like The Hamper, community partnership possibilities, and scheduled early volunteer sessions.",
    pdfPath: "/documents/meeting-minutes/meeting-minutes-1.pdf",
    downloadName: "Meeting-Minutes-#1.pdf",
    keyTopics: [
      "Initial review of Laundry Love partner needs and fundraising goals",
      "Historical semester fundraising averages ($150–$500)",
      "Planning early volunteer sessions on Sundays & Thursdays",
      "Brainstorming microbusiness ideas (The Hamper) and organization partnerships",
    ],
    actionItems: [
      {
        what: "Brainstorm events & fundraising initiatives",
        who: "All members",
        when: "Next meeting",
      },
      {
        what: "Coordinate with Mimi Harris for in-person meetings at Burruss Hall",
        who: "Sarah Veepujarla",
        when: "Pending",
      },
    ],
  },
  {
    id: "meeting-2",
    number: "Meeting 2",
    title: "Official Minutes: Fundraising & Media Outreach",
    date: "September 29, 2026",
    time: "5:00 PM – 5:30 PM",
    location: "Zoom",
    attendees: ["Jill Sible (Sponsor)", "Sarah Veepujarla", "Jenna Skoric"],
    absent: ["Immanuel Kim"],
    summary:
      "Official meeting minutes covering past fundraising reviews, business outreach targets (Roots, Coffeeholics, Church on Main, Northstar, Presbyterian Church), and pitching an upcoming feature article in Blacksburg Living.",
    pdfPath: "/documents/meeting-minutes/meeting-minutes-9-29.pdf",
    downloadName: "Meeting_Minutes_9-29_Laundry_Love.pdf",
    keyTopics: [
      "Digital campaign roadmap and Pure Charity donation link generation",
      "Business and church partnership outreach for percent nights and The Hamper",
      "Blacksburg Living publication opportunity to highlight local non-profit work",
    ],
    actionItems: [
      {
        what: "Generate QR code and link for Pure Charity campaign",
        who: "Team",
        when: "Next meeting",
      },
      {
        what: "Plan social media strategy and create Instagram page",
        who: "Team",
        when: "Next meeting",
      },
      {
        what: "Design cards and bookmarks for fundraising sales",
        who: "Team",
        when: "Next meeting",
      },
      {
        what: "Pitch Laundry Love story to Blacksburg Living editorial team",
        who: "Sarah Veepujarla",
        when: "In progress",
      },
    ],
  },
  {
    id: "meeting-3",
    number: "Meeting 3",
    title: "Scope Statement, Media Outreach & Percent Nights",
    date: "October 16, 2026",
    time: "2:10 PM – 2:50 PM",
    location: "Zoom",
    attendees: ["Jill Sible (Sponsor)", "Sarah Veepujarla", "Jenna Skoric"],
    absent: ["Immanuel Kim"],
    summary:
      "Progress meeting with Project Sponsor Jill Sible. Finalized confirmation for the Blacksburg Living 'Ut Prosim in Action' feature, defined short- and long-term scope statements, and coordinated execution for upcoming restaurant percent nights.",
    pdfPath: "/documents/meeting-minutes/meeting-minutes-10-16.pdf",
    downloadName: "Meeting_Minutes_10-16_Laundry_Love.pdf",
    keyTopics: [
      "Blacksburg Living feature: highlighting Laundry Love as 'Ut Prosim in Action'",
      "Scope statement formulation: short-term (2 percent nights) vs long-term sustainability",
      "Percent nights operational rollout (flyers and business promo codes)",
      "Upcoming volunteer shifts: Oct 18 (2–4 PM) & Oct 22 (6–8 PM)",
    ],
    actionItems: [
      {
        what: "Arrange photographer and submit photo assets for Blacksburg Living",
        who: "Team",
        when: "Before deadline",
      },
      {
        what: "Draft responses to Blacksburg Living article questionnaire",
        who: "Team",
        when: "Before deadline",
      },
      {
        what: "Schedule two percent night fundraisers with local businesses",
        who: "Team",
        when: "Ongoing",
      },
      {
        what: "Finalize and write project scope statement deliverable",
        who: "Team",
        when: "Next meeting",
      },
    ],
  },
];


