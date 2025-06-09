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
  },

  {
    question: "What services does Lane Driving School offer in Bangalore?",
    answer: "Lane Driving School offers beginner 4-Wheeler driving lessons, refresher courses, RTO assistance, and both 4- Wheeler and 2-Wheeler license test preparation in Bangalore. Training is provided in manual cars, or in your own car if preferred.",
    category: "General Driving School Information"
  },
  {
    question: "Where are Lane’s driving training centers located in Bangalore?",
    answer: "Lane operates from MG Road, near Trinity Circle Metro Station at Capsule Workspace, and offers doorstep driving lessons across Bangalore. Our certified instructors train learners at their location, with online RTO assistance and minimal in-office visits.",
    category: "General Driving School Information"
  },
  {
    question: "Does Lane Driving School provide online driving theory classes or only in-person sessions?",
    answer: "Lane Driving School provides only practical driving classes. For theory, learners get access to interactive digital modules, short videos, and gamified content designed to build strong driving knowledge at their own pace.",
    category: "General Driving School Information"
  },
  {
    question: "Are Lane's driving instructors certified and background-verified?",
    answer: "Yes, Lane’s instructors undergo thorough assessments evaluating their training skills, patience, communication, and multilingual abilities. They also pass strict background checks to ensure learner safety. Afterward, instructors are trained to follow our standardized curriculum.",
    category: "General Driving School Information"
  },
  {
    question:"Why should I choose Lane over other driving schools in Bangalore?",
    answer:"Lane Driving School offers a structured, curriculum-based learning experience tailored to each learner’s skill level. Our certified instructors are trained for clarity, patience, and safety, with verified backgrounds. Each class follows a clear agenda, and learners receive pre-reads, short videos, and interactive gaming modules in advance—so the learner can come prepared and make the most out of the practical sessions.",
    category: "General Driving School Information"
  },
  {
    question: "What are the benefits of choosing Lane Driving School?",
    answer: "Lane Driving School offers a structured, curriculum-based learning experience tailored to each learner’s skill level. Our certified instructors are trained for clarity, patience, and safety, with verified backgrounds. Each class follows a clear agenda, and learners receive pre-reads, short videos, and interactive gaming modules in advance—so the learner can come prepared and make the most out of the practical sessions.",
    category: "General Driving School Information"
  },
  {
    question:"What types of car driving courses does Lane Driving School offer?",
    answer:"Lane Driving School in Bangalore offers beginner and refresher-level car driving courses using manual transmission hatchback cars. Learners can also opt to train in their own vehicles. All sessions are customized and conducted at the learner’s location, ensuring a convenient and personalized experience.",
    category: "Course & Training Details",
  },
  {
    question: "How long does it take to complete a standard driving course at Lane?",
    answer: "Lane’s standard beginner driving course takes 10 days, covering both basic and advanced driving skills. We also offer refresher courses tailored to needs like city traffic driving, flyover driving, slope handling, and parking in narrow spaces, with flexible durations based on the learner’s goals.For more details, visit our https://inlane.in/courses",
    category: "Course & Training Details",
  },
  {
    question: "Can I customize my driving lessons based on my skill level and schedule?",
    answer: "Yes, Inlane offers fully customizable driving lessons tailored to your skill level, learning pace, and schedule. Whether you’re a beginner or need advanced training, our flexible sessions ensure convenient, personalized coaching that fits your needs.For any suggestions or support, you can contact us at team@inlane.in or call +91 96116 87011.",
    category: "Course & Training Details",
  },
  {
    question: "How can I track my driving progress during my course with Lane?",
    answer: "Lane Driving School provides regular feedback from certified instructors after each session to help you track your progress. Additionally, our online dashboard allows you to monitor completed lessons, upcoming schedules, and personalized recommendations to improve your driving skills.",
    category: "Course & Training Details",
  },
  {
    question: "What is the pricing structure for car driving lessons at Lane Bangalore?",
    answer: "The beginner car driving course at Lane, including driving license assistance, is priced at ₹10,000. Refresher course fees vary based on the learner’s specific requirements and the number of hours needed. For personalized pricing details, you can contact us at team@inlane.in or call +91 96116 87011.",
    category: "Pricing, Payments & Refunds",
  },
  {
    question: "Are there any ongoing referral rewards at Lane Driving School?",
    answer: "When a learner refers to a friend who also enrolls for a course in Lane Driving School, the referring learner receives a referral discount of ₹500.To get started, sign up here: https://inlane.in/signup ",
    category: "Pricing, Payments & Refunds",
  },
  {
    question: "What payment methods are accepted for Lane driving courses?",
    answer: "Lane Driving School accepts multiple payment methods for driving courses, including UPI, credit cards, debit cards, and net banking. This flexibility ensures a convenient and secure payment experience for all learners.",
    category: "Pricing, Payments & Refunds",
  },
  {
    question: "Does Lane Driving School offer EMI options for driving lessons?",
    answer: "Yes, Lane Driving School provides a 2-installment payment option for courses with driving license assistance. The first half of the fee is paid during onboarding, and the second half after the learner receives their learner’s license and completes two driving classes.",
    category: "Pricing, Payments & Refunds",
  },
  {
    question: "How do I book a driving lesson online with Lane Driving School Bangalore?",
    answer: "To book a driving lesson with Lane School, simply sign up using our online form or contact us via call or WhatsApp at +91 9611687011. If you have a valid learner’s or driving license, you can directly schedule a demo session. After payment, we confirm your availability and provide your driving instructor details along with a personalized lesson plan aligned with our structured curriculum.",
    category: "Booking & Scheduling",
  },
  {
    question: "Can I reschedule a booked driving lesson at Lane Driving School?",
    answer: "Yes, you can reschedule your driving lesson at Lane School for free if done at least 24 hours in advance. For last-minute changes (within 24 hours), a rescheduling fee of ₹300 will apply.This policy helps ensure our instructors can manage their schedules efficiently and provide the best learning experience for all students. To make any changes, please contact our Operations team directly—instructors are not authorized to handle scheduling requests.",
    category: "Booking & Scheduling",
  },
  {
    question: "What happens if I miss a scheduled driving class with Lane Driving School?",
    answer: "If you miss a scheduled driving class at Lane School without prior notice, it will be marked as a no-show. To reschedule the same lesson, a penalty of ₹300 will be applicable.This policy ensures that our instructors' time is respected and schedules run smoothly for all learners. For rescheduling a missed class, please contact our Operations team directly—instructors cannot process such requests.",
    category: "Booking & Scheduling",
  },
  {
    question: "Can I choose my preferred time slot and days when booking a driving lesson at Lane Driving School Bangalore?",
    answer: "Yes, Lane Driving School offers flexible scheduling for learners. You can choose your preferred time slots and days for your driving lessons while filling out the Onboarding Form. You can also mention any dates or days you’d like to avoid. Our Operations team will review your preferences and get in touch to finalize a personalized schedule and lesson plan that works best for you.",
    category: "Booking & Scheduling",
  },
  {
    question: "Does Lane School help with the learner's driving license application process?",
    answer: "Yes, Inlane offers complete end-to-end support for your driving license application—from Learner's License (LL) to Driving License (DL). Our license process is 100% online. We collect your documents digitally and connect with you over a Google Meet, during which our team enters the required details directly on the government portal. You'll simply need to verify the information before submission.",
    category: "License & Government Procedures",
  },
  {
    question: "What documents are required to apply for a driving license in Bangalore?",
    answer: "The documents required for a driving license in Bangalore depend on your current license status: If you already hold a valid 2-wheeler driving license (DL) from Bangalore, we can use that to directly apply for your 4-wheeler DL. If you don't have any existing license, you'll need to submit a government-issued ID proof (like Aadhaar, PAN, etc.) and address proof (such as rental agreement, utility bill, etc.). If you don't have address proof from Bangalore, we'll help you apply through a self-affidavit, enabling you to still get your driving license issued from Bangalore. Lane handles the entire online documentation and application process to make it seamless for you.",
    category: "License & Government Procedures",
  },
  {
    question: "Does Lane Driving School assist with RTO test preparation and appointments?",
    answer: "Yes, Lane provides complete support for both Learner's License (LL) and Driving License (DL) test preparation and appointments. For the LL test, we offer optimized gaming modules and pre-reads to help you prepare effectively. For the DL test, we schedule a dedicated driving session focused on RTO track training and test simulation. We also assist in booking your DL appointment slot with the RTO. Our goal is to ensure you're fully confident and prepared for your RTO test experience.",
    category: "License & Government Procedures",
  },
  {
    question: "How long does it take to get a permanent driving license in Bangalore?",
    answer: "The entire process takes about 1.5 to 2 months, depending on RTO schedules. Learner's License (LL): After passing the LL test, the license is typically issued within 7 working days. Mandatory Waiting Period: Applicants must hold the LL for at least 30 days before applying for the Driving License (DL) test. Driving License (DL): After clearing the DL test, the permanent license is usually delivered within 7 to 15 working days. At Lane Driving School, we handle the full process—LL to DL—with smooth coordination and end-to-end support.",
    category: "License & Government Procedures",
  },
  {
    question: "What's the difference between a learner's license and a permanent license in India?",
    answer: "A Learner's License (LL) is a temporary permit valid for 6 months, allowing you to practice driving under the supervision of someone with a valid Driving License. A Permanent License (DL) is issued after you pass the RTO driving test and allows you to drive independently on public roads. At Lane Driving School, we guide you through both LL and DL steps with complete support.",
    category: "License & Government Procedures",
  },
  {
    question: "Who is eligible to enroll in driving lessons at Inlane Driving School?",
    answer: "Anyone 18 years or older can join our 4-wheeler driving classes. If you don't have a license, we help you get a Learner's License (LL) first. If you already have an LL or DL, you can directly enroll and begin classes. At Lane Driving School, we make it easy for both beginners and licensed drivers to start learning confidently.",
    category: "Eligibility & Requirements",
  },
  {
    question: "What is the minimum legal age to start learning to drive a 4 Wheeler in India?",
    answer: "To learn 4-wheeler driving in India, you must be at least 18 years old. At Lane Driving School, we assist eligible learners with: The Learner's License (LL) process: from document collection to online submission. The Driving License (DL) process: including RTO test prep, track practice, and appointment booking. We ensure a smooth journey from LL to DL for first-time drivers.",
    category: "Eligibility & Requirements",
  },
  {
    question: "Do I need any prior experience to join Inlane's beginner driving course?",
    answer: "No, you don't need any prior driving experience. Inlane's courses are designed for both first-time learners and those looking to restart their driving journey. Based on your current skill level, you can enroll in either the Beginner or Refresher course. We also assist new learners with the Learner's License (LL) and Driving License (DL) process from start to finish. Stuck choosing? Contact <a href='mailto:team@inlane.in'>team@inlane.in</a> or call <a href='tel:+919611687011'>+91 96116 87011</a>.",
    category: "Eligibility & Requirements",
  },
  {
    question: "What should I bring to my first driving lesson at Lane Driving School?",
    answer: "You'll need to carry your Learner's License (LL) or Driving License (DL)—either a printed copy or a digital version from DigiLocker or mParivahan. Wear comfortable footwear (avoid slippers) and comfortable clothing to ensure ease of movement during your lesson. If your LL is still in process, our operations team will coordinate and schedule your lessons accordingly.",
    category: "Eligibility & Requirements",
  },
  {
    question: "What types of vehicles does Lane Driving School use for driving instruction?",
    answer: "Lane Driving School trains learners exclusively in manual hatchbacks, as per RTO rules that require the DL test to be taken in a manual vehicle—automatic cars aren't allowed. Learning manual driving builds essential skills like gear and clutch control. It also makes switching to automatic easy, while the reverse isn't true. Hatchbacks are compact and ideal for beginners and learners.",
    category: "Safety & Vehicle Details",
  },
  {
    question: "Are Lane's training vehicles fully insured and road-safe?",
    answer: "Yes, all of Lane Driving School's training vehicles are fully insured, regularly maintained, and thoroughly road-tested to ensure complete safety during every lesson. We prioritize learner safety by adhering to all RTO regulations and using only well-equipped, road-ready manual hatchbacks for training.",
    category: "Safety & Vehicle Details",
  },
  {
    question: "What safety protocols does Lane Driving School follow during in-car training sessions?",
    answer: "Lane Driving School ensures safety with fully insured, well-maintained vehicles equipped with dual controls. Our instructors are trained in defensive driving and follow all RTO safety norms, creating a secure and confident learning environment.",
    category: "Safety & Vehicle Details",
  },
  {
    question: "Who are the certified driving instructors at Lane Driving School Bangalore?",
    answer: "Our certified instructors at Lane Driving School Bangalore are professionally trained experts, vetted through strict background checks. They are skilled in effective communication, patient teaching, and defensive driving techniques to ensure a safe and supportive learning environment for all learners.",
    category: "Instructor-Related Questions",
  },
  {
    question: "What qualifications and experience do Inlane instructors have?",
    answer: "All Lane Driving School instructors have at least 5 years of driving experience and are certified professionals trained in defensive driving. They undergo thorough background checks and are regularly trained to follow our structured curriculum, with frequent audit classes to ensure consistent, high-quality teaching tailored to each learner.",
    category: "Instructor-Related Questions",
  },
  {
    question: "Do Lane Driving School instructors speak multiple languages?",
    answer: "Yes, Lane Driving School instructors are selected for their ability to speak multiple languages such as Kannada, Hindi, Tamil, Telugu, Malayalam. Along with these, they also understand and communicate in basic English to ensure clear and effective lessons for learners from diverse backgrounds.",
    category: "Instructor-Related Questions",
  },

  // Corporate & Bulk Training
  {
    question: "Does Lane Driving School offer corporate driving training for delivery or fleet drivers?",
    answer: "Yes, Lane Driving School provides specialized corporate driving training programs for delivery personnel and fleet drivers. Our courses focus on safety, defensive driving, and efficient driving practices tailored to business requirements. For corporate training inquiries, please write to us at team@inlane.in",
    category: "Corporate & Bulk Training",
  },
  {
    question: "How can companies partner with Lane for employee driving lessons?",
    answer: "Companies can partner with Lane by writing to us at team@inlane.in. We offer tailored driving training programs that can be included as part of employee benefit initiatives—promoting road safety, confidence, and skill-building for your workforce.",
    category: "Corporate & Bulk Training",
  },

  // Legal, Policies & Support
  {
    question: "What is Lane's privacy policy for user data and personal information?",
    answer: "Lane Driving School respects your privacy and protects your personal data. We collect and use your information only to provide and improve our services, following strict security and legal standards. Read the full policy here:https://inlane.in/privacy-policy",
    category: "Legal, Policies & Support",
  },
  {
    question: "Where can I find Lane's terms and conditions for service use?",
    answer: "You can review Lane's full terms and conditions here:https://inlane.in/terms-and-conditions",
    category: "Legal, Policies & Support",
},
  {
    question: "How do I contact Lane's customer support team for help or queries?",
    answer: "You can reach Lane's customer support by phone or WhatsApp at tel:+919611687011 or email us at team@inlane.in. We're here to assist you with any questions or support you need.",
    category: "Legal, Policies & Support",
  },
  
  
];

export default faqData;
