/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import SiteLayout from "@layouts/SiteLayouts/Default";
import Home from "@templates/Home";

const meta = {
  title: "Home",
  tags: ["Next.js", "MDX"],
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is the Home page."
};

const HomePage = () => {
  return <Home />;
};

HomePage.meta = meta;
HomePage.Layout = SiteLayout;

export default HomePage;
