//**********  MAP **************/
// map method create new array

let arr = [1,2,3,4,5,65,56,77,88,99,100,112]

let newArr = arr.map((val) => {
    return val**2;   
});

let newArr2 = arr.map((val) => {
    return val + val
})

//************** FILTER ************/

let evenArray = arr.filter((value)=>{
    return value % 2 === 0;
})

console.log(evenArray);


let primeNumArray = arr.filter((val)=> {
    if (val < 2 ) return false;
    for (let i = 2; i < val; i++){
        if (val%1 === 0) return false;
    }
    return true
})

console.log(primeNumArray)



//********* REDUCE ************/

// it reduce the array to single value,it perform operations on array
let sumArray = arr.reduce((per,cur)=>{
    return per + cur
})
console.log(sumArray)


let maxValue = arr.reduce((num1,num2)=>{
    return num1>num2 ? num1 : num2
})

console.log(maxValue)




//**** practice *******/

//sum of all num

let num = prompt('enter number to create array: ')
let createArray = []

for (let i=1; i<=num; i++){
    createArray[i-1] = i
} 

console.log(createArray)

let sumCreateArray = createArray.reduce((x,y)=>{
    return x+y
})

console.log('sum: ', sumCreateArray)


//factorial

let findfactorial = createArray.reduce((x,y)=>{
    return x*y
})

console.log('factorial: ', findfactorial)