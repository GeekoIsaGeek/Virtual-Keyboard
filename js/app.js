const input = document.createElement('textarea')
input.className = 'textarea'
document.body.appendChild(input)

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'DEL',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\',', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift',
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

//  Spacebar
keysArr[58].addEventListener('click', function () {
  input.innerHTML += ' '
})

// Tab
keysArr[14].addEventListener('click', function () {
  input.innerHTML += '   '
})

// Enter
keysArr[41].addEventListener('click', function () {
  input.innerHTML += '\n'
})

//  Capslock
keysArr[28].addEventListener('click', function () {
  isCapsOn = !isCapsOn
  if (isCapsOn === true) {
    keysArr[28].style.backgroundColor = 'green'
  } else {
    keysArr[28].style.backgroundColor = '#1C232E'
  }
})

//Backspace
keysArr[13].addEventListener('click',function(){
    if(input.innerHTML !== undefined){
        input.innerHTML = input.innerHTML.slice(0,input.innerHTML.length-1);
        // let pos = input.selectionStart-1;
        // let text = input.innerHTML;
        // text = text.substr(0, pos) + '' + text.substr(pos + 1);
        // input.innerHTML = text;
    }
})

// Display Text
for (const key of keysArr) {
  if (key.innerHTML.length === 1) {
    key.addEventListener('click', function () {
      if (isCapsOn === true) {
        input.innerHTML += key.innerHTML.toUpperCase()
      } else {
        input.innerHTML += key.innerHTML.toLowerCase()
      }
    })
  }
}

