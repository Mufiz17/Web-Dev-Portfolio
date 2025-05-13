import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();
    
    const isDarkMode = document.documentElement.classList.contains('dark');
    const lineColor = isDarkMode ? 'rgba(56, 189, 248, 0.2)' : 'rgba(10, 35, 66, 0.1)';
    const nodes: { x: number; y: number; size: number; connected: boolean[] }[] = [];
    
    for (let i = 0; i < 40; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        connected: []
      });
    }
    
    nodes.forEach((node, i) => {
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - nodes[j].x, 2) + 
            Math.pow(node.y - nodes[j].y, 2)
          );
          
          if (distance < 200) {
            node.connected.push(j);
          }
        }
      }
    });
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = lineColor;
      nodes.forEach((node, i) => {
        node.connected.forEach(j => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        });
      });
      
      ctx.fillStyle = lineColor;
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      nodes.forEach(node => {
        node.x += (Math.random() - 0.5) * 0.5;
        node.y += (Math.random() - 0.5) * 0.5;
        
        if (node.x < 0) node.x = 0;
        if (node.x > canvas.width) node.x = canvas.width;
        if (node.y < 0) node.y = 0;
        if (node.y > canvas.height) node.y = canvas.height;
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = 'https://drive.google.com/file/d/1XTQ_o6OhKZeT73NFH2F6sC9r3iuNwily/view?usp=sharing';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.target = '_blank';
    link.download = 'developer-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
            Crafting <span className="text-sky-500">Digital</span> Experiences
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A portfolio showcasing modern web development, innovative solutions, and clean code practices
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-700 transition-all transform hover:scale-105"
            >
              Get in Touch
            </button>
            <button
              onClick={handleDownloadCV}
              className="bg-white dark:bg-gray-800 text-sky-500 font-medium py-3 px-6 rounded-lg border-2 border-sky-500 hover:bg-sky-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download CV
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToSkills}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;