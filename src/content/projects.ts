import type { Project } from "./types";

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Cited-by Notification Service",
    "slug": "cited-by-notification-service",
    "summary": "Cited-by Notification is a feature based on iPress to help scholars stay updated when their works are cited by new publications.",
    "description": null,
    "coverImageUrl": null,
    "screenshots": [],
    "projectUrl": null,
    "githubUrl": null,
    "tags": [],
    "published": true,
    "featured": false,
    "sortOrder": 0,
    "blocks": [
      {
        "data": {
          "level": 1,
          "text": "Project Overview"
        },
        "id": "overviewHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "Cited-by Notification is a feature built on iPress to help scholars stay updated when their work is cited by new publications."
        },
        "id": "overviewText",
        "type": "text"
      },
      {
        "data": {
          "role": "Product Manager",
          "timeline": "2024 Q4 - 2025 Q1",
          "team": "1 Stakeholder, 1 SA, 1 Engineer, 1 Designer",
          "responsibilitiesTitle": "My Responsibilities",
          "responsibilities": [
            "Wrote the PRD and defined the user flow for notification triggers.",
            "Designed email templates and defined notification timing.",
            "Conducted QA verification before release and tracked initial usage data."
          ]
        },
        "id": "overviewMeta",
        "type": "overviewMeta"
      },
      {
        "data": {
          "level": 1,
          "text": "Impact"
        },
        "id": "impactHeading",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            {
              "metric": "Publishers Reached / Season",
              "value": "90"
            },
            {
              "metric": "Scholars Reached / Season",
              "value": "150"
            }
          ]
        },
        "id": "impactMetrics",
        "type": "metrics"
      },
      {
        "data": {
          "level": 1,
          "text": "Problem"
        },
        "id": "problemHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "In academic publishing, citations are a key indicator of a scholar's impact and contribution — they influence career development, funding opportunities, and academic reputation."
        },
        "id": "problemContextText",
        "type": "text"
      },
      {
        "data": {
          "text": "In Taiwan's academic field, authors could only track citations by manually checking academic databases — a process that was time-consuming and often delayed by months."
        },
        "id": "problemStatementText",
        "type": "text"
      },
      {
        "data": {
          "level": 1,
          "text": "Solution"
        },
        "id": "solutionHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "We designed an automated, quarterly citation notification service that aggregates new citation events and sends a summary email to authors and collaborating publishers, helping scholars stay informed about their academic impact."
        },
        "id": "solutionText",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Vision: An Interconnected Academic Ecosystem"
        },
        "id": "visionHeading",
        "type": "heading"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1779759987667-f1p5fjesmvi_d1ac0bfd.png"
        },
        "id": "visionImage",
        "type": "image"
      },
      {
        "data": {
          "text": "Mission: Break down data silos between iPress (submission system) and airiti DOI (registration service) to build an interconnected academic ecosystem. By connecting their data streams, both the original author and the journal team are instantly notified whenever a publication is cited — turning a passive, invisible signal into real-time engagement."
        },
        "id": "visionText",
        "type": "text"
      },
      {
        "data": {
          "level": 1,
          "text": "Approach"
        },
        "id": "approachHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 2,
          "text": "Bridging Two Distinct Products"
        },
        "id": "bridgingHeading",
        "type": "heading"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1779762235054-swr2k8ln5tc_213c1d60.png"
        },
        "id": "bridgingImage",
        "type": "image"
      },
      {
        "data": {
          "text": "To build the Cited-by Notification ecosystem, the primary challenge was integrating two products with completely different user bases and data structures within the parent company.\n\n- iPress: an all-in-one academic publishing management platform (focuses on workflow/submission).\n\n- airiti DOI: a persistent identifier system assigned to scholarly works (focuses on data/indexing).\n\nThis integration was not just a technical linkage, but a strategic move to unlock the synergy between our workflow tool (iPress) and our data asset (DOI), creating a closed-loop ecosystem."
        },
        "id": "bridgingText",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Data Pipeline & Operation Workflow"
        },
        "id": "pipelineHeading",
        "type": "heading"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1779763002889-zb9qxbnux2n_0d559b54.png"
        },
        "id": "pipelineImage",
        "type": "image"
      },
      {
        "data": {
          "text": "To make Cited-by Notification work, we designed a 3-step operational workflow that automates data retrieval, calculation, and delivery on a quarterly basis.\n\nStep 1: Data Retrieval\nThe system monitors and extracts new citation footprints from published works, then maps and matches these external DOI records back to our internal iPress article database.\n\nStep 2: Data Calculation\nInstead of sending raw, cluttered data, the system processes the database to compile and calculate the precise \"Citation Counts\" for each article during the quarter.\n\nStep 3: Segmented Delivery\nOnce the citation counts are calculated, the system automatically triggers custom citation emails based on the product tier:\n\n・Standard Service: dispatches comprehensive updates to Publishers to track journal performance.\n\n・Premium Service: extends the reach by sending personalized impact alerts directly to individual Authors (Scholars)."
        },
        "id": "pipelineText",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "User-Centric Email Design"
        },
        "id": "emailDesignHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Design Interface for Different Target Customers"
        },
        "id": "emailDesignSubheading",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            {
              "id": "publisherLetter",
              "type": "image",
              "url": "/assets/projects/1779765475564-ofpl0p4dqc_cee46203.png",
              "width": "half",
              "caption": "・Publisher Letter"
            },
            {
              "id": "scholarLetter",
              "type": "image",
              "url": "/assets/projects/1779765486080-2lfc7tissee_4e548ebd.png",
              "width": "half",
              "caption": "・Scholar Letter"
            }
          ]
        },
        "id": "emailDesignMediaGrid",
        "type": "mediaGrid"
      },
      {
        "data": {
          "columns": [
            {
              "heading": "The Publisher Letter (Left)",
              "content": "。Objective: To provide a macro-level overview for journal editors.\n\n。Key Design: Highlights the ”total growth volume“ at the top for quick reporting, followed by a consolidated list of which external papers cited this journal's articles this quarter. It includes direct DOI links to help editors track their journal's expanding impact."
            },
            {
              "heading": "The Scholar Letter (Right)",
              "content": "。Objective: To deliver a personalized, emotionally rewarding impact report for individual researchers.\n\n。Key Design: Uses a 2-column structure that directly maps \"Your Article\" ⭢ \"Who Cited You\". This clear cross-reference instantly shows the scholar their direct contribution to the academic field, paired with an easy-to-access customer support footer to build trust."
            }
          ]
        },
        "id": "emailDesignCols",
        "type": "columns"
      },
      {
        "data": {
          "level": 1,
          "text": "Results & Learnings"
        },
        "id": "resultsHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "In the long run, the Cited-by feature creates ongoing value for scholars, publishers, and the company:"
        },
        "id": "resultsIntroText",
        "type": "text"
      },
      {
        "data": {
          "headers": [
            "To Scholars",
            "To Publishers",
            "To the Company"
          ],
          "rows": [
            [
              "Cited-by increases scholars' awareness of their impact and their engagement with the academic environment.",
              "Many publishers want to track their credibility to attract more contributions — Cited-by gives them a timely way to see their impact.",
              "Cited-by Notification is a differentiated, hard-to-replicate service that leverages our DOI-based technology to set iPress apart from competing products."
            ]
          ]
        },
        "id": "resultsTable",
        "type": "table"
      },
      {
        "data": {
          "text": "Learnings: the hardest part wasn't the email templates — it was resolving DOI-to-article matching across two systems that were never designed to talk to each other. Solving that data problem first is what made the notification feature possible at all."
        },
        "id": "learningsText",
        "type": "text"
      }
    ]
  },
  {
    "id": 2,
    "title": "iPress Conference Platform",
    "slug": "ipress-conference-platform",
    "summary": "iPress is an academic editorial management platform that supports journals in handling manuscript submission, peer review, and publication workflows.",
    "description": null,
    "coverImageUrl": null,
    "screenshots": [],
    "projectUrl": null,
    "githubUrl": null,
    "tags": [
      "B2B2C Saas"
    ],
    "published": true,
    "featured": false,
    "sortOrder": 0,
    "blocks": [
      {
        "data": {
          "level": 1,
          "text": "Project Overview"
        },
        "id": "overviewHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "In 2025, my team developed a conference platform that extends iPress's journal platform to better serve conference organizers, while expanding content sources and revenue for the company."
        },
        "id": "overviewText",
        "type": "text"
      },
      {
        "data": {
          "level": 3,
          "text": "My Role: Product Manager"
        },
        "id": "roleHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Timeline: 2024 Q3 - 2026 Q1"
        },
        "id": "timelineHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Team: 2 Stakeholders, 2 SA, 1 Engineer, 1 Designer"
        },
        "id": "teamHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "My Responsibilities"
        },
        "id": "responsibilitiesHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "・Researched and analyzed the differences between journal and conference workflows.\n・Designed the system structure and user interface.\n・Prepared use cases and product requirement documents (PRDs).\n・Collaborated closely with a system analyst, engineer, and designer.\n・Developed the testing plan and wrote detailed test cases.\n・Planned pre-launch activities."
        },
        "id": "responsibilitiesText",
        "type": "text"
      },
      {
        "data": {},
        "id": "dividerAfterOverview",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Impact"
        },
        "id": "impactHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "iPress Conference Platform went live to production on March 25, 2026. Since launch, usage has grown from a zero-traffic baseline:"
        },
        "id": "impactIntroText",
        "type": "text"
      },
      {
        "data": {
          "items": [
            { "metric": "Active Users", "value": "5,246", "description": "Since launch, from a zero-traffic baseline (GA4)." },
            { "metric": "Views", "value": "70K+", "description": "Total pageviews since launch." },
            { "metric": "Interactions Tracked", "value": "340K+", "description": "GA4 event count — submissions, reviews, agenda browsing, and more." }
          ]
        },
        "id": "impactMetrics",
        "type": "metrics"
      },
      {
        "data": {},
        "id": "dividerAfterImpact",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Problem Statement: Why Build a New Conference Platform?"
        },
        "id": "problemHeading",
        "type": "heading"
      },
      {
        "data": {
          "columns": [
            {
              "heading": "Lack of an integrated platform",
              "content": "There is no integrated platform for managing conferences in Taiwan."
            },
            {
              "heading": "Fragmented workflows",
              "content": "Most people use email and Google Forms to review manuscripts and track submission and reviewing workflows, which is inconvenient for large-scale communication across schools, units, and personnel."
            }
          ]
        },
        "id": "problemCols1",
        "type": "columns"
      },
      {
        "data": {
          "columns": [
            {
              "heading": "Low efficiency & information gaps",
              "content": "Many conferences struggle with low efficiency and communication gaps, and manuscripts and reviewing records cannot be properly preserved."
            },
            {
              "heading": "Strategic alignment with the parent company",
              "content": "Since the parent company is a database company that values content collections, building a conference platform naturally aligns with the company's long-term goals."
            }
          ]
        },
        "id": "problemCols2",
        "type": "columns"
      },
      {
        "data": {
          "level": 1,
          "text": "Research & Ideation"
        },
        "id": "researchHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "To better understand the workflow of preparing a conference and define the product scope, we conducted the following research:"
        },
        "id": "researchText",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "metric": "Interviews",
              "value": "3",
              "description": "Interviewed professors to understand the basic workflows of a conference."
            },
            {
              "metric": "Competitive Analysis",
              "value": "3",
              "description": "Analyzed 3 conference platforms to summarize our strengths and the features to develop."
            },
            {
              "metric": "Conferences",
              "value": "30",
              "description": "Researched over 30 conference websites to identify current user pain points and narrow down the final reviewing workflow for the platform design."
            }
          ]
        },
        "id": "researchMetrics",
        "type": "metrics"
      },
      {
        "data": {
          "level": 1,
          "text": "Collaboration"
        },
        "id": "collabHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 2,
          "text": "Establish the Same Vision for the Product Team"
        },
        "id": "collabVisionHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "1. Illustrate with a Swimlane Diagram"
        },
        "id": "swimlaneHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "Since the user workflow is highly complex, I designed a swimlane diagram to streamline communication with the engineering team. The diagram details 4 distinct conference roles and the essential phases they navigate during conference preparation. Since the team already had a clear understanding of the journal reviewing process, I compared the two workflows directly on the diagram — marking in red the steps that could be removed, and in green the new steps introduced for conference reviewing."
        },
        "id": "swimlaneText",
        "type": "text"
      },
      {
        "data": {
          "caption": "Swimlane diagram comparing the journal review process with the new conference review process, across 4 roles.",
          "url": "/assets/projects/ipress-conference/swimlane.png"
        },
        "id": "swimlaneImage",
        "type": "image"
      },
      {
        "data": {
          "level": 3,
          "text": "2. Display with an Interactive Figma Prototype"
        },
        "id": "figmaHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "I built an interactive Figma prototype to explain my design alongside the swimlane diagram, allowing the engineering team to better understand how users operate within the system."
        },
        "id": "figmaText",
        "type": "text"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1780243651913-qes08z1hfo_d2274cd1.gif"
        },
        "id": "figmaGif",
        "type": "image"
      },
      {
        "data": {
          "text": "This interactive prototype presents the basic steps a user completes to finish a format check:"
        },
        "id": "figmaStepsIntro",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "title": "Locate the Manuscript",
              "description": "Find the target manuscript from the list."
            },
            {
              "title": "Open and Review",
              "description": "Open the manuscript and review its content."
            },
            {
              "title": "Click \"Pass\"",
              "description": "Mark the manuscript as passing if it meets the requirements."
            },
            {
              "title": "Confirm the Decision",
              "description": "Confirm the pass decision."
            },
            {
              "title": "Automatic Status Update",
              "description": "The manuscript status updates automatically, and the system notifies the next responsible party."
            }
          ]
        },
        "id": "figmaSteps",
        "type": "steps"
      },
      {
        "data": {
          "text": "The scope was intentionally kept minimal to allow engineers to focus on the core workflow rather than other design details."
        },
        "id": "figmaScopeNote",
        "type": "quote"
      },
      {
        "data": {},
        "id": "dividerAfterCollab",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Design & Decision — Improving Old and Introducing New"
        },
        "id": "designHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 2,
          "text": "Improving Old"
        },
        "id": "improvingOldHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Spotting the Existing Problems on the Old Interface"
        },
        "id": "oldProblemsHeading",
        "type": "heading"
      },
      {
        "data": {
          "caption": "The old iPress journal editor interface.",
          "url": "/assets/projects/ipress-conference/old-interface.png"
        },
        "id": "oldInterfaceImage",
        "type": "image"
      },
      {
        "data": {
          "text": "The old iPress journal system had long suffered from the following problems:"
        },
        "id": "oldProblemsText",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "title": "Unclear Navigation",
              "description": "Users struggle to know where they are and how to move between sections."
            },
            {
              "title": "Poor Visibility of System Status",
              "description": "Users often cannot tell which page or unit they are viewing, causing confusion."
            },
            {
              "title": "Limited Feature Discoverability",
              "description": "Users often have difficulty finding key features."
            }
          ]
        },
        "id": "oldProblemsList",
        "type": "list"
      },
      {
        "data": {
          "level": 3,
          "text": "Improvement 1: Navigation & System Status Visibility"
        },
        "id": "improvement1Heading",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            {
              "id": "nav-before",
              "type": "image",
              "url": "/assets/projects/ipress-conference/nav-before.png",
              "width": "half",
              "caption": "Before"
            },
            {
              "id": "nav-after",
              "type": "image",
              "url": "/assets/projects/ipress-conference/nav-after.png",
              "width": "half",
              "caption": "After"
            }
          ]
        },
        "id": "improvement1MediaGrid",
        "type": "mediaGrid"
      },
      {
        "data": {
          "text": "In the new design, I made two adjustments:"
        },
        "id": "improvement1Text",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "title": "① Add a Conference Title Banner:",
              "description": "Users may belong to multiple editorial teams and review for several conferences. The banner clarifies which unit they are currently reviewing, minimizing mistakes."
            },
            {
              "title": "② Move the Status List into a Side Menu:",
              "description": "This redesign streamlines navigation and reduces the need for users to switch back and forth between the process page and the manuscript page. In the original design, users often lost their orientation on the manuscript page because they couldn't quickly identify the manuscript they needed to review."
            }
          ]
        },
        "id": "improvement1List",
        "type": "list"
      },
      {
        "data": {
          "level": 3,
          "text": "Improvement 2: Feature Discoverability"
        },
        "id": "improvement2Heading",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            {
              "id": "discover-before",
              "type": "image",
              "url": "/assets/projects/ipress-conference/discover-before.png",
              "width": "half",
              "caption": "Before"
            },
            {
              "id": "discover-after",
              "type": "image",
              "url": "/assets/projects/ipress-conference/discover-after.png",
              "width": "half",
              "caption": "After"
            }
          ]
        },
        "id": "improvement2MediaGrid",
        "type": "mediaGrid"
      },
      {
        "data": {
          "text": "We interviewed one of our editors and learned that the \"invite external reviewer\" button was buried too deep in the original platform. As the screenshot shows, users had to first type a query into the search bar before that button appeared, below the results — which left this valuable feature undiscovered and unused for a long time."
        },
        "id": "improvement2TextBefore",
        "type": "text"
      },
      {
        "data": {
          "text": "I reorganized the invite-reviewer function into two tabs — internal (default) and external — so users can immediately see an alternative when the default option doesn't meet their needs. This redesign was implemented in the iPress journal system in early 2025."
        },
        "id": "improvement2TextAfter",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "metric": "External Reviewers",
              "value": "+10%",
              "description": "Increase compared to the previous year, after the two-tab redesign shipped in early 2025."
            }
          ]
        },
        "id": "improvement2Metrics",
        "type": "metrics"
      },
      {
        "data": {},
        "id": "dividerBeforeNew",
        "type": "divider"
      },
      {
        "data": {
          "level": 2,
          "text": "Introducing New"
        },
        "id": "introducingNewHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "I also designed and shipped a new Agenda Module — a builder that replaces manual Word/PowerPoint conference agendas. It grew into a complete project of its own, so I gave it its own case study."
        },
        "id": "agendaMentionText",
        "type": "text"
      },
      {
        "data": {
          "title": "iPress Agenda Module",
          "description": "Empathize → Ideate → Prototype → Test → Iterate",
          "href": "/projects/ipress-agenda-module",
          "ctaLabel": "View case study"
        },
        "id": "agendaMentionLink",
        "type": "link"
      }
    ]
  },
  {
    "id": 4,
    "title": "iPress Agenda Module",
    "slug": "ipress-agenda-module",
    "summary": "A conference-agenda builder for iPress Conference Platform — replacing manual Word/PowerPoint agendas with a structured, exportable tool.",
    "description": null,
    "coverImageUrl": "/assets/projects/ipress-conference/agenda-overview.png",
    "screenshots": [],
    "projectUrl": null,
    "githubUrl": null,
    "tags": [
      "B2B2C Saas"
    ],
    "published": true,
    "featured": false,
    "sortOrder": 0,
    "blocks": [
      {
        "data": {
          "level": 1,
          "text": "Project Overview"
        },
        "id": "overviewHeading",
        "type": "heading"
      },
      {
        "data": {
          "title": "Part of: iPress Conference Platform",
          "description": "This feature shipped as part of the iPress Conference Platform rebuild.",
          "href": "/projects/ipress-conference-platform",
          "ctaLabel": "View platform case study"
        },
        "id": "parentProjectLink",
        "type": "link"
      },
      {
        "data": {
          "text": "Agenda Module is a conference-agenda builder I designed and shipped for iPress Conference Platform. It has a complete design process of its own — empathize, ideate, prototype, test, and iterate — so it gets its own case study here."
        },
        "id": "overviewText",
        "type": "text"
      },
      {
        "data": {
          "level": 3,
          "text": "My Role: Product Manager"
        },
        "id": "roleHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Team: 2 Stakeholders, 2 SA, 1 Engineer, 1 Designer"
        },
        "id": "teamHeading",
        "type": "heading"
      },
      {
        "data": {},
        "id": "dividerAfterOverview",
        "type": "divider"
      },
      {
        "data": {
          "text": "Conferences build their agendas by hand today, usually in Word or PowerPoint — slow to produce, and hard for attendees to parse. I designed and shipped an Agenda Module for iPress Conference Platform, running the full process end to end: empathize, define, ideate, prototype with vibe coding, test, and iterate."
        },
        "id": "agendaIntroText",
        "type": "text"
      },
      {
        "data": {
          "caption": "Agenda Module overview",
          "url": "/assets/projects/ipress-conference/agenda-overview.png"
        },
        "id": "agendaOverviewImage",
        "type": "image"
      },
      {
        "data": {
          "level": 3,
          "text": "1. Empathize the Pain Points and Define the Value of the Agenda Module"
        },
        "id": "agendaEmpathizeHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "During my research, I found that an agenda module would be a valuable feature to develop, because the agendas most conferences create today are:"
        },
        "id": "agendaEmpathizeText",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "title": "Time-consuming:",
              "description": "Most conferences create their agendas manually in Word or PowerPoint, which is time-consuming."
            },
            {
              "title": "Confusing:",
              "description": "Agendas created manually are often difficult for participants to understand."
            }
          ]
        },
        "id": "agendaEmpathizeList",
        "type": "list"
      },
      {
        "data": {
          "level": 3,
          "text": "2. Ideate the Structure of Conference Agendas"
        },
        "id": "agendaIdeateHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "Upon studying 10 conference agendas, I discovered 3 recurring types of activities:"
        },
        "id": "agendaActivityTypesText",
        "type": "text"
      },
      {
        "data": {
          "items": [
            "Keynote Speech",
            "Presentation",
            "General Activities (openings, closings, meal gatherings)"
          ]
        },
        "id": "agendaActivityTypesBadges",
        "type": "badges"
      },
      {
        "data": {
          "text": "Additionally, 6 items are typically announced for each session:"
        },
        "id": "agendaSessionFieldsText",
        "type": "text"
      },
      {
        "data": {
          "items": [
            "Session Name",
            "Session Time",
            "Location",
            "Presenter / Speaker",
            "Presentation Topic",
            "Host"
          ]
        },
        "id": "agendaSessionFieldsBadges",
        "type": "badges"
      },
      {
        "data": {
          "level": 3,
          "text": "3. Vibe-Code the Agenda Prototypes"
        },
        "id": "agendaVibeCodingHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "Based on the previous summary, I used Claude.ai with prompts to generate an agenda-setting page and a front-page prototype, allowing the team to quickly visualize the interface."
        },
        "id": "agendaVibeCodingText",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "id": "agenda-front",
              "type": "image",
              "url": "/assets/projects/ipress-conference/agenda-front.png",
              "width": "half",
              "caption": "Front Page of the Agenda Module"
            },
            {
              "id": "agenda-setting",
              "type": "image",
              "url": "/assets/projects/ipress-conference/agenda-setting.png",
              "width": "half",
              "caption": "Setting Page of the Agenda Module"
            }
          ]
        },
        "id": "agendaVibeCodingMediaGrid",
        "type": "mediaGrid"
      },
      {
        "data": {
          "level": 3,
          "text": "4. Test the Prototype"
        },
        "id": "agendaTestHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "I recruited 3 participants within the company to test the prototypes and identified two issues:"
        },
        "id": "agendaTestText",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "title": "① Confusing placeholders:",
              "description": "The guidance inside the form fields was unclear, making it difficult for users to complete the form."
            },
            {
              "title": "② Overlapping sessions could not be presented:",
              "description": "Conferences usually arrange overlapping sessions — different sessions happening at the same time in different rooms — but the first version didn't account for this."
            }
          ]
        },
        "id": "agendaTestList",
        "type": "list"
      },
      {
        "data": {
          "items": [
            {
              "id": "agenda-placeholder-problem",
              "type": "image",
              "url": "/assets/projects/ipress-conference/agenda-placeholder-problem.png",
              "width": "half",
              "caption": "Issue ①: confusing placeholders"
            },
            {
              "id": "agenda-overlapping",
              "type": "image",
              "url": "/assets/projects/ipress-conference/agenda-overlapping.png",
              "width": "half",
              "caption": "Issue ②: overlapping sessions not supported"
            }
          ]
        },
        "id": "agendaTestMediaGrid",
        "type": "mediaGrid"
      },
      {
        "data": {
          "level": 3,
          "text": "5. Iterate with User Feedback"
        },
        "id": "agendaIterateHeading",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            {
              "title": "Offer clearer instructions:",
              "description": "Added examples inside the placeholders, which helped clarify how to complete each field."
            },
            {
              "title": "Adjust the time hierarchy:",
              "description": "Grouped sessions under higher-level time blocks instead of displaying each one individually."
            }
          ]
        },
        "id": "agendaIterateList",
        "type": "list"
      },
      {
        "data": {
          "items": [
            {
              "id": "agenda-clarify-placeholder",
              "type": "image",
              "url": "/assets/projects/ipress-conference/agenda-clarify-placeholder.png",
              "width": "half",
              "caption": "Clearer placeholder examples"
            },
            {
              "id": "agenda-adjust-time",
              "type": "image",
              "url": "/assets/projects/ipress-conference/agenda-adjust-time.png",
              "width": "half",
              "caption": "Adjusted time hierarchy"
            }
          ]
        },
        "id": "agendaIterateMediaGrid",
        "type": "mediaGrid"
      }
    ]
  },
  {
    "id": 3,
    "title": "YoutubetoVocab",
    "slug": "youtubetovocab",
    "summary": "An innovative learning app which helps learners build flashcards in a very efficient way.",
    "description": null,
    "coverImageUrl": "/assets/projects/1779192029972-kq5wvkam7a_40b8ba49.jpg",
    "screenshots": [],
    "projectUrl": null,
    "githubUrl": null,
    "tags": [
      "Vibe coding",
      "Education",
      "Language learning"
    ],
    "published": true,
    "featured": false,
    "sortOrder": 0,
    "blocks": [
      {
        "data": {
          "level": 1,
          "text": "Project Overview"
        },
        "id": "6aJw0tCP",
        "type": "heading"
      },
      {
        "data": {
          "text": "Many English learners watch YouTube videos for both entertainment and authentic language acquisition. However, the traditional way of learning vocabulary from videos requires users to constantly pause, look up words, and manually note them down, which greatly disrupting the viewing experience. To solve this friction, I utilized Google AI Studio and vibe coding to build YTtoVocab. This app allows users to simply paste a YouTube link and instantly transform the video into structured vocabulary flashcards."
        },
        "id": "-5wbUjs9",
        "type": "text"
      },
      {
        "data": {
          "items": ["92-95% Time Saved", "270+ Likes", "240+ Reposts"]
        },
        "id": "impactBadges",
        "type": "badges"
      },
      {
        "data": {
          "level": 2,
          "text": "My Role: Solo Product Creator"
        },
        "id": "LOjWvOo5",
        "type": "heading"
      },
      {
        "data": {
          "level": 2,
          "text": "Timeline: 3 weeks"
        },
        "id": "uQfxFoBP",
        "type": "heading"
      },
      {
        "data": {
          "text": "Weeks 1-2: Product Discovery & Rapid Prototyping (MVP Delivery via Vibe Coding)\n\nWeeks 3-4: Technical Pivot (Resolved API pricing & cost-structure challenges)"
        },
        "id": "kHj7nj5s",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Tools & Tech"
        },
        "id": "2TqnHJ3C",
        "type": "heading"
      },
      {
        "data": {
          "text": "Google AI Studio, Vercel, Github, Supadata API, OpenAI API"
        },
        "id": "F0pevbTQ",
        "type": "text"
      },
      {
        "data": {},
        "id": "dividerBeforeProblem",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Problem Statement"
        },
        "id": "MUBe8QC7",
        "type": "heading"
      },
      {
        "data": {
          "text": "People who watched Youtube videos to learn English are used to spend so much time in building flashcards."
        },
        "id": "lP5PWs1A",
        "type": "text"
      },
      {
        "data": {
          "columns": [
            {
              "content": "After watching a 6-minute English video, learners need to spend 1-2 hours manually organizing vocabulary into Quizlet or similar flashcard platforms.\n",
              "heading": "Time-to-Effort Imbalance"
            },
            {
              "content": "The tedious organization process consumes significant energy, causing learners to lose motivation during the organization phase itself.\n",
              "heading": "Loss of Learning Motivation"
            }
          ]
        },
        "id": "4IZQrEeq",
        "type": "columns"
      },
      {
        "data": {
          "columns": [
            {
              "content": "Manual transcription, vocabulary lookup, and categorization are repetitive and error-prone.\n",
              "heading": "Low Efficiency"
            },
            {
              "content": "The lengthy organization time makes it difficult for learners to establish consistent review habits.\n",
              "heading": "Unable to Maintain Continuous Review"
            }
          ]
        },
        "id": "PeKejKOZ",
        "type": "columns"
      },
      {
        "data": {
          "level": 2,
          "text": "Mission"
        },
        "id": "QZa-WOrV",
        "type": "heading"
      },
      {
        "data": {
          "text": "My goal is to reduce the time and effort needed to build English flashcards, making learning English on YouTube a more enjoyable experience."
        },
        "id": "hftCbFJJ",
        "type": "text"
      },
      {
        "data": {},
        "id": "bvJdL9Uh",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Target Customer"
        },
        "id": "TgmqheCm",
        "type": "heading"
      },
      {
        "data": {
          "level": 2,
          "text": "Persona"
        },
        "id": "NVV03Kv3",
        "type": "heading"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1779437928497-g0slvi7ccxk_c3911fbd.png"
        },
        "id": "y429N3em",
        "type": "image"
      },
      {
        "data": {},
        "id": "VM-FC98X",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Competitive Analysis"
        },
        "id": "8mIuioch",
        "type": "heading"
      },
      {
        "data": {
          "text": "I evaluated YTtoVocab against 5 existing solutions in the market: YouTube, Quizlet, Anki, VoiceTube, and traditional manual flashcards. Here is a brief introductory of each product's strengths and limitations:"
        },
        "id": "4JY2p2_0",
        "type": "text"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1779271282108-fpxzjj6yfpk_b42e3d03.png"
        },
        "id": "7El4o72Q",
        "type": "image"
      },
      {
        "data": {
          "text": "These products can be compared by two main metrics: Creation Efficiency and Real-world Content Integration. Traditional word card is the most time-consuming item and less connection to real-world content. Anki and Quizlet are digital word card apps, but they still cost people a great amount of time to create a set of word card, because both products rely human key-in the vocabulary. Voicetube is a platform that selects insightful language videos for learners to learn English through videos. It also includes flashcard feature for users to review vocabulary they saved from their videos. The generation of flashcards is fast as long as the user click \"save\" during their watching videos; however, the learning contents (videos) need to be based on the platform selection, but not choosing from their own interest. Finally, YTtoVocab is a product that generate flashcards within a short period of time and the contents can be decided by the users, which outweighs the other 4 products."
        },
        "id": "compAnalysisExplain",
        "type": "text"
      },
      {
        "data": {
          "text": "To dive deeper into each product, 5 more details can be compared through their features: Manual Card Editing, Gamified Review Features, Forgetting Curve Mgmt, User Experience (UX), and AI Automation Level."
        },
        "id": "compAnalysisTableIntro",
        "type": "text"
      },
      {
        "data": {
          "headers": ["Evaluation Criteria", "Quizlet", "Anki", "VoiceTube", "Traditional Word Card", "YTtoVocab"],
          "rows": [
            [
              "Cards Creation Efficiency",
              { "label": "Medium", "description": "Text input & basic AI text-generation, but users still need to create cards manually." },
              { "label": "Low (High Friction)", "description": "Requires manual field setup, finding audio, and examples. Steep learning curve." },
              { "label": "High", "description": "Easy to collect words from in-app videos into flashcards." },
              { "label": "Very Low", "description": "100% manual handwriting/cutting. No audio or pronunciation features." },
              { "label": "Very High (Frictionless)", "description": "Enter any YouTube URL; AI auto-generates everything instantly." }
            ],
            [
              "Contextual Connection",
              { "label": "Low", "description": "Cards usually contain pure text definitions and simple sentences without video context." },
              { "label": "Low", "description": "Lacks video context unless users spend time manually embedding multimedia." },
              { "label": "Very High", "description": "Fully integrated with YouTube videos to see real-world usage. Only supports in-app curated videos." },
              { "label": "None", "description": "Text-only, completely detached from real-world language context." },
              { "label": "Very High", "description": "Captures full video context, audio, and visual cues from any chosen YouTube video." }
            ],
            [
              "Manual Card Editing",
              { "label": "Supported" },
              { "label": "Supported" },
              { "label": "Not Supported", "description": "Card content is platform-generated and uneditable after collection." },
              { "label": "Not Supported" },
              { "label": "Supported", "description": "AI creates the base cards, then users can freely edit or add new words." }
            ],
            [
              "Gamified Review Features",
              { "label": "High", "description": "Offers matching games, starred reviews, and multiple quiz modes." },
              { "label": "None", "description": "Strict, text-heavy interface with zero gamified elements." },
              { "label": "Medium", "description": "Features speaking challenges and basic quizzes, but not flashcard-centric." },
              { "label": "None", "description": "Relies 100% on pure flip and review cards." },
              { "label": "Low", "description": "Focuses strictly on efficient, frictionless flashcard review workflows." }
            ],
            [
              "Forgetting Curve Mgmt",
              { "label": "Low", "description": "Has basic review reminders, but lacks an advanced Spaced Repetition engine." },
              { "label": "Ultimate", "description": "Features the most powerful, open-source Spaced Repetition algorithm." },
              { "label": "None" },
              { "label": "None" },
              { "label": "Phase 2 (In Roadmap)" }
            ],
            [
              "User Experience (UX)",
              { "label": "High", "description": "Modern interface with seamless cross-platform sync and a low learning curve." },
              { "label": "Low", "description": "Outdated interface that feels like software from the last decade; unfriendly to beginners." },
              { "label": "High", "description": "Smooth video-watching and word-collecting flow. Beautifully designed app." },
              { "label": "Low", "description": "Bulky to carry, easy to lose, and highly inconvenient to look up audio." },
              { "label": "High", "description": "Minimalist, modern, and user-friendly product experience designed." }
            ],
            [
              "AI Automation Level",
              { "label": "Partial", "description": "Text conversion (Magic Notes) and text-based AI tutoring (Q-Chat)." },
              { "label": "Via Plugins", "description": "No official AI core; relies on power users installing third-party AI add-ons." },
              { "label": "High", "description": "Features AI Speaking Analysis and video summaries (SmartNote)." },
              { "label": "None" },
              { "label": "Full Integration", "description": "First one that integrates AI extracting external video sourcing and card generation." }
            ]
          ]
        },
        "id": "compAnalysisTable",
        "type": "table"
      },
      {
        "data": {},
        "id": "-v0luWCf",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Product Demo"
        },
        "id": "4FJQCLPJ",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            {
              "id": "zmsHYPZU",
              "type": "image",
              "url": "/assets/projects/1779358623869-pbunhf7dnbo_22393719.gif",
              "width": "third"
            }
          ]
        },
        "id": "mLMRlm5d",
        "type": "mediaGrid"
      },
      {
        "data": {
          "level": 2,
          "text": "Usage Workflow"
        },
        "id": "usageWorkflowHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "The operation of this app is very simple, the user only has to follow 3 steps:"
        },
        "id": "usageWorkflowIntro",
        "type": "text"
      },
      {
        "data": {
          "items": [
            { "title": "Paste YouTube Link", "description": "Enter or paste a YouTube video link on the homepage." },
            { "title": "Click Convert Button", "description": "Select the \"Convert to Flashcards\" function." },
            { "title": "Wait for Auto Processing", "description": "Within 20-30 seconds, the AI automatically extracts CEFR B2+ vocabulary and generates flashcards." }
          ]
        },
        "id": "usageWorkflowSteps",
        "type": "steps"
      },
      {
        "data": {
          "level": 2,
          "text": "Other Features"
        },
        "id": "otherFeaturesHeading",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            { "title": "Flippable Flashcards:", "description": "Front displays English word, back includes Chinese translation, part of speech, and example sentences." },
            { "title": "Swipe to Learn:", "description": "Swipe right to mark \"learned\", swipe left to continue studying, matching mobile device habits." },
            { "title": "Manual Add & Edit:", "description": "Users can manually add missed words or modify AI-generated content in the word list." }
          ]
        },
        "id": "otherFeaturesList",
        "type": "list"
      },
      {
        "data": {},
        "id": "dividerBeforeGTM",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Go-to-Market Strategy"
        },
        "id": "gtmHeading",
        "type": "heading"
      },
      {
        "data": {
          "level": 2,
          "text": "Distribution Channels"
        },
        "id": "gtmDistHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "Distributed primarily as a PWA (Progressive Web App), with an installation guide created for users.\n\nGiven the low-cost build approach, the initial release focused on PWA distribution rather than the App Store, avoiding platform fees."
        },
        "id": "gtmDistText",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Monetization Model"
        },
        "id": "gtmMonHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "My original intent was to help English learners access convenient learning resources. Since I didn't want a paywall to block users from the product's core functionality, the earliest version's core features were made completely free for learners."
        },
        "id": "gtmMonText1",
        "type": "text"
      },
      {
        "data": {
          "text": "To keep the product free for users without increasing development costs, I made the following adjustments:"
        },
        "id": "gtmMonText2",
        "type": "text"
      },
      {
        "data": {
          "items": [
            { "title": "Switched AI providers:", "description": "Replaced the AI model originally used for vocabulary conversion, Gemini 4.5, with Supadata AI and the OpenAI API, since both offer more generous free token quotas, significantly reducing token costs." },
            { "title": "Added usage limits:", "description": "Limited each user to 3 flashcard generations per week, preventing wasted tokens from low-value or redundant generations without meaningfully affecting learning motivation." }
          ]
        },
        "id": "gtmMonList",
        "type": "list"
      },
      {
        "data": {
          "level": 2,
          "text": "Product Roadmap"
        },
        "id": "gtmRoadmapHeading",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            { "title": "Phase 1 — Launch and Social Media Marketing", "description": "Built an Instagram account to promote the product and publish English-learning content." },
            { "title": "Phase 2 — Enhance the Video Experience", "description": "Add instant video replay and contextual video playback features to deepen the immersive learning experience." },
            { "title": "Phase 3 — Integrate SRS Algorithms", "description": "Introduce spaced repetition systems and forgetting curve algorithms to directly compete in Anki's core market." },
            { "title": "Phase 4 — Diverse Review Modes", "description": "Develop multiple review methods to build a complete, personalized language-learning ecosystem." }
          ]
        },
        "id": "gtmRoadmapSteps",
        "type": "steps"
      },
      {
        "data": {},
        "id": "dividerBeforeImpact",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Impact & Results"
        },
        "id": "impactResultsHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "With YTtoVocab, the original 1 hour building flashcards hour, can be reduced to 5 mins."
        },
        "id": "impactTimeText",
        "type": "text"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/ytv-time-comparison.png"
        },
        "id": "impactTimeChart",
        "type": "image"
      },
      {
        "data": {
          "text": "Threads Community Response: After I posted the demo video on threads, I received about 280 likes and 240 reposts."
        },
        "id": "impactThreadsText",
        "type": "text"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/ytv-threads-response.png"
        },
        "id": "impactThreadsImage",
        "type": "image"
      },
      {
        "data": {
          "text": "Family and friends feedbacks: Those who had tried this app gave me the following feedbacks:"
        },
        "id": "impactFeedbackIntro",
        "type": "text"
      },
      {
        "data": {
          "text": "The UI is so clean and comfortable to use!"
        },
        "id": "feedbackQuote1",
        "type": "quote"
      },
      {
        "data": {
          "text": "The auto-generated flashcards are so convenient!"
        },
        "id": "feedbackQuote2",
        "type": "quote"
      },
      {
        "data": {
          "text": "The labor and low-efficiency are true painpoints from hand-made flashcards. The idea of this app is great!"
        },
        "id": "feedbackQuote3",
        "type": "quote"
      },
      {
        "data": {},
        "id": "dividerBeforeReflection",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Reflection"
        },
        "id": "reflectionHeading",
        "type": "heading"
      },
      {
        "data": {
          "text": "Through this side project, I not only experienced the end-to-end process of building a product from 0 to 1, but also developed a deeper understanding of AI-assisted product development. I learned how to leverage different AI tools based on their strengths and limitations, how to use vibe coding to turn ideas into functional digital products, and where human judgment remains essential throughout the product development process. For example:"
        },
        "id": "reflectionIntro",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "How to Realize Your Own Ideas / Solve Problems in Your Own Life"
        },
        "id": "reflectionH1",
        "type": "heading"
      },
      {
        "data": {
          "text": "To create a product, we can start from something in daily life that has been bothering us, think about whether there's a recurring pattern to it, and talk to AI about how to solve it digitally."
        },
        "id": "reflectionT1",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Understanding Different AIs' Strengths and Weaknesses"
        },
        "id": "reflectionH2",
        "type": "heading"
      },
      {
        "data": {
          "text": "During the build process, I found that conversational AI tools like Gemini tend to get stuck going in circles on a single problem, unable to resolve it in one go. After switching to Claude Code, I realized that only by letting the AI read my entire project's codebase could it accurately diagnose my issue, without fixing A and breaking B."
        },
        "id": "reflectionT2",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Understanding AI's Limits: Where It Can't Replace People"
        },
        "id": "reflectionH3",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            { "title": "Ideas & Decisions:", "description": "Still need a customer, a PM." },
            { "title": "Product Aesthetics:", "description": "Still need a designer." },
            { "title": "Operations & Maintenance:", "description": "Still need engineers and customer support." },
            { "title": "Sales:", "description": "Still need marketing and business development." }
          ]
        },
        "id": "reflectionList3",
        "type": "list"
      },
      {
        "data": {
          "level": 2,
          "text": "Data Persistence"
        },
        "id": "reflectionH4",
        "type": "heading"
      },
      {
        "data": {
          "text": "A screen an AI writes in 2 minutes is usually just a static page: the user can click the buttons on it, but can't share it with others, and it can't save any data. If the user refreshes the page, everything disappears. From there, I started to realize that behind every webpage we see, there's a whole database responsible for recording what users do."
        },
        "id": "reflectionT4",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Security Awareness"
        },
        "id": "reflectionH5",
        "type": "heading"
      },
      {
        "data": {
          "text": "Once my tool was about 80% done, people started asking: is your tool actually secure? Does it handle payments? Does the login flow expose users' sensitive information? I discovered that most self-built AI tools aren't secure enough, which sharpened my sensitivity to security issues going forward."
        },
        "id": "reflectionT5",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Thinking About Monetization and Go-to-Market"
        },
        "id": "reflectionH6",
        "type": "heading"
      },
      {
        "data": {
          "text": "If I eventually want my product to be profitable, I need to start thinking about: which platform to publish through — PWA or App Store? How to get exposure for the work? Whether it should be free and ad-supported, subscription-based, or a one-time purchase? How to operate and create value going forward, and what features could still be added?"
        },
        "id": "reflectionT6",
        "type": "text"
      }
    ]
  }
];
