import React from 'react';
import TimelineItem from './TimelineItem';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Basic programming mentor",
      company: "SMK TI BAZMA",
      period: "Jun 2024",
      description: "During this assignment, I had the opportunity to guide junior students in understanding the basics of programming.",
      // skills: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Secretary of Student Council",
      company: "SMK TI BAZMA",
      period: "May 2023 - Oct 2024",
      description: "Manage organizational administration, record meeting minutes, and support smooth communication and coordination of OSIS activities.",
      // skills: ["React", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      title: "Treasurer - BIZMAESTRO ",
      company: "SMK TI BAZMA",
      period: "Sept 2023 - Juni 2024",
      description: "A key role in strategic and accountable planning, management and reporting of the organization's finances.",
      // skills: ["JavaScript", "HTML/CSS", "Git", "Agile"]
    },
    {
      title: "Resilience & Leadership Training",
      company: "Kopassus",
      period: "Des 2024",
      description: "Taking training that builds discipline, teamwork, mental toughness, and leadership skills under pressure.",
      // skills: ["Data Structures", "Algorithms", "Web Development", "Database Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Experience & Education</h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional journey in software development
          </p> */}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                  // skills={exp.skills}
                  isLast={index === experiences.length - 1}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;