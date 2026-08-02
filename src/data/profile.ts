/* =============================================================
   EDIT THIS FILE FIRST.

   Everything personal — name, links, email, resume filename,
   headshot — lives here so you never have to hunt through
   components. Anything marked TODO is a placeholder.
   ============================================================= */

export const profile = {
  name: "Albert Addo",
  navTagline: "Mechanical + Aerospace",
  role: "Mechanical & Aerospace Engineer",
  location: "Chicago, IL | Ithaca, NY | Melbourne, FL",
  locationNote: "Chicago, Illinois | Ithaca, New York | Melbourne, Florida — open to relocation",

  email: "albertaddo1327@gmail.com",
  linkedin: "https://www.linkedin.com/in/albert-addo/",

  // TODO: drop your resume PDF into /public and match the filename here
  resumeFile: "/AlbertAddoResume.pdf",

  // TODO: drop a headshot into /public/img and match the filename here
  headshot: "/img/albert.jpg",

  quickFacts: [
    "Test & Instrumentation",
    "Propulsion & Fluid Systems",
    "Simulation & Modeling",
  ],

  currentFocus: [
    "Aerospace systems performance analysis",
    "Physics-based simulation in Python & MATLAB",
    "Test rigs, DAQ, and measurement chains",
  ],

  availability: "Early-career engineering roles",

  heroLead: "I am passionate about all things aerospace!",

  heroBody:
    "Mechanical and aerospace engineer working across test hardware, propulsion and fluid systems, and physics-based simulation — from a hot-wire traverse that gave a wind tunnel its first trustworthy velocity map to a flapping-wing flight model derived from first principles.",

  education: [
    {
      school: "Cornell University, College of Engineering",
      degree: "M.Eng. Aerospace Engineering",
      period: "Dec 2025",
      location: "Ithaca, NY",
      note: "Project Advisor: Prof. Jane Wang",
    },
    {
      school: "Cornell University, College of Engineering",
      degree: "B.S. Mechanical Engineering",
      period: "May 2025",
      location: "Ithaca, NY",
      note: "Sibley School of Mechanical and Aerospace Engineering Outstanding Senior Award",
    },
  ],

  honors: [
    "Sibley School Outstanding Senior Award for Distinction in Leadership & Service — 1 of 2 from a class of 180+",
    "McMullen Dean's Scholar, 2021–2025",
    "Office of Inclusive Excellence Scholar",
    "Dean's List",
  ],

  focusAreas: [
    "Test engineering, instrumentation, and data acquisition",
    "Propulsion, fluid systems, and thermal analysis",
    "Physics-based simulation and reduced-order modeling",
    "Structural analysis and mechanical design",
  ],
};

export type Experience = {
  org: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
  courses?: string[];
};

export const experience: Experience[] = [
  {
    org: "Embraer Executive Jets",
    role: "Sales Engineer — Aircraft Performance & Software",
    period: "Jan 2026 — Present",
    location: "Melbourne, FL",
    bullets: [
      "Verify aircraft performance against certified data, translating it into the takeoff, range, and payload answers customers actually make decisions on.",
      "Built two Python applications in four months that automate fleet analysis, replacing manual lookup workflows the commercial team had been running by hand.",
      "Work across engineering and commercial teams to turn technical aircraft capability into the evidence behind a proposal.",
    ],
    skills: [
      "Aircraft Performance",
      "Python",
      "Copilot Studio",
      "Data Tools",
      "Technical Sales",
    ],
  },
  {
    org: "Cornell University — Prof. Jane Wang Lab",
    role: "Research Engineer, M.Eng.",
    period: "May 2025 — Dec 2025",
    location: "Ithaca, NY",
    bullets: [
      "Derived the nonlinear equations of motion for a flapping-wing flyer from first principles in Python and MATLAB, combining Newton's second law with blade-element aerodynamics, using SymPy for the symbolic derivation and SciPy RK45 for integration.",
      "Identified a hovering-capable set of wing kinematics analytically, holding lateral drift to 3 mm and vertical drift to 1.12 mm over a 10-second simulation.",
      "Root-caused a reinforcement-learning reward flaw and improved training reward by 75% across roughly 196 iterations.",
    ],
    skills: [
      "Python",
      "MATLAB",
      "SymPy",
      "SciPy",
      "Dynamics",
      "Unsteady Aero",
      "PPO / RL",
    ],
  },
  {
    org: "Sibley School of Mechanical & Aerospace Engineering, Cornell University",
    role: "Teaching Assistant",
    period: "Aug 2022 — Dec 2025",
    location: "Ithaca, NY",
    bullets: [
      "Taught across four core mechanical engineering courses over seven semesters — running office hours, laboratory sections, and grading for undergraduate and graduate students.",
      "Designed and built the teaching-assistant demonstrator robot for Mechatronics, which tied with ASML's.",
    ],
    courses: ["Thermodynamics", "Fluid Mechanics", "Dynamics", "Mechatronics"],
    skills: [
      "Teaching",
      "Lab Instruction",
      "Mechatronics",
      "Arduino / C Firmware",
    ],
  },
  {
    org: "Glenn Curtiss Engine Studio, Cornell University",
    role: "Mechanical Engineering Intern — Design & CAD",
    period: "Summer 2024",
    location: "Ithaca, NY",
    bullets: [
      "Designed a complete 3D CAD model and assembly from scratch of a 1916 Curtiss V8 aircraft engine with no reference documentation — modeling each cast and machined component, defining interfaces and tolerances of fit, and validating the assembly in motion.",
      "Delivered a model now adopted for museum exhibits and coursework, driving an augmented-reality experience students use to dissect the engine virtually.",
      "Designed and built a custom rotatable engine mount from 80/20 hardware, sizing it to its loads and cutting dismantling time.",
    ],
    skills: [
      "Fusion 360",
      "Reverse Engineering",
      "Metrology",
      "Tolerance of Fit",
      "CAD Animation",
      "80/20 Structures",
    ],
  },
  {
    org: "Wind Tunnel Studio, Cornell University",
    role: "Aerospace Engineering Intern — Design & Test",
    period: "Summer 2023",
    location: "Ithaca, NY",
    bullets: [
      "Designed a motorized two-axis positioning mechanism from concept — selecting the drive through a four-option trade study, sizing it with free-body torque calculations, then building and commissioning it with motors, encoders, firmware, and a LabVIEW interface, inside a one-month deadline.",
      "Characterized the test section across a 154-point survey grid, establishing a mean freestream of 3.11 m/s uniform to 0.44% standard deviation — the tunnel's first repeatable, position-resolved velocity map.",
      "Designed a turbine blade by sweeping 24 candidate airfoils in a MATLAB performance model to select a NACA 4415 profile, then fabricated and wind-tunnel tested it, correlating FEA predictions to measurement within 15%.",
      "Designed replacement load-cell mounting hardware after root-causing a faulty sensor, restoring better than 95% measurement accuracy.",
    ],
    skills: [
      "LabVIEW",
      "NI DAQ",
      "Hot-Wire Anemometry",
      "Load Cells",
      "Manual Mill",
      "Arduino",
      "ANSYS Fluent",
      "MATLAB",
    ],
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Propulsion & Fluid Systems",
    description: "Designing to a chamber-pressure or delta-v requirement.",
    skills: [
      "Feed-System Design",
      "Tanks & Pressurant",
      "Turbopumps",
      "Injectors",
      "Propellant Trade Studies",
      "Cycle Modeling",
      "Compressible Flow",
      "Heat Transfer",
    ],
  },
  {
    title: "Test & Instrumentation",
    description: "Building the measurement chain, not just reading it.",
    skills: [
      "Test Plan Development",
      "LabVIEW",
      "NI DAQ",
      "Hot-Wire Anemometry",
      "Load Cells",
      "Pitot-Static",
      "Arduino / C Firmware",
      "Torque Brake Dyno",
    ],
  },
  {
    title: "Simulation & Analysis",
    description: "Commercial solvers plus solvers I wrote myself.",
    skills: [
      "ANSYS Mechanical",
      "ANSYS Fluent",
      "Shell FEA",
      "Parametric Optimization",
      "XFLR5",
      "BEM / Actuator Disk",
      "Euler–Bernoulli",
      "Finite Difference",
    ],
  },
  {
    title: "Mechanical Design & CAD",
    description: "From concept sketch to a drawing a machinist can hold.",
    skills: [
      "Fusion 360",
      "SolidWorks",
      "GD&T",
      "Tolerance Stack-Up",
      "Detail Drawings",
      "Design for Manufacture",
      "Material Selection",
    ],
  },
  {
    title: "Programming",
    description: "Where the modeling actually happens.",
    skills: [
      "Python",
      "MATLAB",
      "NumPy / SciPy",
      "SymPy",
      "Streamlit",
      "C",
      "C++",
      "Java",
      "Git",
      "LaTeX",
    ],
  },
  {
    title: "Manufacturing",
    description: "Matching each part to a process that can hold its tolerance.",
    skills: [
      "Manual Mill",
      "Lathe",
      "Laser Cutting",
      "FDM & Resin Printing",
      "80/20 Structures",
      "Machinist Coordination",
    ],
  },
];

export const coursework = [
  "Spacecraft Propulsion (cryogenic propellants)",
  "Aircraft Propulsion",
  "Electric Propulsion & Plasma",
  "Compressible Flow",
  "Intermediate Fluid Mechanics with CFD",
  "Advanced Heat Transfer",
  "Finite Element Analysis",
  "Mechanics of Materials",
  "Intermediate Dynamics",
  "Engineering Vibrations",
  "Flight Dynamics",
  "Computational Engineering Physics",
];
