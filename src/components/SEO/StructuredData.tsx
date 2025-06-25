import React from 'react';
import { Helmet } from 'react-helmet-async';
import { StructuredDataProps, LocalBusinessData, ServiceData, ArticleData } from '../../types/seo';

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = JSON.stringify(data);

  return (
    <Helmet>
      <script type="application/ld+json">
        {structuredData}
      </script>
    </Helmet>
  );
};

export const LocalBusinessStructuredData: React.FC<{ data?: Partial<LocalBusinessData> }> = ({ 
  data = {} 
}) => {
  const defaultData: LocalBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DXFactor Solutions',
    description: 'AI-powered platform for fitness and wellness businesses. We build revenue machines, not just software.',
    url: 'https://dx-web2.vercel.app',
    telephone: '703-231-6570',
    email: 'contact@dxfactor.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    sameAs: [
      'https://www.linkedin.com/company/dxfactor-solutions'
    ],
    logo: 'https://dx-web2.vercel.app/DX.png',
    image: 'https://dx-web2.vercel.app/DX.png',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 120
    },
    ...data
  };

  return <StructuredData type="LocalBusiness" data={defaultData} />;
};

export const ServiceStructuredData: React.FC<{ 
  name: string;
  description: string;
  serviceType?: string;
  url?: string;
}> = ({ name, description, serviceType, url }) => {
  const serviceData: ServiceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'DXFactor Solutions',
      url: 'https://dx-web2.vercel.app'
    },
    areaServed: 'United States',
    serviceType: serviceType || 'AI Technology Services',
    url: url || 'https://dx-web2.vercel.app'
  };

  return <StructuredData type="Service" data={serviceData} />;
};

export const ArticleStructuredData: React.FC<{
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  url?: string;
}> = ({ headline, description, image, datePublished, dateModified, url }) => {
  const articleData: ArticleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image || 'https://dx-web2.vercel.app/DX.png',
    author: {
      '@type': 'Organization',
      name: 'DXFactor Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'DXFactor Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dx-web2.vercel.app/DX.png'
      }
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url || 'https://dx-web2.vercel.app'
    }
  };

  return <StructuredData type="Article" data={articleData} />;
};

export default StructuredData;
