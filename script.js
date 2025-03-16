function palindromeByArray(){
    let word1 = prompt("Enter a palindrome");
    let arr1= word1.split("");
    // console.log(arr1);
    let arr2 = [...arr1].reverse(); //[...] is called spread operator and it copies the items of one array to another. if we dont use this then we copy the reference of one array to another not the actual value 
    // console.log(arr1);
    // console.log(arr2);
    let isPalindrome = true;
        
    for(let i =0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]){
            isPalindrome = false;
            // console.log(`is palindrome element not equal  iteration : ${isPalindrome}`);
            break;
        }
        // console.log(`is palindrome after every iteration : ${isPalindrome}`);
        }
        // console.log(isPalindrome);
        
        if(isPalindrome){
            alert("The word is a palindrome");
        }else{
            alert("The word is not a palindrome");
            
        }
}


function palindromeByString(){ 
    let word1 = prompt("Enter a palindrome");
    // console.log(word1);
    let arr1= word1.split("");
    // console.log(arr1);
    arr1.reverse();
    let word2=arr1.join("")
    // console.log(word2);
    
    // console.log(word1 === word2);
    
    if (word1 === word2){
        alert("The word is a palindrome");
    }else{
        alert("The word is not a palindrome");
    }
}
// These are two different methods that does the same work. you can choose any of your choice
palindromeByArray();
//    palindromeByString();