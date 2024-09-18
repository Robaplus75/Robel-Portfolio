import proj_1 from "../../assets/project_images/proj_1.webp";
import proj_2 from "../../assets/project_images/proj_2.jpg";
import proj_3 from "../../assets/project_images/proj_3.png";
import proj_4 from "../../assets/project_images/proj_4.png";
import proj_5 from "../../assets/project_images/proj_5.png";
import proj_6 from "../../assets/project_images/proj_6.jpg";
import proj_7 from "../../assets/project_images/proj_7.png";

const projects = [
  {
    num: "01",
    category: "UI/UX",
    title: "Project-1",
    description:
      "This project is a mobile app design for an agricultural application that helps farmers manage their crops and connect with buyers.",
    stack: [{ name: "Figma" }, { name: "Pen and Paper" }],
    image: proj_1,
    live: "https://www.figma.com/proto/zWWbfj0fK7gz67NBP0MkO5/Untitled?page-id=0%3A1&node-id=8-149&viewport=254%2C509%2C0.5&t=m0o1EM5A4V7XRSbO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A149&show-proto-sidebar=1",
    github:
      "https://github.com/ermiyastesfaye-lab/flutter-2024-proj/tree/main/Design",
  },
  {
    num: "02",
    category: "Front-End",
    title: "Project-2",
    description:
      "A classic tic-tac-toe game built with HTML, CSS, and JavaScript. Users can play against each other, with the application handling the game logic and displaying the winner.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: proj_2,
    live: "https://ermi-tic-tac-toe.netlify.app",
    github: "https://github.com/ermiyastesfaye-lab/PRODIGY-WD_03",
  },
  {
    num: "03",
    category: "Full-Stack",
    title: "Project-3",
    description:
      "This Group project is a website designed to help farmers manage their crop operations by providing a centralized platform for farmers to track their crops details.",
    stack: [
      { name: "HTML5" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "NestJs" },
      { name: "MongoDB" },
    ],
    image: proj_3,
    live: "#",
    github: "https://github.com/ermiyastesfaye-lab/Web-Group-Project",
  },
  {
    num: "04",
    category: "Front-End",
    title: "Project-4",
    description:
      "This project is a weather application that provides users with detailed, up-to-date information about current and forecasted weather conditions.",
    stack: [
      { name: "React.js" },
      { name: "Css" },
      { name: "Open weather map API" },
    ],
    image: proj_4,
    live: "https://ermi-weather-web-app.netlify.app",
    github: "https://github.com/ermiyastesfaye-lab/PRODIGY-WD_05",
  },
  {
    num: "05",
    category: "Front-End",
    title: "Project-5",
    description:
      "This project is my first personal portfolio website I made for a school project to showcase my journey, skills, and creative work. ",
    stack: [
      { name: "HTML5" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
    ],
    image: proj_5,
    live: "https://ermiyastesfaye-lab.github.io/UGR-6782-14-tailwind/src/dist/Index.html",
    github: "https://github.com/ermiyastesfaye-lab/UGR-6782-14-tailwind",
  },
  {
    num: "06",
    category: "Mobile-App",
    title: "Project-6",
    description:
      "Agriconnect is a comprehensive mobile application designed to empower farmers by providing them with a suite of tools to manage their crops and connect directly with buyers.",
    stack: [{ name: "Flutter" }, { name: "NestJs" }, { name: "PostgreSQL" }],
    image: proj_6,
    live: "#",
    github: "https://github.com/ermiyastesfaye-lab/flutter-2024-proj-bloc",
  },
  {
    num: "07",
    category: "Front-End",
    title: "Project-7",
    description:
      "This project is my current personal portfolio website designed to showcase my skills, works, experience, and creative work.",
    stack: [{ name: "React.js" }, { name: "Css" }],
    image: proj_7,
    live: "#home",
    github: "https://github.com/ermiyastesfaye-lab/my_portfolio",
  },
];

export default projects;
