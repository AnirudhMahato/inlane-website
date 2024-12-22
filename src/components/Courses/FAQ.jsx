import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Get to know your car",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Get to know your car",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Get to know your car",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Get to know your car",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Get to know your car",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Get to know your car",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-green-400 w-full py-16'>
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <img src="/course/arrow.svg" alt="arrow" />
          <h2 className="text-3xl font-medium font-['glancyr']">FAQs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between bg-gray-50 rounded-full px-6 py-3 hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-800 font-['glancyr']">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform text-gray-500 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeIndex === index && (
                <div className="mt-2 px-6 py-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-['glancyr']">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;