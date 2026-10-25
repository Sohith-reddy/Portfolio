import {
  FaAws,
  FaBolt,
  FaBrain,
  FaCloud,
  FaGraduationCap,
  FaJava,
  FaServer,
  FaTrophy,
} from "react-icons/fa";
import {
  SiAngular,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiJenkins,
  SiKubernetes,
  SiLangchain,
  SiLeetcode,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
// import user_image1 from "./user-image.png";
import user_image from "./user-image_new.png"
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_sohith from "./logo_sohith.png";
import portfolio_1 from "./portfolio_1.png"
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
// import profile_img from "./profile-img.png"; //ddd
import profile_img from "./profile-img_new.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  logo_sohith,
  portfolio_1,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Shortify",
    description: "Spring Boot · Angular · PostgreSQL",
    summary:
      "Bitly-style URL shortener with collision-safe codes, link expiry and per-link click analytics.",
    imageUrl: "/projects/shortify.svg",
    github: "https://github.com/Sohith-reddy/Shortify",
    live: "https://shortify-zeta.vercel.app/",
  },
  {
    title: "Review Insight",
    description: "React · Express · Llama 3.1 · RAG",
    summary:
      "Grounds Llama-3.1 in FAISS retrieval to summarize e-commerce reviews with 30% better factual accuracy.",
    imageUrl: "/projects/review-insight.svg",
    github: "https://github.com/Sohith-reddy/ReviewSummarizer-SmartInsights",
    live: "https://smartreviewanalyzer.netlify.app/",
  },
  {
    title: "JobLens AI",
    description: "React · FastAPI · Scikit-learn · Groq",
    summary:
      "Flags fraudulent job postings and scores resume-job fit with embeddings and an LLM explanation layer.",
    imageUrl: "/projects/joblens.svg",
    github: "https://github.com/Sohith-reddy/JobLens",
    live: "https://job-lens-pgtl.vercel.app/",
  },
  {
    title: "Ginger",
    description: "Java 21 · Maven · JUnit 5",
    summary:
      "Git-inspired version control system with SHA-256 object storage, branches and three-way merges.",
    imageUrl: "/projects/ginger.svg",
    github: "https://github.com/Sohith-reddy/Ginger",
  },
];

export const serviceData = [
  {
    icon: FaServer,
    title: "Backend Engineering",
    description:
      "Production REST APIs on Spring Boot, FastAPI and Express, backed by PostgreSQL, MySQL, MongoDB and Redis.",
    link: "https://github.com/Sohith-reddy/Shortify",
  },
  {
    icon: FaBolt,
    title: "Performance & Scale",
    description:
      "Indexing, pagination, caching and query tuning that took APIs from 1.8s to 600ms and cut peak CPU by 38%.",
    link: "https://www.github.com/Sohith-reddy",
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    description:
      "Dockerized services shipped through Jenkins and GitHub Actions CI/CD to AWS and GCP.",
    link: "https://github.com/Sohith-reddy/Portfolio-Backend",
  },
  {
    icon: FaBrain,
    title: "AI & LLM Features",
    description:
      "RAG pipelines with LangChain, FAISS and SentenceTransformers, shipped where they genuinely help.",
    link: "https://github.com/Sohith-reddy/ReviewSummarizer-SmartInsights",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Java, Python, JavaScript, TypeScript, SQL",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in IT, KMIT (2022 – 2026) · CGPA 9.0",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Experience",
    description: "SDE-1 at Apptmyz, building a B2B logistics SaaS platform",
  },
];

export const experienceData = [
  {
    role: "Software Engineer (SDE-1)",
    company: "Apptmyz",
    period: "June 2026 – Present",
    points: [
      "Own end-to-end delivery of logistics modules on Spring Boot, Angular, PostgreSQL and Redis — 10K+ transactions/day.",
      "Cut API latency 1.8s → 600ms and raised throughput 45% via targeted indexing, pagination and Redis caching.",
      "Engineered real-time dispatch tracking over WebSockets with async processing, giving ops live delivery status.",
      "Reduced peak CPU 38% under load testing through batched writes, tuned SQL execution plans and profiled slow paths.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Apptmyz",
    period: "June 2025 – May 2026",
    points: [
      "Built Spring Boot REST APIs over PostgreSQL for core logistics workflows, sustaining 99.9% uptime in production.",
      "Cut API response times 40% by adding caching and rewriting the expensive queries behind the slowest endpoints.",
      "Improved Angular page load time 35% on customer-facing modules.",
      "Shipped a hybrid RAG + rule-based chatbot into enterprise workflows.",
      "Maintained Docker-based CI/CD pipelines deploying to AWS in Agile sprints.",
    ],
  },
];

export const achievementData = [
  {
    icon: SiLeetcode,
    title: "1100+ LeetCode problems",
    description: "1800+ contest rating (Top 8%)",
  },
  {
    icon: FaGraduationCap,
    title: "Top 0.5% academically",
    description: "CGPA of 9.0 in B.Tech IT",
  },
  {
    icon: FaBrain,
    title: "Amazon ML Summer School",
    description: "Selected trainee — advanced ML and transformers",
  },
  {
    icon: FaTrophy,
    title: "NPTEL Certifications",
    description:
      "IIT Madras — Silver (Python), Gold (Deep Learning); IIT Kharagpur — Silver (Cloud Computing)",
  },
];

export const toolsData = [
  { icon: FaJava, name: "Java", color: "#E76F00" },
  { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiAngular, name: "Angular", color: "#DD0031" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { icon: FaAws, name: "AWS", color: "#FF9900" },
  { icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  { icon: SiJenkins, name: "Jenkins", color: "#D24939" },
  { icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
  { icon: SiLangchain, name: "LangChain", color: "#1C3C3C" },
  { icon: SiGit, name: "Git", color: "#F05032" },
];
