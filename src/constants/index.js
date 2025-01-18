import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "  Software Engineer",
    company_name: "Noman Software House",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2020 - March 2022",
    points: [
      "Worked on web and mobile app development projects using JavaScript and Python.",
      "Participated in agile methodologies, daily stand-ups, and sprint planning.",
      "Gained experience with version control (Git) and project management (JIRA).",
      "Developed a strong understanding of the software development lifecycle and user-centric solutions.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Nexgenax Technologies (Department of Software Development)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2022 - present",
    points: [
      "Specialized in data science, including statistical analysis and machine learning.",
      "Utilized Python, SQL, TensorFlow, and Tableau for data analysis and visualization.",
      "Focused on data cleaning, interpretation, and deriving actionable insights",
      "Gained knowledge of data privacy, ethics, and real-world data science applications",
    ],
  },
  {
    title: "Freelancer",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 - present",
    points: [
      "Developed web and mobile applications using Java, Python, JavaScript, and C++.",
      "Collaborated with international clients to create customized software solutions.",
      "Worked with frameworks like Spring, React, Angular, and Django.",
      "Gained proficiency in cloud platforms (AWS, Google Cloud) and database systems (MySQL, MongoDB).",
    ],
  },
  {
    title: "FYP Developer",
    company_name: "Well Reputed Universities",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2023 - April 2024",
    points: [
      "Guide students through the project development lifecycle, from concept ideation to implementation, ensuring adherence to academic standards and timelines.",
      "Mentor students in selecting appropriate project topics and assist with designing, developing, and integrating relevant technologies and methodologies.",
      "Facilitate regular meetings to provide feedback, encourage critical thinking, and enhance problem-solving skills.",
      "Promote teamwork and collaboration, fostering a supportive environment that enhances learning and prepares students for future professional challenges",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Zain is an exceptional and highly skilled student with a strong expertise in computer programming and coding. His problem-solving abilities and technical proficiency consistently lead to the successful completion of every task I assign to him. His dedication to excellence and ability to deliver high-quality results make him an ideal candidate for top-tier technology companies.",
    name: "Ali Raza",
    designation: "Educationist",
    company: "Aga Khan Foundation",
    image: "https://drive.google.com/file/d/1R-mKQi9lzjj-qEiZ1WYREUpRV5MUKKz_/view?usp=drivesdk",
  },
  {
    testimonial:
      "Collaborating with Zain is consistently enjoyable, as his extensive coding expertise greatly improves the project's quality.",
    name: "Syed Nawazish",
    designation: "General Manager of IT and Telecoms",
    company: "Al Hijab ",
    image: "project_3D_developer_portfolio\src\assets\ali.png",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Saima Nisar Ali",
    designation: "Senior Medical Officer",
    company: "AES Education Foundation/AMH",
    image: "project_3D_developer_portfolio\src\assets\saima.png",
  },
];

const projects = [
  {
    name: "AI-driven traffic management solution for high-traffic periods.",
    description:
      "This **neural network-based AI** traffic management solution optimizes traffic flow during peak hours. By leveraging advanced neural networks, the system analyzes real-time data and predicts traffic patterns, allowing it to dynamically adjust traffic signals and reduce congestion. The neural networks continuously learn and adapt to changing traffic conditions, ensuring efficient responses to unpredictable patterns. This cutting-edge technology improves road safety, reduces travel time, lowers fuel consumption, and minimizes carbon emissions. Ideal for metropolitan areas and high-traffic intersections, the system enables smarter, more efficient transportation management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "FuturaFit",
    description:
      "FuturaFit is a dynamic, forward-thinking platform designed to assess and enhance employee potential within high-tech, innovative environments like Google, Meta, and FANG companies. By leveraging advanced AI, data analytics, and neural network-driven insights, FuturaFit provides deep, real-time evaluations of employee skills, adaptability, and future performance. It empowers organizations to identify the best talent, optimize team dynamics, and foster a culture of continuous growth. With its cutting-edge approach, FuturaFit ensures companies stay ahead in a competitive landscape, maximizing productivity and innovation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "NovaBot",
    description:
      "NovaBot is an advanced, AI-powered chatbot designed to enhance user interaction with intelligent, seamless communication. Built to meet the needs of high-tech environments like Google, Meta, and FANG companies, NovaBot uses state-of-the-art machine learning algorithms and natural language processing to deliver real-time, context-aware responses. With its intuitive interface and adaptability, NovaBot provides personalized support, automates tasks, and facilitates complex queries with ease. NovaBot is more than just a chatbot; it’s an intelligent assistant that elevates user experience, empowers teams, and drives efficiency across diverse platforms.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
