import React from "react";
import { Users, Facebook, Mail } from "lucide-react";
import { FaFacebookSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";

const thumbnailUrl =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80"; // Replace with your image

const facebookLinks = [
  {
    label: "Stage Performance | University Event",
    url: "https://www.facebook.com/yourorgpage/posts/123456789",
    type: "Performance",
  },
  {
    label: "Islamic Song Compilation Video",
    url: "https://www.facebook.com/yourorgpage/videos/234567890",
    type: "Video",
  },
  {
    label: "Practice Session Highlights",
    url: "https://www.facebook.com/yourorgpage/posts/345678901",
    type: "Practice",
  },
];

const connectLinks = [
  {
    icon: <FaFacebookSquare className="text-blue-600 w-6 h-6" />,
    label: "Facebook Page",
    url: "https://facebook.com/ongikarclub", // Replace
  },
  {
    icon: <FaYoutube className="text-red-600 w-6 h-6" />,
    label: "YouTube Channel",
    url: "https://www.youtube.com/channel/ongikar", // Replace if you have
  },
  {
    icon: <FaWhatsapp className="text-green-600 w-6 h-6" />,
    label: "WhatsApp Group",
    url: "https://wa.me/88xxxxxxxxxxx", // Replace if you have (optional)
  },
  {
    icon: <Mail className="text-emerald-600 w-6 h-6" />,
    label: "Email",
    url: "mailto:ongikarsangshkritik@gmail.com", // Replace if you have
  },
];

const Activities = () => (
  <div className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-10">
      {/* Banner & Header */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 flex flex-col md:flex-row"
        data-aos="fade-in"
      >
        <img
          src={thumbnailUrl}
          alt="Ongikar Shangskritik Shongshod"
          className="object-cover h-64 w-full md:w-2/5"
        />
        <div className="bg-white bg-opacity-90 backdrop-blur p-7 md:p-10 flex-1 flex flex-col justify-center">
          <div className="flex items-center mb-2 gap-2">
            <Users className="w-8 h-8 text-emerald-600" />
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
              Ongikar Shangskritik Shongshod
            </h1>
          </div>
          <span className="inline-block px-4 py-1 mt-2 mb-3 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-xs md:text-sm tracking-wide shadow">
            Coordinator
          </span>
          <p className="text-slate-700 text-base md:text-lg mt-2 leading-relaxed">
            An Islamic cultural student organization dedicated to composing and performing Islamic songs, organizing events, and establishing Islamic culture in our society. We strive to spread the beauty of Islamic arts and values through creative teamwork, event performances, and collaboration with the community.
          </p>

          {/* Connect Row */}
          <div className="flex flex-wrap gap-4 mt-5">
            {connectLinks.map((l, idx) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border bg-white border-slate-200 rounded-lg px-3 py-2 shadow transition hover:border-emerald-200 hover:bg-emerald-50"
                title={l.label}
                data-aos="fade-up"
                data-aos-delay={250 + idx * 60}
              >
                {l.icon}
                <span className="ml-2 text-sm font-medium text-slate-700 hover:text-emerald-700">
                  {l.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center my-10">
        <div className="flex-1 border-t border-emerald-100" />
        <span className="mx-4 text-slate-500 text-xs tracking-wider">
          Event Highlights & Media
        </span>
        <div className="flex-1 border-t border-emerald-100" />
      </div>

      {/* Showcase / Cards */}
      <div className="grid md:grid-cols-2 gap-7" data-aos="fade-up" data-aos-delay="200">
        {facebookLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-6 w-full bg-white border shadow transition duration-200 hover:border-emerald-200 hover:shadow-lg flex items-center gap-4"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <Facebook className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400 mt-2 font-semibold">
                {item.type}
              </span>
            </div>
            <div>
              <div className="font-semibold text-slate-800 group-hover:text-emerald-600 leading-snug">
                {item.label}
              </div>
              <div className="text-xs mt-2 text-slate-600 italic">
                View on Facebook
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Activities;