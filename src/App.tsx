import React from 'react';
import './App.css';
import Swap from './utils/Swap';

// Component imports
import Rectangle from './components/Rectangle/Rectangle';

// Utility imports
import CreateArray from './utils/CreateArray';

// Sorting Algorithm imports
import SelectionSort from './algorithms/SelectionSort';

function App() {
    const visWidth: string = "1000"; // visualizer width
    const totalRectangleWidth = "25"; // total width is 25, 
    // (rectangle size + rectangle outline size) where size of rectangle is 23px and size of rectangle outline is 2px
    const numberOfRectangles: number = parseInt(visWidth) / parseInt(totalRectangleWidth);
    const [Numbers, SetNumbers] = React.useState<Array<number>>(() => CreateArray(numberOfRectangles));

    // button press states
    const [isRunning, SetRun] = React.useState<boolean>(false);
    const [resetClicked, SetResetClicked] = React.useState<boolean>(false);
    const [pausedClicked, SetPause] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (isRunning === true) return; // if the sorting algorithm is running, continue;
        if (resetClicked === true) {
            SetNumbers(CreateArray(numberOfRectangles));
            SetResetClicked(false);
        } else return;
    }, [resetClicked]); // if new array button is pressed, regenerate a new array

    React.useEffect(() => {
        if (isRunning === true) {
            SetRun(false);
        }
        if (pausedClicked === true) {
            SetPause(false);
        }
    }, [pausedClicked]);

    async function Sort() {
        // make sure to pass isRunning hook to allow sorting algorithm to terminate when paused
        // call sorting algorithm
        SetRun(true);
        // SetNumbers([...Swap(Numbers, 0, 1)]); // using spread operator to update array state
        var vRectangles: HTMLCollection = document.getElementById('Visualizer')!.children;
        await SelectionSort(vRectangles, isRunning);
        // console.log('End of run');
        SetRun(false);
    }

    return (
        <React.Fragment>
            <div className="VisualizerContainer">
                <svg xmlns="http://www.w3.org/2000/svg" className="VisualizerSvg" id="Visualizer" width={visWidth} height="350">
                    {
                        Numbers.map((value: number, index: number) => {
                            return <Rectangle x_coord={index * parseInt(totalRectangleWidth)} height={value} key={index} />
                        })
                    }
                </svg>
            </div>
            <div className="ControlPanel">
                {(isRunning === true)
                    ? <button className="control-btn" id="new-btn" disabled>New Array</button>
                    : <button className="control-btn" id="new-btn" onClick={() => SetResetClicked(true)}>New Array</button>}
                <button className="control-btn" id="sort-btn" onClick={() => Sort()}>Sort Array</button>
                <button className="control-btn" id="pause-btn" onClick={() => SetPause(true)} hidden>Pause</button>
            </div>
        </React.Fragment>
    );
}

export default App;
