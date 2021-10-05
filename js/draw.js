(function () {
  
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
})()
