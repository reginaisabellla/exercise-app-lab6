import { useState } from 'react';
import StopWatch from './StopWatch';

export default function RunningExercise({ exercise, setMenuScreen }) {
    const { name } = exercise;
    const [laps, setLaps] = useState([]);
    const [lapCounter, setLapCounter] = useState(1);

    const recordLap = () => {
        setLaps([...laps, lapCounter]);
        setLapCounter(lapCounter + 1);
    };

    return (
        <div>
            <p>{name}</p>
            <StopWatch />
            <button onClick={recordLap}>Record Lap</button>
            <div>
                <p>Laps:</p>
                <ul>
                    {laps.map((lapNumber, index) => (
                        <li key={index}>Lap {lapNumber} </li> 
                    ))}
                </ul>
            </div>
            <button onClick={setMenuScreen}>Back to Menu</button>
        </div>
    );
}
