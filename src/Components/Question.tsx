import React from 'react';
import '../Stylesheets/Question.css';

interface QuestionProps {
  title: string;
  difficulty: string;
  description: string;
  question: string;
  imageUrl: string;
}

const Question: React.FC<QuestionProps> = ({ title, difficulty, description, question, imageUrl }) => {
  return (
    <div className="question-container">
      <div className="question-header">
        <h1 className="question-title">{title}</h1>
        <div className="question-tags">
          <span className="question-tag expected-value">Game</span>
          <span className={`question-tag ${difficulty.toLowerCase()}`}>{difficulty}</span>
        </div>
      </div>
      <div className="question-body">
        <p className="question-description">{description}</p>
        <div className="question-content">
          <div className="question-text">
            <h2>Question:</h2>
            <p>{question}</p>
          </div>
          <img className="question-image" src={imageUrl} alt="Ant illustration" />
        </div>
      </div>
    </div>
  );
};

export default Question;
