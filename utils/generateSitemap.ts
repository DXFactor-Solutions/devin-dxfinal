interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://dx-web2.vercel.app';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/why-us`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/outcomes-platform`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/solutions`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/case-studies`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/ebook`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/webinar-news`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/webinars`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/news`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/testimonials`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/careers`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/iso-certification`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.5
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/legal`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  const blogSlugs = [
    'ai-roi-click2save-fitness',
    'fitness-ai-transformation-guide',
    'member-retention-strategies',
    'gym-automation-benefits',
    'wellness-technology-trends'
  ];

  const blogPages: SitemapUrl[] = blogSlugs.map(slug => ({
    loc: `${baseUrl}/blog/${slug}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.6
  }));

  const caseStudySlugs = [
    'fitness-chain-transformation',
    'boutique-studio-success',
    'wellness-center-growth'
  ];

  const caseStudyPages: SitemapUrl[] = caseStudySlugs.map(slug => ({
    loc: `${baseUrl}/case-studies/${slug}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  }));

  const webinarSlugs = [
    'ai-implementation-masterclass',
    'revenue-optimization-workshop',
    'member-experience-transformation'
  ];

  const webinarPages: SitemapUrl[] = webinarSlugs.map(slug => ({
    loc: `${baseUrl}/webinar/${slug}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.6
  }));

  const allUrls = [...staticPages, ...blogPages, ...caseStudyPages, ...webinarPages];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

export const writeSitemapToFile = async (): Promise<void> => {
  const sitemapContent = generateSitemap();
  
  try {
    const fs = await import('fs');
    const path = await import('path');
    
    const publicDir = path.resolve(process.cwd(), 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};
