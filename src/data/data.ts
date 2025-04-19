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
    link: "Research By PlOS",
    path: "/researchbyplOS",
  },
  {
    link: "Research Journals",
    path: "/researchjournals",
  },
  {
    link: "Open Science Policy",
    path: "/opensciencepolicy",
  },
  {
    link: "Publication Fee",
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

export const lifeScience = [
  {
    title: "PLOS Biology",
    image: "biology.png",
    alt: "PLOS Biology",
    description: `Our leading life science journal, PLOS Biology is a leading life science journal that
    champions inclusive, high-impact research across all disciplines—from molecules to ecosystems.
    We offer innovative publication formats, rigorous, transparent and accountable decision-making,
    and collaborative editorial support that is focused on helping researchers publish their best work.
    Our transdisciplinary approach and author-friendly policies ensure your work reaches its full potential
    and impact.`,
  },
  {
    title: "PLOS Complex Systems",
    image: "complexSystems.png",
    alt: "PLOS Complex Systems",
    description: `PLOS Complex Systems brings together researchers across disciplines, providing a platform
    for theoretical, modeling, and applied research that advances our understanding of complex systems. The
    journal encompasses diverse topics—from chaotic systems and networks to risk modeling, systems biology,
    and economics—combining methodological rigor and broad community impact.`,
  },
  {
    title: "PLOS Computational Biology",
    image: "computationalBiology.png",
    alt: "PLOS Computational Biology",
    description: `PLOS Computational Biology provides a home for research of exceptional significance that
    uses computational methods as a future path for understanding living systems. We promote the accessibility
    and reusability of research to empower biologists everywhere.`,
  },
  {
    title: "PLOS Genetics",
    image: "genetics.png",
    alt: "PLOS Genetics",
    description: `PLOS Genetics publishes research related to genes and genomes across the full breadth of the
    field, from microbes to humans and from mice to maize. This open-access journal welcomes cross-disciplinary
    research that uses traditional and emerging tools to address fundamental questions in biology and disease processes.
    We act as a forum for high-quality, hypothesis-driven research, reviews and opinion articles.`,
  },
  {
    title: "PLOS One",
    image: "one.png",
    alt: "PLOS One",
    description: `PLOS One accepts research in one or two hundred subject areas, spanning science, engineering,
    medicine, and the related social sciences and humanities. We evaluate research based on scientific validity,
    strong methodology, and ethical research practices, not potential impact or perceived importance. We encourage
    the art of multidisciplinary work, support transparency and reproducibility, and accept a range of submissions
    including replication studies and negative or null results.`,
  },
  {
    title: "PLOS Pathogens",
    image: "pathogens.png",
    alt: "PLOS Pathogens",
    description: `PLOS Pathogens publishes ground-breaking research on pathogens and host-pathogen interactions
    to address long-standing and emerging global health challenges. We publish research in bacteria, fungi, parasites,
    prions and viruses, as well as host-pathogen interactions that impact human, animal, and plant health, including
    vector biology and the immune response. Our rigorous editorial process ensures that only impactful, high-quality
    research is published.`,
  },
];

export const healthScience = [
  {
    title: "PLOS Complex Systems",
    image: "complexSystems.png",
    alt: "PLOS Complex Systems",
    description: `PLOS Complex Systems brings together researchers across disciplines, providing a platform
    for theoretical, modeling, and applied research that advances our understanding of complex systems. The
    journal encompasses diverse topics—from chaotic systems and networks to risk modeling, systems biology,
    and economics—emphasizing methodological rigor and broad community impact.`,
  },
  {
    title: "PLOS Digital Health",
    image: "pigitalHealth.png",
    alt: "PLOS Digital Health",
    description: `PLOS Digital Health is a journal for democratising healthcare via the intersection of technology,
    engineering, and digital age. We promote excellent research, policy, and ethical standards to guide how
    patients and other stakeholders access digital health information open care and data sharing to improve
    health outcomes for all. We empower researchers to harness the power of technology in this rapidly-changing
    field to democratize, accelerate, and reproduce.`,
  },
  {
    title: "PLOS Global Public Health",
    image: "globalPublicHealth.png",
    alt: "PLOS Global Public Health",
    description: `PLOS Global Public Health makes interdisciplinary research that is rooted in local realities,
    global in scope, and inclusive of diverse experiences a priority. We publish research that addresses
    critical issues in health equity, sex, and inclusion in public health, guided by a global community of
    authors, editors, and reviewers. We welcome qualitative and quantitative research that spans global
    health efforts, and evolves how we approach diseases and environmental health.`,
  },
  {
    title: "PLOS Medicine",
    image: "medicine.png",
    alt: "PLOS Medicine",
    description: `PLOS Medicine publishes high-impact research that informs healthcare delivery, shaping policy,
    and advances science across clinical and cross-disciplinary domains of global health—from major diseases
    to health systems and social determinants of health. We emphasize research that is relevant and influential
    to clinical care, public health practice, and health equity. PLOS Medicine provides a trusted open-access
    platform for meaningful improvements in global health outcomes.`,
  },
  {
    title: "PLOS Mental Health",
    image: "mentalHealth.png",
    alt: "PLOS Mental Health",
    description: `PLOS Mental Health is a global, multidisciplinary journal that brings together research aimed
    at improving mental health and well-being. We welcome rigorous, transparent and ethical research across
    a range from academic and clinical perspectives to local, lived experience and cultural knowledge. Topics
    include prevention and treatment, lived experience, community solutions, social and environmental policy,
    socioeconomic and occupational impacts, psychology, and mental health.`,
  },
  {
    title: "PLOS Neglected Tropical Diseases",
    image: "neglectedTropicalDiseases.png",
    alt: "PLOS Neglected Tropical Diseases",
    description: `PLOS Neglected Tropical Diseases covers pathogenesis, diagnostics, treatment, control, and
    elimination of neglected tropical diseases. The journal promotes dissemination of research on diseases
    that disproportionately affect impoverished populations. We welcome research that bridges diverse
    fields, from bench to bedside, from molecular studies to epidemiology, in basic and social sciences
    and policy.`,
  },
  {
    title: "PLOS One",
    image: "one.png",
    alt: "PLOS One",
    description: `PLOS One accepts research in over two hundred subject areas in science, engineering, medicine,
    and the related social sciences and humanities. We evaluate research based on the basics of scientific validity,
    strong methodology, and high ethical standards—not subjective impact. We encourage replication studies, negative
    results, and research across all fields. We support transparency and reproducibility, and foster a multidisciplinary
    space where open science leads.`,
  },
  {
    title: "PLOS Water",
    image: "water.png",
    alt: "PLOS Water",
    description: `PLOS Water brings together research at the intersection of freshwater, sanitation, and hygiene
    and water resources, from local to global levels. We welcome research that supports water access, quality,
    governance, sustainability, and equity. The journal fosters dialogue between research and action and encourages
    co-created solutions to manage water-related challenges in order to create real global change.`,
  },
];

export const sustainabilityScience = [
  {
    title: "PLOS Climate",
    image: "climate.png",
    alt: "PLOS Climate",
    description: `PLOS Climate empowers global, multidisciplinary collaboration, and enables decision-makers at every level of society to take urgent, evidence-based action on the causes and impacts of climate change. Bringing together scientific research and transformation insights, we share new perspectives with a commitment to transparency and equality to catalyze real progress.`,
  },
  {
    title: "PLOS Complex Systems",
    image: "complexSystems.png",
    alt: "PLOS Complex Systems",
    description: `PLOS Complex Systems brings together researchers across disciplines, providing a platform for theoretical, modeling, and applied research that advances our understanding of complex systems. The journal encompasses diverse topics—from chaotic systems and networks to risk modeling, systems biology, and economics—emphasizing methodological rigor and broad community impact.`,
  },
  {
    title: "PLOS One",
    image: "one.png",
    alt: "PLOS One",
    description: `PLOS One accepts research in over one hundred subject areas across science, engineering, medicine, and the related social sciences and humanities. We evaluate research on the basis of scientific validity, strong methodology, and high ethical standards—not on subjective impact. We encourage replication studies, negative results, and multidisciplinary work. We support transparency and reproducibility, including research with negative or null results.`,
  },
  {
    title: "PLOS Sustainability and Transformation",
    image: "Sustainability.png",
    alt: "PLOS Sustainability and Transformation",
    description: `As our leading sustainability science journal, PLOS Sustainability and Transformation brings together original research, actionable science and bold thinking that drives real-world change for sustainability transitions. We provide a forum for discovery and progress driven by a diverse community of research and policy experts across all sectors, with the aim of encouraging the communication of high-quality, high-impact research.`,
  },
  {
    title: "PLOS Water",
    image: "water.png",
    alt: "PLOS Water",
    description: `PLOS Water brings together research of the highest methodological standard across water systems as a vital resource for societies in every region of the world. Creating lasting impact, the broad research scope enables critical conversations between researchers and those who fund, govern, and use water. We encourage cross-disciplinary research that transcends silos with a systems-wide approach to enhance collaboration in order to create real global change.`,
  },
];

export const sideBarLinks = [
  {
    link: "Dashboard",
    icon: "dashboard", // Replace with icon name or component
    path: "dashboard",
    active: false,
    disabled: false,
  },
  {
    link: "Journals",
    icon: "journals", // Replace with actual icon
    path: "journals",
    active: true,
    disabled: false,
  },
  {
    link: "Articles",
    icon: "articles", // Replace with actual icon
    path: "articles",
    active: false,
    disabled: false,
  },
  {
    link: "Categories",
    icon: "categories", // Replace with actual icon
    path: "categories",
    active: false,
    disabled: true,
  },
];
