module.exports = {
  siteMetadata: {
    siteUrl: "https://www.brainloggers.co.uk",
    title: "Brainloggers",
    author: "Shifa ur Rehman",
    description: "This is the site description",
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'About Us',
        link:'/about'
      },
      {
        name:'Services',
        link:'/services',
        submenu: [
          {
            name: 'Web Design',
            link: '/services/web-design'
          },
          {
            name: 'Graphic Design',
            link: '/services/graphic-design'
          },
          {
            name: 'Information Technology',
            link: '/services/information-technology'
          },
          {
            name: 'Digital Marketing',
            link: '/services/digital-marketing'
          },
        ]
      },
      {
        name:'Contact Us',
        link:'/contact'
      },
      {
        name:'Blog',
        link:'/blog/'
      }
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-next-seo",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "asdasdasdasdasdasdas",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
