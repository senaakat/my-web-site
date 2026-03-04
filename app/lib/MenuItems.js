const MenuItems = [
    { id: "home", name: "Home", href: "/" },
    { id: "about", name: "About", href: "/about" },
    { id: "projects", name: "Projects", href: "/projects" },
    { id: "experience", name: "Experience", href: "/experience" },
    { id: "contact", name: "Contact Me", href: "/contact" }
  ];
const LogoItems = [
      { name: "Trakya University", logo: <img src="/trakya.png" alt="Trakya University Logo" className="w-24 h-24  border-2 border-[rgb(255,219,123)] rounded-full p-1"/>, label:" Computer Engineering • 2021-2025 " },
      { name: "TEB Bank", logo: <img src="/teb.png" alt="TEB Bank Logo" className="w-24 h-24 border-2 border-[rgb(255,219,123)] rounded-full p-2"/>, label:" Computer Engineering Intern • 2022 " },
      { name: "Digilera", logo: <img src="/digilera.png" alt="Digilera Logo" className="w-24 h-24 border-2 border-[rgb(255,219,123)] rounded-full p-2"/>, label:" Full Stack Developer Intern • 2023 " },
      { name: "Brave", logo: <img src="/brave.png" alt="Brave Logo" className="w-24 h-24 border-2 border-[rgb(255,219,123)] rounded-full p-2"/>, label:" Backend Developer Intern • 2023-2024 " },
      { name: "Plainex Technology", logo: <img src="/plainex.png" alt="Plainex Logo" className="w-24 h-24 border-2 border-[rgb(255,219,123)] rounded-full p-2"/>, label:" Full Stack Developer • 2025- Present  " },
];

const ProjectItems = [
  {
    name: "KRS Edirne",
    label: "Developed a seat reservation system using QR validation. Admins upload visual seating plans that users can interact with. System automatically enforces no-show penalties.",
    images: [
      "/krs/krs1.png",
      "/krs/krs2.png",
      "/krs/krs3.png",
      "/krs/krs4.png",
      "/krs/krs5.png",
      "/krs/krs6.png",
      "/krs/krs7.png",
      "/krs/krs8.png",
      "/krs/krs9.png",
      "/krs/krs10.png",
      "/krs/krs11.png",
      "/krs/krs12.png",
      "/krs/krs13.png",
      "/krs/krs14.png",
    ],
    links: {
      primary: "https://github.com/senaakat/krs-frontend",
      secondary: "https://github.com/KRSedirne/krs-backend",
      tertiary: "https://github.com/KRSedirne/Detect-Image",
    },
  },
  {
    name: "CineMatch",
    label: "Recommends films using content-based and user history filtering. Includes social features: comments, friend suggestions, chat via Socket.IO.",
    images: [
      "/cinematch/1.png",
      "/cinematch/2.png",
      "/cinematch/3.png",
      "/cinematch/4.png",
      "/cinematch/5.png",
      "/cinematch/6.png",
      "/cinematch/7.png",
      "/cinematch/8.png",
      "/cinematch/9.png",
      "/cinematch/10.png",
      "/cinematch/11.png",
      "/cinematch/12.png",
      "/cinematch/13.png",
      "/cinematch/14.png",
      "/cinematch/15.png",
      "/cinematch/16.png",
      "/cinematch/17.png",
      "/cinematch/18.png",
    ],
    links: {
      primary: "https://github.com/senaakat/Cinematch-Frontend",
      secondary: "https://github.com/senaakat/Cinematch-Backend",
    },
  },
  {
    name: "Swift App Slimly",
    label: " I have been developing a simple yet functional diet tracking app called Slimly using Swift and Storyboard. Some of the app’s main features include: Adding meals by type and tracking calories. Setting a daily calorie goal. Displaying macronutrient values (carbohydrates, protein, fat). A user-friendly and minimalist interface.",
    images: [
      "/slimly/1.png",
      "/slimly/2.png",
      "/slimly/3.png",
      "/slimly/4.png",
      "/slimly/5.png",
    ],
    links: {
      quaternary: "https://github.com/senaakat/DietSwiftApp"
    },
  },
  {
    name: "School Communication System",
    label: " Our mobile application THOR (Thrace Communication and Student Guide) which we developed with Flutter, together with my teammates, with great effort and determination.",
    images: [
      "/thor/1.png",
      "/thor/2.png",
      "/thor/3.png",
      "/thor/4.png",
      "/thor/5.png",
      "/thor/6.png",
      "/thor/7.png",
      "/thor/8.png",
      "/thor/9.png",
      "/thor/10.png",
      "/thor/11.png",
      "/thor/12.png",
      "/thor/13.png",
    ],
    links: {
      secondary:"https://github.com/senaakat/BookRecommendationSystem",
      quaternary: "https://github.com/ASGARDDTEAM/Flutter-Projects"
    },
  },
  {
    name: "Money Budget Management WebSite",
    label: " A web application for managing personal finances, tracking expenses, and setting budgets.",
    images: [
      "/moneyPocket/1.png",
      "/moneyPocket/2.png",
    ],
    links: {
      primary: "https://github.com/senaakat/MoneyPocket"
    },
  },
  {
    name: "My Personal Website",
    label: " A personal portfolio website showcasing my projects and skills.",
    images: [
      "/myWebSite/1.png",
      "/myWebSite/2.png",
      "/myWebSite/3.png",
      "/myWebSite/4.png",
      "/myWebSite/5.png",
      "/myWebSite/6.png",
      "/myWebSite/7.png",
      "/myWebSite/8.png",
    ],
    links: {
      primary: "https://github.com/senaakat/Personel-Website"
    },
  },
  {
    name: "Book Recommendation System",
    label: " A python algorithm for recommending books based on user preferences and reading history.",

    links: {
      tertiary: "https://github.com/senaakat/BookRecommendationSystem"
    },
  },
];


export { ProjectItems, MenuItems, LogoItems };
