import React from 'react';

const WorkshopInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 text-gray-800">
      {/* Important Dates */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 border-b pb-2 mb-4 mt-20">📅 Important Dates</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Workshop Date:</strong> December 8, 2025</li>
          <li><strong>Electronic submission of full papers:</strong> October 5, 2025</li>
          <li><strong>Notification of paper acceptance:</strong> November 4, 2025</li>
          <li><strong>Camera-ready of accepted papers:</strong> November 23, 2025</li>
        </ul>
      </section>

      {/* Important Links */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 border-b pb-2 mb-4">🔗 Important Links</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Paper Submission Link:</strong>{' '}
            <a
              href="https://wi-lab.com/cyberchair/2025/bigdata25/scripts/submit.php?subarea=S24&undisplay_detail=1&wh=/cyberchair/2025/bigdata25/scripts/ws_submit.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Submit Paper
            </a>
          </li>
          <li>
            <strong>Paper Templates:</strong>{' '}
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              IEEE Template
            </a>
          </li>
        </ul>
      </section>

      {/* Submission Guidelines */}
      <section>
        <h2 className="text-2xl font-bold text-purple-700 border-b pb-2 mb-4">📝 Paper Submission Guideline</h2>
        <p>
          The workshop invites full-length paper submissions that report ongoing or finished research 
          (up to 10 pages in IEEE 2-column format, including references). Papers must follow the IEEE 
          Computer Society Proceedings Manuscript Formatting Guidelines using Letter page format (8.5 x 11).
        </p>
        <p className="mt-2">
          All accepted papers will be published in the Workshop Proceedings by the IEEE Computer Society 
          Press and will be available in the IEEE Digital Library, indexed by Google Scholar and Scopus.
        </p>
      </section>

      {/* Contact Info */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 border-b pb-2 mb-4">📞 Contact</h2>
        <div className="space-y-2">
          <div>
            <strong>Dr. Abhijit Kumar</strong><br />
            Senior Associate Professor & Program Lead-AI Cluster,<br />
            School of Computer Science, UPES Dehradun, India - 248007<br />
            Email: <a href="mailto:abhijit.kumar@ddn.upes.ac.in" className="text-blue-600 underline">abhijit.kumar@ddn.upes.ac.in</a>
          </div>
          <div>
            <strong>Mr. Praveen Kumar</strong><br />
            Assistant Professor, B.P. Mandal College of Madhepura, India<br />
            Contact: <a href="tel:8789382669" className="text-blue-600 underline">8789382669</a><br />
            Email: <a href="mailto:praveenkumaryadav782@gmail.com" className="text-blue-600 underline">praveenkumaryadav782@gmail.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopInfo;
