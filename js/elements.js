export const input = document.createElement('textarea')
input.className = 'textarea'
document.body.appendChild(input)

export const keyBoard = document.createElement('div')
keyBoard.className = 'keyboard'
document.body.appendChild(keyBoard)

const note1 = document.createElement('h2')
note1.className = 'note1'
note1.innerText = '• Click Super key or use Ctrl + Alt combination on physical keyboard(ikr) to change the keyboard layout'
document.body.appendChild(note1)

const note2 = document.createElement('h2')
note2.className = 'note2'
note2.innerText = '• Click Shift key and move out the cursor without taking your hand off the mouse button to type symbols and special chars'
document.body.appendChild(note2)
