import { GetRectangleValue_Int } from "../utils/GetRectangleValue";
import Swap from "../utils/Swap";

async function BubbleSort(ar: HTMLCollection, run: boolean, delay_ms: number): Promise<void> {
    console.log('Function called');
    let n: number = ar.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (GetRectangleValue_Int(ar[j]) < GetRectangleValue_Int(ar[j - 1])) {
                await Swap(ar, j, j - 1, delay_ms);
            }
        }
    }
}

export default BubbleSort;