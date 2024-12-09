import project1 from "../project/kanban.jpg";
import project2 from "../project/adminDashboard1.jpg";
import project3 from '../project/crud-nodejs-mongo.jpg';
import project4 from '../project/shopping.webp';
import project5 from '../project/admin.avif';

export const HERO_CONTENT = `I am Saravanan, a passionate full-stack developer with a focus on creating robust and scalable web applications. With one year of experience in React.js, I have developed strong skills in front-end technologies like HTML, CSS, JavaScript, TypeScript, and React.js. Currently, I am expanding my expertise by learning back-end technologies such as Node.js, Express, and MongoDB. My goal is to leverage my skills to craft innovative solutions that drive business growth and provide exceptional user experiences.`;

export const ABOUT_TEXT = `My journey in web development started with a deep curiosity about how web applications are built and function. This curiosity has evolved into a career where I continually strive to learn, adapt, and overcome new challenges. I thrive in environments that encourage collaboration and enjoy solving complex problems to create high-quality solutions.

When I’m not coding, I love exploring new technologies, staying active, and contributing to the tech community. My goal is to leverage my skills to build innovative solutions that drive business success and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Associate Software Engineer",
    company: "Test yantra software solutions Bangalore",
    description: `As a React Developer at Test Yantra Software Solutions, I develop and maintain web applications using React.js and JavaScript, collaborate with stakeholders to define project requirements, and ensure timely delivery of high-quality solutions.`,
    technologies: ["Javascript", "React.js", "CSS", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Kanban Board(Zustand)",
    image: project1,
    description:
      "A dynamic Kanban board application built with React and Zustand, designed for task management and team collaboration. It features draggable task cards, customizable boards, and seamless real-time updates. Zustand ensures efficient state management, providing a smooth user experience and scalable performance.",
    technologies: ["TailwindCSS", "React", "Zustand"],
    githubLink: "https://github.com/SaravananS22/kanban-board-zustand",  
    demoLink: "https://saravanans22.github.io/kanban-board-zustand/",
  },
  {
    title: "Admin Dashboard",
    image: project2,
    description:
      "An intuitive admin dashboard built with React, React Router DOM, and Tailwind CSS, offering seamless navigation and a modern, responsive design. The dashboard includes interactive data visualizations powered by React Charts, allowing users to monitor key metrics and insights in real-time. Perfect for managing and analyzing business operations efficiently.",
    technologies: ["React","React router dom","React recharts","Tailwind CSS"],
    githubLink: "https://github.com/SaravananS22/Admin_dashboard", 
    demoLink: "https://admin-dashboard-eight-zeta-15.vercel.app/",
  },
  {
    title: "Node CRUD",
    image: project3,
    description:
      "Simple CRUD operation in Node.JS, Express.JS, MongoDB(mongoose) with create, edit, delete, read",
    technologies: ["Node.JS","Express.JS"," MongoDB(mongoose)"],
    githubLink: "https://github.com/SaravananS22/Node-crud", 
  },
  {
    title: "Full stack ecommerse website",
    image: project4,
    description:
      "In this project i am developing a modern e-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT-based authentication for secure user sessions. The application will feature user-friendly product browsing, a seamless checkout system, and role-based access with an admin panel for managing products, orders, and user accounts. This full-stack web application focuses on scalability, security, and a clean user interface for a smooth shopping experience.",
    technologies: ["Node.JS","Express.JS"," MongoDB(mongoose)","JWT","ReactJS","TailwindCSS"],
    demoLink: "https://e-commerse-forever-frontend.vercel.app/",
  },
  {
    title: "Full stack ecommerse website Admin panel",
    image: project5,
    description:
      "For the ecommerse application this is the admin panel with jwt authentication. Note: if you want to check the admin panel use this username : 'admin@forever.com' and password : 123456789 ",
    technologies: ["Node.JS","Express.JS"," MongoDB(mongoose)","JWT","ReactJS","TailwindCSS"],
    demoLink: "https://e-commerse-forever-admin.vercel.app/",
  },
];


export const CONTACT = {
  address: "Coonoor, Tamil Nadu, 643 202 ",
  phoneNo: "+91 9677683559",
  email: "saravanans2207@gmail.com",
};
