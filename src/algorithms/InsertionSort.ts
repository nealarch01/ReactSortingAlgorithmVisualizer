import Swap from '../utils/Swap';
import { GetRectangleValue_Int } from '../utils/GetRectangleValue';

async function InsertionSort(ar: HTMLCollection, run: boolean, delay_ms: number): Promise<void> {
    let n = ar.length;
    let i: number = 0;
    let j: number = 0;
    for (i = 1; i < n; i++) {
        j = i;
        while (j > 0 && (GetRectangleValue_Int(ar[j - 1]) > GetRectangleValue_Int(ar[j]))) {
            Swap(ar, j - 1, j);
            j--;
        }
    }
}

export default InsertionSort;