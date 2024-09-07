import React, { useState } from 'react';
import styles from '../../css/CourseTypeAccordion.module.css';

const CourseTypeAccordion = () => {
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        <div className={styles.accordionHeader} onClick={() => toggleAccordion(0)}>
          Study-Smart Course (SSC)
        </div>
        {active === 0 && (
          <div className={styles.accordionContent}>
            <p>A long duration course for those who want to start early...</p>
          </div>
        )}
      </div>
      {/* Repeat for other course types */}
    </div>
  );
};

export default CourseTypeAccordion;
