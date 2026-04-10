import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="homepage.features.aligned.title">
        ISO/IEC 17025 Aligned
      </Translate>
    ),
    Svg: require('@site/static/img/iso-aligned.svg').default,
    description: (
      <Translate id="homepage.features.aligned.description">
        Every document, procedure, and policy is structured to meet the
        requirements of ISO/IEC 17025:2017 for testing and calibration
        laboratories.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.open.title">
        Open & Community-Driven
      </Translate>
    ),
    Svg: require('@site/static/img/open-community.svg').default,
    description: (
      <Translate id="homepage.features.open.description">
        Freely available under CC BY-NC 4.0. Adapt it to your laboratory, contribute
        improvements, and help build the best open QMS in the world.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.stepbystep.title">
        Step-by-Step Development
      </Translate>
    ),
    Svg: require('@site/static/img/step-by-step.svg').default,
    description: (
      <Translate id="homepage.features.stepbystep.description">
        Built incrementally and transparently — each clause of the standard is
        addressed with practical templates, examples, and explanations.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureSvgWrapper}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureText}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
