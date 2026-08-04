/* =============================================================
   PROJECT CONTENT

   Every project card on the home page and every detail page at
   /projects/<slug> is generated from this file. To add a project,
   append an entry to the `projects` array — no component changes
   needed.

   Block kinds available inside a section:
     prose     — a paragraph
     list      — bullets (set ordered: true for a numbered list)
     figure    — one image + caption
     figures   — two-up image grid
     table     — head[] + rows[][], optional highlight row index
     equation  — monospaced equation block
     callout   — amber-ruled aside for the "so what"
   ============================================================= */

export type Block =
  | { kind: "prose"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "figure"; src: string; caption: string; contain?: boolean }
  | {
      kind: "figures";
      items: { src: string; caption: string; contain?: boolean }[];
    }
  | { kind: "table"; head: string[]; rows: string[][]; highlight?: number }
  | { kind: "equation"; lines: string[] }
  | { kind: "callout"; text: string };

export type Section = {
  n: string;
  title: string;
  blocks: Block[];
};

export type Stat = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  context: string;
  role: string;
  status: string;
  featured: boolean;
  summary: string;
  cardImage: string;
  cardImageContain?: boolean;
  tech: string[];
  highlights: string[];
  stats: Stat[];
  links?: { label: string; href: string }[];
  /* Embedded YouTube players, shown above the first section. `id` is the
     part of the URL after v= or youtu.be/ — not the full URL. */
  videos?: { id: string; title: string; blurb?: string }[];
  sections: Section[];
};

export const projects: Project[] = [
  /* ================================================================
     5 — CURTISS OXX-6
     ================================================================ */
  {
    slug: "curtiss-oxx6-reverse-engineering",
    title: "Curtiss OXX-6 V8: Reverse Engineering to Augmented Reality",
    shortTitle: "Curtiss OXX-6 Aircraft Engine Reverse Engineering",
    subtitle:
      "Teardown, measurement, and animated CAD reconstruction of a 1916 aircraft engine",
    context: "Glenn Curtiss Engine Studio, Cornell University",
    role: "Led the reverse-engineering and CAD reconstruction",
    status: "Deployed",
    featured: true,
    summary:
      "A 1916 Curtiss OXX-6 Aircraft Engine — one of the first mass-produced American aircraft engines — taken apart, measured, and rebuilt as a complete animated CAD assembly that now drives a museum AR experience.",
    cardImage: "/img/curtiss-engine-cad.jpg",
    cardImageContain: true,
    tech: [
      "Fusion 360",
      "Reverse Engineering",
      "Metrology",
      "CAD Animation",
      "Augmented Reality",
    ],
    highlights: [
      "Reconstructed a complete animated assembly with zero reference documentation to work from — every dimension came off the physical engine",
      "Produced a model the museum and students now use to dissect engine design virtually, rather than through a display case",
      "Designed and built a custom rotatable 80/20 engine mount, sized to its loads, that cut dismantling time",
    ],
    stats: [
      { value: "1916", label: "Year of manufacture — among the first mass-produced US aircraft engines" },
      { value: "V8", label: "Configuration reconstructed part by part" },
      { value: "0", label: "Reference drawings available at the start" },
    ],
    videos: [
      {
        id: "OyDbS1P8vac",
        title: "Process",
        blurb:
          "The teardown, the measurement, and how the CAD reconstruction was built up part by part.",
      },
      {
        id: "eax51gTtaS0",
        title: "Results and impact",
        blurb:
          "The finished model in use — the augmented-reality experience the museum and students now run.",
      },
    ],
    sections: [
      {
        n: "01",
        title: "The problem with a hundred-year-old engine",
        blocks: [
          {
            kind: "prose",
            text: "The Glenn H. Curtiss Museum holds a 1916 Curtiss OXX-6, a V8 that was among the first mass-produced aircraft engines in the United States. What it does not hold is documentation. There were no drawings to work from, no parts list, and no assembly sequence — only the engine itself.",
          },
          {
            kind: "prose",
            text: "That makes this a metrology problem before it is a CAD problem. Every dimension in the final model had to be measured off a physical part, and every relationship between parts had to be inferred from how they fit together.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/curtiss-teardown.jpg",
                caption:
                  "Figure 1: Teardown and measurement in the studio — working the engine down to its individual components.",
              },
              {
                src: "/img/curtiss-engine-lift.jpg",
                caption:
                  "Figure 2: Moving the engine in the studio — a hundred-year-old V8 is heavy, fragile, and irreplaceable.",
              },
            ],
          },
        ],
      },
      {
        n: "02",
        title: "Reconstruction",
        blocks: [
          {
            kind: "prose",
            text: "I rebuilt the engine in Fusion 360 as a complete assembly — not a static shell, but a model with the actual kinematic relationships in place, so the crankshaft, connecting rods, pistons, and valvetrain move the way the real mechanism does. Animating the assembly is what turns a model into a teaching artifact: a still render shows what an engine looks like, and an animated one shows what it does.",
          },
          {
            kind: "figure",
            src: "/img/curtiss-engine-cad.jpg",
            contain: true,
            caption:
              "Figure 3: The reconstructed OXX-6 assembly in Fusion 360.",
          },
        ],
      },
      {
        n: "03",
        title: "From CAD to augmented reality",
        blocks: [
          {
            kind: "prose",
            text: "The finished model drives an interactive augmented-reality experience the museum and students now use to dissect the engine virtually — pulling apart an assembly that in physical form is far too fragile and far too valuable to hand to a visitor.",
          },
          {
            kind: "figure",
            src: "/img/curtiss-ar-headset.jpg",
            caption:
              "Figure 4: The AR experience in use — the reconstructed engine explored in headset.",
          },
          {
            kind: "callout",
            text: "A note on identification: my resume previously listed this engine as an OX-5. The museum subsequently reidentified it as an OXX-6, and I have carried that correction forward everywhere since.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     1 — HOT-WIRE TRAVERSE
     ================================================================ */
  {
    slug: "hot-wire-traverse",
    title: "Hot-Wire Anemometry Traverse for the “Big Blue” Wind Tunnel",
    shortTitle: "Hot-Wire Traverse",
    subtitle:
      "Design, fabrication, and test-section velocity characterization",
    context: "Wind Tunnel Studio, Cornell University",
    role: "Individual project within a three-intern studio overhaul",
    status: "Built & Commissioned",
    featured: true,
    summary:
      "Replaced a wind tunnel's fixed pitot-static probe with a two-axis lead-screw traverse I designed, machined, instrumented, and validated in under a month — giving the tunnel its first repeatable, position-resolved velocity map.",
    cardImage: "/img/traverse-cad-alt.jpg",
    cardImageContain: true,
    tech: [
      "Fusion 360",
      "Manual Mill",
      "LabVIEW",
      "Arduino",
      "NI DAQ",
      "ANSYS Fluent",
      "Hot-Wire Anemometry",
    ],
    highlights: [
      "Surveyed 154 points across the test section, establishing a 3.11 m/s mean freestream uniform to 0.44% standard deviation",
      "Chose a lead-screw drivetrain over cable, belt, and rack concepts after a prototype proved cable slip made positioning non-deterministic",
      "Validated three independent ways: free-body torque sizing, ANSYS wake CFD, and a full mock turbine campaign",
    ],
    stats: [
      { value: "3.11 m/s", label: "Mean velocity across 154 survey points" },
      { value: "0.44%", label: "Standard deviation as a fraction of mean" },
      { value: "±1.6%", label: "Peak-to-peak spread of the mapped field" },
      { value: "< 1 month", label: "Concept to commissioned hardware" },
    ],
    sections: [
      {
        n: "01",
        title: "Context: one part of a studio-wide equipment overhaul",
        blocks: [
          {
            kind: "prose",
            text: "The Wind Tunnel Studio serves faculty, researchers, students, and project teams through four low-speed tunnels — three smaller “Baby Blue” tunnels for airfoil lift and drag, and one larger “Big Blue” tunnel for wind-turbine testing. All four had aged into producing invalid data. Over one summer, a three-intern team overhauled the studio's hardware and curriculum through four parallel efforts.",
          },
          {
            kind: "list",
            ordered: true,
            items: [
              "Load-cell diagnosis — ran airfoil lift/drag campaigns against the tunnels' built-in force sensors and traced the invalid data to faulty load cells.",
              "Load-cell replacement — swapped the cells and designed, machined, and built a new modular mount for them.",
              "Speed-measurement redesign (this project) — I owned the replacement of the tunnel's fixed, immobile pitot-static probe with a hot-wire traverse.",
              "Wind-turbine campaign — exercised the rebuilt tunnel the way its users would, with MATLAB modeling to compare measured against predicted performance.",
            ],
          },
        ],
      },
      {
        n: "02",
        title: "Design goals",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Measure freestream speed far more accurately — and more informatively — than the fixed pitot-static probe it replaced.",
              "Resolve velocity at many points across the tunnel cross-section, not just one location.",
              "Be maneuverable: removable and repositionable to preset cross-section locations, so users can read the flow fore and aft of a turbine during a campaign, and so it lifts out for repair.",
              "Occupy minimal frontal area so it barely disturbs the flow — its wake must fully redevelop before reaching a turbine mounted aft of the probe.",
              "(Self-imposed) minimize cost by using in-house equipment wherever possible.",
              "Be designed and built within a deadline of less than one month.",
            ],
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/traverse-cad.jpg",
                caption:
                  "Figure 1: Final traverse design (CAD). Two lead-screw axes on guide rails position the hot-wire probe anywhere in the measurement plane.",
              },
              {
                src: "/img/traverse-cad-alt.jpg",
                caption:
                  "Figure 2: Alternate view showing the stainless frame, carriage, and probe mount.",
              },
            ],
          },
        ],
      },
      {
        n: "03",
        title: "Concept trade study",
        blocks: [
          {
            kind: "prose",
            text: "I sketched four drive concepts and weighed them on cost, goal fit — above all deterministic positioning and low frontal area — build time, and simplicity.",
          },
          {
            kind: "table",
            head: ["Drive concept", "Pros", "Cons"],
            highlight: 3,
            rows: [
              [
                "Cable-and-pulley (prototype)",
                "Cheapest; fewest parts; simplest to build; very low frontal area.",
                "Cable slips on the pulleys — position is neither deterministic nor repeatable; tension and stretch drift. Fails the known-point survey goal.",
              ],
              [
                "Timing-belt drive",
                "Positive toothed grip (no gross slip); fast; inexpensive; low friction.",
                "Belt stretch and compliance under load degrade repeatability; needs tensioning; pulleys add bulk.",
              ],
              [
                "Rack-and-pinion",
                "Positive engagement; robust over long travel; moderate cost.",
                "Gear backlash unless preloaded; the rack adds cross-sectional bulk in the flow; more wear and noise.",
              ],
              [
                "Lead-screw + rails (chosen)",
                "Rotation maps rigidly to linear travel — no slip; resolution and repeatability together; compact frontal area; small in-house motors suffice; self-locking, holds position. Spare lead screws already in-house.",
                "Needs careful alignment; screw whip at length, handled with support bearings.",
              ],
            ],
          },
          {
            kind: "callout",
            text: "Because the survey parks the probe at known cross-section coordinates and trusts them, deterministic and repeatable positioning was non-negotiable — ruling out cable for slip, and disfavoring belt for stretch and rack for backlash. I built the cable version first as a fast prototype, confirmed the slip problem in practice, then committed to the lead screw.",
          },
        ],
      },
      {
        n: "04",
        title: "Fabrication & drivetrain",
        blocks: [
          {
            kind: "prose",
            text: "Geared DC motors with built-in positional encoders drive two Thomson precision lead-screw axes through miter gears and an ANSI-25 chain; igus cable chain manages the wiring. I split fabrication by tolerance class rather than by convenience.",
          },
          {
            kind: "table",
            head: ["Part / material", "Fabrication method"],
            rows: [
              ["Motor and lead-screw mounts", "Machined in-house by me on the mill"],
              ["Motor-to-miter-gear adapters", "Resin printed"],
              ["Horizontal motor mounts", "Routed to a professional machinist"],
              ["10-gauge stainless steel frame", "Welded by a professional machinist"],
            ],
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/traverse-drivetrain-vert.jpg",
                caption:
                  "Figure 3: Vertical drivetrain — gearmotor to ANSI-25 chain to ball-bearing-supported lead screw.",
              },
              {
                src: "/img/traverse-drivetrain-horz.jpg",
                caption:
                  "Figure 4: Horizontal drivetrain — motor with miter gears driving the lead-screw track the hot-wire mount rides on.",
              },
            ],
          },
          {
            kind: "callout",
            text: "Matching each part to the process that could actually hold its tolerance is what made the positioning real. A lead screw only buys determinism if its mounts are square.",
          },
        ],
      },
      {
        n: "05",
        title: "Instrumentation & integration",
        blocks: [
          {
            kind: "prose",
            text: "The traverse mounts directly on Big Blue with the probe in the measurement plane. After wiring the data-retrieval circuit to the sensor manufacturer's recommendation, I built a LabVIEW VI as the operator interface and connected it to an Arduino Uno handling hardware I/O — so every surveyed point pairs a commanded (x, y) coordinate with a recorded velocity.",
          },
          {
            kind: "figure",
            src: "/img/traverse-installed.jpg",
            caption:
              "Figure 5: As built — traverse installed on Big Blue, probe deployed in the acrylic test section.",
          },
        ],
      },
      {
        n: "06",
        title: "Design validation",
        blocks: [
          {
            kind: "prose",
            text: "I validated the design three ways, each isolating a different failure mode. First, free-body diagrams of the lead screws and mounts sized the motor torque needed to drive each axis against friction and load. Second, an ANSYS CFD simulation of the carriage wake confirmed the flow fully redevelops downstream of the traverse before reaching a turbine mounted aft of it — directly satisfying goal 4. Third, empirically: I mapped the full test-section cross-section and then ran a complete mock wind-turbine campaign as the studio's users would.",
          },
        ],
      },
      {
        n: "07",
        title: "Results: test-section velocity survey",
        blocks: [
          {
            kind: "prose",
            text: "Traversing an 11 × 14 grid — 154 points at 1-inch spacing — at a 5 Hz fan setting, the mapped field is uniform: mean 3.11 m/s, standard deviation 0.44% of mean, peak-to-peak ±1.6%. That variation sits at the level of the hot-wire's own scatter, so there is no resolvable large-scale non-uniformity in the core.",
          },
          {
            kind: "figure",
            src: "/img/traverse-velocity-field.png",
            contain: true,
            caption:
              "Figure 6: Measured velocity over the cross-section. The full color range spans only 0.10 m/s; white dots mark the 154 survey points.",
          },
          {
            kind: "callout",
            text: "Big Blue went from having no trustworthy speed measurement at all to a repeatable, position-resolved mapping capability that its users can now run themselves.",
          },
        ],
      },
      {
        n: "08",
        title: "Exercising the tunnel: wind-turbine campaign",
        blocks: [
          {
            kind: "prose",
            text: "With trustworthy speed measurement in place, the team ran Big Blue end to end the way its users would — designing, printing, and testing small wind-turbine blades to expose whatever faults remained. Blade design came from a MATLAB sweep of 24 NACA airfoils against a Weibull wind-speed distribution, converging on a NACA 4415 optimized for 5.5 m/s and 1500 RPM. Power curves were then measured through the team's LabVIEW VI while stepping a torque brake through rotation rates.",
          },
          {
            kind: "prose",
            text: "The campaign surfaced concrete limitations: blades ran over 4–7 m/s versus the predicted 3–8 m/s; near the 2,000 RPM structural limit the turbine stalled rapidly; inconsistent brake stepping left unevenly spaced data; and measured peak power came in roughly 22% below prediction. That last gap is what sent me to build a blade load and deflection model from scratch to test whether blade flex could explain it.",
          },
          {
            kind: "figure",
            src: "/img/blade-3d-sg6043.png",
            contain: true,
            caption:
              "Figure 7: The deflection model that came out of this campaign — predicted deflected shape of a printed blade under its own aerodynamic load. Full write-up in the Blade Deflection Model case study.",
          },
        ],
      },
      {
        n: "09",
        title: "Alongside: load-cell diagnosis and modular mount",
        blocks: [
          {
            kind: "prose",
            text: "The same summer, I helped root-cause the invalid lift and drag data in the Baby Blue tunnels: verified airspeed via pitot-static calibration cross-checked against barometric measurement, recalibrated the legacy load sensor, and isolated the fault to the load cell itself, which was unrepairable. I then designed the replacement's modular 80/20 mount with a manufacturer-recommended acrylic shield isolating the sensor from flow disturbance; a stinger carries airfoil loads from the test section down to the shielded cell.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/loadcell-mount-cad.jpg",
                caption:
                  "Figure 8: Mount CAD — the shielded load cell sits below the test section, isolated from the flow.",
                contain: true,
              },
              {
                src: "/img/loadcell-shield.jpg",
                caption:
                  "Figure 9: The fabricated acrylic shield that isolates the sensor from flow disturbance.",
                contain: true,
              },
            ],
          },
          {
            kind: "figure",
            src: "/img/loadcell-installed.jpg",
            contain: true,
            caption:
              "Figure 10: The shielded cell integrated on the tunnel, with the stinger carrying airfoil loads down from the test section.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     2 — RADIAL PISTON PUMP
     ================================================================ */
  {
    slug: "radial-piston-pump",
    title: "Three-Piston Radial Water Pump",
    shortTitle: "Radial Piston Pump",
    subtitle: "Design, fabrication, and test from raw stock in one semester",
    context: "MAE 2250 Mechanical Synthesis, Cornell University",
    role: "One of four part designers on a seven-person team — housing, base, and centre spinner",
    status: "Built & Tested",
    featured: true,
    summary:
      "A positive-displacement pump machined entirely by hand from raw stock. It cleared its flow requirement roughly sixfold — and then failed at its hose joints under exactly the pressure its own drivetrain could produce.",
    cardImage: "/img/pump-assembled.jpg",
    tech: [
      "SolidWorks",
      "Manual Mill",
      "Lathe",
      "Laser Cutting",
      "GD&T",
      "Motion Study",
      "Kinematics",
    ],
    highlights: [
      "Selected a radial-piston architecture so delivery is set by geometry rather than discovered on test day — converting the flow requirement into a sizing problem solvable on paper",
      "Sized three pistons from a pulsation analysis that cut peak-to-peak ripple from 325% to 30%",
      "Delivered 5.9 L/min against a 1 L/min requirement, then traced a 40% volumetric efficiency and a mid-test failure to unsealed pistons and unclamped barbed fittings",
    ],
    stats: [
      { value: "5.9 L/min", label: "Delivered at ~60 rpm — 5.9× the requirement" },
      { value: "40%", label: "Volumetric efficiency: unsealed pistons, no check valves" },
      { value: "~170 psi", label: "Stall bound from crank torque vs. ~30 psi barb retention" },
      { value: "53", label: "Discrete machining operations, all on manual equipment" },
    ],
    sections: [
      {
        n: "01",
        title: "Brief and constraints",
        blocks: [
          {
            kind: "prose",
            text: "Design, machine, and test a working water pump from raw stock in one semester. Deliver at least one litre per minute, stay inside a fixed envelope, and stay inside a $75 materials budget. Every part had to be made by the team on manual mills and lathes, or laser cut.",
          },
          {
            kind: "prose",
            text: "I was one of four part designers on a seven-person team. My assignment was the housing and base — the structure that locates three cylinders, the crank, and the drive shaft relative to one another — and I produced the detail drawing for the centre spinner that drives the piston rods.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/pump-assembled.jpg",
                caption:
                  "Figure 1: The assembled pump. Three cylinders at 120° around a central crank; laser-cut acrylic housing.",
              },
              {
                src: "/img/pump-morph-chart.png",
                caption:
                  "Figure 2: Morphological chart. Selected: three pistons, circular housing, square spinning mechanism.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "02",
        title: "Architecture trade study",
        blocks: [
          {
            kind: "table",
            head: ["Architecture", "Attraction", "Why it lost"],
            highlight: 3,
            rows: [
              [
                "Centrifugal",
                "Very high flow, few moving parts, no valves, compact.",
                "Almost no suction head — must be primed or submerged. Risk of not lifting from the reservoir at all.",
              ],
              [
                "Gear (external)",
                "High speed and pressure, wide material choice.",
                "Damaged by dry running. We wanted to dry-test the mechanism before test day.",
              ],
              [
                "Peristaltic",
                "No fluid contact, no back-flow, precise per revolution.",
                "Flow rate too low to clear the 1 L/min bar with confidence.",
              ],
              [
                "Radial piston (selected)",
                "Positive displacement: flow set by geometry, not by head. Self-priming, high pressure, piston count is a free variable.",
                "Physically large, and the count drives the envelope — which is what pushed us to three.",
              ],
            ],
          },
          {
            kind: "callout",
            text: "The decisive property is that a positive-displacement pump moves a volume fixed by its geometry every revolution, largely independent of the head it works against. That converts the whole flow requirement into a sizing problem we could solve on paper before cutting metal — bore, stroke, and crank speed — rather than a performance curve we would have to discover on test day.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/pump-func-decomp.png",
                caption:
                  "Figure 3: Functional decomposition into housing, piston assembly, and centre assembly.",
                contain: true,
              },
              {
                src: "/img/pump-cardboard-proto.jpg",
                caption:
                  "Figure 4: Laser-cut cardboard prototype used to prove the crank linkage before machining.",
              },
            ],
          },
        ],
      },
      {
        n: "03",
        title: "How it moves fluid",
        blocks: [
          {
            kind: "prose",
            text: "Three cylinders sit at 120° around a central shaft. Each piston rod is pinned to a rotating centre assembly, so every cylinder is a slider-crank sharing a common crank throw. One shaft revolution drives each piston through one complete out-and-back stroke: the outward half opens the cylinder and draws water in, the inward half closes it and pushes water out.",
          },
          {
            kind: "equation",
            lines: [
              "x(θ) = r·cos θ + √(L² − r²·sin²θ)",
              "v(θ) = −ω·[ r·sin θ + (r²·sin θ·cos θ) ⁄ √(L² − r²·sin²θ) ]",
              "Q(θ) = A · Σᵢ max(0, −vᵢ(θ)) ,    θᵢ = θ + 2πi ⁄ N",
            ],
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/pump-kinematics.png",
                caption:
                  "Figure 5: Kinematic layout. Blue arrows intake, green discharge; dashed circle is the crank pin path.",
                contain: true,
              },
              {
                src: "/img/pump-motion-study.jpg",
                caption:
                  "Figure 6: SolidWorks motion study used to check rod clearance through a full revolution.",
                contain: true,
              },
            ],
          },
          {
            kind: "prose",
            text: "Because only pistons on their discharge stroke contribute, total flow is a sum of clipped half-sinusoids. That sum is what sets both the mean delivery and the pulsation, and it is the reason piston count is a design decision rather than a preference.",
          },
        ],
      },
      {
        n: "04",
        title: "Why three pistons",
        blocks: [
          {
            kind: "prose",
            text: "Adding pistons buys smoother flow and costs envelope, parts, and machining hours. Evaluating the flow sum across piston counts shows the return is strongly non-monotonic: odd counts interleave their discharge strokes so that one piston is always near peak velocity while another is near zero, while even counts pair pistons in phase opposition and leave a gap.",
          },
          {
            kind: "prose",
            text: "Three is the first count that brings pulsation into a usable band — from 325% peak-to-peak for a single piston down to 30% — and going to four actually makes it slightly worse while adding a fourth cylinder, rod, and set of fittings. Five would halve the ripple again, but at nearly twice the parts and an envelope we could not fit. Three was the cheapest count that solved the problem.",
          },
          {
            kind: "figure",
            src: "/img/pump-ripple-chart.png",
            contain: true,
            caption:
              "Figure 7: Instantaneous discharge normalised to mean (left) and peak-to-peak ripple by piston count (right).",
          },
        ],
      },
      {
        n: "05",
        title: "Sizing: drivetrain, displacement, and power",
        blocks: [
          {
            kind: "prose",
            text: "The bench motor delivers 0.75 hp at 900 rpm with 4.5 lb-ft of full-load torque. A 9:70 sprocket pair trades speed for torque into the pump crank. Checking the pair for consistency, T·ω at the crank returns 0.77 hp against 0.75 hp at the motor — the reduction conserves power to within the rounding on the torque figure, which confirms the ratio was applied in the right direction.",
          },
          {
            kind: "equation",
            lines: [
              "T_crank = T_motor · (70⁄9) = 35 lb-ft",
              "N_crank = N_motor · (9⁄70) = 116 rpm",
              "",
              "A       = π·(d⁄2)² = 2.49 in²",
              "V_rev   = N · A · s = 3 × 2.49 × 2 = 14.9 in³ per revolution",
              "Q       = V_rev · N_crank = 1 727 in³⁄min = 28.3 L⁄min",
            ],
          },
          {
            kind: "table",
            head: ["Parameter", "Value", "Source"],
            rows: [
              ["Bore × stroke", "1.78 in × 2.00 in", "stock tube, crank throw"],
              ["Pistons", "3", "pulsation analysis"],
              ["Crank speed", "116 rpm", "9:70 reduction from 900 rpm"],
              ["Test head", "1.5 m", "bench configuration"],
            ],
          },
          {
            kind: "prose",
            text: "The predicted 28.3 L/min is 28× the requirement, which was deliberate: it left room to lose flow to leakage and still pass. Hydraulic power against the 1.5 m test head works out to 6.9 W — about 1.2% of the 0.75 hp going in. That figure is worth reading carefully rather than as an efficiency verdict: static lift at 1.5 m is only about 2 psi, so at these speeds the pump is barely working against gravity at all. Nearly all the shaft power goes into piston friction, leakage past unsealed piston heads, and driving water through restrictive 3/8 in barbed fittings.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/pump-render-plan.jpg",
                caption: "Figure 8: Assembly render, plan view.",
                contain: true,
              },
              {
                src: "/img/pump-cylinder-exploded.jpg",
                caption:
                  "Figure 9: Cylinder exploded — bored tube, two end caps, barbed fittings, four tie rods.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "06",
        title: "My parts: housing, base, and centre spinner",
        blocks: [
          {
            kind: "prose",
            text: "The housing is the part that has to hold everything else in the right place. Three cylinders have to stay square to the crank pin circle under load, the drive shaft has to stay concentric through two bushings, and the whole thing has to come apart for assembly. I built it as a set of interlocking laser-cut acrylic plates — a top disc, a bottom disc, and three side-wall frames that tab into both — so the geometry is fixed by the cut file rather than by how carefully someone drilled it.",
          },
          {
            kind: "prose",
            text: "Choosing acrylic over the aluminium alternative was a budget decision that paid twice: it dropped the housing cost to roughly $6 of sheet, and it let us cut and re-cut the plates in an afternoon when a dimension needed adjusting. Aluminium would have meant hours of mill time per iteration.",
          },
          {
            kind: "prose",
            text: "The centre spinner converts shaft rotation into the crank pin motion the three rods follow. It carries a reamed 0.249 in bore for the crank pin and a 0.5 in bore for the shaft, both toleranced to ±0.005 in — because the pin circle radius sets the stroke directly, and an error there shows up as a flow error on every stroke of every piston.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/pump-spinner-drawing.png",
                caption:
                  "Figure 10: Centre spinner detail drawing. Ø0.5 in shaft bore, Ø0.249 in reamed crank pin bore, ±0.005 in.",
                contain: true,
              },
              {
                src: "/img/pump-housing-exploded.jpg",
                caption:
                  "Figure 11: Housing stack exploded — bushings, top and base discs, three tabbed side frames.",
                contain: true,
              },
            ],
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/pump-base-disc.png",
                caption:
                  "Figure 11b: Housing base disc, Ø6.25 in, with tab slots for the three side walls.",
                contain: true,
              },
              {
                src: "/img/pump-housing-assembled.jpg",
                caption: "Figure 11c: The housing assembled.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "07",
        title: "Test results and failure analysis",
        blocks: [
          {
            kind: "prose",
            text: "The pump was dry-run first with the motor coupled and no water, confirming the linkage turned freely through a full revolution. It then ran twice on the bench, at roughly half speed and at full speed. Both runs cleared the one litre per minute requirement comfortably. Neither came close to the swept-volume prediction.",
          },
          {
            kind: "table",
            head: ["Run", "Predicted", "Delivered", "Volumetric efficiency"],
            rows: [
              ["~60 rpm", "14.7 L/min", "5.9 L/min", "40%"],
              ["116 rpm", "28.3 L/min", "7.5 L/min", "27%"],
            ],
          },
          {
            kind: "prose",
            text: "A volumetric efficiency of 40% means three of every five cubic inches swept never reached the outlet. Two paths account for it. The piston heads ran directly in the bored tubes with no ring or O-ring, so each compression stroke pushes some fraction of its charge back past the piston; and the pump has no check valves, relying on hose routing alone to set flow direction, so the intake path is never positively closed during discharge.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/pump-flow-chart.png",
                caption:
                  "Figure 12: Delivered flow against swept-volume prediction for both runs, and the operating envelope.",
                contain: true,
              },
              {
                src: "/img/pump-pressure-chart.png",
                caption:
                  "Figure 13: Pressure the mechanism can generate versus what the joints can hold. Log scale.",
                contain: true,
              },
            ],
          },
          {
            kind: "prose",
            text: "On the second run the intake hoses blew off their fittings, and outlet water fed back into the intake. By the end of the minute two of three cylinders were disconnected and the pump was running on one piston. The root cause is a pressure mismatch the sizing analysis makes visible: 35 lb-ft at the crank acting through a 1 in throw puts on the order of 420 lbf behind a 2.49 in² piston — a stall bound near 170 psi. A positive-displacement pump does not care what pressure it takes; it will deliver its swept volume and raise pressure until something yields. With flow forced through 3/8 in barbed fittings into soft tubing with no hose clamps, the weakest link was barb retention, an order of magnitude below what the crank could generate.",
          },
          {
            kind: "callout",
            text: "The pump was oversized enough that even at 40% volumetric efficiency it beat the requirement almost sixfold. That margin saved the result on test day — and it also hid the sealing problem, which only became visible once delivery was compared against the swept-volume prediction rather than against the requirement.",
          },
        ],
      },
      {
        n: "08",
        title: "Cost, outcome, and what I would change",
        blocks: [
          {
            kind: "prose",
            text: "Materials came in at $53.11 ordered against a $75 budget, with $40.51 actually consumed. But materials are not where a prototype's cost lives.",
          },
          {
            kind: "table",
            head: ["Line", "Basis", "Cost"],
            highlight: 5,
            rows: [
              ["CAD and design", "5 h @ $120/h", "$600.00"],
              ["Machining and laser cutting", "14 h @ $40/h", "$560.00"],
              ["Materials consumed", "as-built bill of materials", "$40.51"],
              ["Machining operations", "53 ops @ $1.20", "$63.60"],
              ["Product cost, one-off", "—", "$1,264.11"],
              ["Product cost at 1,000 units", "NRE amortised over the run", "$64.80"],
            ],
          },
          {
            kind: "figure",
            src: "/img/pump-cost-chart.png",
            contain: true,
            caption:
              "Figure 14: Where one-off cost accumulates. Design and shop time dominate the bill of materials.",
          },
          {
            kind: "prose",
            text: "The interesting number is the last one. At a single unit, 95% of the cost is non-recurring engineering — design and setup time that gets paid once. Amortise that over a thousand units and cost per pump collapses by a factor of twenty to the machining operations and the bill of materials. It is a compact illustration of why parts count and operation count, not material price, are what a production design gets optimised against.",
          },
          {
            kind: "list",
            ordered: true,
            items: [
              "Seal the pistons. An O-ring groove in the piston head is one extra lathe operation and is the single largest recoverable loss.",
              "Fit check valves. Relying on hose routing to set flow direction leaves the intake open during discharge and makes back-feed possible the moment pressure rises.",
              "Clamp or thread the hose joints. The barbed fittings were the weakest element in a circuit whose driver can reach ~170 psi; that mismatch was foreseeable from the torque figure before test day.",
              "Instrument the outlet. We measured a single volume over a minute, which cannot separate leakage from the mid-test failure.",
              "Check the pressure capability of every element in the circuit, not just the pump. The sizing analysis predicted flow well; nobody carried the torque figure through to a pressure and compared it against the fittings.",
            ],
          },
          {
            kind: "figure",
            src: "/img/pump-team.jpg",
            caption: "Figure 15: Group 10 on test day.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     8 — FLAPPING WING RL
     ================================================================ */
  {
    slug: "flapping-wing-rl",
    title:
      "Reinforcement Learning for Wing Kinematics in Hovering Flight",
    shortTitle: "Flapping-Wing Flight & RL",
    subtitle:
      "Nonlinear equations of motion, quasi-steady aerodynamics, and a PPO agent",
    context:
      "M.Eng. Aerospace Engineering project, Cornell University — advisor Prof. Jane Wang",
    role: "Sole author",
    status: "Completed",
    featured: true,
    summary:
      "Derived the full nonlinear dynamics of a flapping-wing flyer from first principles, built the simulation in Python, and trained a PPO agent to search wing kinematics for hover.",
    cardImage: "/img/rl-frames-rear.png",
    cardImageContain: true,
    tech: [
      "Python",
      "SymPy",
      "SciPy RK45",
      "Stable-Baselines3",
      "PPO",
      "Blade Element Method",
      "Gauss–Legendre",
    ],
    highlights: [
      "Identified hovering-capable wing kinematics analytically, holding lateral drift to 3 mm and vertical drift to 1.12 mm over 10 simulated seconds",
      "Trained a PPO agent that improved episode reward mean by more than 75% across ~196 iterations of a 17-hour run",
      "Diagnosed why the policy approached but did not reach sustained hover — reward conditioning and action-space scale, not the physics model",
    ],
    stats: [
      { value: "+75%", label: "Episode reward mean improvement over training" },
      { value: "196", label: "PPO iterations in the extended training run" },
      { value: "1.12 mm", label: "Vertical drift over 10 s at the identified hover point" },
      { value: "2 DOF", label: "Per wing — flapping and pitching, pinned at the root" },
    ],
    sections: [
      {
        n: "01",
        title: "Why flapping flight resists analysis",
        blocks: [
          {
            kind: "prose",
            text: "Flapping-wing flight is governed by highly nonlinear, unsteady aerodynamic interactions that make both analytical modeling and control design difficult. Unlike a fixed wing, the aerodynamic environment a flapping wing sees changes continuously within a single stroke, and the body responds to those forces on the same timescale. There is no clean separation between the aerodynamics and the rigid-body dynamics.",
          },
          {
            kind: "prose",
            text: "This project builds a reduced-order dynamic model of a flapping system with an ellipsoidal body and rigid wings capable of symmetric flapping and pitching, then asks whether a reinforcement learning agent can discover wing kinematics that hold the body in place.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/rl-frames-rear.png",
                caption:
                  "Figure 1: Rear view of the flapping system, showing the inertial, body, and wing reference frames.",
                contain: true,
              },
              {
                src: "/img/rl-frames-lateral.png",
                caption:
                  "Figure 2: Upper-right lateral view of the same system.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "02",
        title: "Deriving the equations of motion",
        blocks: [
          {
            kind: "prose",
            text: "I set up three reference frames — inertial, body, and wing — connected by direction cosine matrices, then applied Newton's second law to the coupled body-plus-wings system. Each wing carries two degrees of freedom, flapping angle φ and pitch angle ψ, pinned at the root. Because the wings carry mass and accelerate relative to the body, the body-frame acceleration terms have to be resolved back into inertial coordinates before the force balance closes.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/rl-fbd.png",
                caption:
                  "Figure 3: Free-body diagram of the flapping system with aerodynamic loading distributed along the wing.",
                contain: true,
              },
              {
                src: "/img/rl-wing-element.png",
                caption:
                  "Figure 4: Wing element definition used for the blade-element integration.",
                contain: true,
              },
            ],
          },
          {
            kind: "prose",
            text: "Aerodynamic forces come from a thin-body quasi-steady model in the tradition of Andersen, Pesavento and Wang, applied strip-by-strip along the span and integrated numerically. The symbolic derivation was done in SymPy so the resulting expressions could be differentiated and verified rather than hand-transcribed, and the resulting system is integrated with SciPy's RK45.",
          },
          {
            kind: "equation",
            lines: [
              "φ(t) = A_φ · cos(ω_φ t) + φ_c",
              "ψ(t) = (ψ₊ − ψ₋) · sin(ω_φ t) + ψ_c ,   ψ_c = (ψ₊ + ψ₋) / 2",
            ],
          },
          {
            kind: "figure",
            src: "/img/rl-wing-angles.png",
            contain: true,
            caption:
              "Figure 4b: Commanded wing angles over time — flapping angle φ and pitch angle ψ sharing a frequency but offset in phase.",
          },
          {
            kind: "prose",
            text: "Splitting ψ between upstroke and downstroke — rather than holding pitch constant — is what gives the model control authority over translational motion. The sine form for ψ against the cosine form for φ places maximum pitch at the stroke reversals, where it does the most work.",
          },
        ],
      },
      {
        n: "03",
        title: "Finding hover from first principles",
        blocks: [
          {
            kind: "prose",
            text: "Before handing anything to a learning agent, I validated the equations of motion by sweeping the kinematic parameters directly, using dimensionless coefficients scaled to a housefly. Hovering flight showed up at a specific combination:",
          },
          {
            kind: "equation",
            lines: [
              "A_φ = 60°    φ_c = 30°    ω_φ = 30.04 Hz",
              "ψ₊ = 87°     ψ₋ = 4°      ψ_c = 45.5°",
            ],
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/rl-y-position.png",
                caption:
                  "Figure 5: Lateral position over time at the identified hover point — y varies by only 3 mm across 10 seconds.",
                contain: true,
              },
              {
                src: "/img/rl-z-position.png",
                caption:
                  "Figure 6: Vertical position over the same interval — z falls by 1.12 mm in 10 seconds.",
                contain: true,
              },
            ],
          },
          {
            kind: "figure",
            src: "/img/rl-hover-trajectory.png",
            contain: true,
            caption:
              "Figure 6b: The resulting trajectory in the y–z plane. The body traces a tight closed loop within a few millimetres rather than drifting away — this is what the learning agent was later asked to rediscover.",
          },
          {
            kind: "callout",
            text: "This result is the load-bearing one for the whole project: it establishes that the dynamics model can produce hover, so any later failure to learn hover is a property of the learning setup rather than of the physics.",
          },
        ],
      },
      {
        n: "04",
        title: "The learning environment",
        blocks: [
          {
            kind: "prose",
            text: "I wrapped the simulation in a reinforcement learning environment where the agent adjusts the kinematic parameters — amplitudes, phase offsets, and wingbeat frequency — rather than commanding torques directly. Actions are smoothed between steps so the wing motion stays kinematically continuous instead of jumping discontinuously between wingbeats.",
          },
          {
            kind: "prose",
            text: "The reward is segment-based: within each evaluation window, a least-squares trend is fit to the body's y and z trajectories, and the agent is penalized on both the intercept difference and the slope difference from the target. Penalizing slope rather than only position is what makes the reward robust to the oscillation inherent in flapping flight — a body that bobs around a fixed point should not be punished the way a body that steadily drifts is.",
          },
          {
            kind: "list",
            items: [
              "Algorithm: Proximal Policy Optimization (PPO), continuous action space",
              "Physics: full nonlinear EOM integrated in-loop at every environment step",
              "Aerodynamics: quasi-steady blade element with Gauss–Legendre spanwise integration",
              "Reward: least-squares trend extraction over trajectory segments, penalizing intercept and slope",
            ],
          },
        ],
      },
      {
        n: "05",
        title: "Results",
        blocks: [
          {
            kind: "prose",
            text: "The first training attempts did not learn. Both the episode reward mean and the action-distribution standard deviation stayed nearly flat across iterations, which told me the policy was neither exploring nor improving. The problem was conditioning, not capability: the action space was too large and the reward too simply defined for the optimizer to find structure.",
          },
          {
            kind: "prose",
            text: "Tightening the action bounds and rescaling the reward produced the first genuine learning signal — episode reward rose over 25% and the policy visibly reduced lateral drift. With learning confirmed, I reverted to the originally intended reward formulation and launched a much longer run.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/rl-learned-kinematics.png",
                caption:
                  "Figure 7: Wing kinematics the policy converged on during the extended run.",
                contain: true,
              },
              {
                src: "/img/rl-training-trajectory.png",
                caption:
                  "Figure 8: Body trajectory under the learned policy.",
                contain: true,
              },
            ],
          },
          {
            kind: "prose",
            text: "Across roughly 196 iterations of that extended run — about 17 hours of training — the episode reward mean increased by more than 75% while the action distribution standard deviation steadily narrowed. Both signals point the same way: the policy was consistently selecting wingbeat parameters that reduced body drift, and it was becoming more confident about them.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/rl-final-displacements.png",
                caption:
                  "Figure 9: Final y and z displacements over the evaluation interval.",
                contain: true,
              },
              {
                src: "/img/rl-final-kinematics.png",
                caption:
                  "Figure 10: Final learned wing kinematics — note the amplitude the policy settles on.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "06",
        title: "What it did and did not achieve",
        blocks: [
          {
            kind: "prose",
            text: "The PPO agent did not achieve sustained stable hover. It approached it — improving trajectory performance substantially and learning structured, physically plausible flapping motions — but the policy did not converge on the kind of stationary flight the hand-identified kinematics demonstrate.",
          },
          {
            kind: "prose",
            text: "The most likely cause sits in the reward shaping. Examining the learned kinematics, the reward appears to indirectly over-penalize large amplitudes and high frequencies, which are exactly the regions where hover lives. A policy that is punished for approaching the answer will stop short of it.",
          },
          {
            kind: "callout",
            text: "The honest read: the pipeline captures nontrivial aerodynamic relationships and demonstrably learns, and the physics model provably supports hover. The gap is in reward design and policy structure — which is a much more tractable problem than a gap in the dynamics would have been.",
          },
          {
            kind: "prose",
            text: "This was my first application of reinforcement learning to a physics-driven control problem. Coming from deterministic modeling, rigid-body dynamics, and numerical simulation, integrating policy-based learning and stochastic optimization required stepping well outside my usual analytical framework — which was much of the point.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     3 — FORKLIFT ENGINE
     ================================================================ */
  {
    slug: "forklift-engine-test",
    title: "Forklift Engine Test Campaign",
    shortTitle: "Engine Test Campaign",
    subtitle:
      "Characterizing the performance of a Toyota 15Z inline-six on an instrumented test stand",
    context: "Toyota Forklift Studio, Cornell University",
    role: "Team and individual contributions",
    status: "Completed",
    featured: true,
    summary:
      "Instrumented engine testing on a production inline-six: in-cylinder pressure–volume work, thermal behaviour under load, and the data reduction that turns raw traces into performance numbers.",
    cardImage: "/img/forklift-pv-diagram.png",
    cardImageContain: true,
    tech: [
      "Engine Testing",
      "Data Acquisition",
      "Thermocouples",
      "Pressure Transducers",
      "Data Reduction",
    ],
    highlights: [
      "Characterized the performance of a Toyota 15Z inline-six engine on an instrumented stand",
      "Captured in-cylinder pressure against volume across loaded conditions to extract indicated work per cycle",
      "Logged multi-channel thermal response through load transitions to observe how the engine sheds heat",
    ],
    stats: [
      { value: "15Z", label: "Toyota inline-six engine under test" },
      { value: "P–V", label: "Indicated work extracted from in-cylinder pressure traces" },
    ],
    sections: [
      {
        n: "01",
        title: "The campaign",
        blocks: [
          {
            kind: "prose",
            text: "The Toyota Forklift Studio maintains a production 15Z inline-six on an instrumented test stand for teaching engine performance characterization. The work here was measuring what the engine actually does across its operating range — not simulating it.",
          },
          {
            kind: "figure",
            src: "/img/forklift-engine.jpg",
            caption:
              "Figure 1: The instrumented 15Z on the stand, with sensor leads and thermocouples routed to the acquisition system.",
          },
        ],
      },
      {
        n: "02",
        title: "Measurements",
        blocks: [
          {
            kind: "prose",
            text: "The core measurement is in-cylinder pressure against cylinder volume through the cycle. The area enclosed by that loop is the indicated work per cycle, which is what separates what the thermodynamics delivers from what makes it out to the crankshaft after friction and pumping losses.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/forklift-pv-diagram.png",
                caption:
                  "Figure 2: Pressure–volume traces under loaded conditions. The enclosed area gives indicated work per cycle.",
                contain: true,
              },
              {
                src: "/img/forklift-temps.jpg",
                caption:
                  "Figure 3: Multi-channel temperature response through a load transition.",
                contain: true,
              },
            ],
          },
          {
            kind: "prose",
            text: "Alongside the pressure work, multi-channel thermocouple logging tracks how the engine sheds heat as load changes — the divergence between channels after the transition is where the thermal path through the engine becomes visible.",
          },
          {
            kind: "figure",
            src: "/img/forklift-daq.jpg",
            caption:
              "Figure 4: Live acquisition during a run — pressure traces streaming to the operator display.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     4 — GLIDER
     ================================================================ */
  {
    slug: "long-range-glider",
    title: "Long-Range Glider Design & Competition",
    shortTitle: "Long-Range Glider",
    subtitle:
      "Designing for Earth, scaling for a fictional atmosphere, and flying against thirty other teams",
    context: "MAE 3050 Introduction to Aeronautics, Cornell University",
    role: "Team of three",
    status: "Top 5 Finish",
    featured: true,
    summary:
      "A balsa glider designed from published sailplane performance data, validated in XFLR5, flown in competition, and then dimensionally scaled to fly in a thinner, lower-gravity atmosphere.",
    cardImage: "/img/glider-loopyleo.jpg",
    tech: [
      "XFLR5",
      "Fusion 360",
      "Laser Cutting",
      "Similitude Scaling",
      "Stability Analysis",
    ],
    highlights: [
      "Selected the HQ-17/14.38 airfoil by benchmarking published sailplane performance, targeting the ASW-22's sink rate and glide ratio",
      "Validated the design in XFLR5 with root-locus stability analysis confirming self-correcting response in pitch and roll",
      "Placed top 5 of more than 30 teams, with measured glide ratio of 4.73 against a theoretical 5.81",
    ],
    stats: [
      { value: "Top 5", label: "Of more than 30 competing teams" },
      { value: "11.2", label: "Wing aspect ratio, at 37.6 g all-up mass" },
      { value: "4.73", label: "Measured glide ratio against 5.81 theoretical" },
      { value: "16.9 m", label: "Best competition run distance" },
    ],
    sections: [
      {
        n: "01",
        title: "The brief",
        blocks: [
          {
            kind: "prose",
            text: "Design a long-range, slow-flight glider for the atmospheric conditions of a fictional planet — thinner air, lower gravity, a lower speed of sound — and then design a companion Earth glider that reproduces the same non-dimensional flow behaviour so the design can actually be tested here. Two aircraft, one set of matched Reynolds and lift coefficients.",
          },
          {
            kind: "figure",
            src: "/img/glider-loopyleo.jpg",
            caption:
              "Figure 1: The completed Earth glider — balsa construction with a two-section dihedral wing.",
          },
        ],
      },
      {
        n: "02",
        title: "Airfoil and wing selection",
        blocks: [
          {
            kind: "prose",
            text: "Rather than picking an airfoil by reputation, we benchmarked full-scale sailplanes on the metrics that actually matter for the mission — aspect ratio, minimum sink rate, maximum lift-to-drag, and best glide ratio — and worked backwards from the best performer. The Alexander Schleicher ASW-22 stood out: aspect ratio 32.47, minimum sink 0.44 m/s, maximum L/D of 62, best glide ratio 54.",
          },
          {
            kind: "prose",
            text: "Low sink rate keeps the glider airborne longer; high glide ratio converts that time into distance. Aspect ratio then tells you what it costs structurally to chase that performance. The ASW-22 uses a Horstmann and Quast HQ-17/14.38 section, so that is where we started, reading published polars at the Reynolds number our much smaller aircraft would actually see — around 26,000, two orders of magnitude below the full-scale aircraft.",
          },
          {
            kind: "prose",
            text: "The low-Reynolds polars are worse than the full-scale ones, but our glider is small and light and does not need to generate as much lift, so a lower lift coefficient is acceptable provided drag falls with it. The HQ-17 keeps a relatively high C_l/C_d for a glider this small, which is why we stayed with it.",
          },
          {
            kind: "figure",
            src: "/img/glider-polars.jpg",
            contain: true,
            caption:
              "Figure 2: Reviewing airfoil polar data during selection — lift, drag, and moment coefficient against angle of attack at the design Reynolds number.",
          },
        ],
      },
      {
        n: "03",
        title: "Configuration decisions",
        blocks: [
          {
            kind: "prose",
            text: "The wing uses two sections of dihedral — 4° on the main section, 16° at the tips — to create a curved-wing effect for lateral stability. Because the spar is angled, we laser-cut it from balsa rather than hardwood, and designed the spar joint with interlocking teeth so the two wing halves and the fuselage lock together rigidly.",
          },
          {
            kind: "prose",
            text: "The tail changed between prototypes. Our first design used a V-tail, but angling it precisely proved difficult and it was probably undersized — the glider banked to one side on every flight. We moved to a conventional vertical and horizontal stabilizer for the final build, and added cutouts to the tail and rear fuselage because the initial design pitched up: the centre of mass sat behind the centre of lift.",
          },
          {
            kind: "prose",
            text: "The fuselage is itself an airfoil section, a Wortmann FX 60-126, so that the roughly 10% of total lift and drag a fuselage typically contributes works in our favour rather than against it.",
          },
        ],
      },
      {
        n: "04",
        title: "Analysis and validation",
        blocks: [
          {
            kind: "table",
            head: ["Parameter", "Hand calculation", "XFLR5 model"],
            rows: [
              ["C_l at α = 0", "0.371", "0.41"],
              ["C_d at α = 0", "0.0638", "0.11"],
              ["C_m at α = 0", "0", "−0.0005"],
              ["Flight speed", "5 m/s", "5 m/s"],
            ],
          },
          {
            kind: "prose",
            text: "The simulated lift coefficient sits slightly above the required one, which says the glider can produce the lift it needs and may even fly a little slower than 5 m/s while doing so. The simulated drag coefficient is higher than the hand calculation because the XFLR5 model includes the tail and fuselage rather than the wing section alone — so the disagreement is expected and in the right direction.",
          },
          {
            kind: "prose",
            text: "Moment coefficients came out near zero across the range, and the root-locus analysis placed every pole of the system in the left half plane. Physically, that means an impulsive disturbance self-corrects back to zero in both pitch and roll — which the impulse response curves confirm directly.",
          },
          {
            kind: "figure",
            src: "/img/glider-wing-screen.jpg",
            contain: true,
            caption:
              "Figure 3: The wing geometry on screen during design iteration, showing the two-section dihedral.",
          },
        ],
      },
      {
        n: "05",
        title: "Competition and honest assessment",
        blocks: [
          {
            kind: "table",
            head: ["Trial", "Distance", "Time", "Average speed"],
            rows: [
              ["1", "9 m", "2.38 s", "3.78 m/s"],
              ["2", "13 m", "2.58 s", "5.04 m/s"],
              ["3", "16.9 m", "2.90 s", "5.69 m/s"],
            ],
          },
          {
            kind: "prose",
            text: "The glider flew straight and was stable, but after a brief level-flight period it would lose lift and drop before the finish line. Measured glide ratio came out at 4.73 against a theoretical 5.81, and measured sink rate at 1.066 m/s against a theoretical 0.859 m/s — both consistent with real drag exceeding the theoretical estimate. The team placed in the top 5 of more than 30 entries.",
          },
          {
            kind: "callout",
            text: "The specific failure is diagnosable from the airfoil data we already had. Below 0° angle of attack the HQ-17's lift coefficient falls off sharply, and its zero-lift angle of attack is around −4°. So once the glider began to pitch forward, it could not regain lift — the airfoil that gave us efficiency in level flight gave us no recovery margin outside it.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/glider-wing.jpg",
                caption: "Figure 4: A finished wing panel during the build.",
              },
              {
                src: "/img/glider-team.jpg",
                caption: "Figure 5: The team on competition day.",
              },
            ],
          },
          {
            kind: "prose",
            text: "Scaling to the fictional atmosphere exposed a second limit. Matching Reynolds number across a 150× density drop and a 1.5× viscosity drop forces a velocity ratio of 14.2 and a length ratio of 7.03, giving a 6 m wingspan flying at 71.1 m/s — Mach 0.59 in that atmosphere, far outside anything a glider does on Earth, and at 2.51 kg too light to carry meaningful instrumentation. The scaled design is a valid similitude result and an invalid aircraft, which is itself the useful finding.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     6 — PLASMA JET ENGINE
     ================================================================ */
  {
    slug: "plasma-jet-simulation",
    title: "Microwave Plasma Jet Engine Simulation",
    shortTitle: "Plasma Jet Simulation",
    subtitle:
      "A 3D finite-difference model of atmospheric microwave plasma ignition",
    context: "MAE 6540 Plasmas for Propulsion, Cornell University",
    role: "Sole author",
    status: "Completed",
    featured: true,
    summary:
      "A MATLAB model of plasma formation inside an experimental microwave jet engine — standing-wave electron heating, energy-dependent ionization of N₂ and O₂, and the pressure rise that follows.",
    cardImage: "/img/plasma-te-field.jpg",
    cardImageContain: true,
    tech: [
      "MATLAB",
      "Finite Difference",
      "Plasma Physics",
      "Collision Cross Sections",
      "Time Marching",
    ],
    highlights: [
      "Reproduced the engine's core mechanism: centre-peaked microwave heating driving ionization of the core and the resulting pressure rise",
      "Coupled electron and gas energy through plasma conductivity, with ionization thresholds evaluated separately for N₂ and O₂",
      "Marched the full 3D field through 25 microseconds after ignition to animate the evolution of every plasma property",
    ],
    stats: [
      { value: "0.25 µs", label: "Simulated time to peak electron temperature" },
      { value: "N₂ + O₂", label: "Species with separate impact-ionization thresholds" },
      { value: "3D", label: "Finite-difference spatial field, marched in time" },
    ],
    sections: [
      {
        n: "01",
        title: "Why plasma propulsion",
        blocks: [
          {
            kind: "prose",
            text: "Every air-breathing engine in service today — turbofan, turbojet, propeller, ramjet, scramjet — raises the thermal energy of the working fluid through combustion, converting hydrocarbon chemical energy into heat with carbon dioxide and water as byproducts. A microwave plasma jet engine proposes to reach the same end by a different route: heat ambient air electrically until it ionizes, then expand it through a nozzle. No carbon fuel, and no combustion.",
          },
          {
            kind: "prose",
            text: "This project dissects an experimental plasma jet engine built at Wuhan University to explain how it generates thrust, and builds a model of the plasma physics that makes it work. The central mechanism is collision between free electrons and neutral atmospheric particles, creating a plasma with enough thermal energy to be converted into kinetic energy through nozzle expansion.",
          },
          {
            kind: "figure",
            src: "/img/plasma-wuhan-engine.jpg",
            contain: true,
            caption:
              "Figure 1: Schematic of the Wuhan plasma jet engine — magnetron, air compressor, RF power supply, compressed waveguide, and quartz tube, with the plume at increasing input power.",
          },
        ],
      },
      {
        n: "02",
        title: "Model construction",
        blocks: [
          {
            kind: "prose",
            text: "The simulation marches a 3D finite-difference grid forward in time from the moment of ignition. Each step follows the same chain: heat the electrons with the microwave field, check whether they have reached ionization threshold, ionize if so, then feed the energy exchange back into the gas.",
          },
          {
            kind: "list",
            ordered: true,
            items: [
              "Initialize gas properties from the standard atmosphere and the ideal gas law.",
              "Compute neutral collision cross sections from atomic radii, σ = π(2r)².",
              "Initialize microwave properties and define the electric field as a standing wave in space and time.",
              "Compute electron velocity from electron temperature.",
              "Test electron temperature against the impact-ionization thresholds for N₂ and O₂ separately.",
              "Where threshold is met, compute collision frequency and update ion and neutral densities — ions rising, neutrals falling, over the timestep.",
              "Use plasma conductivity to compute power absorbed from the microwave field, and update temperature for the next step.",
              "Record and plot the spatial variation, then repeat.",
            ],
          },
        ],
      },
      {
        n: "03",
        title: "Results",
        blocks: [
          {
            kind: "prose",
            text: "The simulation produces an animated evolution of every tracked property — electron density, neutral and ion densities for both species, electron temperature, gas temperature, and pressure — across the first 25 microseconds after ignition.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/plasma-t003.png",
                caption:
                  "Figure 2: Plasma and gas properties at t = 0.03 µs — heating has begun but ionization has not.",
                contain: true,
              },
              {
                src: "/img/plasma-t010.png",
                caption:
                  "Figure 3: t = 0.10 µs — the core has crossed ionization threshold and electron density is rising.",
                contain: true,
              },
            ],
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/plasma-t017.png",
                caption: "Figure 4: t = 0.17 µs — ionization spreading outward from the centre.",
                contain: true,
              },
              {
                src: "/img/plasma-t025.png",
                caption:
                  "Figure 5: t = 0.25 µs — the developed state, with a clearly centre-peaked electron temperature field and the corresponding gas pressure rise.",
                contain: true,
              },
            ],
          },
          {
            kind: "callout",
            text: "The model reproduces the engine's core mechanism — centre-peaked heating driving ionization of the core and the resulting pressure rise. It is demonstrative rather than calibrated: it explains the physics of why the engine works, not how much thrust a given hardware configuration produces.",
          },
        ],
      },
      {
        n: "04",
        title: "Where this leaves the concept",
        blocks: [
          {
            kind: "prose",
            text: "There is a long way to go before this architecture scales to large-aircraft propulsion, and the limiting factor is not the plasma physics — it is the electrical input required relative to the thrust generated. The mechanism works; the energy budget is the open problem.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     7 — BLADE DEFLECTION MODEL
     ================================================================ */
  {
    slug: "blade-deflection-model",
    title:
      "Wind-Turbine Blade Aerodynamic Load & Flapwise Deflection Model",
    shortTitle: "Blade Deflection Model",
    subtitle:
      "Blade element momentum theory, Green's-theorem section properties, and a piecewise Euler–Bernoulli solver",
    context: "Wind Tunnel Studio, Cornell University",
    role: "Sole author — aerodynamic model, section-property routine, and beam solver",
    status: "Completed",
    featured: true,
    summary:
      "A MATLAB model written from scratch to test whether blade flex explained a 22% power shortfall. It takes airfoil polars and a blade planform and returns the deflected shape under aerodynamic load.",
    cardImage: "/img/blade-3d-sg6043.png",
    cardImageContain: true,
    tech: [
      "MATLAB",
      "fmincon",
      "BEM Theory",
      "Green's Theorem",
      "Euler–Bernoulli",
      "Gauss–Legendre",
    ],
    highlights: [
      "Posed the BEM induction closure as a bounded nonlinear minimisation rather than fixed-point iteration, converging residuals essentially to zero at all 20 stations",
      "Replaced an elliptical section approximation with a Green's-theorem boundary integral over the true rotated airfoil contour, correcting a 69% error in predicted tip deflection",
      "Verified three independent ways, including agreement to machine precision against a closed-form polygon integral",
    ],
    stats: [
      { value: "2.83 mm", label: "Max flapwise tip deflection, SG6043 6-inch blade at 3500 rpm" },
      { value: "1×10⁻¹⁴", label: "Section routine agreement with the closed-form polygon integral" },
      { value: "0.931", label: "Rotor thrust coefficient — inside the actuator-disk limit of 1.0" },
      { value: "1.9%", label: "Tip deflection as a fraction of blade span" },
    ],
    sections: [
      {
        n: "01",
        title: "Scope and motivation",
        blocks: [
          {
            kind: "prose",
            text: "A three-intern team overhauled Cornell's Wind Tunnel Studio and then exercised the rebuilt “Big Blue” tunnel the way its users would — designing, 3D-printing, and testing small wind-turbine blades. The Betz blade model behind the printed geometry was a team effort; measured peak power came in roughly 22% below prediction.",
          },
          {
            kind: "prose",
            text: "To test whether blade flex explained that gap, I wrote this load-and-deflection model from scratch on my own — the aerodynamic force model, the section-property routine, and the beam solver. It takes airfoil polars and a blade planform and returns the deflected shape of a single blade under its own aerodynamic load.",
          },
        ],
      },
      {
        n: "02",
        title: "Governing equations — aerodynamic load",
        blocks: [
          {
            kind: "prose",
            text: "The blade is cut into 20 annular elements. For each, blade element momentum theory requires that two independent statements of the same element load agree. Momentum theory applies the Rankine–Froude actuator-disk and angular-momentum balances to the annulus; airfoil theory builds the same load from tabulated lift and drag on the local section.",
          },
          {
            kind: "equation",
            lines: [
              "Momentum:   dT = F·ρ·U₁²·4a(1−a)·πr·dr",
              "            dQ = F·4a′(1−a)·ρ·U₁·π·Ω·r³·dr",
              "",
              "Airfoil:    φ = atan(u/w),  α = φ − θ,  U_rel = √(u²+w²)",
              "            dFl = F·½ρU_rel²·C_l(α)·c·dr",
              "            dT  = B(dFl·cosφ + dFd·sinφ)",
              "",
              "Prandtl tip loss:  F = (2/π)·acos[ e^(−B(R−r)/(2r·sinφ)) ]",
            ],
          },
          {
            kind: "prose",
            text: "Here u = U₁(1−a) is the axial velocity at the disk and w = Ωr(1+a′) the tangential, with B = 3 blades. Both closures are annulus totals across all blades, so a single cantilevered blade carries T/B.",
          },
        ],
      },
      {
        n: "03",
        title: "Solved as a constrained minimisation",
        blocks: [
          {
            kind: "prose",
            text: "Rather than the usual fixed-point iteration on the induction factors, I posed the closure as a bounded nonlinear minimisation and handed it to fmincon at each of the 20 stations.",
          },
          {
            kind: "equation",
            lines: ["J(a, a′) = (dQ_mom − dQ_air)² + [ R·(dT_mom − dT_air) ]²"],
          },
          {
            kind: "list",
            items: [
              "The R factor on the thrust residual puts both terms in N²·m², so the cost is dimensionally homogeneous and neither residual is implicitly weighted by unit choice.",
              "A warm start of a₀ = [a_min, 1/3] seeds the tangential factor at the Betz optimum.",
              "Bounds a ∈ [a_min, 0.5] keep the solver out of the turbulent-wake state where momentum theory is invalid; a_min comes from streamtube continuity against the tunnel wall.",
              "Optimality and step tolerances at 1×10⁻¹⁰, so residuals converge essentially to zero.",
            ],
          },
          {
            kind: "figure",
            src: "/img/blade-thrust-dist.png",
            contain: true,
            caption:
              "Figure 1: Converged spanwise thrust distribution for both blades, with the load centroid marked. Element thrust peaks outboard, then falls at the tip where the Prandtl factor bites.",
          },
        ],
      },
      {
        n: "04",
        title: "From distributed load to a deflected beam",
        blocks: [
          {
            kind: "prose",
            text: "The blade is treated as a cantilever fixed at the root and loaded in the flapwise direction. The spanwise distribution is collapsed to a statically equivalent point force using the standard equivalence — equal resultant and equal first moment about the root. This is exact for the internal moment inboard of the load centroid, and it is what makes the rest of the integration analytic rather than numerical.",
          },
          {
            kind: "equation",
            lines: [
              "T = Σ dTᵢ ⁄ B ,     r̄ = Σ dTᵢ·rᵢ ⁄ Σ dTᵢ",
              "",
              "E·I(r)·v″(r) = M(r),   M(r) = T(r̄ − r)  for r < r̄",
              "                        M(r) = 0         for r ≥ r̄",
              "",
              "v′(r) = (T ⁄ 2EI)(2r̄r − r²) + C₁",
              "v(r)  = (T ⁄ 6EI)(3r̄r² − r³) + C₁r + C₂",
            ],
          },
          {
            kind: "prose",
            text: "Because I varies along the span, one pair of constants cannot serve the whole blade. The solver walks slice by slice and re-solves C₁ and C₂ at every interface to enforce C⁰ and C¹ continuity — matching both displacement and slope across each boundary. The clamped root supplies v = 0 and v′ = 0 to seed the first slice. Outboard of the load centroid the moment vanishes, v″ = 0, and the shape is exactly straight, so maximum deflection always falls at the tip.",
          },
          {
            kind: "figure",
            src: "/img/blade-beam-model.png",
            contain: true,
            caption:
              "Figure 2: The beam model. The spanwise thrust distribution is replaced by its resultant at the load centroid. Inboard the moment is non-zero and the shape is cubic; outboard the moment vanishes and the blade is exactly straight.",
          },
          {
            kind: "callout",
            text: "Each slice is integrated in closed form rather than numerically, so there is no discretisation error in the integration itself. The only spanwise approximation is treating I as piecewise constant over each of the 20 slices — a stepped-shaft method for a tapered beam, which converges far faster in the number of slices than a comparable low-order finite-element mesh, and costs 20 closed-form evaluations rather than a matrix assembly and solve.",
          },
        ],
      },
      {
        n: "05",
        title: "Section stiffness from the true airfoil contour",
        blocks: [
          {
            kind: "prose",
            text: "The stiffness EI needs the second moment of area of every airfoil section along the span. My first pass approximated each section as a solid ellipse of semi-axes a = c/2 and b = t/2, giving I = πab³/4. It is cheap, closed-form, and adequate where the section sits close to level.",
          },
          {
            kind: "prose",
            text: "Its weakness is that it takes the section as drawn and ignores the pitch rotation entirely. A section twisted 26.7° at the root presents a far greater depth about the flapwise bending axis than its unrotated thickness suggests, so the ellipse understates stiffness badly exactly where the bending moment is largest. It holds to within 7% outboard where pitch approaches zero, but runs 16× low at the root — and carries a 69% error through to the predicted tip deflection.",
          },
          {
            kind: "prose",
            text: "I replaced the approximation with a boundary integral over the actual Selig coordinate polygon, taken in its rotated attitude. The area vector field F = (−z/2, x/2) has two-dimensional curl equal to 1, so its contour integral returns the enclosed area. Weighting that same integrand by zⁿ and re-applying Green's theorem yields a family of moments from a single loop.",
          },
          {
            kind: "equation",
            lines: [
              "∮ zⁿ (x dz − z dx)/2 = ((n+2)/2) · ∬ zⁿ dA",
              "",
              "n = 0 → A       n = 1 → (3/2)·Q_x       n = 2 → 2·I_z₀",
              "",
              "z_c = Q_x ⁄ A          I_xx = I_z₀ − A·z_c²",
            ],
          },
          {
            kind: "prose",
            text: "Each panel is integrated with two-point Gauss–Legendre quadrature. Along a straight panel the n = 2 integrand is cubic in the panel parameter, and two-point Gauss is exact through cubics — so for a polygon the routine is exact rather than merely convergent. Euler–Bernoulli needs the second moment about the section's own neutral axis, not the global reference line, so the centroid comes from the same loop and the parallel-axis term is removed. At the 26.7° root station that parallel-axis term is 81% of the raw value.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/blade-root-section.png",
                caption:
                  "Figure 3: Root section at 26.7° pitch with panel nodes. The contour integral naturally returns the moment about the global axis; bending needs it about the centroidal axis.",
                contain: true,
              },
              {
                src: "/img/blade-stiffness.png",
                caption:
                  "Figure 4: Spanwise stiffness from both section models, and the ratio between them against local pitch. The two agree outboard and separate as pitch grows toward the root.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "06",
        title: "Verification",
        blocks: [
          {
            kind: "table",
            head: ["Check", "Method", "Result"],
            rows: [
              [
                "Section routine",
                "Green's-theorem result against the closed-form shoelace polygon integral, all 20 stations.",
                "Max relative error 1.0×10⁻¹⁴ (SG6043) and 1.8×10⁻¹⁴ (SD2030) — machine precision.",
              ],
              [
                "Load magnitude",
                "Rotor thrust against the actuator-disk limit: 1.3700 N over a 0.09931 m² swept area at 5 m/s.",
                "C_T = 0.931, inside the theoretical maximum of 1.0. Confirms the closures return annulus totals.",
              ],
              [
                "Section model",
                "Elliptical approximation against the boundary integral, station by station, versus local pitch.",
                "Within 7% outboard; 16× low at the 26.7° root. Worth 69% on the final tip deflection.",
              ],
            ],
          },
          {
            kind: "prose",
            text: "The first check matters because the boundary integral is the one place in the chain where a sign or constant slip would be invisible in the output — the deflection would simply come out plausible and wrong. Comparing against an independent closed form on the same polygon removes that risk. The second is a physical bound rather than a numerical one: no actuator disk can exceed C_T = 1, so a rotor coefficient of 0.931 confirms both that the BEM closure returns annulus totals across all three blades and that dividing by B before loading the cantilever is the right move.",
          },
        ],
      },
      {
        n: "07",
        title: "Results",
        blocks: [
          {
            kind: "table",
            head: ["Quantity", "SG6043 / 6 in", "SD2030 / 7 in"],
            rows: [
              ["Operating point", "366.52 rad/s (λ = 13.03)", "172.24 rad/s (λ = 7.00)"],
              ["Rotor thrust, 3 blades", "1.3700 N", "1.5309 N"],
              ["Thrust per blade", "0.4567 N", "0.5103 N"],
              ["Load centroid r̄", "0.1207 m", "0.1322 m"],
              ["Rotor power", "1.506 W", "1.182 W"],
              ["Max tip deflection, PLA (E = 2.80 GPa)", "2.828 mm", "2.051 mm"],
              ["Max tip deflection, ABS (E = 2.28 GPa)", "3.473 mm", "2.519 mm"],
            ],
          },
          {
            kind: "figure",
            src: "/img/blade-deflected-span.png",
            contain: true,
            caption:
              "Figure 5: Deflected shape along the span for both blades under both section models. The kink is where the bending moment vanishes and the shape becomes exactly linear.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/blade-3d-sg6043.png",
                caption:
                  "Figure 6: SG6043, 6-inch blade at λ = 13.03. Blade surface coloured by local flapwise deflection; the side view overlays the undeflected blade in grey.",
                contain: true,
              },
              {
                src: "/img/blade-3d-sd2030.png",
                caption: "Figure 7: SD2030, 7-inch blade at λ = 7.",
                contain: true,
              },
            ],
          },
          {
            kind: "callout",
            text: "At roughly 2.8 mm on a 152 mm span, tip deflection is about 1.9% of blade length. That is too small to account for a 22% power shortfall on its own — which redirected the investigation toward the measurement chain and the brake-stepping procedure rather than blade flex, and set the stiffness bar for the material comparison that followed.",
          },
        ],
      },
      {
        n: "08",
        title: "Assumptions and limitations",
        blocks: [
          {
            kind: "list",
            items: [
              "Linear elastic, isotropic, homogeneous solid cross-section. An FDM-printed part is infilled and layer-direction anisotropic, so the effective flapwise modulus is lower and orientation-dependent.",
              "Small deflection: no geometric stiffening, and no follower-force effect as the blade bends out of the wind.",
              "No centrifugal stiffening. At 3500 rpm this is the dominant missing restoring term, so the prediction is conservative.",
              "Pure flapwise bending — the product of inertia is discarded, so coupled lead-lag deflection and bend-twist behaviour of the highly pitched inboard sections are not captured.",
              "Load frozen at the rigid geometry: no aeroelastic feedback from the deflected shape back into the BEM solve.",
              "Clamped boundary conditions applied at the midpoint of the first element, so the inboard 3.8 mm of blade sits outside the integration.",
            ],
          },
          {
            kind: "prose",
            text: "The two changes that would most improve fidelity, in order: add the centrifugal stiffening term to the moment balance, and iterate the BEM solve on the deflected geometry so load and shape converge together.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     9 — FEA WING OPTIMIZATION
     ================================================================ */
  {
    slug: "wing-fea-optimization",
    title: "Aircraft Wing Structural Optimization",
    shortTitle: "Wing FEA Optimization",
    subtitle:
      "Shell finite-element modeling and parametric optimization under deformation and stress constraints",
    context: "MAE 5700 Finite Element Analysis, Cornell University",
    role: "Team of three — thickness studies, mathematical model, and optimization",
    status: "Completed",
    featured: false,
    summary:
      "Minimized the mass of a thin-walled wing under aerodynamic and gravitational loading using ANSYS shell elements, taking a baseline that violated both constraints to a compliant design 6.6% lighter than the single-parameter optimum.",
    cardImage: "/img/fea-designJ-deformation.png",
    cardImageContain: true,
    tech: [
      "ANSYS Mechanical",
      "Shell FEA",
      "Parametric Optimization",
      "Mesh Sensitivity",
      "Design Exploration",
    ],
    highlights: [
      "Modeled skin, spars, and ribs as mid-surface shells so thickness becomes a design variable without touching the geometry",
      "Ran mesh sensitivity to separate genuine stress concentrations from discretization singularities before trusting any optimum",
      "Explored ten rib-and-spar layouts, finding the design was deformation-controlled and that more internal structure wins",
    ],
    stats: [
      { value: "7,967 kg", label: "Final mass, Design J — 6.6% under the single-parameter optimum" },
      { value: "0.375 m", label: "Deformation limit — the active constraint throughout" },
      { value: "252 MPa", label: "Stress limit: 378 MPa yield with a 1.5 factor of safety" },
      { value: "10", label: "Rib and spar configurations evaluated" },
    ],
    sections: [
      {
        n: "01",
        title: "The problem",
        blocks: [
          {
            kind: "prose",
            text: "Aircraft wing structures balance strength, stiffness, and weight. Excess structural mass reduces aerodynamic efficiency and increases fuel consumption; insufficient stiffness or strength leads to excessive deformation or failure under load. The objective here was to minimize the mass of a simplified thin-walled wing — skin, spars, and ribs, cantilevered and loaded by aerodynamic pressure plus gravity — subject to a maximum deformation of 0.375 m and a maximum von Mises stress of 252 MPa.",
          },
          {
            kind: "figure",
            src: "/img/fea-wing-geometry.png",
            contain: true,
            caption:
              "Figure 1: Wing geometry — a cantilevered thin-walled box structure of skin, spars, and ribs.",
          },
        ],
      },
      {
        n: "02",
        title: "Why shell elements",
        blocks: [
          {
            kind: "prose",
            text: "For thin-walled components the characteristic thickness is much smaller than the in-plane dimensions, so the three-dimensional continuum can be accurately represented by its mid-surface with thickness carried through the constitutive relations rather than resolved geometrically. This drops the degree-of-freedom count sharply while retaining the dominant bending, membrane, and transverse shear behaviour.",
          },
          {
            kind: "prose",
            text: "The structural response follows from the principle of minimum total potential energy, π = U − W. For a shell, strain energy integrates membrane strains, bending curvatures, and transverse shear strains over the mid-surface, with membrane, bending, and shear stiffness matrices assembled from Young's modulus, Poisson's ratio, and thickness. Bending stiffness scales with t³ while membrane stiffness scales linearly with t — which is precisely why thickness is such a powerful design variable, and why the response surfaces later come out so strongly nonlinear.",
          },
          {
            kind: "callout",
            text: "The practical payoff is that thickness becomes a parameter ANSYS can sweep directly, without any geometry rebuild between design points. Modeling the full 3D solid would have multiplied computational cost without improving global deformation or stress predictions.",
          },
        ],
      },
      {
        n: "03",
        title: "Baseline and mesh sensitivity",
        blocks: [
          {
            kind: "prose",
            text: "The initial design — 1 rib, 2 spars, 10 mm skin, 10 mm ribs, 10 mm spars, 4,768 kg — failed both constraints, deforming 0.8168 m against the 0.375 m limit and reaching 309 MPa against the 252 MPa limit. That baseline is the reference point for everything that follows: the optimization is not making a working design lighter, it is finding the lightest design that works at all.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/fea-initial-deformation.png",
                caption:
                  "Figure 2: Initial design total deformation — 0.8168 m, well over the limit.",
                contain: true,
              },
              {
                src: "/img/fea-initial-stress.jpg",
                caption:
                  "Figure 3: Initial design equivalent von Mises stress — 309 MPa against a 252 MPa allowable.",
                contain: true,
              },
            ],
          },
          {
            kind: "prose",
            text: "Before trusting any optimum, we ran a mesh sensitivity study to separate real stress concentrations from discretization singularities. This matters more than it sounds: a stress singularity at a re-entrant corner will keep rising as the mesh refines and never converge, and an optimizer chasing it will keep adding material to a location that is a modeling artifact.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/fea-mesh-coarse.png",
                caption: "Figure 4: Baseline mesh.",
                contain: true,
              },
              {
                src: "/img/fea-mesh-refined.png",
                caption: "Figure 5: Refined mesh used for the sensitivity comparison.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "04",
        title: "Parametric optimization",
        blocks: [
          {
            kind: "prose",
            text: "With geometric mass, maximum total deformation, and maximum equivalent stress set as output parameters, the single-parameter study swept skin thickness alone. The candidate point came back at 0.01885 m skin thickness for 8,533 kg — heavier than the baseline, which is exactly right, because the baseline was infeasible. The response charts confirm the expected behaviour: mass rises linearly with skin thickness while deformation and stress fall off sharply.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/fea-thickness-deformation.png",
                caption:
                  "Figure 6: Maximum deformation against skin thickness — the constraint that binds first.",
                contain: true,
              },
              {
                src: "/img/fea-thickness-stress.png",
                caption:
                  "Figure 7: Maximum equivalent stress against skin thickness.",
                contain: true,
              },
            ],
          },
          {
            kind: "figure",
            src: "/img/fea-thickness-mass.png",
            contain: true,
            caption:
              "Figure 8: Geometric mass rises linearly with skin thickness — the cost side of the trade.",
          },
          {
            kind: "prose",
            text: "Opening skin, rib, and spar thickness together brought mass down to 8,384.6 kg at 0.375 m deformation and 150 MPa stress — a better result, and the first indication that the design is deformation-controlled rather than stress-controlled.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/fea-3param-deformation.png",
                caption:
                  "Figure 9: Three-parameter optimum total deformation — right at the 0.375 m limit.",
                contain: true,
              },
              {
                src: "/img/fea-3param-stress.png",
                caption:
                  "Figure 10: Three-parameter optimum equivalent stress, 150 MPa — well inside the allowable.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "05",
        title: "Design exploration: rib and spar layout",
        blocks: [
          {
            kind: "prose",
            text: "Knowing the model was deformation-controlled, we bounded maximum deformation between 0.36 m and 0.37 m to sit just inside the 0.375 m limit, capped stress at 252 MPa, and minimized mass across ten evenly-spaced rib and spar configurations.",
          },
          {
            kind: "table",
            head: [
              "Variation",
              "Ribs",
              "Spars",
              "Skin (m)",
              "Mass (kg)",
              "Max def. (m)",
              "Max stress (MPa)",
            ],
            highlight: 9,
            rows: [
              ["Initial", "1", "2", "0.0100", "4,768", "0.8168", "309"],
              ["1-parameter", "1", "2", "0.0188", "8,533", "0.368", "148"],
              ["3-parameter", "1", "2", "0.0185", "8,385", "0.375", "150"],
              ["C", "1", "1", "0.01948", "8,586", "0.3747", "168"],
              ["D", "1", "3", "0.01635", "8,198", "0.3747", "161"],
              ["E", "2", "1", "0.01873", "8,329", "0.3282", "149"],
              ["F", "3", "1", "0.01885", "8,466", "0.3750", "170"],
              ["G", "2", "2", "0.01778", "8,121", "0.3749", "169"],
              ["H", "3", "2", "0.01845", "8,091", "0.3747", "192"],
              ["I", "2", "3", "0.01823", "8,006", "0.3749", "196"],
              ["J (recommended)", "3", "3", "0.01804", "7,967", "0.37497", "189"],
            ],
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/fea-designJ-deformation.png",
                caption:
                  "Figure 11: Design J total deformation — 0.37497 m, just inside the limit.",
                contain: true,
              },
              {
                src: "/img/fea-designJ-stress.png",
                caption:
                  "Figure 12: Design J equivalent stress — 189 MPa against a 252 MPa allowable.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        n: "06",
        title: "Conclusion",
        blocks: [
          {
            kind: "prose",
            text: "Design J — three ribs, three spars, 18.04 mm skin, 3.094 mm ribs, 3.897 mm spars — reaches 7,967 kg while staying inside both the 0.375 m deformation and 252 MPa stress limits. Across every study the same trend held: more ribs and spars let us reduce total deformation while thinning every member. Because the design is deformation-controlled, the optimum is the configuration with the most internal structure.",
          },
          {
            kind: "callout",
            text: "The next thing worth trying is rib geometry rather than rib count — cutouts where stress is not critical, and uneven rib and spar spacing rather than the uniform spacing every variation here assumed.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     10 — APOLLO CSM PROPULSION
     ================================================================ */
  {
    slug: "apollo-csm-propulsion",
    title: "Apollo CSM Propulsion Redesign Trade Study",
    shortTitle: "Apollo CSM Propulsion",
    subtitle:
      "From helium pressure-fed to turbopump: decoupling chamber pressure from tank pressure",
    context: "MAE 5540 Spacecraft Propulsion, Cornell University",
    role: "Team of five — I led the feed-system redesign, parametric analysis, and turbopump CAD",
    status: "Completed",
    featured: false,
    summary:
      "A redesign of the Apollo Service Propulsion System's feed architecture, showing that a turbopump meets the same 2,800 m/s mission Δv with roughly 25% less propellant.",
    cardImage: "/img/apollo-cad-side.jpg",
    cardImageContain: true,
    tech: [
      "Rocket Propulsion",
      "SolidWorks",
      "MATLAB",
      "Trajectory Simulation",
      "Nozzle Design",
    ],
    highlights: [
      "Showed a turbopump feed system supports a 5.5 MPa chamber while keeping tanks at low pressure, cutting required propellant from 9,044 kg to roughly 6,800 kg",
      "Traced the mechanism honestly: most of the gain is dry-mass reduction from lower tank pressure, not the ~6% specific impulse improvement",
      "Sized a matching ideal-expansion nozzle at an area ratio of about 62 and built the turbopump and propellant-routing CAD",
    ],
    stats: [
      { value: "−24.6%", label: "Required propellant mass at 5 MPa chamber pressure" },
      { value: "5.5 MPa", label: "Design chamber pressure, up from 0.69 MPa" },
      { value: "+6.1%", label: "Specific impulse gain — real, but not the main effect" },
      { value: "ε ≈ 62", label: "Nozzle area ratio for ideal expansion" },
    ],
    sections: [
      {
        n: "01",
        title: "The baseline and what it costs",
        blocks: [
          {
            kind: "prose",
            text: "The Apollo Command and Service Module's Service Propulsion System used the Aerojet AJ10 — a bipropellant engine burning N₂O₄ and Aerozine-50, rated at 20,500 lbf, responsible for lunar orbit insertion and departure. It was designed to be extremely reliable, and it achieved that reliability partly through a helium pressure-fed architecture.",
          },
          {
            kind: "prose",
            text: "Pressure-fed systems, though, push tank pressures upward to achieve acceptable chamber pressure, and tank pressure drives tank mass. The pressure budget is unforgiving: tank pressure has to support chamber pressure plus injector and line losses.",
          },
          {
            kind: "equation",
            lines: [
              "P_tank ≳ P_c + ΔP_inj + ΔP_lines",
              "",
              "t ≈ P_tank·r / (2σ_allow)",
              "m_tank ∝ P_tank·r³ / σ_allow",
            ],
          },
          {
            kind: "prose",
            text: "Tank mass grows with pressure and with size, and the helium system adds further dry mass through high-pressure bottles, regulators, and plumbing. Raising chamber pressure to gain performance therefore costs mass twice over in a pressure-fed architecture.",
          },
        ],
      },
      {
        n: "02",
        title: "The turbopump concept",
        blocks: [
          {
            kind: "prose",
            text: "A turbopump feed system decouples chamber pressure from tank pressure. Tanks can be kept at relatively low pressure — chosen for inlet conditioning and cavitation margin rather than for chamber pressure — while the pumps raise propellant pressure to what the injector and chamber require.",
          },
          {
            kind: "equation",
            lines: [
              "P_out ≈ P_c + ΔP_inj + ΔP_lines",
              "ΔP_pump ≈ P_out − P_tank",
              "H = ΔP_pump / (ρ·g₀)",
            ],
          },
          {
            kind: "callout",
            text: "A turbopump does not eliminate propellant management hardware. In low-g operation you still need propellant management devices to prevent gas ingestion at the pump inlet. What it reduces is the requirement for high tank pressure and the volume of high-pressure helium hardware that goes with it.",
          },
        ],
      },
      {
        n: "03",
        title: "Parametric results",
        blocks: [
          {
            kind: "prose",
            text: "For a fixed mission Δv, required propellant mass depends on both specific impulse and dry mass. Working through the rocket equation across candidate chamber pressures separates those two contributions.",
          },
          {
            kind: "equation",
            lines: [
              "Δv = g₀·I_sp·ln(m₀ / m_f)",
              "m_p = m_f · [ exp(Δv / (g₀·I_sp)) − 1 ]",
            ],
          },
          {
            kind: "table",
            head: ["Design", "P_c", "I_sp (s)", "%Δu_e", "m_f (kg)", "m_p (kg)", "%Δm_p"],
            highlight: 3,
            rows: [
              ["Baseline (pressure-fed)", "0.69 MPa", "314", "0.0%", "6,100", "9,044", "0.0%"],
              ["Turbopump + low tank pressure", "1 MPa", "320", "1.9%", "5,025", "7,239", "−19.9%"],
              ["Turbopump + low tank pressure", "3 MPa", "330", "5.1%", "5,025", "6,912", "−23.6%"],
              ["Turbopump + low tank pressure", "5 MPa", "333", "6.1%", "5,025", "6,819", "−24.6%"],
              ["Turbopump + low tank pressure", "6 MPa", "335", "6.7%", "5,025", "6,759", "−25.2%"],
            ],
          },
          {
            kind: "prose",
            text: "The result worth reading carefully is the gap between the two percentage columns. Raising chamber pressure by nearly an order of magnitude buys only a few percent in exhaust velocity — that is real but modest. The large propellant saving comes from the dry-mass reduction that low tank pressure enables, dropping final mass from 6,100 kg to 5,025 kg. Attributing the whole 25% to specific impulse would be the easy mistake, and it would be wrong.",
          },
          {
            kind: "prose",
            text: "We designed to 5.5 MPa chamber pressure, which sits at the knee of the curve: nearly all of the available propellant saving, without pushing pump and chamber requirements further for the last fraction of a percent. The matching nozzle for ideal expansion at that chamber pressure sizes to an area ratio of about 62.",
          },
        ],
      },
      {
        n: "04",
        title: "CAD and routing",
        blocks: [
          {
            kind: "prose",
            text: "The bipropellant system CAD was built jointly with a teammate: I did the turbopump inclusion and propellant-line routing, and my teammate handled tank resizing. The routing is where the architecture becomes concrete — the pump inlets, the discharge lines to the injector, and the preburner gas path that drives the turbine all have to physically fit within the Service Module envelope.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/apollo-cad-side.jpg",
                caption:
                  "Figure 1: Internal and external side views of the bipropellant system CAD.",
                contain: true,
              },
              {
                src: "/img/apollo-cad-top.jpg",
                caption: "Figure 2: Top view of the bipropellant system CAD.",
                contain: true,
              },
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================
     11 — VORTEX PANEL METHOD
     ================================================================ */
  {
    slug: "vortex-panel-method",
    title: "Vortex Panel Method Solver for Airfoil Aerodynamics",
    shortTitle: "Vortex Panel Method",
    subtitle:
      "Boundary-integral potential flow from raw airfoil coordinates, solved by Gauss elimination",
    context: "AEP 5380 Computational Engineering Physics, Cornell University",
    role: "Sole author",
    status: "Completed",
    featured: false,
    summary:
      "A from-scratch 2D vortex panel solver in Python, built to test whether public airfoil coordinate databases are directly compatible with a Kutta-enforced panel method. The answer turned out to be no, and why is the interesting part.",
    cardImage: "/img/vortex-velocity-contour.jpg",
    cardImageContain: true,
    tech: [
      "Python",
      "NumPy",
      "Gauss Elimination",
      "Potential Flow",
      "Boundary Integral",
    ],
    highlights: [
      "Built the influence matrix, Kutta closure, and Gauss elimination solve from first principles rather than calling a library solver",
      "Recovered qualitatively correct velocity and pressure contours for a NACA 0012 at positive angle of attack",
      "Diagnosed unrealistic lift magnitudes back to trailing-edge discretization in the source coordinate files, and specified four concrete fixes",
    ],
    stats: [
      { value: "NACA 0012", label: "Test geometry, swept from −5° to +10° angle of attack" },
      { value: "Γ → C_L", label: "Lift recovered via the Kutta–Joukowski theorem" },
      { value: "O(N²)", label: "Dense influence matrix, direct-solved rather than iterated" },
    ],
    sections: [
      {
        n: "01",
        title: "Why potential flow still earns its place",
        blocks: [
          {
            kind: "prose",
            text: "Under the assumptions of inviscid, incompressible, steady, irrotational flow, the governing equations collapse to Laplace's equation for a velocity potential. Solutions are then dictated entirely by boundary conditions, which makes airfoil aerodynamics a classic boundary value problem.",
          },
          {
            kind: "equation",
            lines: [
              "∇ · u = 0        (incompressible)",
              "∇ × u = 0        (irrotational)  ⟹  u = ∇φ",
              "∇²φ = 0          (Laplace)",
              "",
              "u · n̂ = 0        on the airfoil surface",
              "L′ = ρU∞Γ        (Kutta–Joukowski)",
            ],
          },
          {
            kind: "prose",
            text: "The appeal is computational: because the flow satisfies Laplace's equation everywhere except on the body surface, the problem reduces from a two-dimensional field solve to a one-dimensional boundary discretization. Panel methods resolve surface pressure and lift with orders of magnitude fewer degrees of freedom than a grid-based Euler or Navier–Stokes solver, which is why they still sit inside modern industrial design loops as fast aerodynamic predictors.",
          },
          {
            kind: "callout",
            text: "Viscosity is not entirely absent. The Kutta condition at a sharp trailing edge enforces finite velocity there and selects a unique circulation — smuggling the essential viscous physics into an otherwise inviscid framework. It is not derived from first principles, but it produces lift predictions that agree well with experiment for attached flows.",
          },
        ],
      },
      {
        n: "02",
        title: "Setting up the solve",
        blocks: [
          {
            kind: "prose",
            text: "The airfoil surface is discretized into N straight panels, each carrying an unknown constant vortex strength. Enforcing no-penetration at each panel control point requires computing the velocity every panel induces at every other control point, which assembles into a dense influence matrix. Because the induced velocity from each vortex element is analytic via Biot–Savart, the whole problem reduces to a finite linear system.",
          },
          {
            kind: "equation",
            lines: ["A·γ = b"],
          },
          {
            kind: "prose",
            text: "I solved it with Gauss elimination — normalize each diagonal, eliminate the rest of the column, continue to the identity — following the algorithm from Numerical Recipes and course lecture notes. It is robust and well suited to the relatively small dense systems a panel discretization produces.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/vortex-naca0012.jpg",
                caption:
                  "Figure 1a: The NACA 0012 geometry as discretized from the source coordinate file.",
                contain: true,
              },
              {
                src: "/img/vortex-velocity-field.jpg",
                caption:
                  "Figure 1b: Velocity field from the solver, plotted in a body-fixed frame. Residual circulation downstream is visible even with the Kutta condition applied.",
                contain: true,
              },
            ],
          },
          {
            kind: "prose",
            text: "One correction along the way is worth recording. My initial project outline called for Gauss–Seidel relaxation, on the assumption that the vortex strengths acted as boundary conditions for a field-based potential solve. That interpretation was wrong. In the classical vortex panel method the flow is represented entirely by discrete vortex elements on the surface, and the strengths are coefficients in a linear superposition of analytically known velocity fields — not boundary data for an elliptic solver. Iterative relaxation is not required at all. Gauss–Seidel stays relevant for potential flow problems solved on a spatial grid; the panel method bypasses the grid entirely.",
          },
        ],
      },
      {
        n: "03",
        title: "Results and what went wrong",
        blocks: [
          {
            kind: "prose",
            text: "Velocity magnitude and pressure contours for a NACA 0012 at positive angle of attack came out qualitatively correct — the acceleration over the upper surface and the pressure signature of a lifting airfoil are both clearly present. The lift magnitudes were not.",
          },
          {
            kind: "figures",
            items: [
              {
                src: "/img/vortex-velocity-contour.jpg",
                caption:
                  "Figure 2: Velocity magnitude contour, consistent with a NACA 0012 at positive angle of attack.",
                contain: true,
              },
              {
                src: "/img/vortex-pressure-contour.jpg",
                caption:
                  "Figure 3: Pressure contour. C_p is conventionally plotted negated, so this is consistent with lift generation at positive angle of attack.",
                contain: true,
              },
            ],
          },
          {
            kind: "table",
            head: ["Angle of attack", "Circulation Γ", "C_L (computed)"],
            rows: [
              ["−5.00°", "−86.93", "−34.77"],
              ["−2.00°", "−34.81", "−13.92"],
              ["0.00°", "0.00", "0.00"],
              ["2.00°", "34.81", "13.92"],
              ["5.00°", "86.93", "34.77"],
              ["8.00°", "138.82", "55.53"],
              ["10.00°", "173.20", "69.28"],
            ],
          },
          {
            kind: "prose",
            text: "Those C_L values are unphysically large, and the flow field showed non-physical recirculation downstream of the airfoil. Both point to the same cause: the circulation being solved for is not consistent with a clean Kutta-enforced trailing-edge flow.",
          },
          {
            kind: "prose",
            text: "The primary limitation is the trailing-edge formulation in the coordinate files themselves. Many public airfoil coordinate sets do not provide a single, perfectly shared trailing-edge point — the final upper-surface and lower-surface points may not coincide. Panel methods are acutely sensitive to this, because the Kutta condition is fundamentally a constraint at the trailing edge. Even with a preprocessing step that averages the endpoints into a shared point, the resulting last panels can become nearly collinear, extremely short, or poorly oriented, degrading the conditioning of the influence matrix and distorting tangential velocity near the trailing edge.",
          },
          {
            kind: "callout",
            text: "The broader lesson: enforcing only no-penetration is not sufficient to guarantee a unique, physically realistic lifting solution. A robust Kutta implementation has to be consistent with the panel geometry at the trailing edge, the singularity representation chosen, and the specific algebraic constraint used to close the system. Multiple Kutta-enforcement strategies exist and they are not numerically equivalent in the presence of imperfect discretizations.",
          },
        ],
      },
      {
        n: "04",
        title: "Four fixes, in order",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Use a tangential-velocity Kutta condition rather than a simple trailing-edge strength sum — enforce equal tangential velocity on upper and lower surfaces, or continuous pressure. This is physically aligned with finite velocity at a sharp trailing edge and behaves better than a relation between two panel strengths.",
              "Introduce a wake panel as an additional unknown, so the wake carries net circulation downstream in a controlled, physically interpretable way. This typically improves both conditioning and streamline realism.",
              "Switch to a linear-strength vortex sheet near the trailing edge, letting sheet strength vary along each panel and making the Kutta constraint cleaner to express.",
              "Improve the trailing-edge geometry before solving — enforce a true single node, re-sample with a controlled point distribution near the trailing edge, and remove near-duplicate points so the last panels are not degenerate.",
            ],
          },
          {
            kind: "prose",
            text: "The implementation demonstrates the full pipeline — panel setup, influence matrix, direct solve, post-processing, visualization. What the non-ideal results establish is that trailing-edge discretization and the specific Kutta implementation dominate the accuracy of a panel method, which is a more useful finding than a clean answer from a curated geometry would have been.",
          },
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i >= 0 && i < projects.length - 1 ? projects[i + 1] : null,
  };
}
