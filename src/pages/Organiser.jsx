import React from "react";
import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";

// Generate avatar URL based on name
const getAvatarUrl = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name.replace('Prof.', '').trim())}&background=059669&color=fff&size=128&bold=true`;

const workshopOrganizers = [
  {
    name: "Prof. Rajiv Misra",
    affiliation: "Indian Institute of Technology (IIT), Patna",
    image: getAvatarUrl("Rajiv Misra"),
    role: "Workshop Organizer",
  },
  {
    name: "Prof. T.N. Singh",
    affiliation: "IIT Patna, India",
    image: getAvatarUrl("TN Singh"),
    role: "Workshop Organizer",
  },
  {
    name: "Prof. Supratik Mukhopadhyay",
    affiliation: "Louisiana State University, USA",
    image: getAvatarUrl("Supratik Mukhopadhyay"),
    role: "Workshop Organizer",
  },
];

const tpcList = [
  { name: "Prof. Gokarna Sharma", affiliation: "Kent State University" },
  { name: "Prof. Sandro Fiore", affiliation: "University of Trento, Italy" },
  { name: "Prof. Subhajit Sidhanta", affiliation: "IIT Bhilai" },
  { name: "Prof. Yimin Zhu", affiliation: "Louisiana State University" },
  { name: "Prof. Hector Zapata", affiliation: "Louisiana State University" },
  { name: "Prof. Tairan Liu", affiliation: "California State University, Longbeach" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Organiser = () => {
  return (
    <section id="organiser" className="bg-slate-50 min-h-screen pt-24 pb-20 px-6 font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-teal-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Workshop Organizers Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6 shadow-sm">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Workshop <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Organizers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {workshopOrganizers.map((organizer, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 text-center shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="relative w-32 h-32 object-cover rounded-full border-4 border-white shadow-sm"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {organizer.name}
              </h3>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                {organizer.role}
              </p>
              <p className="text-slate-600">
                {organizer.affiliation}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TPC Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6 shadow-sm">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Technical Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Committee</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tpcList.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={getAvatarUrl(member.name)}
                  alt={member.name}
                  className="w-14 h-14 rounded-full border-2 border-slate-100"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{member.affiliation}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Organiser;
