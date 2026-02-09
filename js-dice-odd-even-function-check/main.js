//ask to the user a number from 1 to 5 and to choose from even and odd


const userNumber = Number(prompt("Hi there, choose a number from 1 to 5"))
const userOddEven = prompt("Choose if sum will be odd or even").toLowerCase()
 console.log("You throw: " ,userNumber);  



//lets generate a random number from 1 to 5, creating a function
function randomDice() {
const randomDice = Math.floor(Math.random() * 5) + 1 
return randomDice

}
randomDice()
const PcNumber = randomDice()
console.log("PC throw :", PcNumber);





//sum the numbers from user and random

let sum = userNumber + PcNumber

console.log("The sum is: " , sum);

//check if sum is odd or even, creating a function

function oddOrEvenCheck(sumCheck) {

    let oddOrEvenCheck= sum % 2 /* if the operation output is 0 the number is even */

    if(oddOrEvenCheck === 0){
        console.log("The sum is even");
        return "even"
    }
    else {
        console.log("The sum is odd");
        return "odd"
        
    }
}
const evenFinalCheck = oddOrEvenCheck(sum) /* we use a varaible to use the return to operate */

console.log(`You threwd ${userNumber}, PC threwd ${PcNumber}. You choosed ${userOddEven}, the sum of the number is ${sum}. ${sum} is ${evenFinalCheck}.`); /* let's check what are the operation we made till now */


//log the winner
if (userOddEven === evenFinalCheck) {
    console.log("You win!");
  
}

else {
    console.log( "You lose!");
}



