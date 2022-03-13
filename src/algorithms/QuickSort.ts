import Swap from '../utils/Swap';

import { GetRectangleValue_Int } from '../utils/GetRectangleValue';

async function Partition(ar: HTMLCollection, pivotIndex: number, left: number, right: number, delay_ms: number): Promise<number> {
    let pivotValue = GetRectangleValue_Int(ar[pivotIndex]);
    let partitionIndex: number = left;
    for (let i = left; i < right; i++) {
        if (GetRectangleValue_Int(ar[i]) < pivotValue) {
            await Swap (ar, i, partitionIndex, delay_ms);
            partitionIndex++;
        }
    }
    await Swap(ar, right, partitionIndex, delay_ms);
    return partitionIndex;
}

async function QS(ar: HTMLCollection, left: number, right: number, delay_ms: number,) {
    let n = ar.length;
    let pivot: number;
    let partitionIndex: number;
    if (left < right) {
        pivot = right;
        partitionIndex = await Partition(ar, pivot, left, right, delay_ms);
        // sort the left side
        await QS(ar, left, partitionIndex - 1, delay_ms);
        await QS(ar, partitionIndex + 1, right, delay_ms);
    }
}

async function QuickSort(ar: HTMLCollection, isRunning: boolean, delay_ms: number): Promise<void> {
    await QS(ar, 0, ar.length - 1, delay_ms);
}

export default QuickSort;