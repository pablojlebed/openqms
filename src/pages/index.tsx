import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          <Translate id="homepage.tagline" description="The tagline on the homepage hero banner">
            An open Quality Management System based on ISO/IEC 17025
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="homepage.cta" description="The main call-to-action button on the homepage">
              Get Started with OpenQMS 17025
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function OtherPortals() {
  return (
    <div style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-background-color)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>More by The Lab Guy</h2>
        <div className="row">
          <div className="col col--4" style={{ marginBottom: '2rem' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div className="card__header">
                <h3>ICP-MS Simulator</h3>
              </div>
              <div className="card__body" style={{ flexGrow: 1 }}>
                <p>An interactive simulator for inductively coupled plasma mass spectrometry. Practice method development and resolving polyatomic interferences without burning expensive argon gas.</p>
              </div>
              <div className="card__footer">
                <a href="https://icpms-sim.thelabguy.org" className="button button--primary button--block" target="_blank" rel="noopener noreferrer">Launch Simulator</a>
              </div>
            </div>
          </div>
          
          <div className="col col--4" style={{ marginBottom: '2rem' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div className="card__header">
                <h3>ICP-OES Simulator</h3>
              </div>
              <div className="card__body" style={{ flexGrow: 1 }}>
                <p>Master wavelength selection, matrix matching, and spectral interference correction on this interactive Optical Emission Spectrometry simulator.</p>
              </div>
              <div className="card__footer">
                <a href="https://icpoes-sim.thelabguy.org" className="button button--primary button--block" target="_blank" rel="noopener noreferrer">Launch Simulator</a>
              </div>
            </div>
          </div>

          <div className="col col--4" style={{ marginBottom: '2rem' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div className="card__header">
                <h3>PharmaOS</h3>
              </div>
              <div className="card__body" style={{ flexGrow: 1 }}>
                <p>An open-source operating system designed for pharmaceutical manufacturing, ensuring full compliance with GMP and FDA regulations.</p>
              </div>
              <div className="card__footer">
                <a href="https://pharmaos.thelabguy.org" className="button button--primary button--block" target="_blank" rel="noopener noreferrer">Explore PharmaOS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({id: 'homepage.title', message: 'Open QMS for ISO 17025 Labs'})}
      description={translate({id: 'homepage.description', message: 'OpenQMS 17025 is a free, open-source Quality Management System template and guide for testing and calibration laboratories seeking ISO/IEC 17025 accreditation.'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <OtherPortals />
      </main>
    </Layout>
  );
}
