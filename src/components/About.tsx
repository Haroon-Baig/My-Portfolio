import { motion } from 'framer-motion';
import { Brain, Code, Palette } from 'lucide-react';

const services = [
  {
    title: "Frontend Developer",
    icon: <Code className="w-16 h-16" />,
    description: "I create responsive and and stunning user interfaces, using many technologies."
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
  },
];

export function About() {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
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

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="xs:w-[250px] w-full bg-gradient-to-b from-violet-500/20 to-transparent p-6 rounded-[20px] border border-violet-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-white">{service.icon}</div>
              <h3 className="text-white text-[20px] font-bold mt-4">{service.title}</h3>
              <p className="text-[#dfd9ff] mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}