const input = document.createElement('textarea')
input.className = 'textarea'
document.body.appendChild(input)

const keyBoard = document.createElement('div')
keyBoard.className = 'keyboard'
document.body.appendChild(keyBoard)

const note1 = document.createElement('h2')
note1.className = 'notes'
note1.innerText = '• Click Super key to change the keyboard layout'

const note2 = document.createElement('h2')
note2.className = 'notes'
note2.innerText = '• Click Del key to clear text area'

const note3 = document.createElement('h2')
note3.className = 'notes'
note3.innerText = '• Click Shift key and move out the cursor without taking your hand off the mouse button to type symbols and special chars'

const help = document.createElement('div')
help.className = 'help'
help.appendChild(note1)
help.appendChild(note3)
help.appendChild(note2)
document.body.appendChild(help)

const helpBtn = document.createElement('button')
helpBtn.className = 'help-button'
helpBtn.innerText = 'Need Help?'
document.body.appendChild(helpBtn)

const closeBtn = document.createElement('button')
closeBtn.className = 'close-button'
closeBtn.innerText = '✕'
help.appendChild(closeBtn)

export { input, keyBoard, helpBtn, closeBtn }
export default help
