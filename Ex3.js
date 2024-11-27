// פהמי והבי + מאור דוד

const numbers = [0, 1, 2, 0, 3, 0, 4, 5, 100, 2003, 0];

let zeroCount = 0;


for (let i = 0; i < numbers.length; i++) {

    //convert the number to string
    const str = numbers[i] + ""; 

    //checking each character in the string
    for (let j = 0; j < str.length; j++) {
    
        //check if the character is a '0'
        zeroCount += (str[j] === '0' ? 1 : 0);
        
    }
}


console.log("The number of zeros in the array is: " + zeroCount);
