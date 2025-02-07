import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import faqData from '../../data/faq';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Add useEffect to handle scroll behavior when hash is present
  useEffect(() => {
    if (window.location.hash === '#faq') {
      const faqElement = document.getElementById('faq');
      if (faqElement) {
        // Add a small delay to ensure smooth scrolling after page load
        setTimeout(() => {
          faqElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const viewMoreText = showAll ? 'View Less' : 'View More';

  // Determine the number of FAQs to show initially
  const initialFaqsToShow = 4;
  const faqsToShow = showAll ? faqData : faqData.slice(0, initialFaqsToShow);

  return (
    <div id="faq" className='w-full h-full pt-0 pb-24 md:pt-0 md:pb-24 bg-logoGreen shadow-lg drop-shadow-lg'>
      <div className="max-w-5xl mx-4 md:mx-auto bg-white rounded-[1rem] md:rounded-[2rem] p-4 md:p-8 shadow-lg">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 mt-4 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-medium font-['glancyr'] m-auto md:m-0">FAQs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {faqsToShow.map((faq, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleAccordion(index)}
                title={faq.question}
                className={`w-full flex items-center justify-between border border-black px-4 md:px-6 py-2 transition-colors
                  ${activeIndex === index 
                    ? 'bg-white rounded-t-[1rem] border-b-0' 
                    : 'bg-white rounded-[1rem]'
                  }`}
              >
                <span className={`font-grotesque text-sm md:text-base text-left pr-2 ${activeIndex === index ? 'line-clamp-4' : 'line-clamp-1'}`}>
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
                <div className="bg-white px-4 md:px-6 py-2 md:py-3 rounded-b-[1rem] border border-t-0 border-black">
                  <p className="font-grotesque text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        <div className="text-center mt-6 mb-2">
          <button
            onClick={toggleShowAll}
            className="px-6 py-2 text-white bg-logoGreen rounded-full shadow-md hover:bg-logoGreen-dark transition-colors duration-200"
          >
            {viewMoreText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
