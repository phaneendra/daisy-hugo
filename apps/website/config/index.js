const config = {
  author: "Your Name here",
  siteName: "Your Site Name here",
  siteDescription: "The personal blog of Your Name",
  keywords: "blog, personal website, nextjs, static, reactjs, react",
  blogTitle: "Blog",
  baseUrl: "base url of your site here (e.g. www.mysite.com)",
  seo: {
    title: "Your Site title here",
    description: "This example uses more of the available config options.",
    canonical: "https://www.canonical.ie/",
    openGraph: {
      url: "https://www.url.ie/a",
      title: "Open Graph Title",
      description: "Open Graph Description",
      images: [
        {
          url: "https: //www.example.ie/og-image-01.jpg",
          width: 800,
          height: 600,
          alt: "Og Image Alt"
        },
        {
          url: "https://www.example.ie/og-image-02.jpg",
          width: 900,
          height: 800,
          alt: "Og Image Alt Second"
        },
        {
          url: "https://www.example.ie/og-image-03.jpg"
        },
        {
          url: "https://www.example.ie/og-image-04.jpg"
        }
      ],
      site_name: "Your Site Name here"
    },
    twitter: {
      handle: "@handle",
      site: "Your Site Name here",
      cardType: "summary_large_image"
    }
  },
  websiteLogo: "https://cdn.auth0.com/blog/logos/nextjs-logo.png",
  navigation: [
    {
      text: "Home",
      link: "/"
    },
    {
      text: "Blog",
      link: "/blog"
    },
    {
      text: "About",
      link: "/about"
    }
  ]
};

export default config;
