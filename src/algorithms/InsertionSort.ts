import Swap from '../utils/Swap';
import { GetRectangleValue_Int } from '../utils/GetRectangleValue';
import MarkPointers from '../utils/MarkPointers';
import UnmarkPointers from '../utils/UnmarkPointers';

async function InsertionSort(ar: HTMLCollection, run: boolean, delay_ms: number): Promise<void> {
    let n = ar.length;
    let i: number = 0;
    let j: number = 0;
    for (i = 1; i < n; i++) {
        j = i;
        // MarkPointers(<HTMLElement>ar[j]);
        while (j > 0 && (GetRectangleValue_Int(ar[j - 1]) > GetRectangleValue_Int(ar[j]))) {
            await Swap(ar, j, j - 1, delay_ms);
            j--;
            // UnmarkPointers(<HTMLElement>ar[i]);
        }
        // UnmarkPointers(<HTMLElement>ar[i]);
    }
}

export default InsertionSort;