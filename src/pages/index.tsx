import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with OpenQMS 17025
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Open QMS for ISO 17025 Labs"
      description="OpenQMS 17025 is a free, open-source Quality Management System template and guide for testing and calibration laboratories seeking ISO/IEC 17025 accreditation.">
      <Head>
        <meta name="twitter:title" content="OpenQMS 17025" />
        <meta name="twitter:description" content="OpenQMS 17025 is a free, open-source Quality Management System template and guide for testing and calibration laboratories seeking ISO/IEC 17025 accreditation." />
        <meta name="twitter:image" content="https://openqms.thelabguy.org/img/social-card.jpg" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
