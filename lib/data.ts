import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/11.jpeg";
import rmtdevImg from "@/public/22.jpeg";
import wordanalyticsImg from "@/public/33.jpeg";


export const configFirebase = {
  apiKey: "AIzaSyC0p_mIqDAzqA0Ir_jrclMLThFwEKZbpz8",
  authDomain: "myapps-b89fd.firebaseapp.com",
  databaseURL: "https://myapps-b89fd-default-rtdb.firebaseio.com",
  projectId: "myapps-b89fd",
  storageBucket: "myapps-b89fd.appspot.com",
  messagingSenderId: "196326840582",
  appId: "1:196326840582:web:93bf0915e36c5c1ca42687",
  measurementId: "G-T7CVHTGLDD"
} as const;


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from SMP NEGRI 1 BALIKPAPAN",
    location: "Balikpapan, ID",
    description:
      "I graduated after 3 year of studying. ",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Student in SMKS TELKOM MALANG",
    location: "Malang, ID",
    description:
      "I studied in SMKS TELKOM MALANG for 2 years. I learned about programming, networking, and multimedia.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2024",
  },
  {
    title: "Freelance Developer",
    location: "Malang, ID",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Selasar Wonosalam",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. Users can give public feedback to companies.",
    tags: ["Nuxt.js", "Vue.js", "mysql", "Tailwind",],
    imageUrl: wordanalyticsImg ,
  },
  {
    title: "Laundry App",
    description:
      "Laundry app for a local business. Users can schedule a pickup and delivery time for their laundry. Admins can manage orders and customers.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Alacart POS",
    description:
      "POS system for a local restaurant. Admins can manage menu items, orders, and customers. Users can order food and pay online.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl:  corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
