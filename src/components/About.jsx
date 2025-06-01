import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-12 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 inline-block pb-1">
        About the Workshop
      </h2>
      <div className="text-gray-700 space-y-6 leading-relaxed text-justify">
        <p>
          The digital era has ushered in an unprecedented explosion of data generated across a broad spectrum of domains, 
          including healthcare, finance, governance, climate, education, and industry. Although big data analytics has facilitated 
          significant computational advancements, the development of Large Language Models (LLMs) marks a paradigm shift in 
          processing and deriving meaning from large-scale, unstructured data sources.
        </p>

        <p>
          LLMs such as <strong>GPT, LLaMA, Claude, PaLM</strong>, and others demonstrate powerful capabilities in text generation, 
          summarization, semantic understanding, contextual reasoning, and multimodal learning. When synergised with big data 
          analytics frameworks, LLMs enable highly intelligent, human-like interaction with complex data at scale, reshaping 
          data-driven decision-making and automation across sectors.
        </p>

        <p>
          Traditional big data analytics systems focus primarily on numerical or structured data processing, often falling short 
          in extracting insight from unstructured and semantically rich data (e.g., text, documents, logs, social media, reports). 
          LLMs offer the capability to:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>Process and understand natural language at scale.</li>
          <li>Translate between structured and unstructured data.</li>
          <li>Enhance query intelligence, data discovery, and knowledge graph creation.</li>
          <li>Generate reports, detect anomalies, and make predictive inferences.</li>
        </ul>

        <p>
          However, integrating LLMs with large-scale data systems poses several technical and operational challenges, including:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>Scalability and latency in real-time systems.</li>
          <li>High computational and energy costs of inference.</li>
          <li>Ethical and bias concerns in automated analysis.</li>
          <li>Dataset alignment and fine-tuning for domain-specific needs.</li>
        </ul>

        <p>
          The <strong>1st International Workshop on Harnessing Big Data Analytics with Large Language Models (HBDA-LLM 2025)</strong> 
          will convene researchers, engineers, data scientists, industry leaders, and policymakers to explore the latest developments 
          and future directions in the fusion of LLMs with big data technologies.
        </p>

        <p>
          This workshop aims to foster partnerships and collaborations among academia, industry, government agencies, and NGOs. 
          We invite national and international academic and industry professionals to present quality research work.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-8">Topics of Interest</h3>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li>LLMs for natural language querying over big data repositories</li>
          <li>Scalable integration of LLMs in distributed computing frameworks (e.g., Spark, Hadoop)</li>
          <li>Text-to-SQL and structured query generation from natural language</li>
          <li>LLM-based summarization and insight extraction from unstructured datasets</li>
          <li>Semantic search and recommendation using LLMs</li>
          <li>Multimodal data fusion using LLMs for complex analytics</li>
          <li>LLMs for anomaly detection in real-time streaming data</li>
          <li>Generative models for synthetic big data generation</li>
          <li>Large-scale knowledge graph construction from heterogeneous data</li>
          <li>LLM-powered dashboards, virtual assistants, and report automation</li>
          <li>Federated learning and privacy-preserving analytics using LLMs</li>
          <li>Bias detection, transparency, and ethical AI in LLM-based analytics</li>
          <li>Using open-source LLMs (e.g., LLaMA, Mistral) in enterprise data systems</li>
          <li>LLMs for policy analytics, legal document analysis, and regulatory compliance</li>
          <li>LLMs in healthcare, finance, smart cities, and sustainability analytics</li>
          <li>Diffusion models and LLMs for temporal and geospatial data forecasting</li>
          <li>Fine-tuning LLMs for domain-specific analytical use cases</li>
          <li>LLMs for decision support systems and human-in-the-loop analysis</li>
        </ol>
      </div>
    </section>
  );
};

export default About;
