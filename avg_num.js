arr = [85,76,68,90,50,62];
sum = 0;
for(let i of arr){
    sum += i;
}
let avg = sum/arr.length;

console.log(`avg of marks = ${avg}`);