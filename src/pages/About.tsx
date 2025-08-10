import React from "react";
import { Code, Palette, Coffee, Heart } from "lucide-react";
import Image1 from "../assets/personal.jpg";

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-8">
            I’m a proactive Software Engineering undergraduate, excited to
            explore the worlds of web development and machine learning.
            Passionate about building real-world applications and expanding my
            skill set across modern technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">
          {/* Profile Image */}
          <div className="lg:col-span-1 ">
            <img
              src={Image1}
              alt="Rahik's Profile Photo"
              className="w-full rounded-2xl shadow-2xl object-contain"
            />
          </div>

          {/* About Text */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                My Journey
              </h2>
              <p className="text-slate-600 leading-7 mb-4">
                I’m currently pursuing a B.Sc in Software Engineering at
                Shahjalal University of Science & Technology. My ongoing
                academic journey has inspired me to seek opportunities to apply
                what I’ve learned in both web development and machine learning.
              </p>
              <p className="text-slate-600 leading-7">
                My projects so far span e-commerce, quiz platforms, games, and
                more — each one a step toward deeper technical expertise. I’m
                always seeking out new stacks, frameworks, and languages to
                broaden my understanding and contribute to exciting, impactful
                solutions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Looking Ahead
              </h2>
              <p className="text-slate-600 leading-7">
                I aim to explore more in the fields of machine learning and
                backend development while refining my front-end and
                collaborative skills. Being curious by nature, I’m excited about
                learning from open-source projects, communities, and every new
                technology I encounter.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            What I Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Curiosity
              </h3>
              <p className="text-slate-600 text-sm">
                Embracing new challenges and always eager to learn the next
                technology or concept.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Creative Problem Solving
              </h3>
              <p className="text-slate-600 text-sm">
                Tackling both technical and real-world problems with flexibility
                and imagination.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Continuous Learning
              </h3>
              <p className="text-slate-600 text-sm">
                Always willing to invest time in mastering new stacks, tools,
                and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Collaboration
              </h3>
              <p className="text-slate-600 text-sm">
                Believing that the best solutions are built together and through
                shared perspectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
