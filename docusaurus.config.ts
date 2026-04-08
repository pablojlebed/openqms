import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OpenQMS 17025',
  tagline: 'An open Quality Management System based on ISO/IEC 17025',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://openqms.thelabguy.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'pablojlebed',
  projectName: 'openqms',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // SEO metadata injected into every page
  headTags: [
    {
      tagName: 'meta',
      attributes: {name: 'keywords', content: 'ISO 17025, QMS, quality management system, laboratory accreditation, testing laboratory, calibration laboratory, open source QMS, ISO/IEC 17025'},
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:type', content: 'website'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'robots', content: 'index, follow'},
    },
  ],

  scripts: [
    {
      src: 'https://tracker.thelabguy.org/tracker.js',
      async: true,
      'data-host': 'https://tracker.thelabguy.org',
    },
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pablojlebed/openqms/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/pablojlebed/openqms/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // OpenQMS branded social card
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OpenQMS 17025',
      logo: {
        alt: 'OpenQMS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'understanding-the-system',
          position: 'left',
          label: 'Understanding the System',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Procedures',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/pablojlebed/openqms',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Understanding the System',
              to: '/docs/understanding-the-system',
            },
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Procedures',
              to: '/docs/document-record-control/',
            },
          ],
        },
        {
          title: 'Participate',
          items: [
            {
              label: 'Contributing',
              href: 'https://github.com/pablojlebed/openqms/issues',
            },
            {
              label: 'Updates',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Find Us',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pablojlebed/openqms',
            },
            {
              label: 'Email Us',
              href: 'mailto:contact@thelabguy.org',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'License (CC BY-NC 4.0)',
              href: 'https://creativecommons.org/licenses/by-nc/4.0/',
            },
            {
              label: 'AI Disclosure',
              to: '/blog/ai-assisted-development',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenQMS Contributors. Built with Docusaurus. Licensed under CC BY-NC 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
