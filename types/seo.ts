export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service' | 'organization';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'Organization' | 'Article' | 'WebPage';
  data: any;
}

export interface LocalBusinessData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    '@type': string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
  logo?: string;
  image?: string;
  priceRange?: string;
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    reviewCount: number;
  };
}

export interface ServiceData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
  url?: string;
}

export interface ArticleData {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image?: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo?: {
      '@type': string;
      url: string;
    };
  };
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage?: {
    '@type': string;
    '@id': string;
  };
}
