/* eslint-disable no-return-assign */
import {input,keyBoard} from './elements.js';
import ge from './ge.js'
import en from './en.js'

let isCapsOn = false
let isChangeLayoutAsked= false
let chosenLang = 'en'

en.forEach((e) =>{
  const k = document.createElement('button')
  k.className = 'key'
  k.innerHTML = e.key
  keyBoard.appendChild(k)
})

const keysArr = document.getElementsByClassName('key')

const displayLowerCaseLetters = () => {
  for (const key of keysArr) {
    if (chosenLang === 'en') {
      key.innerHTML = key.innerHTML.toLowerCase()
    }
  }
}
const displayUpperCaseLetters = () => {
  for (const key of keysArr) {
    if (key.innerHTML.length === 1) {
      if (chosenLang === 'en') {
        key.innerHTML = key.innerHTML.toUpperCase()
      }
    }
  }
}

const setLayoutLang = (lang) => {
  for (let k = 0; k < keysArr.length; k++) {
    if (keysArr[k].innerHTML.length > !1) {
      keysArr[k].innerHTML = lang[k].key
    }
  }
}

const displaySymbols = (lang) => {
  for (let k = 0; k < keysArr.length; k++) {
    if (keysArr[k].innerHTML.length === 1) {
      if (lang[k].shift !== null) { 
        keysArr[k].innerHTML = lang[k].shift 
      }
    }
  }
}

const onActive = (el) =>{
  el.style.backgroundColor = 'darkgray';
  el.style.color = 'black';
  setTimeout(defColors,200);
}

const defColors = () =>{
  en.forEach((el)=> {
    const e = en.indexOf(el);
    if(el.shift !== null || el.key === ''){
      keysArr[e].style.backgroundColor = '#3A424E';
      keysArr[e].style.color = 'white';
    } else {
      keysArr[e].style.backgroundColor = '#1C232E';
      keysArr[e].style.color = 'darkgray';
    }
  })
}

//  Spacebar
keysArr[58].addEventListener('click', () => input.innerHTML += ' ')

// Tab
keysArr[14].addEventListener('click', () => input.innerHTML += '   ')

// Enter
keysArr[41].addEventListener('click', () => input.innerHTML += '\n')

// L-Shift
keysArr[42].addEventListener('mousedown', () => {
    if (chosenLang === 'ge') {
        displaySymbols(ge)
    } else {
        displaySymbols(en)
    }
})
keysArr[42].addEventListener('mouseup', () => {
    if (chosenLang === 'ge') {
        setLayoutLang(ge)
    } else {
        setLayoutLang(en)
    }
})

// R-Shift
keysArr[54].addEventListener('mousedown', () => {
    if (chosenLang === 'ge') {
        displaySymbols(ge)
    } else if (chosenLang === 'en') {
        displaySymbols(en)
    }
})
keysArr[54].addEventListener('mouseup', () => {
    if (chosenLang === 'ge') {
        setLayoutLang(ge)
    } else if (chosenLang === 'en') {
        setLayoutLang(en)
    }
})

// Super
keysArr[56].addEventListener('click', () => {
    isChangeLayoutAsked = !isChangeLayoutAsked
    if (isChangeLayoutAsked) {
        setLayoutLang(ge)
        chosenLang = 'ge'
    } else {
        setLayoutLang(en)
        chosenLang = 'en'
    }
})

//  Capslock
keysArr[28].addEventListener('click', () => {
    isCapsOn = !isCapsOn
    if (isCapsOn === true) {
        keysArr[28].style.backgroundColor = 'green'
        displayUpperCaseLetters()
    } else {
        keysArr[28].style.backgroundColor = '#1C232E'
        displayLowerCaseLetters()
    }
})
// Backspace
keysArr[13].addEventListener('click', () => {
    if (input.innerHTML !== undefined) {
        input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1)
    }
})

// Display chars
for (const key of keysArr) {
    if (key.innerHTML.length === 1) {
        key.addEventListener('click', () => input.innerHTML += key.innerHTML)
    }
}

document.onkeydown = function(e){ 
  var eObj = window.event? event : e
  if(eObj.altKey && eObj.ctrlKey){
    onActive(keysArr[55]);
    onActive(keysArr[57]);
    isChangeLayoutAsked= !isChangeLayoutAsked
    if (isChangeLayoutAsked) {
      setLayoutLang(ge)
      chosenLang = 'ge'
    } else {
      setLayoutLang(en)
      chosenLang = 'en'
    }
  }
}
