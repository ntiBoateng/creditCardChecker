// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1,
     invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

let validateCred=(arr)=>{
    let result1=[];
    let result2=[];
    let sub9=[];
    let nosub=[];
    for(let i=arr.length-1;i>=0;i-=2){
     result2.push(arr[i]);
    }
    for(let j=0;j<arr.length;j+=2){
        result1.push(arr[j]*2);
        
    }
  
    let final = result1.concat(result2);
    
    for(let i=0;i<final.length;i++){
        if(final[i]>9){
            sub9.push(final[i]-9);
        }
        else if(final[i]<=9){
            nosub.push(final[i]);
        }
    }
    
    var h= sub9.concat(nosub);
    
    //.reduce((a, b) => a + b, 0)
    let v=h.reduce((a,b)=> a+b,0);
    if(v%10===0){
        return true
    }else{
        return false;
    }
    
}
console.log(validateCred(valid5));


var valCards = [];
var invalCards = [];
const findInvalidCards = cardArray => {
  for (let i = 0; i < cardArray.length; i++) {
    if (validateCred(cardArray[i]) === true) {
      valCards.unshift(cardArray[i]);
    }
    else {
      invalCards.unshift(cardArray[i]);
    } 
  }
  return valCards;
}

findInvalidCards(batch);

const idInvalidCardCompanies = badCards => {
  var badCardCompanies = [];
  var noDoubles = [];
  
  for (let i = 0; i < badCards.length; i++) {
    if (badCards[i][0] === 3) {
      badCardCompanies.unshift('American Express');
    }
    else if (badCards[i][0] === 4) {
      badCardCompanies.unshift('Visa');
    }
    else if (badCards[i][0] === 5) {
      badCardCompanies.unshift('MasterCard');
    }
    else if (badCards[i][0] === 6) {
      badCardCompanies.unshift('Discover');
      }
    else {
      badCardCompanies.unshift('Company not found');
    }
  }
uniqueList = [...new Set(badCardCompanies)];
  console.log(uniqueList);
}
  



