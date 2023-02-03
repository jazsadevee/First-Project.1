// import data from './data.json'
// const data = require('./data.json');
import data from "./data.json" assert { type: "json" };
import arr2 from "./arr2.json" assert { type: "json" };

const combined = [...data, ...arr2]


const wordContainer = document.querySelector('#wordInput')
const defContainer = document.querySelector('#def')
const exampleContainer = document.querySelector('#example')
const audioContainer = document.querySelector('#audio')


// arr1 words
let randomNumber = Math.floor(Math.random() * combined.length) + 1;
let string = data[randomNumber]
console.log(randomNumber);
console.log(data[randomNumber]);
console.log(string);

// arr2 words
// let arr2 = Math.floor(Math.random() * 309) + 1;
// let string2 = data[arr2]
// console.log(arr2);
// console.log(data[arr2]);
// console.log(string2);

// const newArr = randomNumber.concat(arr2);
// console.log(newArr);

// async function renderSelect() {
//   const  = 
// }

function randomNum() {
  let num = Math.floor(Math.random() * combined.length) + 1;
  console.log(num)
  randomNumber = num
  string = combined[randomNumber]
  return randomNumber
}

// Async fetch function
async function fetchData() {
  const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en"
  //   // Write code here.
  try {
    const res = await fetch(`${BASE_URL}/${string}`)
    const json = await res.json()
    console.log('fetch     ', combined);
    console.log(json);
    // mistakes(json[0].word);
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

// newAudio(URL)

// const url = audioContainer 

// let newSound = url('#sound')

// newSound.addEventListener("playSound", (event) => {
//   newSound.play();
//   (event.target.value)
// });
// console.log(newSound);



const button = document.querySelector('#word')
button.addEventListener('click', async (e) => {
  randomNum()
  let term = await fetchData()
  // (e.target.value)
  console.log(term, 'here');

  let wordHolder = document.querySelector('#wordHolder')
  let definitionHolder = document.querySelector('#definition')
  let exampleHolder = document.querySelector('#ex')
  let audioHolder = document.querySelector('#sound')


  // main.innerHTML = ''

  wordHolder.textContent = term.word
  definitionHolder.textContent = term.meanings[0].definitions[0].definition
  exampleHolder.textContent = term.meanings[0].definitions[0].example
  // audioHolder.textContent = term.phonetics[0].audio

  wordContainer.append(wordHolder)
  defContainer.append(definitionHolder)
  exampleContainer.append(exampleHolder)
  audioContainer.append(audioHolder)
  // console.log(definitionHolder.textContent);
})
console.log(wordContainer);

// const audioBtn = document.querySelector('#audio')
// button.addEventListener('click', async (e) => {
//   console.log("audio bttn");
//   (e.target.value)
//   let newAudio = await fetchData(url)
//   console.log(newAudio);
//   newAudio.play();
// });
// console.log(audioBtn);


//create a conditional operator, after choosing a word if the definition doesn't generate set a new condition telling the app if definition has nothing attached (0 strings) then choosen another word (loop over that array?)
// if audio doesn't have a sound leave a statement saying no sound 

// function readData(term) {
//   return (term != definition);
// }
// console.log(term(true));

function mistakes(term) {
  if (term == true) {
    return true
  } else {
    console.log("Press Again");
  } if (definition == true) {
    return true
  } else {
    console.log("No Definition at this time");
  }
  console.log(term);
  if (audioBtn == true) {
    return true
  } else {
    console.log("No Pronunciation");
  }

}