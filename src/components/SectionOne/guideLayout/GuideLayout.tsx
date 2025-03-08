import React, { useState } from 'react';
import styles from './GuideLayout.module.scss';

interface Step {
  content: JSX.Element;
}

interface GuideLayoutProps {
  steps: Step[];
  onClose: () => void; // Add an onClose prop
}

const GuideLayout: React.FC<GuideLayoutProps> = ({ steps, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={styles.guidewindow}>
      <button onClick={onClose} className={styles.closeBtn}>Close</button>
      <div className={styles.stepContent}>{steps[currentStep].content}</div>
      <div className={styles.buttonsDis}>
        <button
          className={styles.helperBtn}
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className={styles.helperBtn}
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GuideLayout;
