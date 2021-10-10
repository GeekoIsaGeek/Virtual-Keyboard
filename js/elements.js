const input = document.createElement('textarea')
input.className = 'textarea'
document.body.appendChild(input)

const keyBoard = document.createElement('div')
keyBoard.className = 'keyboard'
document.body.appendChild(keyBoard)

const h2 = document.createElement('h2');
h2.className = "h2";
h2.innerText = "• Click Super key to change the keyboard layout";

const h3 = document.createElement('h3');
h3.className = "h3";
h3.innerText = "• Click Shift key and move out the cursor without taking your hand off the mouse button to type symbols and special chars";

const help = document.createElement('div');
help.className = 'help';
help.appendChild(h2);
help.appendChild(h3);
document.body.appendChild(help);

help.innerHTML += "Designed By GeorgeKVR" 

const helpBtn = document.createElement('button');
helpBtn.className = "help-button";
helpBtn.innerText = 'Need Help?';
document.body.appendChild(helpBtn);

const closeBtn = document.createElement('button');
closeBtn.className = 'close-button';
closeBtn.innerText = '✕';
help.appendChild(closeBtn);

export {input,keyBoard,helpBtn,closeBtn}
export default help 