/* eslint-disable no-return-assign */
import info, { input, keyBoard, closeBtn, infoBtn } from './elements.js'
import ge from './ge.js'
import en from './en.js'

let isCapsOn = false
let isLayoutChangeAsked = false
let chosenLang = 'en'
let isShiftClicked = false

infoBtn.addEventListener('click', () => info.style.display = 'flex')
closeBtn.addEventListener('click', () => info.style.display = 'none')

en.forEach((e) => {
  const k = document.createElement('button')
  k.className = 'key'
  k.innerHTML = e.key
  keyBoard.appendChild(k)
})

const keysArr = document.getElementsByClassName('key')

const displayLowerCaseLetters = () => {
  for (const key of keysArr) {
    if (chosenLang === 'en' && key.innerHTML.length === 1) {
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

const fooForSpacebar = () => input.innerHTML += ' '
const fooForTab = () => input.innerHTML += '   '
const fooForEnter = () => input.innerHTML += '\n'

const fooForShiftMouseDown = () => {
  if (chosenLang === 'ge') {
    displaySymbols(ge)
  } else {
    displaySymbols(en)
  }
}

const fooForShiftMouseUp = () => {
  if (chosenLang === 'ge') {
    setLayoutLang(ge)
  } else {
    setLayoutLang(en)
  }
}

const fooForSuper = () => {
  isLayoutChangeAsked = !isLayoutChangeAsked
  if (isLayoutChangeAsked) {
    setLayoutLang(ge)
    chosenLang = 'ge'
  } else {
    setLayoutLang(en)
    chosenLang = 'en'
  }
}

const fooForCaps = () => {
  isCapsOn = !isCapsOn
  if (isCapsOn === true) {
    keysArr[28].style.backgroundColor = 'green'
    displayUpperCaseLetters()
  } else {
    keysArr[28].style.backgroundColor = '#1C232E'
    displayLowerCaseLetters()
  }
}

const fooForBackspace = () => {
  if (input.innerHTML !== undefined) {
    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1)
  }
}

const onActive = (el) => {
  el.style.backgroundColor = 'darkgray'
  el.style.color = 'black'
  setTimeout(defColors, 150)
}

const defColors = () => {
  en.forEach((el) => {
    const e = en.indexOf(el)
    if (el.shift !== null || el.key === '') {
      keysArr[e].style.backgroundColor = '#3A424E'
      keysArr[e].style.color = 'white'
    } else {
      keysArr[e].style.color = 'darkgray'
      keysArr[e].style.backgroundColor = '#1C232E'
    }
  })
}

keysArr[58].addEventListener('click', fooForSpacebar)
keysArr[14].addEventListener('click', fooForTab)
keysArr[41].addEventListener('click', fooForEnter)
keysArr[42].addEventListener('mousedown', fooForShiftMouseDown) // L-Shift
keysArr[42].addEventListener('mouseup', fooForShiftMouseUp)
keysArr[54].addEventListener('mousedown', fooForShiftMouseDown) // R-Shift
keysArr[54].addEventListener('mouseup', fooForShiftMouseUp)
keysArr[56].addEventListener('click', fooForSuper)
keysArr[28].addEventListener('click', fooForCaps)
keysArr[13].addEventListener('click', fooForBackspace)

// Display chars
for (const key of keysArr) {
  key.addEventListener('click', () => {
    onActive(key)
    if (key.innerHTML.length === 1) {
      input.innerHTML += key.innerHTML
    }
  })
}

document.onkeydown = function (e) {
  const eObj = window.event ? event : e
  en.forEach((e) => {
    const index = en.indexOf(e)
    const el = keysArr[index]
    if (eObj.keyCode === e.keyCode) {
      onActive(keysArr[index])
      if (eObj.keyCode === 20) {
        fooForCaps()
      }
      if (eObj.keyCode === 13) {
        fooForEnter()
      }
      if (eObj.keyCode === 91) {
        fooForSuper()
      }
      if (eObj.keyCode === 32) {
        fooForSpacebar()
      }
      if (eObj.keyCode === 9) {
        fooForTab()
      }
      if (eObj.keyCode === 8) {
        fooForBackspace()
      }
      if (eObj.keyCode === 16) {
        if (isShiftClicked) {
          fooForShiftMouseUp()
          isShiftClicked = !isShiftClicked
        } else {
          fooForShiftMouseDown()
          isShiftClicked = !isShiftClicked
        }
      }
      // for another keys
      if (el.innerHTML.length === 1) {
        input.innerHTML += el.innerHTML
      }
    }
  })
  if (eObj.altKey && eObj.ctrlKey) {
    onActive(keysArr[55])
    onActive(keysArr[57])
    isLayoutChangeAsked = !isLayoutChangeAsked
    if (isLayoutChangeAsked) {
      setLayoutLang(ge)
      chosenLang = 'ge'
    } else {
      setLayoutLang(en)
      chosenLang = 'en'
    }
  }
}
