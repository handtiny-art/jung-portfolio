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
        "id": "oFHEbzrP",
        "type": "heading"
      },
      {
        "data": {
          "text": "Cited-by Notification is a feature based on iPress to help scholars stay updated when their works are cited by new publications."
        },
        "id": "2DWby4z-",
        "type": "text"
      },
      {
        "data": {
          "level": 3,
          "text": "My Role: Product Manager"
        },
        "id": "FGRyooWG",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Timeline: 2024 Q4 - 2025 Q1"
        },
        "id": "UhD_rq8k",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Team: 1 Stakeholder, 1 SA, 1 engineers, 1 designer"
        },
        "id": "PvQ9eaaZ",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "My Responsibilities"
        },
        "id": "MG0BDcv8",
        "type": "heading"
      },
      {
        "data": {
          "text": "・Wrote PRD and defined user flow for notification triggers.\n・Designed email templates and defined notification timing.\n・Conducted QA verification before release and tracked initial usage data."
        },
        "id": "KbdSeKlA",
        "type": "text"
      },
      {
        "data": {
          "level": 1,
          "text": "Impact"
        },
        "id": "f2UosyuV",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            {
              "metric": "publishes reached / per season",
              "value": "90"
            },
            {
              "metric": "scholars reached / per season",
              "value": "150"
            }
          ]
        },
        "id": "ujMjePaQ",
        "type": "metrics"
      },
      {
        "data": {
          "level": 1,
          "text": "What is Cited-by and Why Does It Matters in Academic Field?"
        },
        "id": "K8DkX2ji",
        "type": "heading"
      },
      {
        "data": {
          "text": "In academic publishing, citations are a key indicator of a scholar’s impact and contribution. They influence career development, funding opportunities, and academic reputation."
        },
        "id": "nx0_EfuH",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Problem Statement"
        },
        "id": "Bq3jX5yz",
        "type": "heading"
      },
      {
        "data": {
          "text": "Before in Taiwan academic field, authors could only track their citations by manually checking academic databases This manual process was time-consuming and often delayed by months."
        },
        "id": "nD4qeW98",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Our Solution"
        },
        "id": "36Z_OVMi",
        "type": "heading"
      },
      {
        "data": {
          "text": "Therefore, we designed an automated, quarterly citation notification service that aggregates new citation events and sends a summary email to authors and collaborating publishers, helping scholars stay informed about their academic impact "
        },
        "id": "tIGVtcuk",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Our Vision: Building an Interconnected Academic Ecosystem"
        },
        "id": "DkwAS7FL",
        "type": "heading"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1779759987667-f1p5fjesmvi_d1ac0bfd.png"
        },
        "id": "fau8PvKU",
        "type": "image"
      },
      {
        "data": {
          "text": "- Mission: Break down data silos between our two core platforms—iPress (submission system) and airiti DOI (registration service)—to build an interconnected academic ecosystem.\n\n- The Problem: Once a paper is published, scholars and editors rarely receive real-time updates when their work is cited by others, creating a gap in engagement.\n\n- The Solution: By seamlessly connecting the data streams of iPress and DOI, we built an automated \"Cited-by Notification\" feature. Now, whenever a publication gets cited, both the original author (Scholar) and the journal team (Editors) are instantly notified, significantly increasing user retention and driving continuous engagement within our ecosystem."
        },
        "id": "EpMRQiH_",
        "type": "text"
      },
      {
        "data": {},
        "id": "wvqLnliu",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Design Process: How We Build Cited-by Notification?"
        },
        "id": "Aeub-JXx",
        "type": "heading"
      },
      {
        "data": {
          "level": 2,
          "text": "Bridging Two Distinct Products"
        },
        "id": "aVP19DxO",
        "type": "heading"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1779762235054-swr2k8ln5tc_213c1d60.png"
        },
        "id": "QKV2TvbT",
        "type": "image"
      },
      {
        "data": {
          "text": "To build the \"Cited-by Notification\" ecosystem, the primary challenge was to integrate two products with completely different user bases and data structures within the parent company.\n\n- iPress: An all-in-one academic publishing management platform (Focuses on workflow/submission).\n\n- airiti DOI: A persistent identifier system assigned to scholarly works (Focuses on data/indexing).\n\nThis integration was not just a technical linkage, but a strategic move to unlock the synergy between our workflow tool (iPress) and our data asset (DOI), creating a closed-loop ecosystem."
        },
        "id": "yjCO7EIT",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "Data Pipeline & Operation Workflow"
        },
        "id": "QG_REmAC",
        "type": "heading"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1779763002889-zb9qxbnux2n_0d559b54.png"
        },
        "id": "Oxbs1ubS",
        "type": "image"
      },
      {
        "data": {
          "text": "To make the \"Cited-by Notification\" work, we designed a 3-step operational workflow that automates data retrieval, calculation, and delivery on a quarterly basis.\n\nStep 1: Data Retrieval\nThe system monitors and extracts new citation footprints from published works, then maps and matches these external DOI records back to our internal iPress article database.\n\nStep 2: Data Calculation\nInstead of sending raw, cluttered data, the system processes the database to compile and calculate the precise \"Citation Counts\" for each article during the quarter.\n\nStep 3: Segmented Delivery\nOnce the citation counts are calculated, the system automatically triggers custom citation emails based on the product tier:\n\n・Standard Service: Dispatches comprehensive updates to Publishers to track journal performance.\n\n・Premium Service: Extends the reach by sending personalized impact alerts directly to individual Authors (Scholars)."
        },
        "id": "qlyIImfk",
        "type": "text"
      },
      {
        "data": {
          "level": 2,
          "text": "User-Centric Email Design"
        },
        "id": "lj6MqLCd",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Design Interface for Different Target Customers"
        },
        "id": "htXZlmN3",
        "type": "heading"
      },
      {
        "data": {
          "items": [
            {
              "caption": "・Publisher Letter",
              "id": "Wl3qPlNI",
              "type": "image",
              "url": "/assets/projects/1779765475564-ofpl0p4dqc_cee46203.png",
              "width": "half"
            },
            {
              "caption": "・Scholar Letter",
              "id": "AkESVAxO",
              "type": "image",
              "url": "/assets/projects/1779765486080-2lfc7tissee_4e548ebd.png",
              "width": "half"
            }
          ]
        },
        "id": "rHOMJx0e",
        "type": "mediaGrid"
      },
      {
        "data": {
          "columns": [
            {
              "content": "。Objective: To provide a macro-level overview for journal editors.\n\n。Key Design: Highlights the ”total growth volume“ at the top for quick reporting, followed by a consolidated list of which external papers cited this journal's articles this quarter. It includes direct DOI links to help editors track their journal's expanding impact.",
              "heading": "The Publisher Letter (Left))"
            },
            {
              "content": "。Objective: To deliver a personalized, emotionally rewarding impact report for individual researchers.\n\n。Key Design: Uses a 2-column structure that directly maps \"Your Article\" ⭢ \"Who Cited You\". This clear cross-reference instantly shows the scholar their direct contribution to the academic field, paired with an easy-to-access customer support footer to build trust.",
              "heading": "The Scholar Letter (Right)"
            }
          ]
        },
        "id": "bElG62cv",
        "type": "columns"
      },
      {
        "data": {},
        "id": "qnjgxcrB",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Result: Cited-by Made Invisible become Visible"
        },
        "id": "GndJQt_w",
        "type": "heading"
      },
      {
        "data": {
          "text": "In the long run, the Cited-by feature will continue to create value for scholars, publishers, and the company in the following ways:"
        },
        "id": "d9_xHejC",
        "type": "text"
      },
      {
        "data": {
          "headers": [
            "To Scholars",
            "To Publishers",
            "To the company"
          ],
          "rows": [
            [
              "The Cited-by can increase scholar’s awareness of their impact and their engagement to the academic environment.",
              "Many publishers are eager to learn their credibility so as to attract more contributions, Cited-by notification provide a better and timely way for publishers to track their impacts.",
              "For the parent company, Cited-by Notification serves as a differentiated and irreplaceable service that leverages our DOI-based technology to set iPress apart from competing products."
            ]
          ]
        },
        "id": "NMpjDOtK",
        "type": "table"
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
        "id": "NDuZBmUq",
        "type": "heading"
      },
      {
        "data": {
          "text": "In the year of 2025, my team developed a conference platform that extends iPress’s journal platform to better serve conference organizers, while expanding content sources and revenue."
        },
        "id": "cVSKLcxm",
        "type": "text"
      },
      {
        "data": {
          "level": 3,
          "text": "My Role: Product Manager"
        },
        "id": "q6tuNMoH",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Timeline: 2024 Q3 - 2026 Q1"
        },
        "id": "_xbSAfeF",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "Team: 2 Stakeholders, 2 SA, 1 engineer, 1 designer"
        },
        "id": "XHWQTUM5",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "My Responsibilities"
        },
        "id": "NrZHb3Oe",
        "type": "heading"
      },
      {
        "data": {
          "text": "・Researched and analyzed the differences between journal and conference workflows.\n・Designed the system structure and user interface.\n・Prepared use cases and product requirement documents (PRDs).\n・Collaborated closely with a system analyst, engineer, and designer.\n・Developed the testing plan and wrote detailed test cases.\n・Planned pre-launch activities."
        },
        "id": "CKh68aL3",
        "type": "text"
      },
      {
        "data": {},
        "id": "UBPpzDAf",
        "type": "divider"
      },
      {
        "data": {
          "level": 1,
          "text": "Impact"
        },
        "id": "5snO7UiK",
        "type": "heading"
      },
      {
        "data": {
          "text": "這塊還不知道要寫什麼"
        },
        "id": "ArhDYz74",
        "type": "text"
      },
      {
        "data": {
          "level": 3,
          "text": "Problem Statement: WHY building a new conference platform in the company?"
        },
        "id": "JmlhnDxv",
        "type": "heading"
      },
      {
        "data": {
          "columns": [
            {
              "content": "There is no integrated platform for managing conferences in Taiwan.",
              "heading": "Lack of an integrated platform"
            },
            {
              "content": "Most people use email and Google Forms to review manuscripts and track their submission and reviewing workflows, which is inconvenient for large-scale communication across schools, units, and personnel.",
              "heading": "Fragmented workflows"
            }
          ]
        },
        "id": "aAec3L0S",
        "type": "columns"
      },
      {
        "data": {
          "columns": [
            {
              "content": "Many conferences struggle with low efficiency and communication gaps, and the manuscripts and reviewing records cannot be properly preserved.",
              "heading": "Low efficiency & information gaps"
            },
            {
              "content": "Since the parent company is a database company that values content collections, building a conference platform naturally aligns with the company’s long-term goals.",
              "heading": "Strategic alignment with the parent company"
            }
          ]
        },
        "id": "D6G5pFsA",
        "type": "columns"
      },
      {
        "data": {
          "level": 1,
          "text": "Research & Ideation"
        },
        "id": "9EzBeLnm",
        "type": "heading"
      },
      {
        "data": {
          "text": "To better understand the workflow of preparing a conference and define the product scope, we conducted the following research: "
        },
        "id": "RUeOOUe_",
        "type": "text"
      },
      {
        "data": {
          "items": [
            {
              "description": "Interviewed professors to understand the basic workflows of a conferences.",
              "metric": "Interviews",
              "value": "3"
            },
            {
              "description": "Did competitve analysis 3 conference platforms to summarize our strengths and the features to develop.",
              "metric": "Competitive Analysis",
              "value": "3"
            },
            {
              "description": "Researched over 30 conference websites to identify current user pain points and narrow down the final reviewing workflow for the platform designs.",
              "metric": "Conferences",
              "value": "30"
            }
          ]
        },
        "id": "8-cdqfDG",
        "type": "metrics"
      },
      {
        "data": {
          "level": 1,
          "text": "Collaboration"
        },
        "id": "1cgR3ah6",
        "type": "heading"
      },
      {
        "data": {
          "level": 2,
          "text": "Establish the Same Vision for the Product Team"
        },
        "id": "69O4ewTs",
        "type": "heading"
      },
      {
        "data": {
          "level": 3,
          "text": "1. Illustrate with Streamlane Diagram"
        },
        "id": "5mE6utZe",
        "type": "heading"
      },
      {
        "data": {
          "text": "Since the user workflow is highly complex, I designed a swimlane diagram to streamline communication with the engineering team. The diagram details 4 distinct conference roles and the essential phases they navigate during conference preparation."
        },
        "id": "1myB2oVc",
        "type": "text"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1780199466846-kg0yjfi9otp_ffaffb4d.png"
        },
        "id": "_BYnR6G-",
        "type": "image"
      },
      {
        "data": {
          "level": 3,
          "text": "2. Display with Interactive Figma Prototype"
        },
        "id": "0ajG6RrI",
        "type": "heading"
      },
      {
        "data": {
          "text": "I built an interactive Figma Prototype to explain my design alongside with the streamlane diagram. This allowed the engineering team to better understand how users operate within the system."
        },
        "id": "sXvKnKIM",
        "type": "text"
      },
      {
        "data": {
          "caption": "",
          "url": "/assets/projects/1780243651913-qes08z1hfo_d2274cd1.gif"
        },
        "id": "OOnochaB",
        "type": "image"
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
