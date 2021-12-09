// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ethereum Education',
  tagline: 'Answers to all your Ethereum questions',
  url: 'https://www.ethed.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'timjrobinson', 
  projectName: 'ethed', 

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/timjrobinson/ethed/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EthEd',
        logo: {
          alt: 'Ethereum Education',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'FAQ',
          },
          {
            href: 'https://github.com/timjrobinson/ethed',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'FAQ',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'The Daily Gwei',
                href: 'https://thedailygwei.substack.com/',
              },
              {
                label: 'Ethfinance Subreddit',
                href: 'https://reddit.com/r/ethfinance',
              },
              {
                label: 'Polynya',
                href: 'https://polynya.medium.com/'
              },
              {
                label: 'Bankless',
                href: 'https://banklesshq.com/'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/timjrobinson/ethed',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EthEd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
