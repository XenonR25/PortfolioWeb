import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { MdDeveloperMode } from "react-icons/md";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Salefy",
      description:
        "Frontend-only e-commerce application with a hero section, dynamic offers, sample products, ads, and a contact section. Emphasis on UX, responsive layout, and engaging visuals.",
      image: "https://images.pexels.com/photos/686339/pexels-photo-686339.jpeg?auto=compress&w=500&h=300&fit=crop",
      category: "frontend",
      technologies: ["ReactJS", "Tailwind CSS", "data-aos"],
      liveUrl: "https://github.com/XenonR25/salefy",
      githubUrl: "https://github.com/XenonR25/salefy",
      features: [
        "Modern, visually engaging UI",
        "Sample data simulates live platform",
        "Animations & responsive design"
      ],
    },
    {
      title: "GoruLagbe",
      description:
        "A cattle marketplace platform for direct farmer-to-vendor transactions with auctions, detailed listings, and seamless communication. Scalable and user-friendly.",
      image: "https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["ReactJS", "Raw CSS", "NodeJS", "ExpressJS", "MySQL"],
      liveUrl: "https://github.com/Rifat-2020831030/gorulagbe/tree/rahik",
      githubUrl: "https://github.com/Rifat-2020831030/gorulagbe/tree/rahik",
      features: [
        "Cattle auctions and sales",
        "Dashboard, add/show, communication",
        "Responsive & scalable"
      ],
    },
    {
      title: "React-Quiz",
      description:
        "Interactive quiz app where users choose video topics and take quizzes with real-time data from Firebase. Responsive, engaging, and tracks user progress.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=500&h=300&fit=crop",
      category: "frontend",
      technologies: ["ReactJS", "Raw CSS", "Firebase"],
      liveUrl: "https://github.com/XenonR25/React-Quiz",
      githubUrl: "https://github.com/XenonR25/React-Quiz",
      features: [
        "Firebase-powered real-time quizzes",
        "Progress bars & feedback",
        "Mobile and desktop optimized"
      ],
    },
    {
      title: "BrickBreaker",
      description:
        "Classic arcade brick breaker game with paddle control, ball physics, scoring, and classic design. Built with teamwork for smooth gameplay.",
      image: "https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&w=500&h=300&fit=crop",
      category: "desktop",
      technologies: ["Java", "JavaFX"],
      liveUrl: "https://github.com/XenonR25/GameProject",
      githubUrl: "https://github.com/XenonR25/GameProject",
      features: [
        "Ball & brick collision physics",
        "Classic design and animation",
        "Scoring and smooth controls"
      ],
    },
    {
      title: "Mission Horizon",
      description:
        "Multi-level space shooter game with enemy ships, obstacles, sound, animations, scores, and lives. Focus on engaging, balanced gameplay.",
      image: "https://images.pexels.com/photos/3945685/pexels-photo-3945685.jpeg?auto=compress&w=500&h=300&fit=crop",
      category: "desktop",
      technologies: ["C++", "SFML"],
      liveUrl: "https://github.com/XenonR25/MISSION-HORIZON",
      githubUrl: "https://github.com/XenonR25/MISSION-HORIZON",
      features: [
        "Multiple levels & increasing difficulty",
        "Sound and animation effects",
        "Score and lives system"
      ],
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'desktop', label: 'Desktop/Game' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-8">
            A showcase of my past work across web, platforms, and games. All projects are open-source and reflect my focus on clean code, performance, and UX.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
                activeFilter === filter.key
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <Filter className="w-4 h-4 inline-block mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              data-aos="zoom-in"
              data-aos-delay={index * 100 + 200}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-800 transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4 leading-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-slate-600">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4" data-aos="fade-up" data-aos-delay="300">
              Interested in Working Together?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="500">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <MdDeveloperMode className="w-5 h-5 mr-2" />
                Start a Project
              </a>
              <a
                href="https://github.com/XenonR25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;