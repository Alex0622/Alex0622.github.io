document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelector(".search-btn").addEventListener("click", () => {
    document.querySelector(".msg-menu").classList.toggle("show");
});

const charAmountRange = document.getElementById('charAmountRange')
const charAmountNumber = document.getElementById('charAmountNumber')
const form = document.getElementById('idForm')
const idDisplay = document.getElementById('idDisplay')


const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)

charAmountNumber.addEventListener('input', syncCharacterAmount)
charAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = charAmountNumber.value
  const id = generateID(characterAmount)
  idDisplay.innerText = id
})

function generateID(characterAmount) {
  let charCodes = NUMBER_CHAR_CODES
  const idCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    idCharacters.push(String.fromCharCode(characterCode))
  }
  return idCharacters.join('')
}
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  charAmountNumber.value = value
  charAmountRange.value = value
}

ScrollReveal().reveal('.warning-banner');
ScrollReveal().reveal('.container1', { delay: 500 });