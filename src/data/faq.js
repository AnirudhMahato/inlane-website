const faqData = [
  // Everything Cars Category
  {
    question: "What type of cars do you use for training?",
    answer: "We use well-maintained manual and automatic transmission cars including Maruti Swift, Hyundai i20, and other popular models. All our training vehicles are equipped with dual controls for safety and have valid insurance and permits.",
    category: "Everything Cars"
  },
  {
    question: "Can I learn on an automatic car?",
    answer: "Yes, we offer training on both manual and automatic cars. However, if you learn only on automatic, your license will be restricted to automatic vehicles only. We recommend learning on manual transmission for a full license.",
    category: "Everything Cars"
  },
  {
    question: "Do you provide cars for the RTO test?",
    answer: "Yes, we provide cars for the RTO driving test. Our instructors will accompany you to the RTO and ensure the vehicle is properly prepared for your test. This service is included in our comprehensive packages.",
    category: "Everything Cars"
  },
  {
    question: "What safety features do your training cars have?",
    answer: "All our training cars are equipped with dual brake and clutch controls, allowing instructors to take control if needed. They also have seat belts, airbags, and are regularly serviced for optimal safety.",
    category: "Everything Cars"
  },
  {
    question: "Can I practice with my own car?",
    answer: "Yes, once you've completed basic training with our vehicles, we can arrange sessions with your personal car. This helps you get familiar with your own vehicle's specific controls and handling.",
    category: "Everything Cars"
  },

  // RTO Queries Category
  {
    question: "What documents do I need for the RTO test?",
    answer: "You need your learner's license, ID proof (Aadhar card), address proof, passport-size photos, Form 2 (application for driving license), medical certificate, and fee payment receipt. We'll help you prepare all required documents.",
    category: "RTO Queries"
  },
  {
    question: "How do I get a learner's license?",
    answer: "You can apply for a learner's license online through the Parivahan portal or visit your local RTO. You need to be 18+ for cars, pass a written test on traffic rules, and submit required documents including age and address proof.",
    category: "RTO Queries"
  },
  {
    question: "What is the RTO test process?",
    answer: "The RTO driving test includes a computer-based test on traffic signs and rules, followed by a practical driving test. You'll need to demonstrate skills like parallel parking, reverse parking, and general road driving.",
    category: "RTO Queries"
  },
  {
    question: "How long is the learner's license valid?",
    answer: "A learner's license is valid for 6 months from the date of issue. You must appear for the driving test within this period. If it expires, you'll need to reapply for a new learner's license.",
    category: "RTO Queries"
  },
  {
    question: "What happens if I fail the RTO test?",
    answer: "If you fail the RTO test, you can reappear after 7 days. There's no limit on the number of attempts, but you'll need to pay the test fee each time. We provide additional training sessions to help you pass.",
    category: "RTO Queries"
  },
  {
    question: "Can I transfer my license to another state?",
    answer: "Yes, you can transfer your driving license to another state if you've relocated. You need to apply within 30 days of moving, submit your original license, new address proof, and pay the transfer fee at the local RTO.",
    category: "RTO Queries"
  },

  // Driver's Circle Category
  {
    question: "How do I join the Lane Driver's Circle?",
    answer: "Once you complete your driving course with us, you automatically become part of our Driver's Circle community. You'll receive exclusive updates, tips, and invitations to driving events and workshops.",
    category: "Driver's Circle"
  },
  {
    question: "What benefits do Driver's Circle members get?",
    answer: "Members get access to refresher courses at discounted rates, priority booking for advanced driving sessions, monthly driving tips newsletter, and invitations to road safety workshops and community drives.",
    category: "Driver's Circle"
  },
  {
    question: "Do you organize group drives for members?",
    answer: "Yes, we organize monthly group drives to scenic locations around Bangalore. These are supervised drives that help build confidence and provide a platform for our driving community to connect and share experiences.",
    category: "Driver's Circle"
  },
  {
    question: "Can I get refresher training as a member?",
    answer: "Absolutely! Driver's Circle members get special rates on refresher sessions. Whether you want to brush up on parking skills, highway driving, or night driving, we offer customized refresher packages.",
    category: "Driver's Circle"
  },
  {
    question: "Is there a membership fee for Driver's Circle?",
    answer: "No, there's no additional membership fee. Once you complete any course with Lane Driving School, you're automatically enrolled in our Driver's Circle community for life.",
    category: "Driver's Circle"
  },

  // Lane Updates Category
  {
    question: "How do I stay updated with Lane's latest news?",
    answer: "Follow us on Instagram @inlane.in, LinkedIn, and Twitter for regular updates. You can also subscribe to our newsletter through our website to receive course updates, driving tips, and special offers directly in your inbox.",
    category: "Lane Updates"
  },
  {
    question: "Do you offer new courses regularly?",
    answer: "Yes, we regularly introduce new specialized courses based on student feedback and industry trends. Recent additions include highway driving, night driving, and defensive driving courses. Check our website for the latest offerings.",
    category: "Lane Updates"
  },
  {
    question: "How can I provide feedback about my experience?",
    answer: "We value your feedback! You can share your experience through our website's feedback form, Google reviews, or directly message us on social media. Your input helps us improve our services continuously.",
    category: "Lane Updates"
  },
  {
    question: "Do you send course completion certificates digitally?",
    answer: "Yes, we provide digital certificates via email upon course completion. Physical certificates are also available upon request. All certificates include QR codes for easy verification of authenticity.",
    category: "Lane Updates"
  },
  {
    question: "How often do you update your training curriculum?",
    answer: "We review and update our curriculum every 6 months to incorporate latest traffic rules, road safety guidelines, and teaching methodologies. This ensures our students receive the most current and effective training.",
    category: "Lane Updates"
  },

  // Road trips Category
  {
    question: "Do you provide training for long-distance driving?",
    answer: "Yes, we offer specialized highway and long-distance driving training. This includes lessons on highway etiquette, fuel-efficient driving, handling different road conditions, and emergency procedures during long trips.",
    category: "Road trips"
  },
  {
    question: "What should I check before going on a road trip?",
    answer: "Before any road trip, check your vehicle's engine oil, coolant, brake fluid, tire pressure and tread, lights, and carry emergency kit. Plan your route, inform someone about your travel plans, and ensure all documents are valid.",
    category: "Road trips"
  },
  {
    question: "Do you organize guided road trips for students?",
    answer: "Yes, we organize supervised road trips to nearby destinations like Nandi Hills, Coorg, and Mysore. These trips help students gain confidence in long-distance driving while enjoying scenic routes under expert guidance.",
    category: "Road trips"
  },
  {
    question: "What are the essential items to carry on a road trip?",
    answer: "Essential items include valid driving license and vehicle documents, first aid kit, spare tire and tools, jumper cables, flashlight, water and snacks, phone charger, and emergency contact numbers. We provide a detailed checklist to our students.",
    category: "Road trips"
  },
  {
    question: "How do I handle vehicle breakdown during a road trip?",
    answer: "If your vehicle breaks down, move to a safe location, turn on hazard lights, place warning triangles, and call for roadside assistance. We teach our students basic troubleshooting and emergency procedures during our advanced courses.",
    category: "Road trips"
  },
  {
    question: "What's the best time to start a road trip from Bangalore?",
    answer: "Early morning (5-6 AM) is ideal to avoid traffic and reach your destination comfortably. For weekend trips, leaving on Friday evening or early Saturday helps you make the most of your time while avoiding peak traffic hours.",
    category: "Road trips"
  },

  // General/All Category Questions
  {
    question: "How long does it take to learn driving?",
    answer: "Most students become confident drivers within 15-20 sessions over 3-4 weeks. However, the duration depends on individual learning pace, prior experience, and practice frequency. We offer flexible packages to suit different learning speeds.",
    category: "Everything Cars"
  },
  {
    question: "What are your course fees?",
    answer: "Our course fees vary based on the package selected. Basic packages start from ₹8,000 for 10 sessions, while comprehensive packages with RTO test support range from ₹12,000-15,000. Contact us for detailed pricing and current offers.",
    category: "Lane Updates"
  },
  {
    question: "Do you provide home pickup and drop?",
    answer: "Yes, we provide pickup and drop services within Bangalore city limits. This convenience allows you to learn from your preferred location without worrying about reaching our training center.",
    category: "Lane Updates"
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel or reschedule sessions with at least 4 hours notice without any charges. Last-minute cancellations may incur a nominal fee. We understand that plans change and try to be as flexible as possible.",
    category: "Lane Updates"
  },
  {
    question: "Are your instructors certified?",
    answer: "Yes, all our instructors are RTO-certified with years of experience. They undergo regular training updates and are skilled in teaching nervous beginners as well as advanced driving techniques. Background verification is done for all instructors.",
    category: "Everything Cars"
  }
];

export default faqData;
