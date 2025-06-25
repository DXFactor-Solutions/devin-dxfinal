import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../../types/seo';

interface SEOHeadProps extends SEOProps {
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'DX Web2 – AI-Powered Genesis Deck',
  description = 'The first Agentic Platform built for Fitness & Wellness. Transform your fitness business with AI-powered microagents that drive $2B+ in outcomes.',
  keywords = 'fitness AI, wellness technology, gym management software, member retention, fitness analytics, AI microagents, fitness business solutions',
  image = '/DX.png',
  url = 'https://dx-web2.vercel.app/',
  type = 'website',
  author = 'DXFactor Team',
  publishedTime,
  modifiedTime,
  section,
  tags,
  children
}) => {
  const fullTitle = title.includes('DX Web2') ? title : `${title} | DX Web2 – AI-Powered Genesis Deck`;
  const fullUrl = url.startsWith('http') ? url : `https://dx-web2.vercel.app${url}`;
  const fullImage = image.startsWith('http') ? image : `https://dx-web2.vercel.app${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="DX Web2" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags && tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      <link rel="canonical" href={fullUrl} />
      
      {children}
    </Helmet>
  );
};

export default SEOHead;
