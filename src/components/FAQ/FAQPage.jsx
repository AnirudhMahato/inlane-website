import React, { useState, useEffect } from 'react';
import faqData from '../../data/faq';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
import { supabase } from '../../supabaseClient';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isTyping, setIsTyping] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [messageCharCount, setMessageCharCount] = useState(0);

  // Define FAQ categories with emojis
  const categories = [
    { id: 'All', name: 'All', emoji: '' },
    { id: 'Everything Cars', name: 'Everything Cars', emoji: '🚗' },
    { id: 'RTO Queries', name: 'RTO Queries', emoji: '❓' },
    { id: 'Driver\'s Circle', name: 'Driver\'s Circle', emoji: '😊', extraEmoji: '🍩' },
    { id: 'Lane Updates', name: 'Lane Updates', emoji: '🔵' },
    { id: 'Road trips', name: 'Road trips', emoji: '🗺️' }
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter FAQs based on search term and category
  useEffect(() => {
    let filtered = faqData;

    // Filter by category first
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Then filter by search term
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFAQs(filtered);
    setActiveIndex(null);
  }, [searchTerm, selectedCategory]);

  // Handle typing animation
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsTyping(true);
    
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsTyping(false);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setActiveIndex(null);
  };

  // Modal handlers
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setMessageCharCount(0);
    setSubmitMessage('');
  };

  // Form handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'message' && value.length <= 500) {
      setFormData(prev => ({ ...prev, [name]: value }));
      setMessageCharCount(value.length);
    } else if (name !== 'message') {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Form submission handler with Supabase integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('queries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      // Success - show success message
      setSubmitMessage('Your query has been submitted successfully! We will get back to you soon.');
      
      // Reset form after successful submission
      setTimeout(() => {
        closeModal();
      }, 2000);

    } catch (error) {
      console.error('Error submitting query:', error);
      setSubmitMessage('There was an error submitting your query. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 200px;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-bounce-1 {
          animation: bounce 1s infinite;
          animation-delay: 0ms;
        }

        .animate-bounce-2 {
          animation: bounce 1s infinite;
          animation-delay: 150ms;
        }

        .animate-bounce-3 {
          animation: bounce 1s infinite;
          animation-delay: 300ms;
        }

        .typing-cursor {
          animation: pulse 1s infinite;
        }

        .search-highlight {
          background-color: #fef08a;
          padding: 2px 4px;
          border-radius: 4px;
          animation: pulse 2s infinite;
        }

        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-content {
          background: white;
          border-radius: 1rem;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: modalSlideIn 0.3s ease-out;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: all 0.2s;
          color: #374151;
        }

        .form-input:focus {
          outline: none;
          border-color: #00CE84;
          box-shadow: 0 0 0 3px rgba(0, 206, 132, 0.1);
        }

        .form-input::placeholder {
          color: #9ca3af;
          text-align: left;
        }

        .form-input:disabled {
          background-color: #f9fafb;
          cursor: not-allowed;
        }

        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          resize: vertical;
          min-height: 120px;
          transition: all 0.2s;
          color: #374151;
        }

        .form-textarea:focus {
          outline: none;
          border-color: #00CE84;
          box-shadow: 0 0 0 3px rgba(0, 206, 132, 0.1);
        }

        .form-textarea::placeholder {
          color: #9ca3af;
          text-align: left;
        }

        .form-textarea:disabled {
          background-color: #f9fafb;
          cursor: not-allowed;
        }

        .char-counter {
          font-size: 0.75rem;
          color: #6b7280;
          text-align: right;
          margin-top: 0.25rem;
        }

        .input-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1rem;
          height: 1rem;
          color: #9ca3af;
          pointer-events: none;
        }

        .success-message {
          background-color: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .error-message {
          background-color: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        .category-button {
          transition: all 0.3s ease;
          transform: scale(1);
        }

        .category-button:hover {
          transform: scale(1.05);
        }

        .category-button.active {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(0, 206, 132, 0.3);
        }
      `}</style>

      <div className="bg-logoYellow">
        {/* Header */}
        <Navbar2 backgroundColor='#FAF9E6' logo='./LANE_LOGO.svg' burgerMenu='/PurpleHamburger.png' />
        
        {/* Main Content */}
        <div className='w-full min-h-screen pt-8 pb-24'>
          <div className="max-w-6xl mx-4 md:mx-auto bg-white rounded-[1rem] md:rounded-[2rem] p-4 md:p-8 shadow-lg">
            {/* Header with Search Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8 mt-4 md:mt-0">
              <h1 className="text-3xl md:text-4xl font-medium font-['glancyr'] text-center md:text-left">
                Frequently Asked Questions
              </h1>
              
              {/* Search Bar - Top Right */}
              <div className="relative w-full md:w-80 lg:w-96">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pr-12 border border-gray-300 rounded-[1rem] font-grotesque text-sm focus:outline-none focus:ring-2 focus:ring-[#00CE84] focus:border-transparent transition-all duration-300 ${
                      isTyping ? 'animate-pulse border-[#00CE84]' : ''
                    }`}
                  />
                  
                  {/* Typing Animation Indicator */}
                  {isTyping && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <div className="w-1 h-1 bg-[#00CE84] rounded-full animate-bounce-1"></div>
                      <div className="w-1 h-1 bg-[#00CE84] rounded-full animate-bounce-2"></div>
                      <div className="w-1 h-1 bg-[#00CE84] rounded-full animate-bounce-3"></div>
                    </div>
                  )}
                  
                  {/* Search/Clear Icon */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {searchTerm ? (
                      <button
                        onClick={clearSearch}
                        className="text-gray-400 hover:text-gray-600 transition-colors transform hover:scale-110"
                        title="Clear search"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    ) : (
                      <div className="relative">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0.5 h-4 bg-[#00CE84] typing-cursor"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Search Results Counter */}
                {searchTerm && (
                  <div className="mt-2 text-right">
                    <p className="text-sm text-gray-600 font-grotesque animate-fadeIn">
                      {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} found
                      {searchTerm && (
                        <span className="ml-1">
                          for "<span className="font-medium text-[#00CE84]">{searchTerm}</span>"
                        </span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Category Filter Buttons */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`category-button px-4 py-2 rounded-full font-grotesque font-medium text-sm md:text-base transition-all duration-300 ${
                      selectedCategory === category.id
                        ? category.id === 'All'
                          ? 'bg-yellow-200 text-black border-2 border-black active'
                          : category.id === 'Everything Cars'
                          ? 'bg-green-200 text-black border-2 border-black active'
                          : category.id === 'RTO Queries'
                          ? 'bg-purple-200 text-black border-2 border-black active'
                          : category.id === 'Driver\'s Circle'
                          ? 'bg-yellow-100 text-black border-2 border-black active'
                          : category.id === 'Lane Updates'
                          ? 'bg-teal-200 text-black border-2 border-black active'
                          : 'bg-purple-100 text-black border-2 border-black active'
                        : category.id === 'All'
                        ? 'bg-yellow-100 text-black border border-gray-300 hover:bg-yellow-200'
                        : category.id === 'Everything Cars'
                        ? 'bg-green-100 text-black border border-gray-300 hover:bg-green-200'
                        : category.id === 'RTO Queries'
                        ? 'bg-purple-100 text-black border border-gray-300 hover:bg-purple-200'
                        : category.id === 'Driver\'s Circle'
                        ? 'bg-yellow-50 text-black border border-gray-300 hover:bg-yellow-100'
                        : category.id === 'Lane Updates'
                        ? 'bg-teal-100 text-black border border-gray-300 hover:bg-teal-200'
                        : 'bg-purple-50 text-black border border-gray-300 hover:bg-purple-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category.emoji && <span>{category.emoji}</span>}
                      {category.extraEmoji && <span>{category.extraEmoji}</span>}
                      <span>{category.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Category Display */}
            {selectedCategory !== 'All' && (
              <div className="mb-6 text-center">
                <h2 className="text-xl md:text-2xl font-medium font-['glancyr'] text-gray-700">
                  {categories.find(cat => cat.id === selectedCategory)?.emoji} {selectedCategory} FAQs
                </h2>
              </div>
            )}

            {/* No Results Message */}
            {filteredFAQs.length === 0 && (searchTerm || selectedCategory !== 'All') && (
              <div className="text-center py-12 animate-fadeIn">
                <div className="mb-4">
                  <svg className="w-16 h-16 text-gray-300 mx-auto animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium font-['glancyr'] text-gray-600 mb-2">
                  No FAQs found
                </h3>
                <p className="font-grotesque text-gray-500 mb-4">
                  {searchTerm 
                    ? "Try adjusting your search terms or browse different categories." 
                    : `No FAQs available in the ${selectedCategory} category yet.`
                  }
                </p>
                <button
                  onClick={() => {
                    clearSearch();
                    setSelectedCategory('All');
                  }}
                  className="bg-gradient-to-r from-[#00CE84] to-[#00BC78] text-white px-6 py-2 rounded-full font-grotesque font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Show All FAQs
                </button>
              </div>
            )}

            {/* FAQ Grid */}
            {filteredFAQs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fadeIn">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="relative transform transition-all duration-300 hover:scale-[1.02]">
                    <button
                      onClick={() => toggleAccordion(index)}
                      title={faq.question}
                      className={`w-full flex items-center justify-between border border-black px-4 md:px-6 py-3 transition-all duration-300
                        ${activeIndex === index 
                          ? 'bg-white rounded-t-[1rem] border-b-0 shadow-lg' 
                          : 'bg-white rounded-[1rem] hover:shadow-md'
                        }`}
                    >
                      <span className={`font-grotesque text-sm md:text-base text-left pr-2 ${activeIndex === index ? 'line-clamp-4' : 'line-clamp-2'}`}>
                        {searchTerm ? (
                          <span dangerouslySetInnerHTML={{
                            __html: faq.question.replace(
                              new RegExp(`(${searchTerm})`, 'gi'),
                              '<span class="search-highlight">$1</span>'
                            )
                          }} />
                        ) : (
                          faq.question
                        )}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 text-gray-500 flex-shrink-0 ${
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
                      <div className="bg-white px-4 md:px-6 py-3 md:py-4 rounded-b-[1rem] border border-t-0 border-black animate-slideDown shadow-lg">
                        <p className="font-grotesque text-sm md:text-base leading-relaxed">
                          {searchTerm ? (
                            <span dangerouslySetInnerHTML={{
                              __html: faq.answer.replace(
                                new RegExp(`(${searchTerm})`, 'gi'),
                                '<span class="search-highlight">$1</span>'
                              )
                            }} />
                          ) : (
                            faq.answer
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Contact Section */}
            <div className="mt-12 text-center p-6 bg-gray-50 rounded-[1rem] transform transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl md:text-2xl font-medium font-['glancyr'] mb-3">
                Still have questions?
              </h3>
              <p className="font-grotesque text-sm md:text-base text-gray-600 mb-4">
                Can't find the answer you're looking for? Please contact our support team.
              </p>
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-[#00CE84] to-[#00BC78] text-white px-6 py-2 rounded-full font-grotesque font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 md:p-8">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-medium font-['glancyr'] text-gray-800">
                    Raise a Query
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={isSubmitting}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 font-grotesque mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                {/* Success/Error Message */}
                {submitMessage && (
                  <div className={`mb-4 p-3 rounded-lg text-sm ${
                    submitMessage.includes('successfully') 
                      ? 'success-message' 
                      : 'error-message'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name*
                    </label>
                    <div className="relative">
                      <svg className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter Your Name"
                        className="form-input"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <div className="relative">
                      <svg className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Enter Your Email id"
                        className="form-input"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <div className="relative">
                      <svg className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="Enter Your Mobile No (10 digits)"
                        className="form-input"
                        pattern="[0-9]{10}"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-xs text-gray-500">(Max 500 characters)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Write Your Message"
                      className="form-textarea"
                      maxLength={500}
                      rows={4}
                      disabled={isSubmitting}
                    />
                    <div className="char-counter">
                      {messageCharCount}/500 characters
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-full font-grotesque font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#00CE84] to-[#00BC78] hover:shadow-lg transform hover:scale-105'
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Raise Query
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
