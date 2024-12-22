import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How long does it take to learn driving?",
      answer: "The duration varies per individual, but typically our beginner course spans 10 hours spread across multiple sessions. Most students feel confident in basic driving skills after completing this course."
    },
    {
      question: "Do you provide a car for the driving test?",
      answer: "Yes, we provide a well-maintained car for your driving test at an additional cost. The car will be the same model you practiced on during your lessons, ensuring you're completely familiar with it."
    },
    {
      question: "What documents do I need to start learning?",
      answer: "You'll need a valid Learner's License, proof of identity (Aadhar/PAN), and proof of address. We'll guide you through the documentation process if needed."
    },
    {
      question: "Are your instructors RTO certified?",
      answer: "Yes, all our instructors are RTO certified with minimum 10 years of experience. They are trained in modern teaching methods and maintain the highest safety standards."
    },
    {
      question: "What types of cars do you use for training?",
      answer: "We primarily use popular hatchback models like Swift and i10 for training, as they're ideal for beginners. These cars are equipped with dual controls for safety and are regularly maintained."
    },
    {
      question: "Do you offer automatic car training?",
      answer: "Yes, we offer both manual and automatic car training. You can choose based on your preference, though we recommend learning manual transmission first as it covers all driving skills."
    },
    {
      question: "What safety measures do you follow?",
      answer: "Our cars are equipped with dual controls, first-aid kits, and are regularly serviced. We maintain strict COVID-19 safety protocols, and all vehicles are sanitized between sessions."
    },
    {
      question: "Can I choose my preferred time slot?",
      answer: "Yes, we offer flexible timing from 6 AM to 8 PM. You can choose your preferred slot based on availability. We also offer weekend sessions for working professionals."
    },
    {
      question: "What happens if I need extra classes?",
      answer: "Additional classes can be arranged at a nominal cost. We recommend extra sessions if you feel you need more practice to build confidence."
    },
    {
      question: "Do you help with license registration?",
      answer: "Yes, we provide assistance with the entire licensing process, from learner's license application to scheduling your final driving test with the RTO."
    }
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