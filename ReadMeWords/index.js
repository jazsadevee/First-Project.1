// import data from './data.json'
// const data = require('./data.json');
import data from "./data.json" assert { type: "json" };

const wordContainer = document.querySelector('#wordInput')
const defContainer = document.querySelector('#def')

let randomNumber = Math.floor(Math.random() * 2240) + 1;
let string = data[randomNumber]
console.log(randomNumber);
console.log(data[randomNumber]);
console.log(string);

function randomNum() {
  let num = Math.floor(Math.random() * 2240) + 1;
  console.log(num)
  randomNumber = num
  string = data[randomNumber]
  return randomNumber
}

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
  randomNum()
  let term = await fetchData()
  console.log(term, 'here');

  let wordHolder = document.createElement('p')
  // wordContainer.append(wordHolder)

  let definitionHolder = document.createElement('p')

  wordHolder.textContent = term.word
  definitionHolder.textContent = term.meanings[0].definitions[0].definition

  wordContainer.append(wordHolder)
  defContainer.append(definitionHolder)
  // console.log(definitionHolder.textContent);
})
console.log(wordContainer);
