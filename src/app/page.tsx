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
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition"
        >
          View Projects
        </a>

        <a
          href="#about"
          className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-purple-400 transition"
        >
          Contact Me
        </a>
      </div>

      {/* Projects */}
      <section id="projects" className="py-16 w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-4">My Work</h2>
        <p className="text-center mb-8 text-gray-500">
          A featured project showcasing my skills in building intuitive applications.
        </p>

        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-700">

            <img
              src="/affirmplanner.png"
              alt="AffirmPlanner"
              className="w-full h-44 object-cover rounded-md mb-6"
            />

            <div className="text-center">
              <span className="inline-block mb-3 text-sm px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg">
                Featured Project
              </span>

              <h3 className="text-2xl font-bold mb-3">
                AffirmPlanner
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
              Full-stack wellness planner with mood tracking, affirmations, and event scheduling.
            </p>

            <ul className="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
              <li>• Mood tracking</li>
              <li>• Event scheduling</li>
              <li>• Mood insights</li>
            </ul>

            <p className="text-xs text-gray-500 mb-4">
              React • Node • MongoDB • AWS
            </p>

            <a
              href="https://affirmplanner.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>

        <div className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            Hi, I’m Shreya — a full-stack developer focused on building scalable, user-friendly applications.
          </p>

          <p>
            I work with React, Node.js, MongoDB, and AWS, and enjoy building clean UI with strong backend systems.
          </p>

          <p>
            Let’s connect —{' '}
            <a href="mailto:shreyab3012@gmail.com" className="text-purple-500 underline">
              shreyab3012@gmail.com
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}