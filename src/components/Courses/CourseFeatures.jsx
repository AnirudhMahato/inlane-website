import React from 'react';
import styles from '../../css/CourseFeatures.module.css';

const CourseFeatures = () => {
  return (
    <section className={styles.courseFeatures}>
      <div className={styles.container}>
        <div className={styles.featureItem}>
          <img src="../images/icon-2-courses-course-x-template_1.svg" alt="Duration Icon" />
          <div>500+ hours of teaching and testing</div>
        </div>
        <div className={styles.featureItem}>
          <img src="../images/icon-test-series.svg" alt="Mocks Icon" />
          <div>300+ CBTs</div>
        </div>
        {/* Add more features here */}
      </div>
    </section>
  );
};

export default CourseFeatures;
