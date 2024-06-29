import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Megaman Game",
    description:
      "Megaman is a popular video game series from the manufacturer Capcom, first appearing on the Nintendo Entertainment System (NES) game console in 1987. Megaman game tells about the adventures of the main character, Megaman, a robot led by a scientist named Dr. Light created to defeat the villain Dr. Wily and the robot names he created.",
    technologiesUsed: ["Java", "Java Swing"],
    position: "SOFTWARE DEVELOPER",
    githubLink: "https://github.com/lehieu2003/GameProject.git",
    image: crefin,
  },
  {
    id: 2,
    name: "Minesweeper Game",
    description:
      "Minesweeper is a classic single-player puzzle game that originated in the 1960s. The game became widely popular when it was included in the Microsoft Windows operating system.",
    technologiesUsed: ["Java", "Java Swing"],
    position: "SOFTWARE DEVELOPER",
    githubLink: "https://github.com/lehieu2003/Mine-Sweeper.git",
    image: travel,
  },
  {
    id: 3,
    name: "Online Train Ticket Booking",
    description:
      "Our team primarily relies on HTML and CSS for the web development, JavaScript for the frontend, Java for the backend, and SQL for the database. JavaScript's versatility allows us to create interactive and dynamic web pages, while Node.js enables us to build scalable and efficient server-side applications. SQL helps us manage and query our relational database effectively.",
    technologiesUsed: [
      "ReactJs",
      "TailwindCSS",
      "Styled Components",
      "React Router",
      "Redux Toolkit",
      "My SQL",
      "Java Spring Boot",
    ],
    position: "FRONT-END DEVELOPER",
    githubLink: "https://github.com/lehieu2003/Railway-Sytem-Full.git",
    image: realEstate,
  },
  {
    id: 4,
    name: "Parcel Locker Mobile App",
    description:
      "In the Parcel Locker Mobile App project, I served as the Front-End Developer and Lead of the UI/UX Team. Our primary goal was to create a seamless and user-friendly mobile application that allows users to easily manage their parcel deliveries and collections from automated locker systems.",
    technologiesUsed: ["Typescript", "TailwindCSS", "React Navigation"],
    image: ayla,
    position: "FRONT-END DEVELOPER & LEAD UI/UX TEAM",
    githubLink: "private",
  },
  {
    id: 5,
    name: "Trello Web App Clone",
    description:
      "As a Full Stack Developer on the Trello Web App Clone project, I was responsible for creating a feature-rich, interactive web application that replicates the core functionalities of the Trello project management tool.",
    technologiesUsed: [
      "ReactJS",
      "TailwindCSS",
      "Material UI",
      "React Router",
      "Dnd-kit",
    ],

    image: ayla,
    position: "FULL STACK DEVELOPER",
    githubLink: "https://github.com/lehieu2003/trello-web.git",
  },
];
