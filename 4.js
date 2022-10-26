// Using only the filter method on the numbers array, create a function that returns an new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

let divid = numbers.filter(function(item){
    return item % 3 === 0 && item % 6 === 0
} 
)
let end = divid.filter(function(item2){
  divid.splice(item2 % 9 == 0)
})
console.log(divid)



