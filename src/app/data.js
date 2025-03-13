/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "LinkOS",
    description:
      "Client schedule and care plan tracking with React Native & Node.js",
    date: "2024-02-22",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.linkhealthcare.linkcare&hl=en",
  },
  {
    id: 2,
    name: "Link Healthcare",
    description: "Staff scheduling and care tracking with React & Node.js",
    date: "2023-12-04",
    demoLink: "https://linkhealthcare.ie/",
  },
  {
    id: 3,
    name: "Fullfily",
    description:
      "EV renting and delivery platform with smooth booking and tracking",
    date: "2023-02-02",
    demoLink: "https://www.fullfily.com/",
  },
  {
    id: 4,
    name: "MyHeart Surgery",
    description: "QR scan for details, videos & PDFs with React Native",
    date: "2023-01-03",
  },
  {
    id: 5,
    name: "PLEAT",
    description:
      "Saree pleating, pickup, and delivery app built with React & Node.js",
    date: "2022-08-01",
    demoLink: "https://play.google.com/store/apps/details?id=com.pleat&hl=en",
  },
  {
    id: 6,
    name: "Askhugo",
    description:
      "Schedule interviews, manage candidates, and track employees",
    date: "2022-04-07",
    demoLink: "https://askhugo.io/",
  },
  {
    id: 7,
    name: "iSkooler",
    description:
      "Student & Staff Portal: Manage profiles and track library activity",
    date: "2021-08-02",
    demoLink: "https://www.iskooler.com/",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/shaikdev",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/shaik-rahuman-76a0941b9/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
