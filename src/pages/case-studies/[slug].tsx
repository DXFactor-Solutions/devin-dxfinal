import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../../lib/case-studies-data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import FeaturedSuccessStories from '../../components/FeaturedSuccessStories';
import { Calendar, User, Clock, ArrowLeft, TrendingUp } from 'lucide-react';
import '../../styles/blog.css'; // Reusing blog styles for consistency

interface CaseStudyContent {
  html: string;
  text: string;
  wordCount: number;
  extractedAt: string;
}

const CaseStudyPage = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<CaseStudyContent | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/data/case-studies-content.json');
        if (response.ok) {
          const allContent = await response.json();
          if (slug && allContent[slug]) {
            setContent(allContent[slug]);
          }
        }
      } catch (error) {
        console.error('Failed to load case study content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link to="/case-studies" className="text-green-600 hover:text-green-700 font-semibold">
            ← Back to Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Fallback content since we don't have a dynamic loader yet
  const FallbackContent = () => (
    <article className="prose prose-lg prose-green max-w-none">
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          This case study showcases how a leading fitness brand leveraged DXFactor's AI-powered solutions to achieve significant improvements in member retention and operational efficiency.
        </p>
        <blockquote className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg">
          <p className="text-gray-800 italic text-lg">
            "Partnering with DXFactor was a game-changer. Their platform provided the insights we needed to transform our member experience and drive real results."
          </p>
        </blockquote>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Results</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <strong>15% Increase in Member Retention:</strong> Achieved within the first six months.
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <strong>40% Reduction in Manual Support Tasks:</strong> AI agents automated routine inquiries.
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <strong>25% Boost in Upsell Conversions:</strong> Personalized offers drove higher member value.
          </li>
        </ul>
      </div>
    </article>
  );

  const renderHTMLContent = (html: string) => {
    // A more robust cleaning function to ensure content displays correctly
    // without cutting anything off.
    let cleanedHtml = html;

    // Optional: If you find a consistent header image you want to remove from the body
    // you can uncomment the next line. For now, we'll keep all images.
    // cleanedHtml = cleanedHtml.replace(/<img[^>]*>/, '');

    // Clean up excessive whitespace and empty paragraphs which are common from docx conversion
    cleanedHtml = cleanedHtml
      .replace(/<p[^>]*>\s*(&nbsp;)?\s*<\/p>/gi, '') // Remove empty paragraphs
      .replace(/\s{3,}/g, ' ') // Condense multiple spaces
      .trim();

    return (
      <div 
        className="blog-content prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: cleanedHtml }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="bg-gradient-to-br from-green-50 to-green-100/50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/case-studies" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {caseStudy.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>DXFactor Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Published Recently</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Category: {caseStudy.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading content...</p>
              </div>
            ) : content ? (
              renderHTMLContent(content.html)
            ) : (
              <p>Could not load case study content.</p>
            )}
          </div>
        </div>
      </section>

      <FeaturedSuccessStories />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CaseStudyPage; 