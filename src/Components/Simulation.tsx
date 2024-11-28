import { useEffect, useState } from "react";
import '../Stylesheets/Simulation.css'

const Simulation: React.FC = () => {
    const [numberOfPlacings, setNumberOfPlacings] = useState<number>(10); // Default user input
    const [boxes, setBoxes] = useState<number[]>([0, 0]);
    const [round, setRound] = useState<number>(0);
    const [winnings, setWinnings] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNumberOfPlacings(Number(event.target.value));
    };
  
    const startSimulation = () => {
      setBoxes([0, 0]);
      setRound(0);
      setWinnings(0);
      setIsRunning(true);
    };
  
    useEffect(() => {
      if (!isRunning) return;
  
      if (round < 100) {
        const timeout = setTimeout(() => {
          if (round < numberOfPlacings) {
            // Place phase
            const newBoxes = [...boxes];
            const randomBox = Math.floor(Math.random() * 2);
            newBoxes[randomBox] += 1;
            setBoxes(newBoxes);
          } else {
            // Take phase
            const chosenBox = Math.floor(Math.random() * 2);
            setWinnings((prev) => prev + boxes[chosenBox]);
            const newBoxes = [...boxes];
            newBoxes[chosenBox] = 0;
            setBoxes(newBoxes);
          }
          setRound((prev) => prev + 1);
        }, 500); // 500ms delay for each step
        return () => clearTimeout(timeout);
      } else {
        setIsRunning(false); // Stop when 100 rounds are completed
      }
    }, [round, isRunning, numberOfPlacings, boxes]);
  
    return (
      <div className="simulation">
        <h1>Simulation</h1>
        <div className="simulation-input">
          <label>
            Number of Placings: 
            <input
              type="number"
              value={numberOfPlacings}
              onChange={handleInputChange}
              disabled={isRunning}
              style={{border:'0px', borderBottom:'2px solid black', textAlign: 'center', width: '40px', margin: '0px 20px', outline:'0px'}}
            />
          </label>
          <button style={{fontSize:"15px", padding: "5px 20px", color: "white", backgroundColor: "rgb(59 130 246)", border:"0px", borderRadius: "5px"}} onClick={startSimulation} disabled={isRunning}>
            Start
          </button>
        </div>
  
        <div className="boxes">
          <div className="box">
            <h2>Box 1</h2>
            <p>{boxes[0]}</p>
          </div>
          <div className="box">
            <h2>Box 2</h2>
            <p>{boxes[1]}</p>
          </div>
        </div>
  
        <div className="winnings">
          <h2>Winnings: ${winnings}</h2>
        </div>
  
        <div className="status">
          <h3>Round: {round} / 100</h3>
          <h3>{round < numberOfPlacings ? 'Placing...' : 'Taking...'}</h3>
        </div>
      </div>
    );
  };
  
  export default Simulation;
  