import { FaAws, FaBolt, FaBrain, FaCloud, FaGraduationCap, FaJava, FaServer, FaTrophy } from "react-icons/fa";
import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiHibernate,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiLangchain,
  SiLeetcode,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import user_image from "./user-image_new.png";
import profile_img from "./profile-img_new.png";

export const assets = {
  user_image,
  profile_img,
};

export const links = {
  github: "https://github.com/Sohith-reddy",
  linkedin: "https://www.linkedin.com/in/sohithreddy/",
  leetcode: "https://leetcode.com/u/sohith_reddy01/",
  email: "sohithreddy33@gmail.com",
  resume: "/Resume.pdf",
};

export const GITHUB_USERNAME = "Sohith-reddy";
export const LEETCODE_USERNAME = "sohith_reddy01";

export const heroStats = [
  { value: "10K+", label: "transactions / day" },
  { value: "600ms", label: "API latency, from 1.8s" },
  { value: "−38%", label: "peak CPU" },
  { value: "1100+", label: "LeetCode solved" },
];

export const infoList = [
  {
    title: "Role",
    description: "Software Engineer (SDE-1) at Apptmyz, building a B2B logistics SaaS platform",
  },
  {
    title: "Education",
    description: "B.Tech in Information Technology, KMIT (2022 – 2026) · CGPA 8.95",
  },
  {
    title: "Focus",
    description: "Backend systems, performance, distributed and real-time systems",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "SQL" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Express.js", icon: SiExpress },
      { name: "Hibernate / JPA", icon: SiHibernate, color: "#BCAE79" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Query optimization" },
      { name: "Indexing & caching" },
    ],
  },
  {
    title: "Distributed Systems",
    items: [
      { name: "Microservices" },
      { name: "Event-driven architecture" },
      { name: "WebSockets" },
      { name: "Concurrency" },
      { name: "Real-time systems" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "RxJS" },
    ],
  },
  {
    title: "AI & LLM",
    items: [
      { name: "RAG" },
      { name: "LangChain", icon: SiLangchain },
      { name: "FAISS" },
      { name: "SentenceTransformers" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    ],
  },
  {
    title: "Core CS",
    items: [
      { name: "Data Structures & Algorithms" },
      { name: "System Design" },
      { name: "OOP" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ],
  },
];

/* ------------------------------------------------------------------
   Services
   ------------------------------------------------------------------ */
export const serviceData = [
  {
    icon: FaServer,
    title: "Backend Engineering",
    description:
      "Production REST APIs on Spring Boot, Gin ,FastAPI and Express, backed by PostgreSQL, MySQL, MongoDB and Redis.",
    link: "https://github.com/Sohith-reddy/Portfolio-Backend",
  },
  {
    icon: FaBolt,
    title: "Performance & Scale",
    description:
      "Indexing, pagination, caching and query tuning that took APIs from 1.8s to 600ms and cut peak CPU by 38%.",
    link: "#experience",
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    description: "Dockerized services shipped through Jenkins and GitHub Actions CI/CD to AWS and GCP.",
    link: "https://github.com/Sohith-reddy/Portfolio-Backend",
  },
  {
    icon: FaBrain,
    title: "AI & LLM Features",
    description:
      "RAG pipelines with LangChain, FAISS and SentenceTransformers, shipped to production where they genuinely help.",
    link: "https://github.com/Sohith-reddy/ReviewSummarizer-SmartInsights",
  },
];

export const experienceData = [
  {
    role: "Software Engineer (SDE-1)",
    company: "Apptmyz",
    period: "June 2026 – Present",
    current: true,
    stack: ["Spring Boot", "Angular", "PostgreSQL", "Redis", "WebSockets"],
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
    stack: ["Spring Boot", "PostgreSQL", "Angular", "Docker", "AWS", "RAG"],
    points: [
      "Built Spring Boot REST APIs over PostgreSQL for core logistics workflows, sustaining 99.9% uptime in production.",
      "Cut API response times 40% by adding caching and rewriting the expensive queries behind the slowest endpoints.",
      "Improved Angular page load time 35% on customer-facing modules; debugged production incidents with senior engineers.",
      "Shipped a hybrid RAG + rule-based chatbot into enterprise workflows — retrieval for answers, rules for critical paths.",
      "Maintained Docker-based CI/CD pipelines deploying to AWS, and took features through code review and testing in Agile sprints.",
    ],
  },
  {
    role: "Full Stack & UI/UX Developer Intern",
    company: "Wisemango",
    period: "May 2025 – June 2025",
    stack: [
      "Node.js",
      "React",
      "JavaScript",
      "REST APIs",
      "Database Management",
      "CI/CD",
      "SonarQube",
      "Docker",
      "Linux",
      "AWS",
      "RAG"
    ],
    points: [
      "Developed full-stack web application features using React and Node.js, integrating frontend interfaces with backend APIs and database services.",
      "Designed and implemented responsive user interfaces, improving application usability, accessibility, and overall user experience.",
      "Worked on backend functionality, REST API integration, and database management to support application workflows and data processing.",
      "Contributed to AI-powered applications involving Retrieval-Augmented Generation (RAG), web scraping, text summarization, sentiment analysis, and intelligent job-resume matching.",
      "Integrated code quality and deployment workflows using SonarQube, CI/CD pipelines, and deployment hooks; worked with Docker, Linux, and AWS environments."
    ],
  },
];

export const achievementData = [
  {
    icon: SiLeetcode,
    title: "1100+ LeetCode problems",
    description: "Dynamic programming, graphs and trees — live stats below.",
  },
  {
    icon: FaGraduationCap,
    title: "Top 0.5% academically",
    description: "B.Tech in Information Technology with a CGPA of 9.0.",
  },
  {
    icon: FaBrain,
    title: "Amazon ML Summer School",
    description: "Selected trainee — advanced ML, transformers and real-world automation systems.",
  },
  {
    icon: FaTrophy,
    title: "NPTEL certifications",
    description: "IIT Madras — Silver (Python), Gold (Deep Learning); IIT Kharagpur — Silver (Cloud Computing).",
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend & Systems" },
  { id: "ai", label: "AI & ML" },
  { id: "fullstack", label: "Full Stack" },
];

export const projectData = [
  {
    title: "Shortify",
    tagline: "URL shortening service",
    categories: ["backend", "fullstack"],
    featured: true,
    description:
      "A Bitly-style shortener built end-to-end — collision-safe code generation, link expiry and per-link click analytics behind a Spring Boot REST API, with an Angular dashboard on top.",
    highlights: [
      "Collision-safe short-code generation",
      "Link expiry and per-link click analytics",
      "HikariCP pool tuning on the JPA/Hibernate layer",
    ],
    stack: ["Java 21", "Spring Boot", "Angular", "PostgreSQL", "JPA/Hibernate"],
    language: { name: "Java", color: "#b07219" },
    live: "https://shortify-zeta.vercel.app/",
    github: null,
    accent: ["#ff6b6b", "#ffb36b"],
  },
  {
    title: "JobLens AI",
    tagline: "Job-scam detection & resume fit",
    categories: ["ai", "fullstack"],
    pinned: true,
    description:
      "Detects fraudulent job postings and scores resume–job fit by pairing a logistic-regression classifier with SentenceTransformers embeddings and a Groq LLM explanation layer.",
    highlights: [
      "Ensemble: embeddings + logistic regression + weighted rules",
      "PDF resume parsing with fit and credibility scores",
      "Multi-stage job-description extraction from live URLs",
    ],
    stack: ["React", "FastAPI", "Supabase", "Scikit-learn", "SentenceTransformers", "Groq"],
    language: { name: "Python", color: "#3572A5" },
    live: "https://job-lens-pgtl.vercel.app/",
    github: "https://github.com/Sohith-reddy/JobLens",
    accent: ["#7f5af0", "#2cb1bc"],
  },
  {
    title: "Review Insight",
    tagline: "RAG review summarizer",
    categories: ["ai", "fullstack"],
    pinned: true,
    description:
      "Grounds Llama-3.1 in FAISS vector retrieval to summarize e-commerce reviews, lifting factual accuracy 30% over the ungrounded baseline, with an automated scraping pipeline feeding it.",
    highlights: [
      "30% higher factual accuracy than the ungrounded baseline",
      "OAuth authentication and rate-limited REST APIs",
      "Automated review-scraping pipeline",
    ],
    stack: ["React", "Express", "MongoDB", "Flask", "Llama 3.1", "FAISS"],
    language: { name: "JavaScript", color: "#f1e05a" },
    live: "https://smartreviewanalyzer.netlify.app/",
    github: "https://github.com/Sohith-reddy/ReviewSummarizer-SmartInsights",
    accent: ["#f72585", "#7209b7"],
  },
  {
    title: "Ginger",
    tagline: "Version control system in Java",
    categories: ["backend"],
    pinned: true,
    description:
      "A Git-inspired local version control system — content-addressed SHA-256 object storage, a persistent staging index, branches and three-way merges with conflict markers.",
    highlights: [
      "Content-addressed object store (SHA-256)",
      "status, log, diff, checkout, branch and switch",
      "Three-way merge with conflict markers",
    ],
    stack: ["Java 21", "Maven", "JUnit 5"],
    language: { name: "Java", color: "#b07219" },
    github: "https://github.com/Sohith-reddy/Ginger",
    accent: ["#f9a826", "#e85d04"],
  },
  {
    title: "Portfolio",
    tagline: "This site + visit-tracking backend",
    categories: ["fullstack", "backend"],
    pinned: true,
    description:
      "The site you're on: Next.js with a Three.js background and live LeetCode / GitHub stats, backed by a Spring Boot service that records visits.",
    highlights: [
      "Live LeetCode and GitHub heatmaps, cached with ISR",
      "Three.js network-graph background",
      "Spring Boot visit tracker on GCP",
    ],
    stack: ["Next.js", "Three.js", "Tailwind CSS", "Spring Boot"],
    language: { name: "JavaScript", color: "#f1e05a" },
    live: "https://www.sohithreddy.dev/",
    github: "https://github.com/Sohith-reddy/Portfolio",
    accent: ["#0071e3", "#42a5f5"],
  },
];
