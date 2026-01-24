import PortfolioProjectImg from '../../assets/images/portfolioproject.png';
import WeatherProjectImg from '../../assets/images/WeatherProject.png';
import EcommProjectImg from '../../assets/images/E-commProject.png';
import SchoolProjectImg from '../../assets/images/SchoolProject.png';


export const ProjectData = [
    {
        image: PortfolioProjectImg,
        title: "Portfolio Website",
        description: "A personal portfolio website featuring a modern, responsive and visually engaging layout, smooth navigation, and organized sections to present projects, experience, skills and contact information in a clear and professional manner.",
        tools: ["React", "Tailwind", "CSS", "Typescript"],
        link: "https://github.com/anandramaswami/My-Portfolio",
    },
    {
        image: EcommProjectImg,
        title: "E-commerce Platform",
        description: "A front-end–oriented E-Commerce application featuring dynamic product listings fetched via APIs, a shopping cart and integrated payment flow that redirects to an external payment application and back to the platform after successful transaction completion.",
        tools: ["React", "Tailwind", "CSS", "Typescript", "RestAPI"],
        link: "https://github.com/anandramaswami/E-Commerce",  
    },
    {
        image: WeatherProjectImg,
        title: "Weather App",  
        description: "A responsive weather application designed with a clean and user-friendly interface. Allows users to search any city to view real-time weather conditions. Displays detailed hourly updates and day-wise forecasts for better planning and usability.",
        tools: ["React", "Tailwind", "Typescript"],
        link: "https://github.com/anandramaswami/Weather-App",  
    },
    { 
        image: SchoolProjectImg,
        title: "School Fees-Management System",
        description: "A comprehensive school fee management system containing an admin dashboard to manage students, fee structures, and payment records, while tracking pending and highlighting payment status for effective financial monitoring.",
        tools: ["HTML", "CSS", "Django"],
        link: "https://github.com/anandramaswami/DjangoPraticalTest",
    }
];