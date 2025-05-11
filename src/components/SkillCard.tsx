import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: number;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, level, delay }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-3">
          {icon}
          <h3 className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">
          {description}
        </p>
        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-teal-500 transition-all duration-1000 ease-out"
            style={{ width: `${level}%`, animation: 'growWidth 1.5s ease-out' }}
          ></div>
        </div>
        <div className="mt-2 flex justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">Beginner</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Expert</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;