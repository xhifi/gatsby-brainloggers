module.exports = {
  siteMetadata: {
    siteUrl: "https://www.brainloggers.co.uk",
    title: "Brainloggers",
    author: "Shifa ur Rehman",
    description: "This is the site description",
    menuLinks:[
      {
        name:'Home',
        link:'/',
        icon: `home.png`,
      },
      {
        name:'About Us',
        link:'/about',
        icon: './src/images/base/material-icons/info.png',
      },
      {
        name:'Services',
        link:'/services',
        icon: './src/images/base/material-icons/rocket.png',
        submenu: [
          {
            name: 'Web Design',
            link: '/services/web-design',
            icon: './src/images/base/material-icons/globe.png',
          },
          {
            name: 'Graphic Design',
            link: '/services/graphic-design',
            icon: '../images/base/material-icons/colorpalette.png',
          },
          {
            name: 'IT Consultancy',
            link: '/services/information-technology',
            icon: '../src/images/base/material-icons/consulting.png',
          },
          {
            name: 'IT Operations',
            link: '/services/it-operations',
            icon: './src/images/base/material-icons/consulting.png',
          },
          {
            name: 'Digital Marketing',
            link: '/services/digital-marketing',
            icon: './src/images/base/material-icons/megaphone.png',
          },
        ]
      },
      {
        name:'Contact Us',
        link:'/contact',
        icon: './src/images/base/material-icons/call.png',
      },
      {
        name:'Blog',
        link:'/blog/',
        icon: './src/images/base/material-icons/megaphone.png',
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
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
        icon: "src/images/logo.svg",
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
