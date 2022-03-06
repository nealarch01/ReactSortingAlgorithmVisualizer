function Swap(rectangles: HTMLCollection, index1: number, index2: number): void {
    let temp_value: string = rectangles[index1].getAttribute('height')!; // exclamation means cannot be null
    rectangles[index1].setAttribute('height', rectangles[index2].getAttribute('height')!);
    rectangles[index2].setAttribute('height', temp_value);
}

export default Swap;