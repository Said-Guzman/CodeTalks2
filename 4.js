// Using only the filter method on the numbers array, create a function that returns an new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

let divid = numbers.filter(function(item)
  {{  if (item % 9 == 0)      // cancelling out anything that can be divided by 9
           return false   }           //and making sure the array doesn't show any of those numbers
      { if (item % 3 == 0 && item % 6 == 0)     //then, this will only take any numbers that can be divided by 3 and 6 from the if statement above
          return true           // and it'll return that true and it'll show only those numbers 
      }
  });
console.log(divid)    //don't forget to console.log it



