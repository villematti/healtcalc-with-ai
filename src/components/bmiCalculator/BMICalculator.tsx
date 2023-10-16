import React, { useState, FormEvent } from 'react';
import './BMICalculator.css';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');

  const calculateBMI = (height: number, weight: number): number => {
    return weight / (height * height);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const heightMeters = Number(height) / 100;
    const weightKg = Number(weight);
    const calculatedBmi = calculateBMI(heightMeters, weightKg);
    
    setBmi(calculatedBmi);
    setBmiCategory(getBmiCategory(calculatedBmi));
  };

  const getBmiCategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="bmi-calculator">
      <h1 className="title">BMI Calculator</h1>
      <form onSubmit={handleSubmit} className="bmi-form">
        <div className="input-group">
          <label htmlFor="height" className="input-label">Height (cm): </label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="weight" className="input-label">Weight (kg): </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="calculate-button">Calculate BMI</button>
      </form>
      {bmi !== null && (
        <div className="result">
          <h2 className="result-title">BMI Result</h2>
          <p className="result-value">Your BMI is {bmi.toFixed(1)}</p>
          <p className="result-category">Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
