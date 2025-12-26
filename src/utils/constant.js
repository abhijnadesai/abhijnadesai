// project images
import Project1 from '../assets/project-1.png';
import Project2 from '../assets/project-2.png';
import Project3 from '../assets/project-3.png';

// skills images
import Html from '../assets/html5.svg';
import Css from '../assets/css.svg';
import Js from '../assets/javascript.svg';
import React from '../assets/react.svg';
import Node from '../assets/nodejs.svg';
import Java from '../assets/java.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Python from '../assets/python.svg';

export const projects = [
  {
    id: 1,
    title: 'SportzFury',
    description:
      'SportzFury is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that simplifies sports registration and student data management. The platform allows students to register for different sports events, while securely storing and organizing their details in a centralized database.',
    image: Project1,
    stack: ['React', 'Mantine UI', 'REST APIs'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://www.google.com',
  },

  {
    id: 2,
    title: 'PyRacer',
    description:
      'This is a simple Python-based car game built to understand core game logic and programming fundamentals. The game focuses on player controls, movement mechanics, and real-time input handling, making it an interactive way to apply Python concepts.',

    image: Project2,
    stack: ['Python', 'Control Flow', 'Interactive Gameplay'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://www.google.com',
  },

  {
    id: 3,
    title: 'Tomato',
    description:
      'This Food Delivery System is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) that enables users to browse food items, place orders, and manage deliveries through a seamless digital experience.',
    image: Project3,
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://www.google.com',
  },
];

export const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: Html,
  },

  {
    id: 2,
    name: 'CSS',
    icon: Css,
  },

  {
    id: 3,
    name: 'JavaScript',
    icon: Js,
  },

  {
    id: 4,
    name: 'React',
    icon: React,
  },

  {
    id: 5,
    name: 'Node',
    icon: Node,
  },

  {
    id: 6,
    name: 'Java',
    icon: Java,
  },

  {
    id: 7,
    name: 'Tailwind',
    icon: Tailwind,
  },

  {
    id: 8,
    name: 'Python',
    icon: Python,
  },
];
