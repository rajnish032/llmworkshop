import React from 'react';
import { Calendar, Link as LinkIcon, FileText, Phone, Mail, FileUp, Building2, CheckCircle2 } from 'lucide-react';

const WorkshopInfo = () => {
  const topics = [
    "Role of Generative AI and LLMs in Climate Change Research",
    "Advanced Climate Data Collection and AI/LLM-Driven Analytics",
    "GANs for Climate Scenario Generation",
    "AI- and LLM-Enhanced Climate Modelling Accuracy",
    "Extreme Weather Prediction Using Generative AI and LLMs",
    "AI- and LLM-Based Climate Policy Evaluation",
    "Deep Learning for Satellite and Remote Sensing Data Analysis",
    "Generative AI for Real-Time Carbon Footprint Monitoring",
    "AI-Driven Climate Resilience and Adaptation Strategies",
    "NLP and LLM-Based Climate Awareness via Social Media",
    "Case Studies on AI and Big Data in Climate Action",
    "Emerging Trends in AI- and LLM-Augmented Climate Science",
    "Generative AI for Disaster Risk Reduction Systems",
    "Smart Infrastructure Planning Using AI and Climate Projections",
    "Machine Learning and LLMs for Climate-Smart Agriculture",
    "AI and LLMs in Sustainable Urban Development",
    "Generative Models for Biodiversity and Ecosystem Conservation",
    "LLM-Based Analysis of Complex Climate Datasets",
    "Diffusion Models for High-Resolution Weather Forecasting",
    "Multimodal AI for Integrated Climate Data Analysis",
    "Federated Learning for Distributed Climate Data Systems",
    "Explainable AI (XAI) in Climate Modelling",
    "Green AI for Sustainable Climate Computing",
    "LLM-Based Virtual Assistants for Climate Communication",
    "Digital Twins for Climate Systems Using Generative AI"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Header / Intro section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-8 tracking-tight">
            Call For <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Papers</span>
          </h2>
          
          <div className="text-slate-600 space-y-5 text-lg leading-relaxed">
            <p>
              Climate change remains one of the most critical challenges of our era, with far-reaching consequences for ecosystems, economies, and societies worldwide. Scientific evidence overwhelmingly attributes climate change to human activities, including fossil fuel combustion, deforestation, and industrial processes that release greenhouse gases. These emissions intensify the greenhouse effect, resulting in rising global temperatures and cascading environmental disruptions.
            </p>
            <p>
              Addressing these complex and interconnected challenges requires innovative, data-driven solutions that leverage large-scale datasets and harness the transformative capabilities of <strong>Generative Artificial Intelligence (AI)</strong> and <strong>Large Language Models (LLMs)</strong>. The integration of big data analytics with Generative AI offers unprecedented opportunities to enhance climate modelling, improve predictive accuracy, and develop adaptive strategies for resilience and sustainability.
            </p>
            <p className="font-medium text-slate-800 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              The workshop invites high-quality research contributions from national and international participants across academia, industry, and government sectors to present their quality research work.
            </p>
          </div>
        </section>

        {/* Topics of Interest */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800">Topics of Interest</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all group">
                <p className="text-slate-700 font-medium group-hover:text-emerald-800 leading-snug">{topic}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Important Dates */}
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <Calendar className="w-7 h-7 text-teal-500" /> Important Dates
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Electronic submission of full papers", date: "October 15, 2026", active: true },
                { title: "Notification of paper acceptance", date: "November 7, 2026", active: false },
                { title: "Camera-ready of accepted papers", date: "November 14, 2026", active: false },
                { title: "Workshop Date", date: "December 14, 2026", active: false },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className={`w-3 h-3 mt-1.5 rounded-full ${item.active ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                  <div>
                    <strong className="block text-slate-800 font-semibold">{item.title}</strong>
                    <span className="text-slate-500 text-sm">{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Important Links & Guidelines */}
          <div className="space-y-8">
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <LinkIcon className="w-7 h-7 text-cyan-500" /> Important Links
              </h2>
              <div className="space-y-4">
                <a
                  href="https://wi-lab.com/cyberchair/2026/bigdata26/scripts/submit.php?subarea=S16&undisplay_detail=1&wh=/cyberchair/2026/bigdata26/scripts/ws_submit.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 transition-colors group"
                >
                  <FileUp className="w-6 h-6 text-cyan-600 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Submit Paper</span>
                </a>
                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors group"
                >
                  <FileText className="w-6 h-6 text-slate-500 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">IEEE Paper Templates</span>
                </a>
              </div>
            </section>

            <section className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-emerald-400" /> Submission Guideline
              </h2>
              <p className="text-emerald-50 text-sm leading-relaxed mb-4">
                The workshop invites full-length paper submissions that report ongoing or finished research 
                (up to 10 pages in IEEE 2-column format, including references). Papers must follow the IEEE 
                Computer Society Proceedings Manuscript Formatting Guidelines.
              </p>
              <p className="text-emerald-100 text-xs leading-relaxed">
                Accepted papers will be included in the Workshop Proceedings published by the IEEE Computer Society Press, available at the Conference, and indexed by Google Scholar and Scopus.
              </p>
            </section>
          </div>
        </div>

        {/* Contact Info */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6">
            <Phone className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">For Any Queries, Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Prof. Rajiv Misra</h3>
              <p className="text-slate-600 flex items-center gap-2 mb-4">
                <Building2 className="w-4 h-4" /> Indian Institute of Technology (IIT), Patna
              </p>
              <a href="mailto:rajivm@iitp.ac.in" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <Mail className="w-4 h-4" /> rajivm@iitp.ac.in
              </a>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mr. Praveen Kumar</h3>
              <p className="text-slate-600 flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4" /> Ph.D. Research Scholar, Advanced Lab, IIT Patna
              </p>
              <a href="tel:8789382669" className="flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-2">
                <Phone className="w-4 h-4" /> 8789382669
              </a>
              <a href="mailto:praveen_2221cs11@iitp.ac.in" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <Mail className="w-4 h-4" /> praveen_2221cs11@iitp.ac.in
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkshopInfo;
