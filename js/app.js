/* eslint-disable no-return-assign */
const input = document.createElement('textarea')
input.className = 'textarea'
document.body.appendChild(input)

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'DEL',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\',', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

const keyBoard = document.createElement('div')
keyBoard.className = 'keyboard'
document.body.appendChild(keyBoard)

keys.forEach((e) => {
  const key = document.createElement('button')
  key.className = 'key'
  key.innerHTML = e
  keyBoard.appendChild(key)
})

const keysArr = document.getElementsByClassName('key')
let isCapsOn = false

const setLowerCaseKeys = () => {
  for (const key of keysArr) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toLowerCase()
    }
  }
}
const setUpperCaseKeys = () => {
  for (const key of keysArr) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toUpperCase()
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
  setUpperCaseKeys()
})
keysArr[42].addEventListener('mouseup', () => {
  setLowerCaseKeys()
})

// R-Shift
keysArr[54].addEventListener('mousedown', () => {
  setUpperCaseKeys()
})
keysArr[54].addEventListener('mouseup', () => {
  setLowerCaseKeys()
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
    // let pos = input.selectionStart-1;
    // let text = input.innerHTML;
    // text = text.substr(0, pos) + '' + text.substr(pos + 1);
    // input.innerHTML = text;
  }
})

// Display Text
for (const key of keysArr) {
  if (key.innerHTML.length === 1) {
    key.addEventListener('click', () => input.innerHTML += key.innerHTML)
  }
}
