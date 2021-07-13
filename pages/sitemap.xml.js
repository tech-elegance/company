import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.95">
        <url>
            <loc>https://tech-elegance.com</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
         <url>
            <loc>https://tech-elegance.com/service/wordpress</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.95</priority>
        </url>
        <url>
            <loc>https://tech-elegance.com/service/website</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.95</priority>
        </url>
        <url>
            <loc>https://tech-elegance.com/service/moblie</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.95</priority>
        </url>
        <url>
            <loc>https://tech-elegance.com/service/desktop</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://tech-elegance.com/service/graphic</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.95</priority>
        </url>
        <url>
            <loc>https://tech-elegance.com/team</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>
        <url>
            <loc>https://tech-elegance.com/aboutus</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.4</priority>
        </url>
        <url>
            <loc>https://tech-elegance.com/contactus</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.3</priority>
        </url>
       
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
