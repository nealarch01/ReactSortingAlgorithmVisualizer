// util imports
import Swap from "../utils/Swap";

import { GetRectangleValue_Int } from '../utils/GetRectangleValue';

async function SelectionSort(ar: HTMLCollection, run: boolean, delay_ms: number): Promise<void> {
    let n: number = ar.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            let minValue = GetRectangleValue_Int(ar[minIndex]);
            let jValue = GetRectangleValue_Int(ar[j]);
            if (jValue < minValue) {
                minIndex = j;
            }
        }
        await new Promise<void>((resolve) => {
            setTimeout(async () => {
                if (minIndex !== i) {
                    Swap(ar, i, minIndex);
                }
                resolve();
            }, delay_ms);
        });
    }
    // end of function
}

export default SelectionSort;