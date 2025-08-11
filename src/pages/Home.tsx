import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image1 from "../assets/personal.jpg";
import Rahik from "../assets/Rahik's CV.pdf";
import salefy from "../assets/salefy.jpg"
import gorulagbe from "../assets/Gorulagbe.png"
import reactquiz from "../assets/React-Quiz.png"

const featuredProjects = [
  {
    title: "Salefy",
    description:
      "A frontend-only e-commerce app with dynamic offers, bestselling products, ads, contact, and beautiful animations. Built using ReactJS and TailwindCSS.",
    image: salefy
  },
  {
    title: "GoruLagbe",
    description:
      "A digital cattle trading platform enabling auctions, listings, and direct transactions between farmers and vendors. ReactJS, Raw CSS, NodeJS, ExpressJS, MySQL.",
    image: gorulagbe
  },
  {
    title: "React Quiz",
    description:
      "Interactive quiz app with video-linked quizzes and real-time data from Firebase. Built with ReactJS and Raw CSS.",
    image: reactquiz
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8" data-aos="zoom-in" data-aos-delay="200">
              <img
                src={Image1}
                alt="Nurul Madina Rahik"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl ring-4 ring-white/20"
              />
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Hello, I'm Nurul Madina Rahik
            </h1>

            <p
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-8"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Software Engineering Undergraduate, passionate about full stack
              development, clean code,
              <br />
              and building digital products that make a difference.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 group"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={Rahik}
                download="Rahik's CV.pdf"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all hover:bg-white/5"
              >
                Download CV
                <Download className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div
              className="flex justify-center space-x-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="https://github.com/XenonR25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nm-rahik-2oo1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:rahik2535@gmail.com"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                B.Sc in Software Engineering
              </h3>
              <p className="text-slate-600">
                Shahjalal University of Science & Technology
                <br />
                CGPA: 3.68 (upto 6th Semester)
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Technologies
              </h3>
              <p className="text-slate-600">
                ReactJS, NextJS, TailwindCSS, NodeJS, ExpressJS, Java, C++, SQL,
                MySQL, MongoDB, Python
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Get In Touch
              </h3>
              <p className="text-slate-600">
                Chattogram, Bangladesh <br />
                <span className="block">rahik2535@gmail.com</span>
                <span className="block">+88 01782-753325</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Featured Work
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A selection of my recent projects showcasing full stack
              engineering, user experience design, and practical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((p, idx) => (
              <div
                key={p.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 group"
                data-aos="zoom-in"
                data-aos-delay={200 + idx * 100}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-6">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
