import React from "react";
import SiteLayout from "@layouts/SiteLayouts/Default";
import About from "@templates/About";

const meta = {
  title: "About",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

const AboutPage = () => {
  return <About />;
};

AboutPage.meta = meta;
AboutPage.Layout = SiteLayout;

export default AboutPage;
