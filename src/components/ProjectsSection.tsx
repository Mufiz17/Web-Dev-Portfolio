import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with Laravel, Node.js, and MySQL. Implemented features like user authentication, product management, and payment processing.",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Laravel", "Node.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates using WebSocket technology and React for the frontend.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Express", "MongoDB"],
      link: "#"
    },
    {
      title: "Management of Dormitory Activities",
      description: "Developed a web-based system to manage dormitory activities, including scheduling, task coordination, and resident monitoring using TypeScript and REST API.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["TypeScript", "REST API", "JavaScript", "Tailwind Css"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Developed a task management system using React.js and Tailwind CSS, featuring task creation, tracking, and real-time updates for efficient workflow management.",
      image: "https://images.pexels.com/photos/7693745/pexels-photo-7693745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["ReactJs", "JavaScript XML", "Tailwind Css", "Mobile Dev"],
      link: "#"
    },
    {
      title: "Finance App",
      description: "Developed a finance management application to track expenses, manage budgets, and generate financial summaries using JavaScript.",
      image: "https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Created a tool that generates personalized portfolio websites from user data with customizable themes.",
      image: "https://images.pexels.com/photos/4087468/pexels-photo-4087468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["TypeScript", "REST API", "JavaScript", "Tailwind Css"],
      link: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my best work in web development and software engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;