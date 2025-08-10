import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-8">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Let's Connect</h2>
              <p className="text-slate-600 leading-7 mb-8">
                I'm always interested in new opportunities, whether it's a full-time position, 
                freelance project, or just a friendly conversation about technology and design. 
                Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center" data-aos="fade-right" data-aos-delay="200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <a
                    href="mailto:rahik2535@gmail.com"
                    className="text-slate-600 hover:text-emerald-700 transition-colors"
                  >
                    rahik2535@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center" data-aos="fade-right" data-aos-delay="250">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <a
                    href="tel:+8801782753325"
                    className="text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    +8801782753325
                  </a>
                </div>
              </div>

              <div className="flex items-center" data-aos="fade-right" data-aos-delay="300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Location</h3>
                  <p className="text-slate-600">Chattogram, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div data-aos="fade-up" data-aos-delay="350">
              <h3 className="font-semibold text-slate-800 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/XenonR25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 hover:bg-slate-800 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nm-rahik-2oo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Rahik2535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 hover:bg-black text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-emerald-50 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="400">
              <h3 className="font-semibold text-emerald-800 mb-2">Quick Response</h3>
              <p className="text-emerald-700 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to call me directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8" data-aos="fade-up" data-aos-delay="250">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg transition-all ${
                  isSubmitting
                    ? 'bg-slate-400 text-white cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-lg hover:shadow-emerald-500/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-12" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What's your typical response time?",
                a: "I usually respond within 24 hours. For urgent matters, feel free to call directly.",
              },
              {
                q: "Do you work on weekends?",
                a: "While I prefer to maintain work-life balance, I'm flexible for urgent projects."
              },
              {
                q: "What's your hourly rate?",
                a: "My rates vary based on project complexity and timeline. Let's discuss your specific needs."
              },
              {
                q: "Do you sign NDAs?",
                a: "Absolutely! I understand the importance of confidentiality and am happy to sign NDAs."
              }
            ].map((faq, i) => (
              <div key={faq.q} data-aos="fade-up" data-aos-delay={500 + i*80}>
                <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;