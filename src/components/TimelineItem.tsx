import React from 'react';
import { CircleDot } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  isLast: boolean;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  company, 
  period, 
  description, 
  // skills,
  isLast,
  delay
}) => {
  return (
    <div 
      className="relative pl-14"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex items-center justify-center">
        <CircleDot className="h-10 w-10 text-teal-500 p-1 bg-white dark:bg-gray-800 rounded-full z-10" />
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <span className="text-sm font-medium text-teal-600 dark:text-teal-400">{period}</span>
        </div>
        
        <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">{company}</h4>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        {/* <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default TimelineItem;