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
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Minesweeper Game",
    description:
      "Minesweeper is a classic single-player puzzle game that originated in the 1960s. The game became widely popular when it was included in the Microsoft Windows operating system.",
    technologiesUsed: ["Java", "Java Swing"],

    position: "SOFTWARE DEVELOPER",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Online Train Ticket Booking",
    description:
      "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
    technologiesUsed: [
      "ReactJs",
      "TailwindCSS",
      "Styled Components",
      "React Router",
      "Redux Toolkit",
      "My SQL",
      "Java Spring Boot",
    ],
    code: "",
    position: "FRONT-END DEVELOPER",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Parcel Locker Mobile App",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    technologiesUsed: ["Typescript", "TailwindCSS", "React Navigation"],
    code: "",
    demo: "",
    image: ayla,
    position: "FRONT-END DEVELOPER & LEAD UI/UX TEAM",
  },
  {
    id: 5,
    name: "Trello Web App Clone",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    technologiesUsed: [
      "ReactJS",
      "TailwindCSS",
      "Material UI",
      "React Router",
      "Dnd-kit",
    ],
    code: "",
    demo: "",
    image: ayla,
    position: "FULL STACK DEVELOPER",
  },
];
