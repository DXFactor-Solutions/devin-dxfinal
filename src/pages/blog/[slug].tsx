import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../lib/blog-data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import FeaturedSuccessStories from '../../components/FeaturedSuccessStories';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/blog.css';

// Import the extracted blog content
interface BlogContentItem {
  html: string;
  text: string;
  wordCount: number;
  extractedAt: string;
}

// Initialize with proper typing
const blogContent: Record<string, BlogContentItem> = {};

// Try to load blog content (this will be populated by the extraction script)
const loadBlogContent = async () => {
  try {
    const response = await fetch('/data/blog-content.json');
    if (response.ok) {
      const content = await response.json();
      Object.assign(blogContent, content);
    }
  } catch (error) {
    console.warn('Blog content file not found, using fallback content');
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedContent, setLoadedContent] = useState<Record<string, BlogContentItem>>({});

  // Load blog content on mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/data/blog-content.json');
        if (response.ok) {
          const content = await response.json();
          setLoadedContent(content);
        }
      } catch (error) {
        console.warn('Blog content file not found, using fallback content');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
  }, []);

  // Get the extracted content for this blog post
  const extractedContent = loadedContent[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-green-600 hover:text-green-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Function to render HTML content safely
  const renderHTMLContent = (htmlContent: string) => {
    // Remove the first image (header image) from the extracted content since we have a featured image
    let cleanedHtml = htmlContent.replace(/<img[^>]*>/, '');
    
    // Split content to find where promotional content starts
    const promotionalMarkers = [
      'SEO Title',
      'Meta Description',
      'Proposed URL',
      'UTM URL',
      'LinkedIn post',
      'utm_source=',
      'utm_medium=',
      'utm_campaign='
    ];
    
    // Find the first occurrence of promotional content
    let cutoffIndex = -1;
    for (const marker of promotionalMarkers) {
      const index = cleanedHtml.toLowerCase().indexOf(marker.toLowerCase());
      if (index !== -1 && (cutoffIndex === -1 || index < cutoffIndex)) {
        cutoffIndex = index;
      }
    }
    
    // If promotional content found, cut it off
    if (cutoffIndex !== -1) {
      cleanedHtml = cleanedHtml.substring(0, cutoffIndex);
    }
    
    // Clean up any remaining promotional patterns but be more conservative
    cleanedHtml = cleanedHtml
      // Only remove standalone promotional URLs (not embedded in content)
      .replace(/<p[^>]*>\s*https?:\/\/[^\s<]*utm_[^\s<]*\s*<\/p>/gi, '')
      .replace(/\(for LinkedIn organic campaign\)[^<\n]*/gi, '')
      
      // Clean up excessive whitespace and empty paragraphs at the end
      .replace(/<p[^>]*>\s*<\/p>/gi, '')
      .replace(/\s{3,}/g, ' ')
      .trim();
    
    // Also remove any duplicate images that might remain
    const seenImages = new Set();
    cleanedHtml = cleanedHtml.replace(/<img[^>]*>/g, (match) => {
      const imgSrcMatch = match.match(/src="([^"]*)"/);
      
      if (imgSrcMatch) {
        const src = imgSrcMatch[1];
        if (seenImages.has(src)) {
          return ''; // Remove duplicate
        }
        seenImages.add(src);
      }
      
      return match;
    });

    return (
      <div 
        className="blog-content prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        style={{
          fontSize: '1.125rem',
          lineHeight: '1.75',
          color: '#374151'
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100/50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
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
                <Clock className="w-5 h-5 mr-2" />
                <span>{extractedContent?.wordCount ? Math.ceil(extractedContent.wordCount / 200) : 5} min read</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading content...</p>
              </div>
            ) : extractedContent?.html ? (
              <article className="blog-content">
                {renderHTMLContent(extractedContent.html)}
              </article>
            ) : (
              <article className="prose prose-lg prose-green max-w-none">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This comprehensive article explores the latest trends and insights in the fitness industry, 
                    focusing on how technology and data-driven approaches are transforming member experiences 
                    and business operations.
                  </p>
                  
                  <blockquote className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <p className="text-gray-800 italic text-lg">
                      "The future of fitness lies in understanding and anticipating member needs through 
                      intelligent technology solutions."
                    </p>
                  </blockquote>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our research shows that fitness centers implementing AI-driven member engagement 
                    strategies see significant improvements in retention rates and overall member satisfaction. 
                    These technologies enable personalized experiences that keep members motivated and engaged.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h3>
                  
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Data-driven insights lead to better member experiences and business outcomes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      AI technology can predict and prevent member churn before it happens
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Personalized communication strategies significantly improve engagement rates
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Operational efficiency gains translate directly to improved profitability
                    </li>
                  </ul>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As the fitness industry continues to evolve, staying ahead of technological trends 
                    and member expectations becomes crucial for long-term success. The integration of 
                    AI and data analytics represents not just an opportunity, but a necessity for 
                    competitive fitness businesses.
                  </p>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Fitness Business?
            </h3>
            <p className="text-gray-600 mb-8">
              Discover how DXFactor's AI-powered solutions can help you improve member retention, 
              increase operational efficiency, and drive sustainable growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started Today
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.slug !== slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600">
                        {relatedPost.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <FeaturedSuccessStories />
      
      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default BlogPostPage; 