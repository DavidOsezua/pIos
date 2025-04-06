interface NavLink {
  link: string;
  path: string;
}

export const navLinks: NavLink[] = [
  {
    link: "About",
    path: "/ourmission",
  },
  {
    link: "researchbyplOS",
    path: "/researchbyplOS",
  },
  {
    link: "researchjournals",
    path: "/researchjournals",
  },
  {
    link: "opensciencepolicy",
    path: "/opensciencepolicy",
  },
  {
    link: "publicationfee",
    path: "/publicationfee",
  },
];

export const expandedLinks = [
  {
    title: "Journals",
    links: [
      "PLOS Biology",
      "PLOS Climate",
      "PLOS Complex Systems",
      "PLOS Computational Biology",
      "PLOS Digital Health",
      "PLOS Genetics",
      "PLOS Global Public Health",
      "PLOS Medicine",
      "PLOS Mental Health",
      "PLOS Neglected Tropical Diseases",
      "PLOS One",
      "PLOS Pathogens",
      "PLOS Sustainability and Transformation",
      "PLOS Water",
    ],
  },
  {
    title: "More Content",
    links: ["PLOS Blogs", "PLOS Collections"],
  },
];

export const footerLinks = [
  {
    firstLinks: ["Contact", "Finance", "Pay invoice", "Terms and Conditions"],
  },
  {
    firstLinks: ["Contact", "Finance", "Pay invoice", "Terms and Conditions"],
  },
  {
    firstLinks: ["Contact", "Finance", "Pay invoice", "Terms and Conditions"],
  },
];

export const homePageOpenScience = [
  {
    title: "Open science publishing",
    subTitle: "Pave the way",
    text: "When it comes to scientific rigor and editorial integrity, we will not compromise. The research outputs we publish promote multi-disciplinary discussions on complex problems and enable all stakeholders to learn from, reuse, and build upon scientific knowledge. We reimagine models and mechanisms for sharing to meet open science principles and use our journals to test and refine innovations at all stages of the research lifecycle.",
  },
  {
    title: "Open science policy",
    subTitle: "Advocate for change",
    text: "We actively engage in policy discussions with multi-stakeholder groups to drive open science adoption. Publishing expertise, pioneering innovations, and original research mean we are uniquely placed to contribute to discussions on the barriers to adoption and the opportunities for integration of open science principles in scholarly communication",
  },
  {
    title: "Open science practice",
    subTitle: "Share and inspire",
    text: "We work with diverse communities to promote adoption of open science practices across discipline, geography, and career stage. To create new pathways to open science, we actively engage with stakeholders throughout the scholarly community with knowledge sharing, co- creation, and partnership",
  },
];
