import React from 'react';
import { Leaf, Cpu, Globe2, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-slate-50 py-24 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-4">
            <Leaf className="w-4 h-4" /> About the Workshop
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">AI & Climate Action</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Globe2 className="w-6 h-6 text-teal-600" />
              The Climate Challenge
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Climate change remains one of the most critical challenges of our era, with far-reaching consequences for ecosystems, economies, and societies worldwide. Scientific evidence overwhelmingly attributes climate change to human activities, including fossil fuel combustion, deforestation, and industrial processes that release greenhouse gases. These emissions intensify the greenhouse effect, resulting in rising global temperatures and cascading environmental disruptions.
              </p>
              <p>
                Addressing these complex and interconnected challenges requires innovative, data-driven solutions that leverage large-scale datasets and harness the transformative capabilities of <strong>Generative Artificial Intelligence (AI)</strong> and <strong>Large Language Models (LLMs)</strong>.
              </p>
              <p>
                The integration of big data analytics with Generative AI offers unprecedented opportunities to enhance climate modelling, improve predictive accuracy, and develop adaptive strategies for resilience and sustainability.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full filter blur-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Cpu className="w-6 h-6 text-emerald-400" />
              Workshop Vision
            </h3>
            <div className="space-y-4 text-emerald-50/90 leading-relaxed relative z-10">
              <p>
                The <strong>4th International Workshop on Big Data, LLMs, and Ethical AI for Climate Change</strong> aims to bring together researchers, policymakers, industry experts, and practitioners to explore cutting-edge advancements at the intersection of AI and climate science.
              </p>
              <p>
                The workshop will serve as a collaborative platform for academia, industry, government agencies, and non-governmental organizations (NGOs) to bridge the gap between research and real-world implementation.
              </p>
              <p className="font-semibold text-emerald-300 pt-4 border-t border-emerald-800/50">
                Furthermore, the workshop emphasizes the role of ethical AI, ensuring that AI-driven climate solutions are transparent, fair, and aligned with societal values.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 inline-flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              Key Areas of Innovation
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Generative AI-driven climate modelling and simulation",
              "Predictive analytics for extreme weather forecasting",
              "AI-powered carbon emission monitoring and mitigation",
              "Automated climate risk assessment and decision support systems",
              "AI-enabled sustainable urban planning and smart infrastructure",
            ].map((topic, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <p className="text-slate-700 font-medium leading-tight">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
