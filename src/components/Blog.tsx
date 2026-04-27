"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ARTICLES = [
  {
    title: "From BCA to Builder: How I Started Coding with AI",
    excerpt: "How I went from a BCA student with no real projects to building full-stack apps using Django, Kotlin, and AI tools. The honest story.",
    category: "Journey",
    readTime: "5 min read",
    color: "from-blue-500 to-cyan-500",
    content: `I didn't start coding with a clear plan. I started because I had no choice. I was a BCA student who had finished two years of college and still hadn't built a single real project. Just theory. Just notes. Just exams.

That changed when I decided to stop waiting and start building.

The first real project I built was a job portal called SkillMint. I had no idea how to connect a database to a web app, how authentication worked, or how to deploy anything. I just started, broke things, fixed them, and kept going. Django made the backend feel manageable. Python felt like writing in plain English. And slowly, things started clicking.

What changed everything for me was using AI tools. Not to write code for me, but to understand what I was writing. When I got stuck on a concept, I would ask. When an error made no sense, I would paste it in and read the explanation carefully. I wasn't skipping the learning. I was accelerating it.

By the time I finished my BCA, I had built a job portal, a women's safety app, a hospital management system, an Android weather app, a car rental system, a medicine reminder app, and a real estate platform. Seven real projects. All working. All deployed or deployable.

The lesson I took from all of this: you don't need to know everything before you start. You just need to start, stay curious, and build through the confusion. The clarity comes after you ship, not before.`,
  },
  {
    title: "Building a Women Safety App with Django",
    excerpt: "How I built Zafe — a real-time emergency response platform with GPS tracking, SOS alerts, and incident reporting using Django and Python.",
    category: "Tech",
    readTime: "7 min read",
    color: "from-purple-500 to-pink-500",
    content: `Zafe started as a college project. It ended up being one of the most meaningful things I have built.

The idea was simple. A web app that helps women in emergency situations. But the moment I started thinking about what that actually means in practice, the scope grew fast. It wasn't just about a button that sends a message. It needed real-time location sharing, SOS alerts, incident reporting, and a community layer where users could flag unsafe areas.

I built it with Django and Python. The backend handles user authentication, location data, alert triggers, and incident logs. The frontend is clean and fast, designed to work under stress, when someone actually needs it.

The hardest part wasn't the code. It was thinking through the user experience from the perspective of someone in a genuinely dangerous situation. Every extra tap, every slow load, every confusing label matters when seconds count.

Zafe is live at bimaljayakumar.pythonanywhere.com. It is not perfect. But it works, it is real, and it solves a real problem. That is what matters to me.

Building this taught me that the best software isn't the most technically impressive. It is the software that understands its user deeply enough to get out of the way when it needs to.`,
  },
  {
    title: "Why I Use AI to Code Faster (And Still Learn)",
    excerpt: "Using AI tools like GitHub Copilot and ChatGPT doesn't mean you stop learning. Here's how I use them smartly to build real projects faster.",
    category: "Insights",
    readTime: "6 min read",
    color: "from-orange-500 to-red-500",
    content: `Every time I mention that I use AI tools while coding, someone says: "But are you actually learning?"

Yes. More than ever.

Here is the thing. AI tools don't replace understanding. They replace the parts of coding that slow you down without teaching you anything. Looking up syntax for the hundredth time. Debugging a typo at 1am. Figuring out the right way to structure a query you have written before. That is not learning. That is friction.

What I use AI for: getting unstuck fast, understanding error messages in plain language, exploring approaches I haven't tried before, and reviewing code I have already written. What I don't use it for: thinking through the architecture, deciding what to build, understanding why something works the way it does.

The developers who will struggle in the next few years aren't the ones using AI. They are the ones using it as a crutch instead of a tool. There is a difference between asking "write me a login system" and asking "why is my session not persisting across requests?" One skips the learning. The other accelerates it.

I have built seven projects using AI tools as part of my workflow. Every single one of them taught me something new. The tools didn't take that away. They gave me more time to focus on the parts that actually matter.

Use the tools. Just stay curious about what they are doing.`,
  },
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null);

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="blog">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-16 text-center tracking-tight"
        >
          Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedArticle(article)}
              className="group relative block h-full cursor-pointer"
            >
              <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors flex flex-col">
                <div className={`h-2 bg-linear-to-r ${article.color}`} />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 flex-1">{article.excerpt}</p>
                  <div className="flex items-center text-blue-400 font-bold text-sm group-hover:translate-x-2 transition-transform">
                    Read Article <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/80 z-60"
            />
            <div className="fixed inset-0 flex items-center justify-center z-70 p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 16 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="bg-[#121212] w-full max-w-2xl max-h-[80vh] mb-20 md:mb-0 md:max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className={`h-2 bg-linear-to-r ${selectedArticle.color} rounded-t-3xl`} />

                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white">
                      {selectedArticle.category}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{selectedArticle.readTime}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    {selectedArticle.title}
                  </h2>

                  <div className="space-y-6">
                    {selectedArticle.content.split("\n\n").map((para, i) => (
                      <p key={i} className="text-gray-300 leading-relaxed text-lg">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
