import React, { useState } from 'react';
import {
  Calendar,
  Link as LinkIcon,
  FileText,
  Phone,
  Mail,
  FileUp,
  Building2,
  CheckCircle2,
  Search,
  BookOpen,
  Award,
  ExternalLink,
  Download,
  HelpCircle,
  Clock,
  Sparkles,
  Layers,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const WorkshopInfo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const topicsData = [
    {
      category: "Generative AI & LLMs",
      topics: [
        "Role of Generative AI and LLMs in Climate Change Research",
        "LLM-Based Analysis of Complex Climate Datasets",
        "LLM-Based Virtual Assistants for Climate Communication",
        "Multimodal AI for Integrated Climate Data Analysis",
        "GANs for Climate Scenario Generation",
        "Diffusion Models for High-Resolution Weather Forecasting",
        "Digital Twins for Climate Systems Using Generative AI"
      ]
    },
    {
      category: "Earth Observation & Modeling",
      topics: [
        "Advanced Climate Data Collection and AI/LLM-Driven Analytics",
        "AI- and LLM-Enhanced Climate Modelling Accuracy",
        "Extreme Weather Prediction Using Generative AI and LLMs",
        "Deep Learning for Satellite and Remote Sensing Data Analysis",
        "Emerging Trends in AI- and LLM-Augmented Climate Science",
        "Generative Models for Biodiversity and Ecosystem Conservation"
      ]
    },
    {
      category: "Carbon, Policy & Ethical AI",
      topics: [
        "Generative AI for Real-Time Carbon Footprint Monitoring",
        "AI- and LLM-Based Climate Policy Evaluation",
        "NLP and LLM-Based Climate Awareness via Social Media",
        "Explainable AI (XAI) in Climate Modelling",
        "Green AI for Sustainable Climate Computing",
        "Federated Learning for Distributed Climate Data Systems"
      ]
    },
    {
      category: "Resilience, Urban & Agriculture",
      topics: [
        "AI-Driven Climate Resilience and Adaptation Strategies",
        "Generative AI for Disaster Risk Reduction Systems",
        "Smart Infrastructure Planning Using AI and Climate Projections",
        "Machine Learning and LLMs for Climate-Smart Agriculture",
        "AI and LLMs in Sustainable Urban Development",
        "Case Studies on AI and Big Data in Climate Action"
      ]
    }
  ];

  const categories = ['All', 'Generative AI & LLMs', 'Earth Observation & Modeling', 'Carbon, Policy & Ethical AI', 'Resilience, Urban & Agriculture'];

  const allTopics = topicsData.flatMap(cat => 
    cat.topics.map(t => ({ topic: t, category: cat.category }))
  );

  const filteredTopics = allTopics.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const submissionUrl = "https://wi-lab.com/cyberchair/2026/bigdata26/scripts/submit.php?subarea=S16&undisplay_detail=1&wh=/cyberchair/2026/bigdata26/scripts/ws_submit.php";

  return (
    <div className="bg-slate-100/60 min-h-screen pt-24 md:pt-28 pb-20 font-sans text-slate-800 selection:bg-emerald-200">
      
      {/* Top Academic Breadcrumb / Sub-banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 px-4 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs md:text-sm mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono-academic font-bold text-slate-500 uppercase tracking-wide">
              Official Call for Papers (CFP)
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-700 font-semibold">
              IEEE BigData 2026 Workshop Track S16
            </span>
          </div>
          <a
            href={submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1.5 underline underline-offset-2"
          >
            Go to CyberChair Portal <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Main CFP Header Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-xs relative overflow-hidden">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-md bg-slate-900 text-white font-mono-academic text-xs font-semibold uppercase tracking-wider">
              CFP · 2026 Edition
            </span>
            <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              IEEE Computer Society Press (CPS)
            </span>
            <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200 font-semibold text-xs flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              IEEE Xplore, Scopus & Google Scholar
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif-academic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight leading-[1.2] mb-4">
            Call for Papers & Scientific Contributions
          </h1>

          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-4xl mb-6">
            4th International Workshop on Big Data, Large Language Models, and Ethical AI for Climate Change{" "}
            <span className="font-mono-academic font-bold text-emerald-700">(TADD-Climate 2026)</span>, held in conjunction with the{" "}
            <strong>IEEE International Conference on Big Data 2026</strong>.
          </p>

          {/* Academic Statement */}
          <div className="bg-slate-50/80 rounded-xl p-6 border border-slate-200/80 mb-8 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed text-justify">
            <p>
              Climate change remains one of the most critical and complex challenges of our era, posing systemic risks for planetary ecosystems, weather stability, agricultural security, and human populations worldwide. Unprecedented anthropogenic emissions and global temperature shifts necessitate innovative, data-driven analytical approaches.
            </p>
            <p>
              The integration of petabyte-scale earth observation and climate data with <strong>Generative Artificial Intelligence (AI)</strong> and <strong>Large Language Models (LLMs)</strong> introduces transformative opportunities. From foundation weather models to GAN-based localized simulation and real-time carbon auditing, this workshop serves as a premier international venue uniting academia, industry, and governmental research to present rigorous, high-impact findings.
            </p>
            <div className="pt-3 border-t border-slate-200 font-medium text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Original full-length research manuscripts (up to 10 pages, IEEE 2-column format) are invited for peer-review.
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-xs transition-colors"
            >
              <FileUp className="w-4 h-4" />
              <span>Submit via CyberChair</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 transition-colors"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>IEEE Manuscript Templates</span>
            </a>

            <a
              href="#topics"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-medium text-sm transition-colors"
            >
              <span>Explore 25+ Topics</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Important Dates & Submission Guidelines Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Important Dates (5 cols) */}
          <section className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-teal-50 text-teal-700">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="font-serif-academic text-xl font-bold text-slate-900">
                  Important Dates
                </h2>
              </div>
              <span className="text-xs font-mono-academic text-slate-400">All AoE</span>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Electronic Submission of Full Papers",
                  date: "October 15, 2026",
                  badge: "Active Submission",
                  badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold",
                  active: true
                },
                {
                  title: "Notification of Paper Acceptance",
                  date: "November 7, 2026",
                  badge: "Scheduled",
                  badgeClass: "bg-slate-50 text-slate-600 border-slate-200",
                  active: false
                },
                {
                  title: "Camera-Ready Papers Due",
                  date: "November 14, 2026",
                  badge: "Scheduled",
                  badgeClass: "bg-slate-50 text-slate-600 border-slate-200",
                  active: false
                },
                {
                  title: "Workshop Date (Presentations)",
                  date: "December 14, 2026",
                  badge: "Phoenix, AZ, USA",
                  badgeClass: "bg-teal-50 text-teal-700 border-teal-200 font-semibold",
                  active: false
                },
              ].map((milestone, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    milestone.active
                      ? 'border-emerald-300 bg-emerald-50/40 shadow-xs'
                      : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="font-semibold text-slate-900 text-sm leading-snug">
                      {milestone.title}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono-academic border ${milestone.badgeClass}`}>
                      {milestone.badge}
                    </span>
                  </div>
                  <div className="text-xs font-mono-academic text-slate-600 font-medium">
                    {milestone.date}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-500 text-center font-mono-academic">
              Strict deadlines apply. Please submit early via CyberChair.
            </div>
          </section>

          {/* Submission Guidelines & Format (7 cols) */}
          <section className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="font-serif-academic text-xl font-bold text-slate-900">
                Manuscript Formatting & Policies
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                <span className="text-[10px] font-mono-academic font-bold uppercase text-slate-400 block mb-1">
                  Format
                </span>
                <span className="font-bold text-slate-900 text-sm block mb-1">
                  IEEE 2-Column Standard
                </span>
                <p className="text-xs text-slate-600">
                  Strictly follow the IEEE Computer Society Proceedings manuscript formatting guidelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                <span className="text-[10px] font-mono-academic font-bold uppercase text-slate-400 block mb-1">
                  Length Limit
                </span>
                <span className="font-bold text-slate-900 text-sm block mb-1">
                  Up to 10 Pages
                </span>
                <p className="text-xs text-slate-600">
                  Full papers up to 10 pages inclusive of all references, tables, and illustrations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                <span className="text-[10px] font-mono-academic font-bold uppercase text-slate-400 block mb-1">
                  Review Model
                </span>
                <span className="font-bold text-slate-900 text-sm block mb-1">
                  Peer-Reviewed
                </span>
                <p className="text-xs text-slate-600">
                  Evaluated by an international Technical Program Committee on originality, novelty, and rigor.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                <span className="text-[10px] font-mono-academic font-bold uppercase text-slate-400 block mb-1">
                  Proceedings
                </span>
                <span className="font-bold text-slate-900 text-sm block mb-1">
                  IEEE CPS & Xplore
                </span>
                <p className="text-xs text-slate-600">
                  Published in workshop proceedings and submitted for IEEE Xplore indexing.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-academic font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Submission System Notice
                </span>
                <span className="text-xs font-mono-academic text-slate-400">Track S16</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All submissions must be uploaded through the official IEEE BigData 2026 CyberChair submission system under workshop track <strong>S16</strong>. Submissions by email will not be accepted.
              </p>
              <div className="pt-2">
                <a
                  href={submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 hover:underline"
                >
                  Click here to access the CyberChair S16 Submission Portal →
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Topics of Interest Section with Search & Filter */}
        <section id="topics" className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono-academic font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Taxonomy & Scientific Scope
              </span>
              <h2 className="font-serif-academic text-2xl sm:text-3xl font-bold text-slate-950">
                Topics of Interest ({allTopics.length} Areas)
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                We invite paper submissions addressing theoretical foundations, novel architectures, empirical evaluations, and real-world case studies in the following areas:
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. LLM, satellite)..."
                className="w-full pl-9 pr-4 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50/60 border border-slate-200/70 hover:border-emerald-300 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                    <p className="text-slate-800 text-sm font-medium leading-snug group-hover:text-emerald-900">
                      {item.topic}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono-academic text-slate-400 mt-3 self-end">
                    {item.category}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center text-slate-500 text-sm">
                No topics matched "{searchQuery}". Try clearing your search query or selecting "All".
              </div>
            )}
          </div>
        </section>

        {/* Contact Info & Inquiries */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-mono-academic font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Contact & Inquiries
            </span>
            <h2 className="font-serif-academic text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
              Workshop Contact Persons
            </h2>
            <p className="text-slate-600 text-sm">
              For inquiries regarding paper submissions, CyberChair track guidelines, or workshop participation:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <span className="text-[10px] font-mono-academic text-emerald-700 font-bold uppercase tracking-wider block mb-1">
                Workshop Chair
              </span>
              <h3 className="font-serif-academic text-lg font-bold text-slate-900 mb-1">
                Prof. Rajiv Misra
              </h3>
              <p className="text-xs text-slate-600 flex items-center gap-1.5 mb-4">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                Indian Institute of Technology (IIT), Patna
              </p>
              <a
                href="mailto:rajivm@iitp.ac.in"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                rajivm@iitp.ac.in
              </a>
            </div>

            <div className="p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors">
              <span className="text-[10px] font-mono-academic text-emerald-700 font-bold uppercase tracking-wider block mb-1">
                Workshop Coordinator
              </span>
              <h3 className="font-serif-academic text-lg font-bold text-slate-900 mb-1">
                Mr. Praveen Kumar
              </h3>
              <p className="text-xs text-slate-600 flex items-center gap-1.5 mb-3">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                Ph.D. Research Scholar, Advanced Lab, IIT Patna
              </p>
              <div className="space-y-1.5 text-xs">
                <a
                  href="mailto:praveen_2221cs11@iitp.ac.in"
                  className="flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  praveen_2221cs11@iitp.ac.in
                </a>
                <a
                  href="tel:8789382669"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  +91 8789382669
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WorkshopInfo;
