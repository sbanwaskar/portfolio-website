'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Home() { 
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'); 
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
      <div className="flex flex-col items-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
      
      {/* Header */}
      <header className="p-4 w-full flex justify-end">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Hero */}
      <div className="text-center max-w-xl px-6 mt-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Full-Stack Developer building scalable, user-friendly web applications.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-gray-400">
          Experienced in React, Node.js, MongoDB, and AWS deployment.
        </p>

        <p className="mt-3 text-xs sm:text-sm text-gray-500">
          React • Node.js • MongoDB • AWS • Tailwind
        </p>
      </div>

      {/* Buttons */}
      <section className="flex flex-col items-center pt-12 pb-8">
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-200"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="px-6 py-2.5 rounded-xl border border-white/20 text-gray-300 backdrop-blur-sm hover:text-white hover:border-purple-400 hover:bg-white/5 transition duration-200"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Work</h2>
        <p className="text-center mb-6 text-base text-neutral-400">
          A featured project showcasing my skills in building intuitive,
          user-centered applications.
        </p> 

        <div className="flex justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition duration-300">            
            {/* Image */}
            <img 
              src="/affirmplanner.png"
              alt="AffirmPlanner Project"
              className="w-full h-44 object-cover rounded-md mb-6"
            />

            {/* Badge + Title */}
            <div className="text-center">
              <span className="inline-block mb-3 text-sm px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg font-medium">
                Featured Project
              </span>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                AffirmPlanner
              </h3>
            </div>

            {/* Description */}
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              AffirmPlanner is a full-stack wellness planner designed to help users manage events, track moods, and receive personalized affirmations in one focused experience.
            </p>

            {/* Features */}
            <ul className="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
              <li>• Mood tracking with personalized affirmations</li>
              <li>• Event scheduling with color-coded tags</li>
              <li>• Visual mood insights with Mood Wheel</li>
            </ul>

            {/* Tech Stack */}
            <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
              React • Node.js • Express • MongoDB • AWS (EC2, Nginx)
            </p>

            {/* Button */}
            <a
              href="https://affirmplanner.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.01] transition duration-200">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>

        <div className="max-w-3xl mx-auto text-gray-200 dark:text-gray-800 text-lg leading-8 text-center space-y-4">
          
          <p>
            Hi, I’m Shreya — a full-stack developer focused on building scalable, user-friendly web applications with clean UI and strong backend systems.
          </p>

          <p>
            I work with React, Node.js, MongoDB, and SQL, and have hands-on experience deploying full-stack applications using AWS. I focus on building efficient, scalable systems while continuously improving my skills.
          </p>

          <p>
            Let’s connect — feel free to reach out at{' '}
            <a
              href="mailto:shreyab3012@gmail.com"
              className="underline text-purple-400"
            >
              shreyab3012@gmail.com
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}