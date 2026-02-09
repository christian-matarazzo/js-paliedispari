const userWord=prompt("Hi, insert here your word to see if is palindrome") //ask to the user to insert a word


/* start function */
function checkPalindrome(word) {
let lowerCase = word.toLowerCase()   /* we force the input to a lower case string for the check */


let reversedUserWord = ""   /* to let reversed word work, we give a variable to be saved in */


//for check if is palindrome we need to loop the word, we use a for cicle for the loop
for(let i = lowerCase.length - 1 /* with this condition we can start loop from the end */; i >=0 /*[i] must be > or = to 0 to cycle */; i -- /* [i] will start from the last index, and go till the 0 index */) {

    
    reversedUserWord += lowerCase[i]  /* let's use the empty variable to save our reversed word */
   

}
    /* we can now do the check,if strings are the same we have the palindrome word */
    if(lowerCase===reversedUserWord){
        console.log("Your word is palindrome!");
        
    }
    else {
        console.log("Your word is not palindrome!");
        
    }
    
    
    

}

checkPalindrome(userWord)  //now we can call our function, using instead of parameter "word" our argoument object "userWord"



