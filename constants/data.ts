import type {
  ExperienceCard,
  ListItem,
  LinkRoute,
  MediaLink,
  ProjectProps,
} from "@/types/types";
import {
  PhLinkedinLogo,
  PhGithubLogo,
  PhLinkSimple,
  PhFigmaLogo,
  PhFilePdf,
} from "@phosphor-icons/vue";
import { generateUUID } from "~/utils/generateUUID";

export const LinkRuoteArray: LinkRoute[] = [
  {
    route: "#about",
    id:generateUUID(),
    title: "About",
    ariaLabel: "Link to about page",
  },
  {
    route: "#projects",
    id:generateUUID(),
    title: "Projects",
    ariaLabel: "Link to Projects page",
  },
  {
    route: "#experience",
    id:generateUUID(),
    title: "Experience",
    ariaLabel: "Link to Experience page",
  },
  {
    route: "#contact",
    id:generateUUID(),
    title: "Contact",
    ariaLabel: "Link to Contact page",
  },
];

export const MediaLinkArray: MediaLink[] = [
  {
    route: "mailto:main.francomartin@gmail.com",
    ariaLabel: "Link to Gmail",
    label: "Gmail",
    icon: PhFilePdf,
  },
  {
    route: "https://github.com/Franco-Martin11",
    ariaLabel: "Link to Github page",
    label: "Github",
    icon: PhGithubLogo,
  },
  {
    route: "https://www.linkedin.com/in/franc-martin/",
    ariaLabel: "Link to Linkedin page",
    label: "Linkedin",
    icon: PhLinkedinLogo,
  },
  {
    route: "/CV-FrancoMartin.pdf",
    ariaLabel: "Link to download curriculum",
    label: "Curriculum in English",
    icon: PhFilePdf,
  },
];

export const ProjectExampleData: ProjectProps[] = [
  {
    descriptions: {
      numberProject: 1,
      title: "Yo Me Animo Lading Page",
      paragraph:
        "The purpose of giving the exact information in relation to the country of the user and the country where he wants to arrive. These functionalities vary from types of visas, jobs, studies and important data at the time of arrival in a new country. It has personalized services, newsletters, blogs and community.",
    },
    image: {
      srcUrl: "/Yomeanimo-Traveling.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhLinkSimple,
        // route: "https://yomeanimo-chakra.netlify.app/",
        id:generateUUID(),
        title: "Deploy",
      },
      {
        icon: PhGithubLogo,
        route: "https://github.com/Franco-Martin11/ReWork-Yomeanimo",
        id:generateUUID(),
        title: "Repository",
      },
    ],
    listTecnologies: [
      { item: "Chakra UI", id:generateUUID() },
      { item: "React.js", id:generateUUID() },
      { item: "React Router Dom", id:generateUUID() },
      { item: "Emotion", id:generateUUID() },
    ],
  },
  {
    descriptions: {
      numberProject: 2,
      title: "Insight-Dashboard Aplication",
      paragraph:
        "The purpose of providing accurate information about the status of your personal finances and expenses. These functionalities range from visa types, transfers, pending projects, pending payments, credit history, tax history and different important data. It has an interactive dashboard and different sections that help you to have a more accurate and easy to understand financial overview of your income.",
    },
    image: {
      srcUrl: "/Dashboard-Vue.webp",
      alt: "Ejemplo de imagen",
      scroll: false,
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhLinkSimple,
        // route: "https://dashboard-insightdash.netlify.app/",
        id:generateUUID(),
        title: "Deploy",
      },
      {
        icon: PhGithubLogo,
        route: "https://github.com/Franco-Martin11/Dashboard-Vue",
        id:generateUUID(),
        title: "Repository",
      },
      {
        icon: PhFigmaLogo,
        route:
          "https://www.figma.com/file/M0lpqQYhM92zZ9glTa7Tao/Dashboard-vue?type=design&mode=design&t=OpvwOcXa87vohKWZ-1",
        id:generateUUID(),
        title: "Desing",
      },
    ],
    listTecnologies: [
      { item: "Figma", id:generateUUID() },
      { item: "Vue.js", id:generateUUID() },
      { item: "Typescript", id:generateUUID() },
      { item: "Vue Router", id:generateUUID() },
      { item: "Tailwind", id:generateUUID() },
      { item: "Apextchart", id:generateUUID() },
      { item: "Motion", id:generateUUID() },
      { item: "Node", id:generateUUID()},
      { item: "Express", id:generateUUID() },
    ],
  },
  {
    descriptions: {
      numberProject: 3,
      title: "AudioPhile E-Commerce",
      paragraph:
        "an audio e-commerce app built using Chakra UI, Next.js, Redux Toolkit, and Formik. This app combines stunning visual design with robust functionality, offering a seamless shopping experience for audio enthusiasts. With Chakra UI, the app showcases a sleek and intuitive interface. Next.js powers fast and efficient page loading, while Redux Toolkit ensures smooth state management. Formik simplifies form handling, making it easy for users to interact with the app. Explore the endless possibilities of audio shopping with this captivating and feature-rich e-commerce app.",
    },
    listTecnologies: [
      { item: "Next.js", id:generateUUID() },
      { item: "Typescript", id:generateUUID() },
      { item: "Redux Tollkit", id:generateUUID() },
      { item: "Chakra UI", id:generateUUID() },
      { item: "Formik", id:generateUUID() },
    ],
    image: {
      srcUrl: "/XX99-Mark-I-Headphones.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhLinkSimple,
        route: "https://audiophile-ecommerce-pearl.vercel.app/",
        id:generateUUID(),
        title: "Deploy",
      },
      {
        icon: PhGithubLogo,
        route: "https://github.com/Franco-Martin11/Audiophile-ecommerce",
        id:generateUUID(),
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 9,
      title: "Furni.Shop Desing",
      paragraph: `At Furni.Shop, you'll be captivated by an exquisite collection of elegant and minimalist-style furniture that will transform your home into a haven of sophistication and comfort. Each piece is carefully crafted by our team of designers to offer the highest quality and a distinctive touch to all our products.

            What can you expect from our landing page application? It's more than just a furniture catalog; it's an immersive experience that takes you on a journey through creativity and beauty. Explore our gallery of exclusive designs, where you'll find a wide variety of furniture that caters to different styles and needs.`,
    },
    listTecnologies: [{ item: "Figma", id:generateUUID() }],
    image: {
      srcUrl: "/Thumbnail-Preview.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhFigmaLogo,
        route:
          "https://www.figma.com/file/73OcrRcPuE71Gads2CaZbo/Furni.shop---landing-page?type=design&t=OpvwOcXa87vohKWZ-6",
        id:generateUUID(),
        title: "Desing",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 4,
      title: "Designo Web Page",
      paragraph:
        "This application is a landing page that serves to publicize both designs and applications already created for our customers around the world, this business has several franchises throughout the world therefore serves as a platform for redirecting customers depending on the country or region where they are.",
    },
    listTecnologies: [
      { item: "React.js", id:generateUUID() },
      { item: "Javascript", id:generateUUID() },
      { item: "Emotion", id:generateUUID() },
      { item: "HTML5", id:generateUUID() },
    ],
    image: {
      srcUrl: "/DESIGNO.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhLinkSimple,
        // route: "https://designo-website.netlify.app/",
        id:generateUUID(),
        title: "Deploy",
      },
      {
        icon: PhGithubLogo,
        route: "https://github.com/Franco-Martin11/DesignoWebSite",
        id:generateUUID(),
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 5,
      title: "MarieClaire Redesing",
      paragraph:
        "In this case I took the UI design of a very famous fashion magazine in Europe (Marie Claire) which I adapted using different styles and layouts.",
    },
    listTecnologies: [
      { item: "Figma", id:generateUUID() },
      { item: "React.Js", id:generateUUID() },
      { item: "Typescript", id:generateUUID() },
      { item: "HTML5", id:generateUUID() },
      { item: "SASS", id:generateUUID()},
    ],
    image: {
      srcUrl: "/Claire-Magazine.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhLinkSimple,
        // route: "https://claire-page-demo.netlify.app/",
        id:generateUUID(),
        title: "Deploy",
      },
      {
        icon: PhGithubLogo,
        route: "https://github.com/Franco-Martin11/Claire-page",
        id:generateUUID(),
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 6,
      title: "Beer Shop Aplication",
      paragraph:
        "a responsive app crafted with Next.js, SWR, and CSS Modules. Inspired by a design in Figma, this application showcases my expertise in creating seamless user experiences across various devices. Leveraging the power of Next.js, the app delivers fast loading times and server-side rendering. With SWR, data fetching becomes effortless, ensuring real-time updates. CSS Modules enable modular styling, maintaining code readability and scalability. Immerse yourself in the beauty of this responsive app and enjoy a smooth browsing experience..",
    },
    listTecnologies: [
      { item: "Figma", id:generateUUID() },
      { item: "Next.js", id:generateUUID() },
      { item: "Next API-Routes", id:generateUUID() },
      { item: "SWR", id:generateUUID() },
      { item: "CSS Modules", id:generateUUID() },
    ],
    image: {
      srcUrl: "/BeerShop.webp",
      alt: "Ejemplo de imagen",
      scroll: false,
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhLinkSimple,
        route: "https://beer-shop-next.vercel.app/",
        id:generateUUID(),
        title: "Deploy",
      },
      {
        icon: PhGithubLogo,
        route: "https://github.com/Franco-Martin11/ChallengeReact",
        id:generateUUID(),
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 7,
      title: "Filo Landing Page",
      paragraph:
        "A dynamic website crafted using HTML, CSS, and JavaScript. Drawing inspiration from a frontend mentor starter pack, this endeavor showcases my skills in creating interactive and visually appealing user interfaces. From seamless navigation to captivating animations, I've brought the design to life, ensuring a delightful user experience. Explore the harmonious blend of aesthetics and functionality as you interact with this frontend masterpiece.",
    },
    listTecnologies: [
      { item: "HTML5", id:generateUUID() },
      { item: "CSS3", id:generateUUID()},
    ],
    image: {
      srcUrl: "/FiloLanding.webp",
      alt: "Ejemplo de imagen",
      scroll: false,
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhLinkSimple,
        route: "",
        id:generateUUID(),
        title: "Deploy",
      },
      {
        icon: PhGithubLogo,
        route: "",
        id:generateUUID(),
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 8,
      title: "MercadoLibre Clone",
      paragraph:
        "In this case I took the UI design of a very famous ecommerce in Latin America (MercadoLibre) as a reference and made some changes in the layout and styles.",
    },
    listTecnologies: [
      { item: "React.Js", id:generateUUID() },
      { item: "Chakra UI", id:generateUUID() },
      { item: "Emotion", id:generateUUID() },
      { item: "Wouter", id:generateUUID() },
    ],
    image: {
      srcUrl: "/Mercadolibre-Clone.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: PhLinkSimple,
        // route: "https://freemarket-clone.netlify.app/",
        id:generateUUID(),
        title: "Deploy",
      },
      {
        icon: PhGithubLogo,
        route: "https://github.com/Franco-Martin11/MercadoLibreCLONE",
        id:generateUUID(),
        title: "Repository",
      },
    ],
  },
];

const listResponsibilities: { xirect: ListItem[]; dupan: ListItem[] } = {
  xirect: [
    {
      item: "User interface development",
      id:generateUUID(),
    },
    {
      item: "Develop visually appealing and responsive user interfaces using Vue.js and Vuetify.",
      id:generateUUID(),
    },
    {
      item: "Utilize Nuxt.js to build universal web applications with enhanced performance and fast initial load times.",
      id:generateUUID()
    },
    {
      item: "Integrate JWT for secure authentication and authorization to control access to protected resources.",
      id:generateUUID()
    },
    {
      item: "Implement state management using Vuex to ensure efficient data flow and communication between components.",
      id:generateUUID()
    },
    {
      item: "Handle HTTP requests and manage responses using Axios to connect with web services and APIs",
      id:generateUUID()
    },
    {
      item: "Collaborate with the backend team to integrate the frontend with web services and APIs, ensuring smooth communication and a consistent user experience.",
      id:generateUUID()
    },
    {
      item: "Collaboration with team in desing issues",
      id:generateUUID()
    },
  ],
  dupan: [
    {
      item: "User interface development",
      id:generateUUID(),
    },
    {
      item: "Performance optimization",
      id:generateUUID(),
    },
    {
      item: "Leverage Redux Toolkit Query to handle data fetching, caching, and synchronization with the server.",
      id:generateUUID(),
    },
    {
      item: "Utilize React Router DOM for efficient client-side routing, ensuring smooth navigation and a seamless user experience.",
      id:generateUUID(),
    },
    {
      item: "Collaborate closely with backend developers and designers to integrate frontend components with backend APIs and ensure a seamless end-to-end application experience.",
      id:generateUUID(),
    },
    {
      item: "Utilize RxJS to implement reactive programming.",
      id:generateUUID(),
    },
    {
      item: "Implementation of responsive designs",
      id:generateUUID(),
    },
    {
      item: "Collaboration with the design team",
      id:generateUUID(),
    },
  ],
};

export const listTecnologies: Record<string, ListItem[]> = {
  xirect: [
    { item: "Vue", id:generateUUID() },
    { item: "Vuex", id:generateUUID() },
    { item: "Nuxt.js", id:generateUUID() },
    { item: "Vuetify", id:generateUUID() },
    { item: "Axios", id:generateUUID() },
    { item: "JWT", id:generateUUID() },
    { item: "Apexcharts", id:generateUUID() },
    { item: "HTML5", id:generateUUID() },
    { item: "Flex & Grid", id:generateUUID() },
    { item: "Figma", id:generateUUID() },
    { item: "GitLab", id:generateUUID()},
    { item: "Git", id:generateUUID() },
    { item: "React", id:generateUUID() },
    { item: "Ionic", id:generateUUID() },
  ],
  dupan: [
    { item: "React.js", id:generateUUID() },
    { item: "Typescript", id:generateUUID() },
    { item: "HTML5", id:generateUUID() },
    { item: "Flex & Grid", id:generateUUID() },
    { item: "Redux", id:generateUUID() },
    { item: "Redux Toolkit", id:generateUUID() },
    { item: "React Router Dom", id:generateUUID() },
    { item: "Toolkit Query", id:generateUUID() },
    { item: "Rx.js", id:generateUUID() },
    { item: "Tailwind", id:generateUUID() },
    { item: "Figma", id:generateUUID() },
    { item: "GitLab", id:generateUUID()},
    { item: "Git", id:generateUUID() },
  ],
};

export const companiesExperience: ExperienceCard[] = [
  {
    companies: "Xirect Software Solutions",
    date: "10/2022 - 12/2023",
    listResponsibilities: listResponsibilities.xirect,
    desciption: `The first was a web application for customers, providing them with detailed information about the company's products and services. The second was designed for distributors, allowing efficient management of orders and invoicing. Both applications were connected to each other and dynamically adjusted depending on the role of each user.
    
    Participated in the redesign of an old internal
    application built in ASP.NET.

    Finally, the third application was a betting system that offered users a unique and intuitive gaming experience. All applications were developed using technologies such as Vue, Vuex, Nuxt.js, JWT, Axios and Vuetify.
    
    Ionic and React.js application development, successfully ensuring the maintenance of a cross-platform solution tailored for agile incident management within the dynamic landscape of machine operations.`,
    listTecnologies: listTecnologies.xirect,
    id:generateUUID()
  },
  {
    companies: "Dupan.io",
    date: "07/2022 - 10/2022",
    listResponsibilities: listResponsibilities.dupan,
    desciption: `The primary focus of the project was the development of a robust e-commerce platform using React.js 17. To accomplish this, we utilized a range of cutting-edge technologies, including Tailwind.css for efficient styling, RxJS for reactive programming, Redux for state management, HTML5 for structuring web content, redux toolkit query for data management, and react router dom for seamless routing. TypeScript was also employed to enhance type safety and maintainability. Moreover, we implemented a microservices architecture through an API-REST interface to ensure scalability and modularity.

    Throughout the project, I collaborated closely with a talented team of developers, utilizing my skills in frontend development to create an immersive and visually appealing e-commerce experience. The result was a dynamic and intuitive platform that provided seamless navigation and an enhanced user interface.`,
    listTecnologies: listTecnologies.dupan,
    id:generateUUID()
  },
];
