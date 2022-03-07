import Swap from "../utils/Swap";

async function BubbleSort(ar: HTMLCollection, run: boolean, delay_ms: number): Promise<void> {
    let n: number = ar.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (ar[j] < ar[j - 1]) {
                await new Promise<void>((resolve) => {
                    setTimeout(() => {
                        Swap(ar, j, j - 1);
                        resolve();
                    }, delay_ms);
                });
            }
        }
    }
}

export default BubbleSort;