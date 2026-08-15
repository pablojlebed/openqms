import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout title="Project closed" description="This project is no longer publicly available.">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '2rem',
          background: '#f7f7f5',
          color: '#202020',
          textAlign: 'center',
        }}
      >
        <section style={{ width: 'min(42rem, 100%)' }}>
          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            This project is no longer publicly available.
          </h1>
          <p
            style={{
              margin: '1.1rem 0 0',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#666',
            }}
          >
            Thank you to those who found it useful.
          </p>
        </section>
      </main>
    </Layout>
  );
}
