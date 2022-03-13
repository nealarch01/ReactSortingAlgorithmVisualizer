import React from 'react';
import './App.css';

// Component imports
import Rectangle from './components/Rectangle/Rectangle';

// Utility imports
import CreateArray from './utils/CreateArray';

// Sorting Algorithm imports
import SelectionSort from './algorithms/SelectionSort';
import BubbleSort from './algorithms/BubbleSort';
import InsertionSort from './algorithms/InsertionSort';
import QuickSort from './algorithms/QuickSort';

function App() {
    const visWidth_str: string = "1000"; // visualizer width
    const totalRectangleWidth_str: string = "25"; // total width is 25, // declaring as string because rect attributes take string arg
    // (rectangle size + rectangle outline size) where size of rectangle is 23px and size of rectangle outline is 2px
    const numberOfRectangles: number = parseInt(visWidth_str) / parseInt(totalRectangleWidth_str);
    const [Numbers, SetNumbers] = React.useState<Array<number>>(() => CreateArray(numberOfRectangles));

    // button press states
    const [isRunning, SetRun] = React.useState<boolean>(false);
    const [resetClicked, SetResetClicked] = React.useState<boolean>(false);
    // const [pausedClicked, SetPause] = React.useState<boolean>(false);

    // algorithm hook state
    const [algorithmType, SetAlgorithmType] = React.useState<string>('selectionsort');

    // delay time hook
    const [DelayTime, SetDelayTime] = React.useState<number>(10); // 200 is the default delay time, add a slider that can change the slider time

    React.useEffect(() => {
        if (isRunning === true) return; // if the sorting algorithm is running, continue;
        if (resetClicked === true) {
            SetNumbers(CreateArray(numberOfRectangles));
            SetResetClicked(false);
        } else return;
    }, [resetClicked]); // if new array button is pressed, regenerate a new array

    // React.useEffect(() => {
    //     if (isRunning === true) {
    //         SetRun(false);
    //     }
    //     if (pausedClicked === true) {
    //         SetPause(false);
    //     }
    // }, [pausedClicked]);

    async function Sort() {
        if (isRunning === true) return; // do not run twice
        SetRun(true); // set state to true for now
        var vRectangles: HTMLCollection = document.getElementById('Visualizer')!.children;
        switch (algorithmType) {
            case 'selectionsort':
                await SelectionSort(vRectangles, isRunning, DelayTime);
                break;
            case 'bubblesort':
                await BubbleSort(vRectangles, isRunning, DelayTime);
                break;
            case 'insertionsort':
                await InsertionSort(vRectangles, isRunning, DelayTime);
                break;
            case 'quicksort':
                await QuickSort(vRectangles, isRunning, DelayTime);
                break;             
            default:
                break; // do nothing if somehow invalid input is read
        }
        SetRun(false);
    }

    return (
        <React.Fragment>
            <div className="VisualizerContainer">
                <svg xmlns="http://www.w3.org/2000/svg" className="VisualizerSvg" id="Visualizer" width={visWidth_str} height="350">
                    {
                        Numbers.map((value: number, index: number) => {
                            return <Rectangle x_coord={index * parseInt(totalRectangleWidth_str)} height={value} id_value={index} key={index} />
                        })
                    }
                </svg>
            </div>
            <div className="ControlPanel">
                {(isRunning === true)
                    ? <button className="control-btn" id="new-btn" disabled>New Array</button>
                    : <button className="control-btn" id="new-btn" onClick={() => SetResetClicked(true)}>New Array</button>}
                <button className="control-btn" id="sort-btn" onClick={() => Sort()}>Sort Array</button>
                {/* <button className="control-btn" id="pause-btn" onClick={() => SetPause(true)} hidden>Pause</button> */}
                <select id="algorithms" className="algorithm-selectbox" onChange={(event): void => {
                    let val = event.target.value!;
                    SetAlgorithmType(val);
                    // SetAlgorithmType(val);
                    return;
                }}>
                    <option value="selectionsort">Selection Sort</option>
                    <option value="bubblesort">Bubble Sort</option>
                    <option value="insertionsort">Insertion Sort</option>
                    <option value="quicksort">Quick Sort</option>
                </select>
                <div className="SliderContainer">
                    {
                        (isRunning === true)
                            ? <input type="range" min="1" max="100" value={DelayTime} id="delay-slider"
                                onChange={(event) => SetDelayTime(parseInt(event.target.value))}
                                disabled
                            />
                            : <input type="range" min="1" max="100" value={DelayTime} id="delay-slider"
                                onChange={(event) => SetDelayTime(parseInt(event.target.value))}
                            />
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
