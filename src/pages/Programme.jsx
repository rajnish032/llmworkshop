import React from 'react';
import { Calendar, Clock, Link as LinkIcon, AlertCircle } from 'lucide-react';

const ProgramSchedule = () => {
  const schedule = [
    {
      time: "14:00-14:15",
      title: "S24202: Transformer Scalability Crisis: The First Comprehensive Empirical Analysis of Performance Walls in Modern Language Models",
      presenter: "Mahdi Naser Moghadasi",
    },
    {
      time: "14:15-14:30",
      title: "S24203: Neural Activation Patterns Across Language Model Architectures: A Comprehensive Analysis of Cognitive Task Performance",
      presenter: "Mahdi Naser Moghadasi",
    },
    {
      time: "14:30-14:45",
      title: "S24204: SwasthLLM: a Unified Cross-Lingual, Multi-Task, and Meta-Learning Zero-Shot Framework for Medical Diagnosis Using Contrastive Representations",
      presenter: "Ayan Sar, Pranav Singh Puri, Sumit Aich, Tanupriya Choudhury, and Abhijit Kumar",
    },
    {
      time: "14:45-15:00",
      title: "S24205: Hierarchical Resolution Transformers: A Wavelet-Inspired Architecture for Multi-Scale Language Understanding",
      presenter: "Ayan Sar, Pranav Singh Puri, Sumit Aich, Tanupriya Choudhury, and Abhijit Kumar",
    },
    {
      time: "15:00-15:15",
      title: "S24206: Dynamic Reasoning Chains through Depth-Specialized Mixture-of-Experts in Transformer Architectures",
      presenter: "Ayan Sar, Sampurna Roy, Kanav Gupta, Anurag Kaushish, Tanupriya Choudhury, and Abhijit Kumar",
    },
    {
      time: "15:15-16:00",
      title: "Coffee Break",
      presenter: "-",
      isBreak: true
    },
    {
      time: "16:00-16:15",
      title: "S24207: Enhanced ESG Data Processing Using Retrieval-Augmented AI",
      presenter: "Milad Olad, Ehsan Khaksar, Robert Lytle, Ryan Hilimoniuk, Maryam Ghanbari, Leila Tahmooresnejad, and Anteneh Ayanso",
    },
    {
      time: "16:15-16:30",
      title: "S24208: CU-1: A Class-Agnostic Detection Transformer Bridging Large Language Models and Big Data Interface Understanding",
      presenter: "André-Louis Rochet, Matis Despujols, Léo Appourchaux, Noé Brandolini, David Soeiro-Vuong, Paul Lemaistre, Gérard Réus, and Bikram Pratim Bhuyan",
    },
    {
      time: "16:30-16:45",
      title: "S24209: Mapping Discrimination in LLM-driven HR Systems",
      presenter: "Eldar Jalilzade, Maksim Kalameyets, Shrikant Malviya, Rebecca Owens, Stamos Katsigiannis, Ben Farrand, and Lei Shi",
    },
    {
      time: "16:45-17:00",
      title: "BigD844: Multi-Agent Debate for Content Moderation with Dynamic Group Arbitration",
      presenter: "Yuzhou Jiang, Liang Wang, Yuwei Lou, Xianping Tao, and Hao Hu",
    },
    {
      time: "17:00-17:15",
      title: "S24210: Graph Neural Network (GNN) and Its Application: A State-of-the-Art Survey",
      presenter: "Ashutosh Sharma, Amit Sharma, Abhijit Kumar, Ayan Sar, and Tanupriya Choudhury",
    },
    {
      time: "17:15-17:30",
      title: "Closing Remarks",
      presenter: "-",
      isBreak: true
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20 font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Header */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-50"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
              4th International Workshop on
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Big Data, Large Language Models, and Ethical AI for Climate Change (TADD-Climate 2026)
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 mt-8 mb-8">
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full text-emerald-800 font-medium">
                <Calendar className="w-5 h-5" /> December 14, 2026
              </div>
              <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full text-teal-800 font-medium">
                <Clock className="w-5 h-5" /> Schedule TBA (Phoenix, AZ Time)
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 inline-block text-left max-w-2xl">
              <div className="flex gap-3 text-slate-600">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  <strong>Note:</strong> The schedule below displays placeholder sessions from previous workshops. The official TADD-Climate 2026 program schedule will be published here after paper acceptance notifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Table */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 overflow-hidden">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8">
            <Calendar className="w-7 h-7 text-emerald-500" /> Preliminary Program Schedule
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-y border-slate-100">
                  <th className="py-4 px-6 font-semibold text-slate-700 w-40">Time</th>
                  <th className="py-4 px-6 font-semibold text-slate-700">Title</th>
                  <th className="py-4 px-6 font-semibold text-slate-700">Presenter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {schedule.map((item, idx) => (
                  <tr key={idx} className={`hover:bg-slate-50/50 transition-colors ${item.isBreak ? 'bg-emerald-50/30' : ''}`}>
                    <td className="py-4 px-6 align-top whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium ${item.isBreak ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}`}>
                        {item.time}
                      </span>
                    </td>
                    <td className={`py-4 px-6 align-top ${item.isBreak ? 'font-semibold text-emerald-700' : 'text-slate-800 font-medium'}`}>
                      {item.title}
                    </td>
                    <td className="py-4 px-6 align-top text-slate-600 text-sm">
                      {item.presenter}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramSchedule;
