import React from 'react';
import { Code, Palette, Server, Globe, Database, Cloud } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiJunit5,
  SiJest,
  SiSelenium,
  SiFigma,
  SiPostman,
  SiGithub,
  SiGit,
  SiCanva,
  SiMui,
  SiFastapi
} from 'react-icons/si';
import { FaUserFriends } from 'react-icons/fa';
import { BiLogoVisualStudio, BiLogoJava } from "react-icons/bi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "gray",
      skills: [
        { name: "React", icon: <SiReact className="text-sky-500 mr-2" />, level: 80 },
        { name: "Next.js", icon: <SiNextdotjs className="text-black mr-2" />, level: 70 },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 mr-2" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500 mr-2" />, level: 75 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 mr-2" />, level: 80 },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600 mr-2" />, level: 85 },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600 mr-2" />, level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "gray",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-700 mr-2" />, level: 75 },
        { name: "Express", icon: <SiExpress className="text-black mr-2" />, level: 70 },
        { name: "Java", icon: <BiLogoJava className="text-red-700 mr-2" />, level: 70 },
        { name: "Python", icon: <SiPython className="text-yellow-500 mr-2" />, level: 70 },
        { name: "C/C++", icon: <SiCplusplus className="text-blue-800 mr-2" />, level: 65 },
        { name: "API Design (REST)", icon: <Server className="w-4 h-4 text-blue-400 mr-2 inline" />, level: 75 },
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-blue-400 mr-2 inline" />, level: 60 }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-8 h-8" />,
      color: "gray",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600 mr-2" />, level: 75 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 mr-2" />, level: 70 },
        { name: "SQL", icon: <Database className="w-4 h-4 text-purple-500 mr-2 inline" />, level: 75 }
      ]
    },
    {
      title: "Testing & QA",
      icon: <Cloud className="w-8 h-8" />,
      color: "gray",
      skills: [
        { name: "JUnit", icon: <SiJunit5 className="text-green-700 mr-2" />, level: 70 },
        { name: "Mockito", icon: <BiLogoJava className="text-red-700 mr-2" />, level: 65 },
        { name: "Jest", icon: <SiJest className="text-red-500 mr-2" />, level: 65 },
        { name: "Selenium", icon: <SiSelenium className="text-green-500 mr-2" />, level: 60 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-8 h-8" />,
      color: "gray",
      skills: [
        { name: "Figma", icon: <SiFigma className="text-violet-600 mr-2" />, level: 65 },
        { name: "Canva", icon: <SiCanva className="text-blue-700 mr-2" />, level: 85 },
        { name: "UI/UX Design", icon: <Palette className="w-4 h-4 text-emerald-500 mr-2 inline" />, level: 70 },
        { name: "Postman", icon: <SiPostman className="text-orange-400 mr-2" />, level: 70 },
        { name: "Responsive Design", icon: <SiMui className="text-blue-700 mr-2" />, level: 85 }
      ]
    },
    {
      title: "Development Practices",
      icon: <Code className="w-8 h-8" />,
      color: "gray",
      skills: [
        {
          name: "Git / GitHub",
          icon: (
            <>
              <SiGit className="text-orange-600 mr-1 inline" />{' '}
              <SiGithub className="text-black mr-2 inline" />
            </>
          ),
          level: 85
        },
        { name: "Team Collaboration", icon: <FaUserFriends className="text-pink-700 mr-2" />, level: 80 },
        { name: "Documentation", icon: <BiLogoVisualStudio className="text-blue-700 mr-2" />, level: 75 },
        { name: "Code Review", icon: <Code className="w-4 h-4 text-slate-600 mr-2 inline" />, level: 70 }
      ]
    }
  ];

  // All gray colors for box/progress
  const getColorClasses = () => ({
    bg: 'bg-slate-100',
    text: 'text-slate-700',
    progress: 'bg-slate-800'
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Skills & Technologies
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-8">
            Here’s a brief overview of the stacks and practices I’ve learned and worked with so far.
            I’m always open to expanding my knowledge and diving into new tools, frameworks, and domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses();
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center mr-4`}>
                    <div className={`${colorClasses.text}`}>
                      {category.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-700 flex items-center">
                          {skill.icon}
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div
          className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Exploring & Growing</h2>
            <p className="text-slate-300 max-w-3xl mx-auto leading-7">
              As a Software Engineering student, I’m passionate about learning, experimenting, and taking on real-life challenges.
              Lately, I’m especially interested in expanding my backend skills and exploring the exciting world of machine learning.
              My journey is just getting started—and I’m eager to add more stacks and technologies to my toolbox!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;