"use client";

import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";

const TESTIMONIALS = [
  {
    quote: "Bimal built our job portal from scratch in no time. Clean code, good communication, and he understood exactly what we needed. Really impressed.",
    name: "Arjun Nair",
    role: "HR Manager, Kochi",
    initials: "AN",
  },
  {
    quote: "He helped us build a website for our college fest. Delivered on time and the design was better than we expected. Will definitely work with him again.",
    name: "Devika Menon",
    role: "Student Coordinator, Thrissur",
    initials: "DM",
  },
  {
    quote: "We needed a simple booking system for our car rental. Bimal got it done quickly and explained everything clearly. Very professional.",
    name: "Suresh Pillai",
    role: "Business Owner, Trivandrum",
    initials: "SP",
  },
  {
    quote: "Bimal built a real estate platform for our college project. It had everything — listings, search filters, image uploads. Worked perfectly.",
    name: "Rahul Varma",
    role: "CS Student, Ernakulam",
    initials: "RV",
  },
  {
    quote: "He built a women safety app for our project and it was genuinely impressive. Real-time location, SOS alerts — everything worked smoothly.",
    name: "Anjali Thomas",
    role: "CS Student, Kozhikode",
    initials: "AT",
  },
  {
    quote: "Bimal is one of those developers who actually listens. He built exactly what we asked for and even suggested improvements we hadn't thought of.",
    name: "Amal Krishnan",
    role: "Startup Founder, Kochi",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 overflow-hidden" id="testimonials">
      {/* Background Ambience - Different position for variety */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

       <div className="container mx-auto px-6 mb-16 text-center relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
                Kind <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Words</span>
            </motion.h2>
            <TextAnimate animation="blurInUp" by="word" duration={1.2} className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              {"Feedback from clients and collaborators I've had the pleasure of working with."}
            </TextAnimate>
            

       </div>

      <div className="relative w-full overflow-hidden mask-linear-fade">
         {/* Mask gradient for fade effect on edges */}
         <div className="absolute top-0 left-0 w-32 h-full z-20 bg-linear-to-r from-[#121212] to-transparent" />
         <div className="absolute top-0 right-0 w-32 h-full z-20 bg-linear-to-l from-[#121212] to-transparent" />

        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shrink-0"
              >
                 <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        {item.initials}
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                 </div>
                 <p className="text-gray-300 italic leading-relaxed">
                    "{item.quote}"
                 </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}
