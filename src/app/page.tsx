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
    <div className={`flex flex-col items-center min-h-screen bg-gray-900 dark:bg-white text-white dark:text-gray-900 scroll-smooth`}>

      <header className="p-4 w-full flex justify-end">
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Intro Text */}
      <div className="text-center px-4 mt-4">
        <h1 className="text-xl sm:text-2xl font-medium">
          Hi, welcome to my portfolio — showcasing my work, skills, and passion for building impactful digital experiences.
        </h1>
      </div>

      <section className="flex flex-col items-center pt-16 pb-8">
        <img 
          src="https://camo.githubusercontent.com/a69ef1e4a173201181c22ac940c8b17935229d4d45ac5276631cbf4ba3d21db4/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f646973702f3630313031343131363737303437352e363036386265666634363430612e676966" 
          alt="Hero GIF" 
          className="w-full max-w-3xl h-auto mb-6 px-4"
        />

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <a href="#projects">
            <button className="w-full sm:w-auto px-6 py-3 bg-purple-500 text-white dark:text-gray-900 text-base rounded-lg font-semibold hover:bg-purple-700 transition">
              View My Work
            </button>
          </a>
          <a href="#about">
            <button className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white dark:text-gray-900 text-base rounded-lg font-semibold hover:bg-pink-700 transition">
              Get to Know Me
            </button>
          </a>
        </div>
      </section>

      <section id="projects" className="py-12 w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-4">My Work</h2>
        <p className="text-center mb-6 text-base">
          Here&rsquo;s a project I have worked on recently.
        </p>

        <div className="flex justify-center">
          <div className="bg-gray-800 dark:bg-gray-100 rounded-lg p-6 w-full max-w-md shadow-lg">
            <img 
              src="/affirmplanner.png" 
              alt="AffirmPlanner Project" 
              className="w-full h-52 object-cover rounded-md mb-4"
            />

            <h3 className="text-xl font-semibold mb-4">AffirmPlanner</h3>
            <p className="text-base text-gray-300 dark:text-gray-700 mb-4">
              A platform to help users plan and organize their tasks effectively. 
              It features an interactive mood board and provides daily affirmations 
              based on the mood you log in, creating a personalized experience.
            </p>

            <a href="https://affirmplanner.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-2 bg-blue-500 text-white dark:text-gray-900 text-base rounded-lg font-semibold hover:bg-blue-700 transition">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get to Know Me</h2>
        <div className="max-w-3xl mx-auto text-white dark:text-gray-900 text-lg leading-7">
          <p className="mb-4">
            Hello! I&rsquo;m Shreya, a full-stack developer with a passion for building scalable and interactive web experiences. 
            I love blending creativity with technology to craft user-friendly interfaces and robust back-end systems.
          </p>
          <p className="mb-4">
            I specialize in both front-end and back-end development, with expertise in JavaScript, React, Node.js, MongoDB, and SQL. 
            I enjoy collaborating with others, learning new technologies, and continuously refining my craft to deliver impactful web solutions that make a difference.
          </p>
          <p>
            Feel free to reach out at <a href="mailto:shreyab3012@gmail.com" className="underline text-blue-400">shreyab3012@gmail.com</a> 
            if you&rsquo;d like to connect or work together on something exciting!
          </p>
        </div>
      </section>

    </div>
  );
}
