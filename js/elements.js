const input = document.createElement('textarea')
input.className = 'textarea'
document.body.appendChild(input)

const keyBoard = document.createElement('div')
keyBoard.className = 'keyboard'
document.body.appendChild(keyBoard)

const info = document.createElement('div')
info.className = 'info'
document.body.appendChild(info)

const mainNote = document.createElement('h2')
mainNote.className = 'mainNote'
mainNote.innerText = 'This keyboard is created on GNU/Linux OS'
info.appendChild(mainNote)

const note1 = document.createElement('h2')
note1.className = 'note1'
note1.innerText = '• Click Super key or use Ctrl + Alt combination on a physical keyboard to change the keyboard layout'
info.appendChild(note1)

const note2 = document.createElement('h2')
note2.className = 'note2'
note2.innerText = '• Click Shift key and move out the cursor without taking your hand off the mouse button to type symbols and special chars'
info.appendChild(note2)

const note3 = document.createElement('h2')
note3.className = 'note2'
note3.innerText = '• Click Del key to clear textarea'
info.appendChild(note3)

const infoBtn = document.createElement('button')
infoBtn.className = 'info-button'
infoBtn.innerText = 'About Keyboard'
document.body.appendChild(infoBtn)

const closeBtn = document.createElement('button')
closeBtn.className = 'close-button'
closeBtn.innerText = 'Close'
info.appendChild(closeBtn)

export { input, keyBoard, infoBtn, closeBtn }
export default info
