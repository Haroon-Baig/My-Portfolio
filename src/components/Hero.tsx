import { motion } from 'framer-motion';
import { Code2, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-500" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-violet-500">Haroon Baig</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I develop modern, responsive web applications <br className="sm:block hidden" />
            with beautiful user interfaces
          </p>
          
          <div className="flex gap-4 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="bg-violet-500 p-3 rounded-full hover:bg-violet-600 transition-colors">
              <Github className="w-6 h-6 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="bg-violet-500 p-3 rounded-full hover:bg-violet-600 transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="#projects" 
               className="bg-violet-500 p-3 rounded-full hover:bg-violet-600 transition-colors">
              <Code2 className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}