import React, { useState } from 'react';
import Question from './Components/Question';
import Solution from './Components/Solution';
import Simulation from './Components/Simulation';

function App() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Welcome to Jayash's Quant Prep</h1>
      <Question
        title="Place or Take"
        difficulty="Medium"
        description="You are playing a one-player game with two opaque boxes. At each turn, you can choose to either 'place' or 'take'. The goal is to maximize your payoff by making optimal decisions at every turn. The challenge lies in the fact that you cannot know how much money you have taken until the game ends."
        question="What is the expected payoff of this game if you play optimally over 100 turns? Assume that you either 'place' $1 in a random box or 'take' the money from one box at each turn."
        imageUrl="/Assets/boxes.png"
      />
      <div style={{textAlign: 'center'}}>
        <button
          onClick={() => setShowSolution((prev) => !prev)}
          style={{
            margin: "20px 0",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "rgb(59 130 246)",
            color: 'white',
            borderRadius: '10px',
            border: '0px',
            alignItems: 'center'
          }}
        >
          {showSolution ? "Hide Solution" : "Show Solution"}
        </button>
      </div>
      {showSolution && <Solution />}
      {showSolution && <Simulation />}
    </div>
  );
}

export default App;
