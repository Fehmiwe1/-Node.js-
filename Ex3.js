// פהמי והבי + מאור דוד

const numbers = [0, 1, 2, 0, 3, 0, 4, 5, 100, 2003, 0];

let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    
    const str = numbers[i] + ""; 

    for (let j = 0; j < str.length; j++) {

        zeroCount += (str[j] === '0' ? 1 : 0);
    }
}
}

console.log("The number of zeros in the array is: " + zeroCount);
