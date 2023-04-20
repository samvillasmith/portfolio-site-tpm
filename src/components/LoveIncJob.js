import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './LoveIncJob.css';

const LoveIncJob = () => {
  const [isVisible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  return (
    <div className="portfolio-container">
      <h1>Love Inc</h1>
      <ScrollTrigger
        onEnter={onEnterViewport}
        onExit={onExitViewport}
        triggerOnce={true}
      >
        <div className={`profile-section${isVisible ? ' visible' : ''}`}>
          <div className="profile-col">
            <p>
              Spearheaded the creation and launch of a revolutionary SaaS platform that enables businesses to optimize their user feedback processes. Continuously driving innovation and implementing user-centric improvements to enhance the platform's capabilities.
            </p>
            <p>
              Managed a cross-functional team of data analysts, web developers, and board of directors using Agile methodologies to plan, prioritize, and execute product initiatives for various clients.
            </p>
            <p>
              Led a major digital transformation and innovation effort for a non-profit organization, modernizing their IT infrastructure and processes to align with business requirements.
            </p>
            <p>
              Successfully migrated the organization's data to a cloud SaaS CRM and launched a new web app ahead of schedule, resulting in improved donor retention and increased overall efficiency.
            </p>
          </div>
          <div className="profile-col">
            <p>
              Achieved cost savings by resolving technical debt and increased the organization's legitimacy by implementing the new CRM solution.
            </p>
            <p>
              Led the implementation of new software solutions and process improvements that resulted in a more streamlined and efficient workflow.
            </p>
            <p>
              Provided network support to clients on a freelance basis and developed mobile/web applications as new products.
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default LoveIncJob;
