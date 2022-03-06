// Returns an n count array of integers
function CreateArray(n: number): Array<number> {
    let ar: Array<number> = [];
    const min = 30;
    const max = 320;
    for (let i = 0; i < n; i++) {
        let r_num = Math.random() * (max + min) + min;
        ar.push(Math.floor(r_num));
    }
    return ar;
}

export default CreateArray;