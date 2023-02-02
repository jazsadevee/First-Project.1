// import data from './data.json'
// const data = require('./data.json');
import data from "./data.json" assert { type: "json" };

const wordContainer = document.querySelector('#wordInput')
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
      return json[0] 
      }
    catch {
      console.log("error");
    }
  }

fetchData()

//Default word onpage load is Dictionary, definition and sound
// const word
const button = document.querySelector('#word')
button.addEventListener('click', async (e) => {
  let words = await fetchData()
  console.log(words, 'here');
  const p = document.createElement('p')

  p.textContent = words.word

  wordContainer.append(p)
})
