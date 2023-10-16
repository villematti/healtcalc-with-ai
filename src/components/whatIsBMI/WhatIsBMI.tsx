import React from 'react';
import './WhatIsBMI.css';

const WhatIsBMI: React.FC = () => {
  return (
    <div className="bmi-info">
      <h1 className="info-title">What is BMI?</h1>
      <p className="info-text">
        Body Mass Index (BMI) is a value derived from an individual's height and weight, and it is used to assess whether a person has a healthy body weight for a person of their height. It is a screening measure and is not intended to diagnose body fatness or health status.
      </p>
      <h2 className="info-subtitle">Uses of BMI</h2>
      <p className="info-text">
        BMI is commonly used as a simple and quick method to assess whether a person has a healthy body weight. It can help identify individuals who are underweight, at a healthy weight, overweight, or obese, which can be useful for identifying those at risk of certain health issues.
      </p>
      <h2 className="info-subtitle">Limitations of BMI</h2>
      <p className="info-text">
        While BMI is a useful screening tool, it does not assess body fat directly, nor does it account for muscle mass, bone density, overall body composition, and racial and sex differences. Therefore, it should not be used as a diagnostic tool and should be used alongside other measurements and assessments in clinical settings.
      </p>
    </div>
  );
};

export default WhatIsBMI;
