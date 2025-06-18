import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, User, TrendingUp, Search, ExternalLink, Newspaper, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animation component for spiral effect
const SpiralReveal = ({ children, delay = 0, index = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Calculate spiral position based on index
  const angle = index * 30; // Degrees between each element
  const radius = index * 5; // Spiral radius increases with index
  const startX = Math.cos(angle * Math.PI / 180) * radius;
  const startY = Math.sin(angle * Math.PI / 180) * radius;
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0,
          x: startX,
          y: startY,
          scale: 0.8,
          rotate: -5 + (index % 3) * 5 // Slight varied rotation
        },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          scale: 1,
          rotate: 0,
          transition: { 
            duration: 0.8, 
            delay: delay + index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const news = [
    {
      id: 1,
      title: "DXFactor's Click2Save Agent Skyrockets at the HFA Show",
      subtitle: "Turning FTC 'Click-to-Cancel' Compliance into Member Retention and Operational Efficiency",
      description: "DXFactor reports remarkable success for its 'Click2Save' Agent at the HFA Show, turning FTC Click to Cancel requirement from compliance headache into an opportunity for heightened member engagement and operational breakthroughs.",
      author: "DXFactor Team",
      date: "March 13, 2025",
      category: "Product Launch",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop",
      featured: true,
      content: `
        <p><strong>MCLEAN, VA, UNITED STATES, March 13, 2025 /EINPresswire.com/</strong> – DXFactor reports remarkable success for its "Click2Save" Agent at the HFA Show, turning FTC Click to Cancel requirement from compliance headache into an opportunity for heightened member engagement and operational breakthroughs. Demonstrating swift adoption by major fitness operators, "Click2Save" underscores DXFactor's relentless commitment to member experience, growth, and operator success.</p>

        <h3>From Compliance to Competitive Advantage</h3>
        <p>Where others see an obligation to provide simple cancellations, "Click2Save" seizes the moment to convert would-be cancellations into retention opportunities. With frictionless workflows and personalized interactions, clients have reported greater loyalty, improved brand perception, and measurable revenue gains.</p>

        <p>"Our mission at DXFactor extends beyond just meeting regulations. We're laser-focused on helping fitness operators expand memberships, deliver exceptional member experiences, and boost efficiency." – Dharmesh Trivedi, Co-Founder & CEO, DXFactor</p>

        <h3>Proven Results with Leading Fitness Brands</h3>
        <p>Operators such as Fitness SF, Fitness 19, Healthworks, Fit Athletic Club, Chuze Fitness, Burn Boot Camp, The Worx, Vim & Vigor Gyms, Gym It, and many others have embraced "Click2Save" to enhance member experience, reduce churn, and streamline administrative tasks.</p>

        <p>"This tool has made my administrative team's life much easier and more productive while saving members simultaneously." – Chad Shaw, Chief Operating Officer, Fit Athletic Club</p>

        <h3>Key Benefits of "Click2Save" Agent</h3>
        <ul>
          <li><strong>Member-Focused Engagement:</strong> Personalized strategies that turn cancellations into loyalty-building touchpoints.</li>
          <li><strong>Regulatory Alignment:</strong> Effortless adherence to the FTC "Click to Cancel" rule, minimizing compliance risks.</li>
          <li><strong>Operational Efficiency:</strong> Automated processes free staff to excel at delivering top-tier fitness experiences.</li>
          <li><strong>Scalable Growth:</strong> Aligns with DXFactor's broader digital transformation platform, positioning operators for sustained success.</li>
        </ul>

        <p>Check out the Click2Save Agent that's overtaken the industry: <a href="https://www.youtube.com/watch?v=IP28DgrKWKw" target="_blank">https://www.youtube.com/watch?v=IP28DgrKWKw</a>.</p>

        <p>To learn more about Click2Save, schedule a demo: <a href="https://calendly.com/meetwithron-dx/30min" target="_blank">https://calendly.com/meetwithron-dx/30min</a>.</p>

        <h3>About DXFactor</h3>
        <p>DXFactor is a beacon of digital transformation innovation, leveraging AI, data analytics, and Agentic AI to forge solutions that redefine industry standards. With a legacy of generating impactful outcomes, DXFactor combines deep domain expertise with technological prowess, driving unparalleled progress and profitability for its clients. The proprietary Outcomes™ Framework, which includes innovative solutions like the Click2Save Agent —has generated over $2 billion in Outcomes for its partners such as Fitness 19, Healthworks, Chelsea Piers, Chuze Fitness, Crunch Fitness, CSG, FitnessSF, GE, Lift Brands, Orange Theory, PepsiCola, Wabtec, Wisconsin Athletic Club, XSport Fitness, and Xponential. Learn more at DXFactor.com</p>

        <div class="contact-info">
          <p><strong>Ron Benamor</strong><br>
          DXFactor<br>
          +1 443-983-2107<br>
          <a href="mailto:Ron@dxfactor.com">Ron@dxfactor.com</a></p>
          
          <p>Visit us on social media:<br>
          <a href="#">LinkedIn</a><br>
          <a href="#">Instagram</a><br>
          <a href="#">YouTube</a></p>
          
          <p><a href="#">Click2Save Demo</a></p>
        </div>
      `
    },
    {
      id: 2,
      title: "DXFactor and EGYM Partner to Innovate Fitness with AI Solutions, Unveiled at the Fitness Tech Summit",
      subtitle: "The partnership aims to boost member experiences and business growth through customizable digital platforms, including Cancellation Save",
      description: "DXFactor and EGYM announce a strategic partnership at the Fitness Tech Summit to accelerate digital transformation through AI-driven platforms and personalized member experiences.",
      author: "Ron Benamor",
      date: "October 22, 2024",
      category: "Partnerships",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      featured: true,
      content: `
        <p><strong>MCLEAN, VA, UNITED STATES, October 22, 2024 /EINPresswire.com/</strong> – DXFactor, a leader in AI-driven digital solutions, and EGYM, a global fitness technology innovator, have announced a strategic partnership at the highly anticipated Fitness Tech Summit. This collaboration will accelerate the digital transformation of the fitness industry by providing fitness brands with customizable, data-driven platforms designed to enhance member satisfaction, streamline operations, and drive business growth.</p>

        <h3>Major Announcement at the Fitness Tech Summit</h3>
        <p>This groundbreaking partnership, revealed during the Fitness Tech Summit, sets a new benchmark for fitness operators seeking to deliver superior member experiences through personalized, AI-driven technologies. DXFactor's deep domain expertise in the fitness industry and outcomes-driven digital transformation using AI and data empowers fitness operators to push boundaries with more intuitive and flexible mobile platforms. These tools enable fitness brands to rapidly update their platforms, integrating personalized content and creating seamless user experiences.</p>

        <p>"Partnering with DXFactor enhances our ability to offer comprehensive, personalized solutions that drive both member satisfaction and operational efficiency" – John Ford, Chief Product Officer at EGYM.</p>

        <p>"Announcing our partnership with EGYM at the Fitness Tech Summit is a key milestone in our mission to revolutionize member experiences," said Dharmesh Trivedi, Co-Founder and CEO of DXFactor. "By combining our expertise in AI with EGYM Genius, an AI exercise guidance product, we're unlocking more options for operators to enhance engagement, improve retention, and grow their business."</p>

        <h3>Personalization at the Core:</h3>
        <p>The heart of this partnership lies in personalization. DXFactor's customization capabilities, powered by Generative AI, ensure that fitness apps are more intuitive and responsive, offering seamless class bookings, progress tracking, and wearable device integration. This allows fitness brands to innovate and adapt in real time, delivering hyper-personalized member experiences.</p>

        <h3>Scalable, Flexible Solutions for Gym Operators:</h3>
        <p>EGYM and DXFactor's joint focus on personalization provides fitness operators with customizable platforms that foster stronger client relationships without the complexities of managing customizations in-house.</p>

        <p>"Partnering with DXFactor enhances our ability to offer comprehensive, personalized solutions that drive both member satisfaction and operational efficiency," said John Ford, EGYM's Chief Product Officer.</p>

        <h3>Leading the Future of Fitness Technology:</h3>
        <p>As the fitness industry rapidly evolves, DXFactor and EGYM are poised to lead the way by integrating AI-driven insights and advanced wearable technology into fitness operations. Generative AI, in particular, will redefine how fitness operators engage with their members, enabling real-time personalization and seamless digital interactions. This partnership, officially launched at the Fitness Tech Summit, lays the groundwork for the future, helping fitness brands differentiate themselves in an increasingly competitive landscape.</p>

        <h3>About EGYM</h3>
        <p>EGYM is a vertically integrated market leader in the fitness and health industry with the vision of transforming healthcare from repair to prevention. EGYM partners with companies to improve employee health, providing access to fitness and health facilities and equips those facilities with smart gym equipment and digital solutions to offer an AI-driven workout experience for people of all skill levels. Corporates benefit from reduced healthcare costs and increased productivity, and clubs from a growing membership base that stays engaged.</p>

        <h3>About DXFactor</h3>
        <p>DXFactor is a beacon of digital transformation innovation, leveraging AI, data analytics, and GenAI to forge solutions that redefine industry standards. With a legacy of generating impactful outcomes, DXFactor combines deep domain expertise with technological prowess, driving unparalleled progress and profitability for its clients. The proprietary Outcomes™ Framework, which includes innovative solutions like Cancellations Save—designed to ensure compliance with the new FTC "Click to Cancel" rule—has generated over $2 billion in Outcomes for its partners such as Fitness 19, Healthworks, Chelsea Piers, Chuze Fitness, Crunch Fitness, CSG, FitnessSF, GE, Lift Brands, Orange Theory, PepsiCola, Wabtec, Wisconsin Athletic Club, XSport Fitness, and Xponential. Learn more at DXFactor.com.</p>

        <div class="contact-info">
          <p><strong>Ron Benamor</strong><br>
          +1 443-983-2107<br>
          <a href="mailto:email us here">email us here</a></p>
          
          <p>Visit us on social media:<br>
          <a href="#">LinkedIn</a><br>
          <a href="#">Instagram</a><br>
          <a href="#">YouTube</a></p>
        </div>
      `
    },
    {
      id: 3,
      title: "DXFactor Launches FitGenAI: Elevating Member Experience Using Generative AI",
      subtitle: "Tailoring Tomorrow's Gym: FitGenAI Revolutionizes Member Engagement Through Precision and Personalization",
      description: "DXFactor introduces FitGenAI, a revolutionary generative AI solution that transforms member engagement and experiences in the fitness industry through precision personalization.",
      author: "DXFactor Team",
      date: "October 24, 2023",
      category: "Product Launch",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      content: `
        <p><strong>MCLEAN, VA, UNITED STATES, October 24, 2023 /EINPresswire.com/</strong> – In the wake of challenges brought on by the COVID-19 pandemic, the global fitness industry has staged a spirited comeback, marking an impressive 8% growth from its pre-pandemic stature. Recognizing the critical juncture at which gyms worldwide stand, DXFactor is elated to introduce FitGenAI at the imminent Fitness Technology Summit. As fitness hubs recalibrate for the future, embracing technology isn't a choice—it's an imperative. Enter FitGenAI, DXFactor's answer to the tech-savvy demands of the modern fitness aficionado.</p>

        <p>Contemporary gym-goers crave more than machinery. Their appetite is for rich, tailored experiences. A telling 75% now consider personalized interactions paramount, and 65% favor gyms with a tech-forward ethos, signifying technology as a cornerstone for fitness establishments.</p>

        <p>When a third of online sales seldom translate to footfalls, even a 50% enhancement via FitGenAI can catalyze monumental member experience and growth†</p>

        <p>— Don Dickerson, VP of Fitness SF</p>

        <p>FitGenAI isn't merely a solution—it's an experience. Tapping into DXFactor's profound domain expertise, it introduces GenAI agents that redefine member experience:</p>

        <ul>
          <li><strong>Join Online:</strong> Launch the member journey with distinction. FitGenAI ensures users effortlessly discover their ideal plans, enriching member affinity from the get-go.</li>
          <li><strong>Member Saved:</strong> Morph potential dropouts into brand ambassadors. By transforming the cancellation paradigm, FitGenAI positions gyms at the vanguard of retention strategies.</li>
          <li><strong>Non-Dues Sales:</strong> Augment operational prowess by integrating session sales and scheduling, fusing member value with operational foresight.</li>
          <li><strong>Fitness Agent:</strong> Elevate the workout narrative. Craft immersive, personalized fitness pathways enriched with tailored content—beyond typical fitness, creating memorable brand touchpoints.</li>
        </ul>

        <p>Dharmesh Trivedi, DXFactor's CEO and Co-Founder, mused, "Our industry's resurgence transcends mere operational revival—it's about envisioning a new realm of experiences. FitGenAI isn't about hopping onto the GenAI bandwagon; it's a culmination of decades of expertise designed to architect the next era of fitness—a testament to our commitment to outcome-centric innovations."</p>

        <p>Don Dickerson, VP at Fitness SF, emphasized the transformative potential of GenAI: "Generative AI isn't just the next big thing—it's the present and the future. In a scale-driven industry, human-only interactions won't suffice. Generative AI enables personalized, expansive conversations. When a third of online sales seldom translate to footfalls, even a 50% enhancement via FitGenAI can catalyze monumental member experience and growth."</p>

        <p>Counting eminent clients like Chelsea Piers, Chuze Fitness, Crunch Fitness, Gold's Gym SoCal, Fitness SF, Xport Fitness, and more, DXFactor's dedication to spearheading the fitness tech revolution is indisputable, further emboldened by industry luminary Al Noshirvani on its board.</p>

        <h3>About DXFactor</h3>
        <p>DXFactor stands as a beacon of transformative solutions in the digital era, marrying deep industry insight with cutting-edge technology. Born from a commitment to drive tangible outcomes, DXFactor's synergy of domain-rich expertise and artificial intelligence acuity has generated over $2 billion in tangible results, benefiting industry stalwarts like Chuze Fitness, Crunch Fitness, GE, Gold's Gym SoCal, Fitness SF, Pepsi, Southwest Funding, URBN Playground, Wabtec, and XSport Fitness.</p>

        <p>Discover more at <a href="http://www.DXFactor.com" target="_blank">www.DXFactor.com</a>.</p>

        <div class="contact-info">
          <p><strong>Rohan Shroff</strong><br>
          DXFactor<br>
          +1 703-477-9760<br>
          <a href="mailto:email us here">email us here</a></p>
          
          <p>Visit us on social media:<br>
          <a href="#">Facebook</a><br>
          <a href="#">Twitter</a><br>
          <a href="#">LinkedIn</a><br>
          <a href="#">Other</a></p>
        </div>
      `
    },
    {
      id: 4,
      title: "DXFactor and ABC Fitness: Revolutionizing the Fitness Industry Through Strategic Partnership",
      subtitle: "Transforming the Fitness Landscape: A Leap into AI and Data Driven Excellence",
      description: "DXFactor and ABC Fitness announce a landmark partnership to revolutionize fitness technology with AI and generative AI, focusing on member engagement and operational efficiency.",
      author: "DXFactor Team",
      date: "March 8, 2024",
      category: "Partnerships",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      content: `
        <p><strong>MCLEAN, VIRGINIA, UNITED STATES, March 8, 2024 /EINPresswire.com/</strong> – In an unprecedented move that sets a new standard for the fitness industry, DXFactor, an icon of digital transformation through AI, data analytics, and GenAI, announces a landmark partnership with ABC Fitness, the #1 tech provider for fitness businesses everywhere. Revealed at the prestigious IHRSA 2024, this collaboration heralds a transformative era for fitness technology, with artificial intelligence and generative AI at its core, redefining member engagement and operational efficiency across the globe.</p>

        <p><strong>"We are excited to partner with DXFactor for their unparalleled expertise in digital transformation."</strong></p>
        <p>— Khal Rai, Platform President of ABC Ignite</p>

        <h3>A Visionary Move for ABC Fitness</h3>
        <p>"ABC Fitness is continuing to make investments in innovation that push our combined portfolio into new and exciting areas that will support the growth of our partners," says Khal Rai, Platform President of ABC Ignite. "We are excited to partner with DXFactor for their unparalleled expertise in digital transformation. This partnership will support new offerings for our mobile platform, creating bespoke member experiences and integrations that set new industry standards for innovation and personalization."</p>

        <h3>DXFactor: Engineering Success Through Innovation</h3>
        <p>Dharmesh Trivedi, Co-Founder & CEO of DXFactor, expressed equal enthusiasm about the collaboration: "Aligning with an industry titan like ABC Fitness significantly amplifies our mission to revolutionize the fitness industry with AI and GenAI. Our combined strengths will ensure our commitment to business outcomes for our clients and accelerate digital transformation within the fitness industry by empowering members and operators with AI & Data driven solutions."</p>

        <h3>A Win-Win for the Fitness Industry</h3>
        <p>"This partnership promises to be a cornerstone for the fitness industry, offering a blend of DXFactor's transformative digital strategies and ABC Fitness's technological prowess," said Al Noshirvani, Managing Partner at Alta Technologies and Board member at DXFactor. "Customers can now anticipate a comprehensive digital transformation tailored to meet fitness enthusiasts' and enterprises' modern demands."</p>

        <p>As data and AI strategies become increasingly crucial in the fitness industry, the collaboration between DXFactor and ABC Fitness is poised to set new benchmarks for innovation and success. This partnership not only exemplifies the convergence of two industry leaders but also serves as a beacon of transformation, promising to deliver unmatched value and outcomes to fitness businesses around the globe.</p>

        <h3>About ABC Fitness</h3>
        <p>ABC Fitness is the #1 tech provider for fitness businesses everywhere. Simplifying club and member management for 40+ years via scalable solutions (ABC Glofox, ABC Ignite, ABC Trainerize, ABC Evo, and ABC GymSales), ABC Fitness' innovations transform fitness visions into seamless reality. From personal trainers, boutique studios, and gyms to international franchise health clubs, ABC Fitness provides the technology and industry insights needed to move your business forward. ABC Fitness currently supports over 40 million members worldwide and processes over $11 billion in payments yearly. Learn more at abcfitness.com.</p>

        <h3>About DXFactor</h3>
        <p>DXFactor is a beacon of digital transformation innovation, leveraging AI, data analytics, and GenAI to forge solutions that redefine industry standards. With a legacy of generating impactful outcomes, DXFactor combines strategic business insights with technological prowess, driving unparalleled progress and profitability for its clients. The proprietary Outcomes™ Framework has generated over $2 billion in Outcomes for its customers like Chelsea Piers, Chuze Fitness, Crunch Fitness, CSG, FitnessSF, GE, Lift Brands, Orange Theory, PepsiCola, Wabtec, Wisconsin Athletic Club, XSport Fitness, and Xponential. Learn more at <a href="http://www.DXFactor.com" target="_blank">www.DXFactor.com</a></p>

        <div class="contact-info">
          <p><strong>Rohan Shroff</strong><br>
          DXFactor<br>
          +1 7034779760<br>
          <a href="mailto:email us here">email us here</a></p>
          
          <p>Visit us on social media:<br>
          <a href="#">Facebook</a><br>
          <a href="#">Twitter</a><br>
          <a href="#">LinkedIn</a><br>
          <a href="#">Instagram</a><br>
          <a href="#">YouTube</a></p>
        </div>
      `
    },
    {
      id: 5,
      title: "Fitness Technology Summit Celebrates 10th Year of Sold Out Event Discussing Digital Transformation in Health and Fitness",
      subtitle: "The event was highlighted by a $125,000 donation to the National Health and Fitness Alliance by DXFactor.",
      description: "The Whitley Hotel in Atlanta hosted fitness industry executives for the 10th Annual Fitness Technology Summit, featuring an all-female industry advisory panel and significant industry contributions.",
      author: "Rohan Shroff",
      date: "October 20, 2022",
      category: "Industry Events",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      content: `
        <p><strong>FAIRFAX, VA, USA, October 20, 2022 /EINPresswire.com/</strong> – Last week, the Whitley Hotel in the Buckhead neighborhood of Atlanta, GA, was brimming with fitness industry executives for the 10th Annual Fitness Technology Summit (FTS) produced by the team at DXFactor. It was by far the largest and most attended FTS since the innovative conference's inception more than 10 years ago.</p>

        <p>"On behalf of the National Health and Fitness Alliance (NHFA), I would like to thank the Fitness Technology Summit and DXFactor for the contribution"</p>
        <p>— Gale Landers, Chairman of the NHFA</p>

        <p>Highlights of the event included:</p>

        <ul>
          <li>The first all-female industry advisory panel, which included Sherrill Zach Kaplan of Planet Fitness, Merikay Marzoni of The Fitness Formula Clubs, Jenna Hauca of BARRY's, and Debbie Fiorella of 24 Hour Fitness</li>
          <li>The presentation of the Rick Caro IHRSA Industry Innovator Award to the Awesomeness namesake</li>
          <li>A fireside chat with IHRSA CEO Liz Clark, NHFA Chairman Gale Landers, and IHRSA Board Chairperson Chris Craytor</li>
          <li>An education session on retention presented by The Retention Guru, Dr. Paul Bedford</li>
          <li>A keynote on habit formation by Ryan Hamilton - Associate Professor of Marketing at Emory University - Goizueta Business School</li>
          <li>8 panels and 45 panelists covered topics from the proliferation of the metaverse to the digital transformation and enablement of sales and marketing in the fitness industry</li>
          <li>Sponsored by prominent industry brands like Zenoti, MyZone, MXM, StrongerU, Sweatworks, Matrix, Technogym, ClubOS, EGYM, ROR Partners, CIPiQ.ai, Daxko and Prospr</li>
        </ul>

        <p>"What started out as an opportunity for a group of industry friends to gather and share ideas has turned into the largest MARTECH event" said Co-host and DXFactor Co-Founder and CEO Dharmesh Trivedi. "It helped that we had a double bottom line mission for the 2022 event," said Summit Co-host Tara Levitt. "FTS has always provided an opportunity to network, educate and collaborate, but this year it was also an opportunity for us to give back to our industry collectively." Added Levitt</p>

        <p>With the participation of 13 exclusive sponsors and over 180 attendees, DX Factor presented a check for $125,000.00 in support of the National Health and Fitness Alliance, whose sole focus is to further industry advocacy at all levels of government. "Our industry has undergone a period of unprecedented transformation and disruption, and we must ensure that we are never caught flat footed again," said DXFactor Co-Founder and CEO Dharmesh Trivedi. "These funds will begin the important work of educating our lawmakers that the fitness industry is part of the solution to many of our country's most pressing socio-economic challenges," added Noshirvani.</p>

        <p>"On behalf of the National Health and Fitness Alliance (NHFA), I would like to thank the Fitness Technology Summit and DXFactor for the contribution," said Gale Landers, Chairman of the NHFA.</p>

        <p>The location and dates for the 2023 event will be announced soon. Organizers are considering additional collaboration with IHRSA and the State Alliances.</p>

        <h3>About DXFactor.com</h3>
        <p>DXFactor, the Outcomes Driven Company, is a global consulting firm focused on strategy, technology, and business transformations that lead to successful outcomes. Since its inception, DXFactor has built a balanced ecosystem of domain-based human capital and artificial intelligence with the agility of a startup and the power of Fortune 500 business experience to help leapfrog our clients. The proprietary Outcomes Framework has generated $2B plus in Outcomes for our customers like Ascendex, CIPiQ.ai, Crunch Fitness, F45, GE, Gold's Gym, Orange Theory, Pepsi, Southwest Funding, URBN Playground, Wabtec, XSport Fitness to name a few.</p>

        <p>For more information, visit: www.DXFactor.com</p>

        <h3>About The Fitness Technology Summit</h3>
        <p>The Fitness Technology Summit is an annual invitation only event for C-suite executives in the health and fitness industry. With timely panel presentations, innovation sessions, and boundless networking opportunities, The Summit welcomes C-suite executives from the best fitness brands worldwide. The Summit's mission is to empower and facilitate the exchange of ideas in a collaborative environment amongst operators in all segments of the industry</p>

        <p>For more information, visit: <a href="http://www.thefitnesstechsummit.com" target="_blank">www.thefitnesstechsummit.com</a></p>

        <div class="contact-info">
          <p><strong>Rohan Shroff</strong><br>
          DXFactor<br>
          <a href="mailto:Rohan@DXFactor.com">Rohan@DXFactor.com</a></p>
          
          <p><strong>Rohan Shroff</strong><br>
          DXFactor<br>
          <a href="mailto:email us here">email us here</a></p>
          
          <p>Visit us on social media:<br>
          <a href="#">Facebook</a><br>
          <a href="#">Twitter</a><br>
          <a href="#">LinkedIn</a><br>
          <a href="#">Other</a></p>
        </div>
      `
    }
  ];

  // Enhanced filtering with search
  const filteredNews = news.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Enhanced Header Section */}
      <div className="relative bg-gray-900 border-b border-gray-200 pt-24 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ 
              filter: 'brightness(0.7)',
              mixBlendMode: 'normal'
            }}
          >
            <source src="/videos/futurecityh.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/50 mix-blend-multiply"></div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-16 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4">
                <Newspaper className="w-3 h-3 mr-1" />
                NEWS & UPDATES
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Latest news and<br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  company updates
                </span>
              </h1>
              <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Stay informed about DXFactor's latest developments, partnerships, product releases, 
                and industry insights.
              </p>
            </div>
          </SpiralReveal>

          {/* Search Controls */}
          <SpiralReveal delay={0.3} index={1}>
            <div className="flex justify-center mb-6">
              {/* Search Bar */}
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm text-sm"
                />
              </div>
            </div>
          </SpiralReveal>

        </div>
      </div>

      {/* Featured News Section */}
      {featuredNews.length > 0 && (
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SpiralReveal delay={0.1} index={0}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured News</h2>
                <p className="text-gray-600">Our top stories and announcements</p>
              </div>
            </SpiralReveal>

            <div className="grid gap-6">
              {featuredNews.map((article, index) => (
                <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded mb-2">
                              Featured
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                            <p className="text-gray-600 mb-4">{article.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-sm text-gray-600">
                            <User className="w-4 h-4 mr-2" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            <span>{article.category}</span>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => setSelectedArticle(article)}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                        >
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SpiralReveal>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Regular News Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Updates</h2>
              <p className="text-gray-600">Recent news and announcements</p>
            </div>
          </SpiralReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-white bg-opacity-90 text-gray-800 text-xs font-medium rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedArticle(article)}
                      className="w-full bg-gray-100 hover:bg-green-50 text-gray-900 hover:text-green-700 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SpiralReveal delay={0.1} index={0}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss important updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </SpiralReveal>
        </div>
      </div>

      {/* Featured Success Stories */}
      <FeaturedSuccessStories />

      <ContactForm />
      <Footer />

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedArticle.title}</h2>
                {selectedArticle.subtitle && (
                  <p className="text-lg text-gray-600 mb-4">{selectedArticle.subtitle}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {selectedArticle.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedArticle.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedArticle.readTime}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div 
                className="prose prose-lg max-w-none article-content"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Article Content Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .article-content h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1f2937;
            margin: 1.5rem 0 1rem 0;
          }
          
          .article-content p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: #374151;
          }
          
          .article-content ul {
            margin: 1rem 0;
            padding-left: 1.5rem;
          }
          
          .article-content li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
          }
          
          .article-content a {
            color: #059669;
            text-decoration: underline;
          }
          
          .article-content a:hover {
            color: #047857;
          }
          
          .article-content .contact-info {
            background-color: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin: 2rem 0;
          }
          
          .article-content .contact-info p {
            margin-bottom: 1rem;
          }
          
          .article-content .contact-info p:last-child {
            margin-bottom: 0;
          }
          
          .article-content strong {
            font-weight: 600;
            color: #1f2937;
          }
        `
      }} />
    </div>
  );
};

export default NewsPage;