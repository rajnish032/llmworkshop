import React, { useEffect, useState } from "react";

const Header = () => {
  const eventDate = new Date("2025-12-08T22:00:00").getTime();

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
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen relative overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
          {/* Left Content */}
          <div className="md:w-1/2 mb-16 md:mb-0 text-gray-900 relative z-20">
            <div className="flex flex-wrap gap-3 mb-8 animate-fadeIn">
              {["International Workshop", "1st Edition"].map((text, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm"
                >
                  {text}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fadeIn">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Harnessing Big Data
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Analytics with LLMs
              </span>
            </h1>

            <div className="mb-10">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-600 mb-2">
                HBDA-LLM 2025
              </p>
              <p className="text-lg text-gray-700 max-w-lg">
                The premier international workshop bridging big data analytics
                and large language model research
              </p>
            </div>

            <div className="space-y-5 mb-10 animate-fadeIn">
              {[
                {
                  icon: "📅",
                  title: "December 8, 2025",
                  subtitle: "cutting-edge research",
                },
                {
                  icon: "📍",
                  title: "San Francisco, CA",
                  subtitle: "Hybrid Event (In-person & Virtual)",
                },
                {
                  icon: "🔗",
                  title: "Co-located with ACM SIGMOD 2025",
                  subtitle: "Part of the premier database conference",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm max-w-md"
                >
                  <span className="mr-4 text-2xl text-blue-700">{item.icon}</span>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center animate-float">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Big Data Analytics Visualization"
                className="rounded-3xl shadow-2xl w-full max-w-lg border-[12px] border-white/90 transform rotate-1"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-xl shadow-xl border border-gray-100 backdrop-blur-sm">
                <div className="text-sm font-medium text-gray-600 mb-1">
                  Featured Keynote
                </div>
                <div className="font-bold text-blue-700 text-lg">Mr. Praveen Kumar</div>
                <div className="text-xs text-gray-500">LLMs Research</div>
              </div>
              <div className="absolute -top-5 -left-5 bg-white p-3 rounded-full shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  🔥
                </div>
              </div>
              <div className="absolute -bottom-5 left-10 bg-white/90 p-3 px-4 rounded-full shadow-md border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Live Q&A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Countdown Section */}
      <section className="bg-gradient-to-r from-blue-700 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Workshop Begins In:
          </h2>
          <p className="text-blue-200/90 text-lg mb-12 max-w-2xl mx-auto">
            Join the most anticipated gathering of big data and LLM researchers
            this year
          </p>

          <div className="flex justify-center gap-6 md:gap-12 mb-14">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg min-w-[80px]"
              >
                <span className="text-5xl md:text-6xl font-bold mb-3 tabular-nums">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="text-sm uppercase tracking-widest text-blue-200/90">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg">
              Get Reminder
            </button> */}
            <button className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              View Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;


