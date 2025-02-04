import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Code, Palette, Brain, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Scene } from './components/Canvas/Scene';
import { BackgroundShapes } from './components/Canvas/BackgroundShapes';

function App() {
  return (
    <div className="relative z-0 bg-[#13111C] overflow-hidden">
      {/* Background Shapes */}
      <div className="fixed inset-0 z-0 opacity-30">
        <BackgroundShapes />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full h-screen mx-auto">
          <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-violet-500" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Hi, I'm <span className="text-violet-500">Haroon Baig</span>
              </h1>
              <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                I develop modern, responsive web applications <br className="sm:block hidden" />
                with beautiful user interfaces
              </p>
              
              <div className="flex gap-4 mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/Haroon-Baig/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-violet-500 p-3 rounded-full hover:bg-violet-600 transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/haroon-baig-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-500 p-3 rounded-full hover:bg-violet-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#projects"
                  className="bg-violet-500 p-3 rounded-full hover:bg-violet-600 transition-colors"
                >
                  <Code2 className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="absolute right-0 top-[120px] h-[400px] w-[400px]">
            <Scene />
          </div>
        </section>

        {/* About Section */}
        <section className="relative w-full min-h-screen mx-auto">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-violet-500 font-medium">Introduction</p>
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Overview.
              </h2>
              <p className="mt-4 text-[#dfd9ff] text-[17px] max-w-3xl leading-[30px]">
                I'm a skilled frontend developer with experience in Stunning Webseites. 
                I specialize in frameworks like React, and have expertise in Tailwind CSS, Bootstrap, 
                and jQuery. I'm a quick learner and collaborate closely with clients to create efficient, 
                scalable, and user-friendly solutions that solve real-world problems.
              </p>
            </motion.div>
            </div> {/* Ensure this div closure */}
         </section>

            <div className="mt-20 flex flex-wrap gap-10">
              {[
                {
                  title: "Frontend Developer",
                  icon: <Code className="w-16 h-16" />,
                  description: "I create responsive and performant web applications using modern technologies."
                },
                {
                  title: "UI/UX Designer",
                  icon: <Palette className="w-16 h-16" />,
                  description: "I design beautiful and intuitive user interfaces using tools like Figma and following modern design principles."
                },
                {
                  title: "Problem Solver",
                  icon: <Brain className="w-16 h-16" />,
                  description: "I enjoy solving complex problems and creating efficient solutions through clean and maintainable code."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="xs:w-[250px] w-full bg-gradient-to-b from-violet-500/20 to-transparent p-6 rounded-[20px] border border-violet-500/30"
                >
                  <div className="text-white">{service.icon}</div>
                  <h3 className="text-white text-[20px] font-bold mt-4">{service.title}</h3>
                  <p className="text-[#dfd9ff] mt-2">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative w-full min-h-screen mx-auto">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-violet-500 font-medium">My Work</p>
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Projects.
              </h2>
            </motion.div>

             // Projects Grid //
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Focus-Flow Landing Page",
                  description: "A modern landing page for a productivity app, built using HTML5 and TaillwindCSS.",
                  image: "https://res.cloudinary.com/dxshxfwua/image/upload/v1737723797/Screenshot_2024-12-31_143407_jqckzq.png",
                  tags: ["HTML5", "Tailwind CSS"],
                  link: "https://github.com/Haroon-Baig/FocusFlow"
                },
                {
                  title: "MasterWebDev",
                  description: "A stunning UI design for a course website.",
                  image: "https://res.cloudinary.com/dxshxfwua/image/upload/v1737724127/Screenshot_2025-01-24_180805_qwemef.png",
                  tags: ["HTML5", "CSS3"],
                  link: "https://master-web-dev.netlify.app/"
                },
                {
                  title: "Zoom Meeting App",
                  description: "A fullstack web zoom meeting app built with modern web technologies.",
                  image: "https://res.cloudinary.com/dxshxfwua/image/upload/v1737724963/Screenshot_2025-01-24_181754_hirvfg.png",
                  tags: ["React 18.3.1", "Typescript", "Node.js with express.js", "Tailwind CSS", "Vite", "Socket.io", "UUID"],
                  link: "https://github.com/Haroon-Baig/FullStack-Zoom-Meeting-App"
                },
                {
                  title: "Easy Image Editor",
                  description: "A basic image editor built using HTML5, CSS3 and JavaScript.",
                  image: "https://res.cloudinary.com/dxshxfwua/image/upload/v1737726189/Screenshot_2025-01-24_184307_qm23mz.png",
                  tags: ["HTML5", "CSS3", "JavaScript"],
                  link: "https://good-image-editor.netlify.app/"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-violet-500/10 to-transparent rounded-2xl overflow-hidden border border-violet-500/20 group hover:border-violet-500/40 transition-all"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-violet-500 rounded-full hover:bg-violet-600 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-[#dfd9ff] mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full min-h-screen mx-auto">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-violet-500 font-medium">Get in Touch</p>
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Contact.
              </h2>
            </motion.div>

            <div className="mt-20 flex flex-col lg:flex-row gap-20">
            <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex-1"
>
  <div className="space-y-8">
    <div className="flex items-center gap-6">
      <div className="bg-violet-500/20 p-4 rounded-2xl">
        <Mail className="w-8 h-8 text-violet-500" />
      </div>
      <div>
        <h3 className="text-white text-xl font-bold">Email</h3>
        <p className="text-[#dfd9ff] mt-1">haroonbaig20132013@gmail.com</p>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="bg-violet-500/20 p-4 rounded-2xl">
        <MapPin className="w-8 h-8 text-violet-500" />
      </div>
      <div>
        <h3 className="text-white text-xl font-bold">Location</h3>
        <p className="text-[#dfd9ff] mt-1">Karachi, Pakistan</p>
      </div>
    </div>
  </div>
</motion.div>


<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex-1"
>
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-3 rounded-lg bg-violet-500/10 border border-violet-500/20 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-colors"
        placeholder="Your name"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-3 rounded-lg bg-violet-500/10 border border-violet-500/20 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-colors"
        placeholder="your@email.com"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
      <textarea
        id="message"
        rows={6}
        className="w-full px-4 py-3 rounded-lg bg-violet-500/10 border border-violet-500/20 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-colors"
        placeholder="Your message"
      ></textarea>
    </div>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      className="w-full py-3 px-6 bg-violet-500 text-white font-medium rounded-lg hover:bg-violet-600 transition-colors"
    >
      Send Message
    </motion.button>
  </form>
</motion.div>

  );
}

export default App;
