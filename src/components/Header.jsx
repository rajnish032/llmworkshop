import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  FileUp,
  Calendar,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Award,
  BookOpen,
  Share2,
  Clock,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Layers,
  BarChart3,
  Cpu,
  Globe2
} from "lucide-react";

const Header = () => {
  // Countdown dates
  const submissionDeadline = new Date("2026-10-15T23:59:59").getTime();
  const workshopDate = new Date("2026-12-14T09:00:00").getTime();

  const [countdownTarget, setCountdownTarget] = useState("submission"); // "submission" | "workshop"
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [activeTab, setActiveTab] = useState("abstract"); // "abstract" | "milestones" | "specifications"

  const targetDate = countdownTarget === "submission" ? submissionDeadline : workshopDate;

  const calculateTimeLeft = (target) => {
    const difference = target - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [countdownTarget, targetDate]);

  const bibtexCode = `@inproceedings{taddclimate2026,
  title     = {4th International Workshop on Big Data, Large Language Models, and Ethical AI for Climate Change (TADD-Climate 2026)},
  booktitle = {Proceedings of the 2026 IEEE International Conference on Big Data (BigData)},
  year      = {2026},
  month     = {December},
  address   = {Phoenix, AZ, USA},
  publisher = {IEEE Computer Society Press},
  doi       = {10.1109/BigData2026.TADD}
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtexCode);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2500);
  };

  const importantDates = [
    { title: "Full Paper Submission", date: "October 15, 2026", status: "Active Submission", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { title: "Acceptance Notification", date: "November 7, 2026", status: "Upcoming", badge: "bg-slate-50 text-slate-600 border-slate-200" },
    { title: "Camera-Ready Deadline", date: "November 14, 2026", status: "Upcoming", badge: "bg-slate-50 text-slate-600 border-slate-200" },
    { title: "Workshop Presentation Day", date: "December 14, 2026", status: "Main Event", badge: "bg-teal-50 text-teal-700 border-teal-200" },
  ];

  const researchPillars = [
    {
      icon: <Cpu className="w-5 h-5 text-emerald-600" />,
      title: "Generative AI & LLMs",
      desc: "Diffusion models, weather foundation models, GANs for simulation & multi-modal reasoning.",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-teal-600" />,
      title: "Big Data & Remote Sensing",
      desc: "Petabyte-scale earth observation, satellite imagery analysis & real-time carbon monitoring.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />,
      title: "Ethical & Green AI",
      desc: "Algorithmic fairness, climate policy evaluation, explainability (XAI) & sustainable computing.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100/70 via-slate-50 to-white text-slate-800 pt-24 md:pt-28 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Top Academic Notification / Call-out Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 px-4 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs md:text-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="font-semibold text-slate-900">
              Call for Papers Open:
            </span>
            <span className="text-slate-600 hidden sm:inline">
              Submission deadline is October 15, 2026. Published in IEEE BigData 2026 Proceedings.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wi-lab.com/cyberchair/2026/bigdata26/scripts/submit.php?subarea=S16&undisplay_detail=1&wh=/cyberchair/2026/bigdata26/scripts/ws_submit.php"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 underline underline-offset-2"
            >
              Submit via CyberChair (Track S16)
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Research Paper Info Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* Paper Header / Metadata Strip */}
          <div className="p-6 md:p-10 lg:p-12 border-b border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
            
            {/* Conference Venue & Track Tags */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-white font-mono-academic text-xs font-semibold uppercase tracking-wider">
                IEEE BigData 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                Workshop Track S16
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200 font-semibold text-xs">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                IEEE Xplore Indexed
              </span>
              <span className="text-xs text-slate-500 ml-auto hidden md:inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Sheraton Phoenix Downtown, Phoenix, AZ, USA
              </span>
            </div>

            {/* Academic Paper Title */}
            <h1 className="font-serif-academic text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-slate-950 tracking-tight leading-[1.2] mb-4">
              4th International Workshop on Big Data, Large Language Models, and Ethical AI for Climate Change
            </h1>

            {/* Shortcode / Workshop Acronym Badge */}
            <div className="flex flex-wrap items-baseline gap-3 mb-6">
              <span className="font-mono-academic font-bold text-lg md:text-xl text-emerald-700 bg-emerald-50/90 px-3 py-0.5 rounded-md border border-emerald-200">
                (TADD-Climate 2026)
              </span>
              <span className="text-slate-600 text-sm md:text-base font-medium">
                In conjunction with the <strong>IEEE International Conference on Big Data 2026</strong>
              </span>
            </div>

            {/* Organizers / Chairs Authors Line (Academic Style) */}
            <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900 block md:inline mb-1 md:mb-0">
                  Workshop Organizers & Program Chairs:
                </span>{" "}
                <span className="text-slate-800 font-medium">Prof. Rajiv Misra</span> (IIT Patna),{" "}
                <span className="text-slate-800 font-medium">Mr. Praveen Kumar</span> (IIT Patna),{" "}
                <span className="text-slate-800 font-medium">Dr. Abhijit Kumar</span> (TPC),{" "}
                <span className="text-slate-800 font-medium">Dr. Sudhir Kumar</span> (TPC)
              </div>
              <Link
                to="/organiser"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 self-start md:self-auto hover:underline"
              >
                Full Committee & TPC
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Research Paper Action Pill Buttons (ArXiv / Paper Project Page Style) */}
            <div className="flex flex-wrap items-center gap-2.5 md:gap-3 mt-8">
              <a
                href="https://wi-lab.com/cyberchair/2026/bigdata26/scripts/submit.php?subarea=S16&undisplay_detail=1&wh=/cyberchair/2026/bigdata26/scripts/ws_submit.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm shadow-xs transition-colors"
              >
                <FileUp className="w-4 h-4" />
                <span>Submit Paper</span>
              </a>

              <Link
                to="/workshopinfo"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Call for Papers (CFP)</span>
              </Link>

              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>IEEE Template</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <Link
                to="/workshopprogramme"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 transition-colors"
              >
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Programme</span>
              </Link>

              <a
                href="https://bigdataieee.org/BigData2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 transition-colors"
              >
                <Globe2 className="w-4 h-4 text-slate-500" />
                <span>IEEE BigData 2026</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-medium text-sm transition-colors ml-auto"
                title="Copy BibTeX Citation"
              >
                {copiedBibtex ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">BibTeX Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>Cite / BibTeX</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Academic Content Tabs & Grid */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Academic Paper Abstract & Pillars (8 cols) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Formal Paper Abstract Card */}
                <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-6 md:p-7 relative">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="font-mono-academic text-xs font-bold uppercase tracking-widest text-slate-700 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-emerald-600" />
                      Paper Abstract & Executive Summary
                    </span>
                    <span className="text-xs font-mono-academic text-slate-500">
                      TADD-Climate 2026
                    </span>
                  </div>

                  <p className="font-serif-academic text-slate-800 text-base md:text-lg leading-relaxed text-justify mb-5">
                    <span className="font-bold text-slate-900 text-xl font-serif-academic float-left text-3xl leading-none pr-2 pt-1">
                      C
                    </span>
                    limate change remains one of the defining challenges of our era, demanding innovative, data-driven solutions at unprecedented scales. This workshop convenes international researchers, data scientists, and climate practitioners to explore breakthroughs at the convergence of <strong>Large Language Models (LLMs)</strong>, <strong>Generative AI</strong>, and <strong>Petabyte-Scale Big Data</strong>. Special focus is dedicated to high-precision climate modelling, predictive extreme weather forecasting, and real-time carbon tracking, while rigorously addressing algorithmic transparency, ethical AI alignment, and sustainable computing practices for equitable global climate action.
                  </p>

                  {/* Keywords Tagging (Standard Academic Requirement) */}
                  <div className="pt-4 border-t border-slate-200/80">
                    <div className="text-xs text-slate-500 font-mono-academic mb-2 font-semibold">
                      INDEX TERMS / KEYWORDS:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Generative AI",
                        "Large Language Models",
                        "Climate Modeling",
                        "Ethical AI",
                        "Big Data Analytics",
                        "Remote Sensing",
                        "Extreme Weather",
                        "Green Computing",
                        "IEEE BigData 2026"
                      ].map((keyword, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-xs bg-white text-slate-700 border border-slate-200/80 font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Core Research Pillars / Taxonomy */}
                <div>
                  <h2 className="text-sm font-bold uppercase font-mono-academic text-slate-500 tracking-wider mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    Key Thematic Tracks
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-3">
                    {researchPillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="mb-2 p-2 rounded-lg bg-slate-50 w-fit">
                            {pillar.icon}
                          </div>
                          <h3 className="font-bold text-slate-900 text-sm mb-1">
                            {pillar.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive BibTeX Citation Box */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-950 text-slate-100">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
                    <span className="font-mono-academic text-slate-400 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                      BibTeX Reference Entry
                    </span>
                    <button
                      onClick={copyToClipboard}
                      className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      {copiedBibtex ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy BibTeX</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono-academic overflow-x-auto text-emerald-300/90 leading-relaxed">
                    {bibtexCode}
                  </pre>
                </div>

              </div>

              {/* Right Column: Academic Metadata, Important Dates & Countdown (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Academic Fast Facts Table */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                  <h2 className="text-xs font-bold uppercase font-mono-academic text-slate-500 tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-slate-700" />
                    Workshop Specifications
                  </h2>

                  <dl className="divide-y divide-slate-100 text-xs">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Conference</dt>
                      <dd className="font-semibold text-slate-800 text-right">IEEE Big Data 2026</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Publication</dt>
                      <dd className="font-semibold text-slate-800 text-right">IEEE Computer Society Press (CPS)</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Indexing</dt>
                      <dd className="font-semibold text-emerald-700 text-right">IEEE Xplore, Scopus, Google Scholar</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Manuscript Length</dt>
                      <dd className="font-semibold text-slate-800 text-right">Up to 10 pages (IEEE 2-column format)</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Submission System</dt>
                      <dd className="font-semibold text-slate-800 text-right">CyberChair (Track S16)</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Venue</dt>
                      <dd className="font-semibold text-slate-800 text-right">Sheraton Phoenix Downtown, USA</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Workshop Date</dt>
                      <dd className="font-semibold text-slate-900 text-right">December 14, 2026</dd>
                    </div>
                  </dl>
                </div>

                {/* Important Dates Timeline */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                    <h2 className="text-xs font-bold uppercase font-mono-academic text-slate-500 tracking-wider flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      Important Milestones
                    </h2>
                    <Link
                      to="/workshopinfo"
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5"
                    >
                      Details <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {importantDates.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-semibold text-slate-900 text-xs md:text-sm">
                            {item.title}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono-academic font-semibold border ${item.badge}`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <div className="text-xs font-mono-academic text-slate-600 mt-1">
                          {item.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Countdown Card */}
                <div className="bg-slate-900 text-white rounded-xl p-5 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-academic uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      Conference Countdown
                    </span>

                    {/* Toggle Target */}
                    <div className="inline-flex rounded-lg bg-slate-800 p-0.5 text-xs">
                      <button
                        onClick={() => setCountdownTarget("submission")}
                        className={`px-2 py-1 rounded-md transition-colors ${
                          countdownTarget === "submission"
                            ? "bg-emerald-600 text-white font-semibold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Submission
                      </button>
                      <button
                        onClick={() => setCountdownTarget("workshop")}
                        className={`px-2 py-1 rounded-md transition-colors ${
                          countdownTarget === "workshop"
                            ? "bg-emerald-600 text-white font-semibold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Event Day
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-4">
                    {countdownTarget === "submission"
                      ? "Full paper submission deadline: October 15, 2026"
                      : "Workshop date at Sheraton Phoenix Downtown: December 14, 2026"}
                  </p>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { label: "Days", val: timeLeft.days },
                      { label: "Hours", val: timeLeft.hours },
                      { label: "Min", val: timeLeft.minutes },
                      { label: "Sec", val: timeLeft.seconds },
                    ].map((time, idx) => (
                      <div key={idx} className="bg-slate-800/90 rounded-lg py-2.5 px-1 border border-slate-700/60">
                        <div className="text-xl md:text-2xl font-mono-academic font-bold text-white tabular-nums">
                          {time.val.toString().padStart(2, "0")}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold mt-0.5">
                          {time.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Target: {countdownTarget === "submission" ? "Oct 15, 2026" : "Dec 14, 2026"}</span>
                    <a
                      href="https://wi-lab.com/cyberchair/2026/bigdata26/scripts/submit.php?subarea=S16&undisplay_detail=1&wh=/cyberchair/2026/bigdata26/scripts/ws_submit.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-semibold flex items-center gap-1"
                    >
                      CyberChair S16 <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
};

export default Header;



