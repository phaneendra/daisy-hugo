/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import SiteLayout from "@layouts/SiteLayout";
import Blog from "@templates/Blog";

const meta = {
  title: "Blog",
  tags: ["Next.js", "MDX"],
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is the Blog page.",
};

const BlogPage = () => {
  return <Blog />;
};

BlogPage.meta = meta;
BlogPage.Layout = SiteLayout;

export default BlogPage;
