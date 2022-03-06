export function GetRectangleValue_String(elem: Element | null): string {
    if (elem === null) return ''; // return an empty string 
    let value = elem.getAttribute('height');
    if (value === null) return '';
    return value;
}

export function GetRectangleValue_Int(elem: Element | null) : number {
    if (elem === null) return NaN;
    let value = parseInt(elem.getAttribute('height')!);
    if (isNaN(value)) return NaN;
    return value;
}
