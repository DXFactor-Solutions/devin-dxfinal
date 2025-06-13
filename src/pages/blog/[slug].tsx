import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../lib/blog-data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post && post.html) {
      window.location.replace(post.html);
    } else if (post && post.pdf) {
      window.location.replace(post.pdf);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Post Not Found</h1>
            <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If there's a PDF or HTML, the user will be redirected, so nothing needs to be rendered here
  if (post.pdf || post.html) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-h-80 object-cover rounded-lg shadow mb-8"
          />
          <div
            className="prose prose-lg max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default BlogPostPage; 