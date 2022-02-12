const body = document.querySelector('body')
document.body.style.background = "#000048"
body.style.fontSize = "32px"
body.style.fontFamily = "Lato"
body.style.fontWeight = "300"
body.style.color = "snow"
body.style.margin = "0"
body.style.maxHeight = "100vh"


const divColumn = document.createElement('div')
console.log("divColumn:", divColumn)

divColumn.style.display = "flex"
divColumn.style.justifyContent = "center"
divColumn.style.alignItems = "center"
divColumn.style.minWidth = "60vw"
divColumn.style.maxWidth = "60vw"
divColumn.style.minHeight = "100vh"
divColumn.style.maxHeight = "100vh"
divColumn.style.marginLeft = "auto"
divColumn.style.marginRight = "10%"
// divColumn.style.background = "blue"
console.log("divColumn:", divColumn)


const divLog = document.createElement('div')
console.log("divLog:", divLog)

divLog.style.minWidth = "60vw"
divLog.style.maxWidth = "60vw"
divLog.style.minHeight = "60vh"
divLog.style.maxHeight = "60vh"
divLog.style.padding = "2%"
divLog.style.border = "2px solid cadetblue"
divLog.style.borderRadius = "12px"
divLog.style.overflow = "hidden"
console.log('divLog:', divLog)


const pShort = document.createElement('div')
console.log("pShort:", pShort)
pShort.style.padding = "2% 5% 2% 5%"
pShort.style.borderBottom = "1.2px solid cadetblue"
// pShort.style.background = "#00550050"
pShort.innerText = 'event.type'
console.log("pShort:", pShort)

const pLongText = document.createElement('div')
console.log("pLongText:", pLongText)
pLongText.style.padding = "2% 5% 2% 5%"
pLongText.style.maxHeight = "90%"
pLongText.style.overflowY = "hidden"
// pLongText.style.background = "#00550050"
pLongText.innerText  = 'event.type.log'
console.log("pLongText:", pLongText)


document.body.appendChild(divColumn)
divColumn.appendChild(divLog)
divLog.appendChild(pShort)
divLog.appendChild(pLongText)

function getEventType(event) {
  // const log = document.getElementById('log');
  // const log = divLog
  // divLog.innerText = event.type + '\n' + divLog.innerText;
  pShort.innerText = event.type
  pLongText.innerText = event.type + ', ' + pLongText.innerText
}

// Keyboard events
document.addEventListener('keydown', getEventType, false)
document.addEventListener('keypress', getEventType, false)
document.addEventListener('keyup', getEventType, false)

// Mouse events
document.addEventListener('mousedown', getEventType, false)
document.addEventListener('mousemove', getEventType, false)
document.addEventListener('mouseup', getEventType, false)
document.addEventListener('click', getEventType, false)

// Touch events
document.addEventListener('touchstart', getEventType, false)
document.addEventListener('touchmove', getEventType, false)
document.addEventListener('touchend', getEventType, false)

