import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ExternalLink, Activity, ArrowRight } from "lucide-react";

const Header = () => {
  const eventDate = new Date("2026-12-14T09:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden selection:bg-emerald-200">
      {/* Hero Section */}
      <main className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-blue-50/60 min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-[700px] h-[700px] bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob"></div>
          <div className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-teal-200/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 columns on desktop) */}
            <div className="lg:col-span-7 text-gray-900">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 font-semibold text-xs sm:text-sm mb-4 shadow-xs backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Upcoming Workshop 2026 · IEEE BigData
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.18] tracking-tight mb-4">
                <span className="block">4th International Workshop on</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Big Data, Large Language Models,
                </span>
                <span className="block text-slate-800 text-2xl sm:text-3xl md:text-4xl font-bold mt-1">
                  and Ethical AI for Climate Change
                </span>
              </h1>

              {/* Acronym & Co-location Info Pill */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="font-mono font-bold text-sm sm:text-base text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-lg border border-emerald-200 shadow-xs">
                  TADD-Climate 2026
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-medium">
                  In conjunction with the <strong>IEEE International Conference on Big Data 2026</strong>
                </span>
              </div>

              {/* Event Info Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-2xl">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-500 font-medium">Date</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">Dec 14, 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-500 font-medium">Venue</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">Phoenix, Arizona, USA</p>
                  </div>
                </div>

                <a
                  href="https://bigdataieee.org/BigData2026/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/80 hover:bg-white backdrop-blur-sm border border-emerald-100/80 hover:border-emerald-300 shadow-xs transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-500 font-medium">Conference</p>
                    <p className="text-xs sm:text-sm font-bold text-emerald-700 truncate">
                      IEEE BigData '26
                    </p>
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wi-lab.com/cyberchair/2026/bigdata26/scripts/submit.php?subarea=S16&undisplay_detail=1&wh=/cyberchair/2026/bigdata26/scripts/ws_submit.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
                >
                  <span>Submit Paper</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/workshopinfo"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Call for Papers</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  to="/workshopprogramme"
                  className="px-4 py-2.5 rounded-xl text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50/80 font-semibold text-sm transition-colors inline-flex items-center gap-1"
                >
                  <span>Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image (5 columns on desktop, perfectly fitted) */}
            <div className="lg:col-span-5 flex justify-center mt-6 lg:mt-0">
              <div className="relative w-full max-w-md">
                
                {/* Main Card with Earth Visualization */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/15 border-4 sm:border-8 border-white bg-white aspect-square group">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
                    alt="Earth Data Visualization"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                      Predictive Modeling & LLMs
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-white drop-shadow-sm leading-snug">
                      Climate Science Intelligence
                    </h2>
                  </div>
                </div>

                {/* Floating Badge (Bottom Left, safe padding) */}
                <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <Activity className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">TADD-Climate 2026</div>
                    <div className="text-[10px] sm:text-xs font-semibold text-emerald-600">IEEE BigData Workshop</div>
                  </div>
                </div>

                {/* Floating Badge (Top Right) */}
                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <span className="text-base">🌍</span>
                  <span>Dec 14, 2026</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Countdown Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Abstract background graphics */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/30 rounded-full mix-blend-screen filter blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Countdown to TADD-Climate 2026
          </h2>
          <p className="text-emerald-100/70 text-lg md:text-xl mb-14 max-w-2xl mx-auto font-medium">
            Join researchers globally to leverage Generative AI and Big Data for sustainable climate action.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white/5 backdrop-blur-lg px-6 py-8 rounded-3xl border border-white/10 shadow-2xl min-w-[120px] md:min-w-[140px] hover:bg-white/10 transition-colors"
              >
                <span className="text-5xl md:text-7xl font-black mb-2 tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base font-bold uppercase tracking-widest text-emerald-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
