arr = [1,2,3,4,5,6,7]

arr.push(10)//add somthing at end

arr.pop()//remove somthing from last

arr1 = arr.toString() //dont change the original array but create new array and change it to string

arr.unshift(15) // add somthing at start

arr.shift() // remove somthing from start

arr.slice(2,5) // give array item from 2 index to 4 not including 5

//splice(index,how many value to remove,what to add)
arr.splice(2,2,100,101) // return an array in which 100 and 101 is added at index 2

//only add no remove
arr.splice(2,0,101) // it will only add 101 at index 3 nothing to be removed

//only remove no add
arr.splice(3,1) // it will remove one item at index 3 


let company = ['bloomberg','microsoft','uber','google','ibm','netflix']

company.shift()

company.splice(2,1,'ola')

company.push('amazon')
