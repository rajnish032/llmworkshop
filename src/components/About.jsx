import React from 'react';
import { Leaf, Cpu, Globe2, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-slate-100/60 py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono-academic font-semibold text-xs mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" /> RESEARCH BACKGROUND & SCOPE
          </div>
          <h2 className="font-serif-academic text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            Bridging <span className="text-emerald-700">AI Intelligence</span> & Climate Science
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Examining the transformative potential of Large Language Models and Foundation Models across environmental data ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-2xl p-7 md:p-9 shadow-xs border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                <div className="p-2 rounded-lg bg-teal-50 text-teal-700">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-academic font-bold uppercase tracking-wider text-slate-400">Context & Rationale</span>
                  <h3 className="text-xl font-bold text-slate-900 font-serif-academic">
                    The Climate Challenge
                  </h3>
                </div>
              </div>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-justify">
                <p>
                  Climate change represents one of the most pressing multi-system challenges of our era, with cascading disruptions for ecosystems, biodiversity, and human socioeconomic infrastructure. Scientific consensus links accelerated shifts to greenhouse emissions, industrial processes, and land-use transformations.
                </p>
                <p>
                  Resolving these multi-scale dynamics requires unprecedented data-driven synthesis. The fusion of petabyte-scale climate observations with <strong>Generative AI</strong> and <strong>Large Language Models (LLMs)</strong> offers a paradigm shift for high-resolution forecasting, anomaly detection, and mitigation strategies.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono-academic">
              <span>Domain: Earth Systems & AI</span>
              <span>Track: S16</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-7 md:p-9 shadow-xs border border-slate-800 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-academic font-bold uppercase tracking-wider text-emerald-400">Mission & Scope</span>
                  <h3 className="text-xl font-bold text-white font-serif-academic">
                    Workshop Vision & Objectives
                  </h3>
                </div>
              </div>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed text-justify">
                <p>
                  The <strong>TADD-Climate 2026</strong> workshop convenes international researchers across computer science, meteorology, computational ecology, and policy to pioneer AI methodologies tailored for environmental resilience.
                </p>
                <p>
                  Crucially, the workshop champions <strong>Ethical AI</strong>: ensuring climate-centric neural models remain transparent, equitable in resource distribution, auditable in predictive uncertainty, and computationally energy-efficient (Green AI).
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-mono-academic">
              <span>Co-located with IEEE BigData 2026</span>
              <span>Phoenix, AZ, USA</span>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div>
              <span className="text-[10px] font-mono-academic font-bold uppercase tracking-wider text-slate-500">Research Focus Areas</span>
              <h3 className="text-2xl font-bold text-slate-900 font-serif-academic flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Key Topics & Directions of Interest
              </h3>
            </div>
            <a
              href="/workshopinfo"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 font-mono-academic hover:underline hidden sm:inline"
            >
              View all 25+ CFP topics →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Generative AI-driven climate modelling and numerical simulations",
              "Predictive deep analytics for extreme weather and disaster early warning",
              "AI-powered greenhouse gas emissions tracking & remote sensing quantification",
              "Automated climate risk assessment and algorithmic decision support systems",
              "Sustainable smart urban planning & resilient infrastructure engineering",
              "Green AI and energy-efficient computation for climate modeling",
            ].map((topic, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-mono-academic text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="text-slate-700 text-sm font-medium leading-snug">
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
