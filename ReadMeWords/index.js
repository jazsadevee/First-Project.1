// import data from './data.json'
// const data = require('./data.json');
import data from "./data.json" assert { type: "json" };

const wordContainer = document.querySelector('#wordInput')
const defContainer = document.querySelector('#def')
const exampleContainer = document.querySelector('#example')
const audioContainer = document.querySelector('#audio')

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

// add phonetics to click function 
// audio to button function 
// create "else" + condition to get word then add condition that checks if counter is greater than 0 if so refresh Count = 0 
// or add refresh button that clears the information from the button function 
const button = document.querySelector('#word')
button.addEventListener('click', async (e) => {
  randomNum()
  let term = await fetchData()
  console.log(term, 'here');
  
  // wordContainer.append(wordHolder)
  let wordHolder = document.createElement('p')
  let definitionHolder = document.createElement('p')
  let exampleHolder = document.createElement('p')
  let audioHolder = document.createElement('p')
  
  // main.innerHTML = ''
  
  wordHolder.textContent = term.word
  definitionHolder.textContent = term.meanings[0].definitions[0].definition
  exampleHolder.textContent = term.meanings[0].definitions[0].example
  audioHolder.textContent = term.phonetics[0].audio
  
  wordContainer.append(wordHolder)
  defContainer.append(definitionHolder)
  exampleContainer.append(exampleHolder)
  audioContainer.append(audioHolder)
  // console.log(definitionHolder.textContent);
})
console.log(wordContainer);
