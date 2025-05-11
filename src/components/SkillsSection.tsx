import React from 'react';
import { Code, Database, Blocks, Terminal, GitBranch, Globe, Server, Wrench } from 'lucide-react';
import SkillCard from './SkillCard';

const SkillsSection: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-sky-500" />,
      title: "Frontend",
      description: "React, Next.js, TypeScript, and modern frontend tools for building responsive web applications",
      level: 90,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: <Server className="h-8 w-8 text-sky-500" />,
      title: "Backend",
      description: "Laravel, Node.js, and Express for building robust server-side applications and APIs",
      level: 85,
      technologies: ["Laravel", "Node.js", "Express", "RESTful APIs"]
    },
    {
      icon: <Database className="h-8 w-8 text-sky-500" />,
      title: "Databases",
      description: "Experience with both SQL and NoSQL databases for efficient data management",
      level: 80,
      technologies: ["MySQL","MongoDB"]
    },
    {
      icon: <Terminal className="h-8 w-8 text-sky-500" />,
      title: "Development Tools",
      description: "Proficient with modern development tools and environments",
      level: 85,
      technologies: ["VS Code", "Git", "npm"]
    }
  ];
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My tech stack and development tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">{skill.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="mt-4">
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-sky-500 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, animation: 'growWidth 1.5s ease-out' }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;