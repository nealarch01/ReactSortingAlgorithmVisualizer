import MarkPointers from "./MarkPointers";
import UnmarkPpinters from "./MarkPointers";

async function Swap(rectangles: HTMLCollection, index1: number, index2: number, delay_ms: number): Promise<void> {
    await new Promise<void>((resolve) => {
        setTimeout(async () => {
            let temp_value: string = rectangles[index1].getAttribute('height')!; // exclamation means cannot be null
            rectangles[index1].setAttribute('height', rectangles[index2].getAttribute('height')!);
            rectangles[index2].setAttribute('height', temp_value);
            resolve();
        }, delay_ms);
    });
}

export default Swap;