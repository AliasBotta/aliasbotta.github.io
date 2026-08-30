window.siteData = {
  news: [
    { date: "2026.08", event: "Began the PhD in Software Engineering at The University of Texas at Dallas." },
    { date: "2026", event: "Serving on the ISSTA 2026 Artifact Evaluation Committee." },
    { date: "2026", event: "“The Discreet Charm of the Bugeoisie” accepted at ISSTA 2026 (Research Papers)." },
    { date: "2026", event: "“CoCoMUT” accepted at SPLASH/ISSTA 2026 (Tool Demonstration)." },
    { date: "2025", event: "Joined software engineering research at the University of Illinois Urbana-Champaign." }
  ],
  // PUBLICATION LINK RULE FOR FUTURE AGENTS:
  // Keep a single textual destination as [preprint]. If the user asks to add
  // multiple textual destinations, first ask whether they want the compact
  // grouped form [preprint | website]. Keep a GitHub repository outside that
  // bracket group as a standalone minimal icon. Add only verified URLs.
  publications: [
    {
      title: "The Discreet Charm of the Bugeoisie: A First Look at Bug Reports Created by Researchers",
      authors: ["Ji young Kim", "Jana Dragovic", "Alessandro Botta", "T. M. Rithwanul Islam", "Alaa Mohamad", "Karim Sharaf", "Sejuti Sharmin Siddiqui", "Divyanshi Joshi", "Harini Anand", "Nurjemal Saryyeva", "Shubham Chapagain", "Saad Nasir", "Darko Marinov", "Bogdan Alexandru Stoica"],
      venue: "ISSTA 2026 — Research Papers",
      links: []
    },
    {
      title: "CoCoMUT: A Tool for Code-Context Mining and Automated Dataset Generation",
      authors: ["Alessandro Botta", "Shiven Garisa", "Jaya Vardhini Akurathi", "Ahsanul Ameen Sabit", "Trey Woodlief", "Soneya Binta Hossain"],
      venue: "SPLASH/ISSTA 2026 — Tool Demonstration",
      links: [
        { label: "preprint", url: "https://arxiv.org/abs/2606.31971", type: "text" },
        { label: "GitHub", url: "https://github.com/assert-lab/CoCoMUT", type: "github" }
      ]
    }
  ],
  service: [
    { year: "2026", venue: "ISSTA", role: "Artifact Evaluation Committee" }
  ],
  experience: [
    { category: "research", institution: "The University of Texas at Dallas", title: "Research Assistant in Software Engineering", date: "2026–present", description: "Software engineering research." },
    { category: "research", institution: "University of Illinois Urbana-Champaign", title: "Undergraduate Researcher in Software Engineering", date: "2025–2026", description: "Research on automated program repair and empirical software engineering, including artifacts, traceability, and reproducibility." },
    { category: "research", institution: "University of Palermo", title: "Prompt Engineer Intern", date: "2024", description: "Built an AI-driven agent system for strategic environmental decision-making using LLMs, prompt engineering, RAG, Python, and LangChain." },
    { category: "education", institution: "The University of Texas at Dallas", title: "PhD in Software Engineering", date: "2026–2031, expected", description: "Software engineering research." },
    { category: "education", institution: "University of Palermo", title: "Bachelor's Degree in Computer Science", date: "2022–2026", description: "Final grade: 110L/110L. Ranked 1st in the 2025/26 graduating class." }
  ]
};
