import React from "react";

const Robots = () => {};

export const getServerSideProps = ({ res }) => {
  const robots = `
  User-agent: *

  Sitemap: ${process.env.DNS}/sitemap.xml
  `;

  res.setHeader("Content-Type", "text/txt");
  res.write(robots);
  res.end();

  return {
    props: {},
  };
};

export default Robots;
