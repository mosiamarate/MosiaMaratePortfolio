// src/utils/data/data.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaMicrosoft,
  FaGithub,
} from "react-icons/fa";
import { SiCisco } from "react-icons/si";

/* ============================
  Skills
  ============================ */
export const skills = [
  { id: 1, name: "HTML5", icon: FaHtml5, level: "80%" },
  { id: 2, name: "CSS3", icon: FaCss3Alt, level: "80%" },
  { id: 3, name: "JavaScript", icon: FaJsSquare, level: "40%" },
  { id: 4, name: "React", icon: FaReact, level: "30%" },
  { id: 5, name: "Python", icon: FaPython, level: "60%" },
  { id: 6, name: "Networking", icon: SiCisco, level: "75%" },
  { id: 7, name: "GitHub", icon: FaGithub, level: "80%" },
  { id: 8, name: "Git", icon: FaGitAlt, level: "60%" },
  { id: 9, name: "Azure", icon: FaMicrosoft, level: "50%"},
  { id: 10, name: "Packet Tracer", icon: SiCisco, level: "70%"},
];

/* ============================
  Projects
  ============================ */

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React & custom data.js.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/mosiamarate/MosiaMaratePortfolio",
    live: "https://mosiaportfolio.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Roadmap",
    description: "Tech learning roadmap website using HTML, CSS & JS.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/mosiamarate/TechRoadMap",
    live: "https://thetechroadmap.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Flippy Bird Game",
    description: "Simple Flappy Bird game using Python and Pygame.",
    tech: ["Python", "Pygame"],
    github: "https://github.com/mosiamarate/Flappy-Bird",
    live: null,
    image: "",
    featured: false,
  },
];


/* ============================
  Education
  ============================ */
export const education = [
  {
    id: 1,
    school: "Central University of Technology",
    degree: "Diploma in Computer Networking",
    start_year: 2022,
    end_year: 2025,
    description:
      "Focused on networking, VOIP, routing & switching, and system administration.",
  },

  {
    id: 2,
    school: "CISCO Networking Academy",
    degree: "Networking Basics Course",
    start_year: 2024,
    end_year: 2024,
    description:
      "Completed CISCO's Networking Basics course covering fundamental networking concepts.",
    
  },
  
  {
    id: 3,
    school: "Microsoft Learn",
    degree: "Microsoft Azure Fundamentals",
    start_year: 2025,
    end_year: 2025,
    description:
      "Completed Microsoft Azure Fundamentals course covering cloud concepts and core Azure services.",
  },

  {
    id: 4,
  school: "Central University of Technology",
  degree: "Advanced Diploma in Computer Networking",
  start_year: 2026,
  end_year: 2026,
  description: "Pursuing advanced studies in computer networking, focusing on network security, cloud computing, and advanced routing protocols.",
  },
];

/* ============================
  Certifications
  ============================ */
export const certifications = [
  {
    id: 1,
    title: "Networking Basics",
    issuer: "CISCO Networking Academy",
    issue_date: "June 2024",
    icon: SiCisco,
    description:
      "Completed CISCO's Networking Basics course covering fundamental networking concepts.",
    verfification_link:
      "https://www.credly.com/badges/d356ac4c-40c0-4d6b-8d8e-ed8cd2b671cc/public_url",
  },
  {
    id: 2,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft Learn",
    issue_date: "October 2025",
    icon: FaMicrosoft,
    description:
      "Completed Microsoft Azure Fundamentals course covering cloud concepts and core Azure services.",
    verfification_link:
      "https://learn.microsoft.com/api/credentials/share/en-us/MosiaGideonMarate-3971/611DE0C0CEC24C6F?sharingId=793D53CB630EE84B",
  },
  {
    id: 3,
    title: "Network Security",
    issuer: "CISCO Networking Academy",
    issue_date: "June 2025",
    icon: SiCisco,
    description:
      "Completed CISCO's Network Security course covering essential network security principles and practices.",
    verfification_link:
      "https://www.credly.com/badges/016ce486-b58f-4382-b7e3-f9765ad635d0/public_url",
  },

  {
    id: 4,
    title: "Introduction to Modern AI",
    issuer: "CISCO Networking Academy",
    issue_date: "May 2025",
    icon: SiCisco,
    description:
      "Completed CISCO's Introduction to Modern AI course covering fundamental AI concepts and applications.",
    verfification_link:
      "https://www.credly.com/badges/09c36d3b-5c96-4af0-9d7b-25ad60c51201/public_url",
  },

  {
    id: 5,
    title: "Introduction to Cybersecurity",
    issuer: "CISCO Networking Academy",
    issue_date: "April 2024",
    icon: SiCisco,
    description:
      "Completed CISCO's Introduction to Cybersecurity course covering fundamental cybersecurity concepts and practices.",
    verfification_link:
      "https://www.credly.com/badges/750641b7-9bd0-4d8a-bdf5-3225086ce8ed/public_url"
  },
];


/* ============================
  Experience
  ============================ */
export const experience = [

  {
    id: 1,
    company: "Central University of Technology",
    role: "IT Student Assistant (Part-time)",
    start_date: "Mar 2025",
    end_date: " Nov 2025",
    description:
      "Assist students with IT issues, maintain computer labs, and support faculty with tech needs.",
  },

  {
    id: 2,
    company: "VermiVillage",
    role: "Front-End Developer & Digital Strategist",
    start_date: "Dec 2024",
    end_date: "Present",
    description:
      "Worked on SEO, AdSense strategy, and improving VermiVillage's WIX-based site.",
  },

  {
    id: 3,
    company: "Central University of Technology - Poetry Association",
    role: "Public Relation Officer",
    start_date: "Feb 2023",
    end_date: "Nov 2023",
    description:
      "Managed social media, organized events, and promoted the association on campus.",
  },

  {
    id: 4,
    company: "Phehello Secondary School",
    role: "Education Assistant - Mathematics",
    start_date: "Oct 2021",
    end_date: "Feb 2022",
    description:
      "Assisted Grade 11 students and teachers with mathematics concepts and exam preparation.",
  },
];

/* ============================
  Contact
  ============================ */
export const contact = [
  { id: 1, type: "phone", value: "+27 81 470 2140", link: "tel:+27814702140" },
  {
    id: 2,
    type: "email",
    value: "mosiamarate@gmail.com",
    link: "mailto:mosiamarate@gmail.com",
  },
  {
    id: 3,
    type: "linkedin",
    value: "linkedin.com/in/mosiamarate",
    link: "https://linkedin.com/in/mosiamarate",
  },
  {
    id: 4,
    type: "github",
    value: "github.com/mosiamarate",
    link: "https://github.com/mosiamarate",
  },
  {
    id: 5,
    type: "instagram",
    value: "@mosiamarate",
    link: "https://instagram.com/mosiamarate",
  },
];
