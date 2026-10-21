window.siteData = {
  news: [
    { date: "2026.10", event: "Received the Distinguished Reviewer Award for Artifact Evaluation at ISSTA 2026" },
    { date: "2026.08", event: "Began the PhD in Software Engineering at The University of Texas at Dallas" },
    { date: "2026", event: "Serving on the ISSTA 2026 Artifact Evaluation Committee" },
    { date: "2026", event: "“The Discreet Charm of the Bugeoisie” accepted at ISSTA 2026 (Research Papers)" },
    { date: "2026", event: "“CoCoMUT” accepted at SPLASH/ISSTA 2026 (Tool Demonstration)" },
    { date: "2025", event: "Joined software engineering research at the University of Illinois Urbana-Champaign" }
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
    { year: "2026", venue: "ISSTA", role: "Artifact Evaluation Committee · Distinguished Reviewer" }
  ]
};
