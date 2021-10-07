/* eslint-disable no-return-assign */
import ge from './ge.js'
import en from './en.js'

const input = document.createElement('textarea')
input.className = 'textarea'
document.body.appendChild(input)

let isCapsOn = false
let isWinClicked = false
let chosenLang = 'en'

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'DEL',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

const keyBoard = document.createElement('div')
keyBoard.className = 'keyboard'
document.body.appendChild(keyBoard)

keys.forEach((e) => {
  const k = document.createElement('button')
  k.className = 'key'
  k.innerHTML = en[keys.indexOf(e)].key
  keyBoard.appendChild(k)
})

const keysArr = document.getElementsByClassName('key')

const setLowerCaseKeys = () => {
  for (const key of keysArr) {
    if (chosenLang === 'en') {
      key.innerHTML = key.innerHTML.toLowerCase()
    }
  }
}
const setUpperCaseKeys = () => {
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

const setUpperLetters = (lang) => {
  for (let k = 0; k < keysArr.length; k++) {
    if (keysArr[k].innerHTML.length === 1) {
      if (lang[k].shift !== null) { 
        keysArr[k].innerHTML = lang[k].shift
      }
    }
  }
}
//  Spacebar
keysArr[58].addEventListener('click', () => {
  input.innerHTML += ' '
})

// Tab
keysArr[14].addEventListener('click', () => {
  input.innerHTML += '   '
})

// Enter
keysArr[41].addEventListener('click', () => {
  input.innerHTML += '\n'
})

// L-Shift
keysArr[42].addEventListener('mousedown', () => {
  if (chosenLang === 'ge') {
    setUpperLetters(ge)
  } else {
    setUpperLetters(en)
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
    setUpperLetters(ge)
  } else if (chosenLang === 'en') {
    setUpperLetters(en)
  }
})
keysArr[54].addEventListener('mouseup', () => {
  if (chosenLang === 'ge') {
    setLayoutLang(ge)
  } else if (chosenLang === 'en') {
    setLayoutLang(en)
  }
})

// Win
keysArr[56].addEventListener('click', () => {
  isWinClicked = !isWinClicked
  if (isWinClicked) {
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
    setUpperCaseKeys()
  } else {
    keysArr[28].style.backgroundColor = '#1C232E'
    setLowerCaseKeys()
  }
})
// Backspace
keysArr[13].addEventListener('click', () => {
  if (input.innerHTML !== undefined) {
    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1)
  }
})

// Display text
for (const key of keysArr) {
  if (key.innerHTML.length === 1) {
    key.addEventListener('click', () => input.innerHTML += key.innerHTML)
  }
}
