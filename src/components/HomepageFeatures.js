import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Answers to your Questions',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        If you're new to Ethereum and have questions you've come to the right place. 
        EthEd will help you understand Ethereum.
      </>
    ),
  },
  {
    title: 'Corrections of Misinformation',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        There's a lot of Misinformation, FUD and bag bias out there. 
        You can use EthEd to be better informed, and correct others with the hard facts.
      </>
    ),
  },
  {
    title: 'Community Built',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        EthEd is built and run by the community. We welcome all contributions, questions and corrections.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
