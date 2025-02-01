import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Movie App Clone",
    description: "A movie search and browsing application that integrates with the Movie Database API to display up-to-date movie information, including trending, popular, and top-rated movies. The app allows users to search for movies by title, view detailed movie information such as synopsis, cast, release date, and ratings, and provides a fully responsive design for seamless experience across all screen sizes.",
    technologiesUsed: [
      'TypeScript', 
      'Redux Toolkit', 
      'Tailwind CSS', 
      'Vite', 
      'Movie Database API'
    ],
    position: 'FRONTEND DEVELOPER',
    githubLink: 'https://github.com/lehieu2003/movie-app-clone-version-2', 
    image: 'crefin', 
  },
  {
    id: 2,
    name: "Online Train Ticket Booking",
    description:
      "A web-based platform that allows users to search for train schedules, book tickets, and manage reservations seamlessly. As a Frontend Developer, I designed and implemented a responsive and user-friendly interface, integrated APIs for real-time data fetching, and ensured smooth navigation using React Router and Redux Toolkit. The platform also includes an admin dashboard for managing train schedules, user bookings, and ticket availability.",
    technologiesUsed: [
      "ReactJs",
      "TailwindCSS",
      "Styled Components",
      "React Router",
      "Redux Toolkit",
      "My SQL",
      "Java Spring Boot",
    ],
    position: " FRONTEND DEVELOPER & DESIGN UI/UX",
    githubLink: "https://github.com/lehieu2003/Railway-Sytem-Full.git",
    image: realEstate,
  },
  {
    id: 3,
    name: "Parcel Locker Mobile App",
    description:
      "A cross-platform application for managing and tracking deliveries via a smart locker system. As the Frontend Developer and UI/UX Team Lead, I designed and implemented a modern, user-friendly interface for the user app, shipper app, and web admin panel. Key features include real-time parcel and shipper tracking, locker search, order creation, order status checking, order history, and live tracking, ensuring a seamless experience across all platforms.",
    technologiesUsed: ["Typescript", "TailwindCSS", "React Navigation"],
    image: ayla,
    position: "FRONT-END DEVELOPER & LEAD UI/UX TEAM",
    githubLink: "private",
  },
  {
    id: 4,
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
    githubLink: "https://github.com/lehieu2003/trello-web.git, https://github.com/lehieu2003/trello-api.git",
  },
];
