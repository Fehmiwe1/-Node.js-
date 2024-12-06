// פהמי והבי + מאור דוד

"use strict";

const fs = require("fs");
const path = require("path");
const arr = [
  "1.txt",
  "2.txt",
  "3.txt",
  "4.txt",
  "5.txt",
  "6.txt",
  "7.txt",
  "8.txt",
  "9.txt",
  "10.txt",
];
const str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

//  Create files and write random content
for (let i = 0; i < arr.length; i++) {
  // Build the full file path for the current file
  const dirPath = path.join(__dirname, arr[i]);

  const num = Math.floor(Math.random() * 10) + 1;

  let content = "";
  for (let j = 1; j <= num; j++) {
    content += `${str[i]}${j}\n`;
  }

  fs.writeFileSync(dirPath, content);
}

// Read content from created files and append selective lines to `out.txt`
for (let i = 0; i < arr.length; i++) {
  const filePath = path.join(__dirname, arr[i]);
  const textIn = fs.readFileSync(filePath, "utf-8");

  // Split the content into lines and remove empty lines
  const arr2 = textIn.split("\n").filter((line) => line.trim());

  let content1 = "";

  for (let j = 0; j <= i && j < arr2.length; j++) {
    content1 += `${arr2[j]}\n`;
  }

  fs.appendFileSync(`${__dirname}/out.txt`, content1);
}
