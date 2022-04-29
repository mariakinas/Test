
const solution = (x, y) => {
    let count = 105;
    let result = "";

    for (let i = 1; i <= 14; i++) {
    if (i === 1) {
        result += ' ' + count;
    } else if (i > 1) {
        let local = count;
        let string = '';
        for (let j = 1; j < i; j++) {
        local -= 14 - j;
        string += local + " ";
        // array[i,j];
        }
        
        result += string.split(" ").reverse().join(" ");
        result += ' ' + count;
    }
    count -= 1;
    result += "\n";
    console.log(result);

    }
}
solution();

