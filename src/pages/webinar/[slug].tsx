import React from 'react';
import { useParams } from 'react-router-dom';
import { webinars } from '../../lib/webinar-data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const WebinarPostPage = () => {
  const { slug } = useParams();
  const webinar = webinars.find((p) => p.slug === slug);

  if (!webinar) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{webinar.title}</h1>
          <video src={webinar.image} className="w-full h-auto rounded-lg mb-8" controls />
          <div className="prose prose-lg max-w-none">
            <p>{webinar.content}</p>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default WebinarPostPage; 