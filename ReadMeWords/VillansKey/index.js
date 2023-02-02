// import data from './data.json'
// const data = require('./data.json');
import data from "./data.json" assert { type: "json" };


const randomNumber = Math.floor(Math.random() * 2240) + 1;
let string = data[randomNumber]
console.log(randomNumber);
console.log(data[randomNumber]);
console.log(string);



// Async fetch function
async function fetchData() {
    const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en"
    //   // Write code here.
    try {
      const res = await fetch(`${BASE_URL}/${string}`)
      const json = await res.json()
      console.log('fetch     ', json);
      }
    catch {
      console.log("error");
    }
  }

fetchData()
  
