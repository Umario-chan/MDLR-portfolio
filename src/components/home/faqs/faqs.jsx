import React, { useState } from "react";
import { faqs as skills } from "../../../data/faqData.js";


const SkillsList = () => {
  const [openItem, setOpenItem] = useState(-1);

  return (
    <section className="py-16 px-4 reveal">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6fec] mb-1 text-center">FAQ</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          <span className="lang-es">Sobre mí y mi trabajo</span>
          <span className="lang-en">About me and my work</span>
        </h2>

        <div className="space-y-3">
          {skills.map((item, index) => (
            <div
              key={item.questionEs}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenItem(openItem === index ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6fec] focus-visible:ring-inset"
              >
                <span className="text-sm font-semibold text-gray-900">
                  <span className="lang-es">{item.questionEs}</span>
                  <span className="lang-en">{item.questionEn}</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${openItem === index ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                  <span className="lang-es">{item.answerEs}</span>
                  <span className="lang-en">{item.answerEn}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsList;
