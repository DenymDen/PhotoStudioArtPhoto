const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const squareInput2 = document.querySelector('#square-input2');
const squareRange2 = document.querySelector('#square-range2');
const inputs = document.querySelectorAll('input')


const radioRooms = document.querySelectorAll('input[name="rooms"]');
const ceilings = document.querySelector('input[name="ceiling"]');

const basePrice = 3000;
const totalPriseElement = document.querySelector('#total-price')

squareRange.addEventListener('input', function () {
   squareInput.value = squareRange.value;
})

squareInput.addEventListener('input', function () {
   squareRange.value = squareInput.value;
})

squareRange2.addEventListener('input', function () {
   squareInput2.value = squareRange2.value;
})

squareInput2.addEventListener('input', function () {
   squareRange2.value = squareInput2.value;
})

function calculate() {
   let totalPrise = basePrice + (1000 * parseInt(squareRange.value)) + (20 * parseInt(squareRange2.value));
   const formatter = new Intl.NumberFormat('ru')

   for (const radio of radioRooms) {
      if (radio.checked) {
         totalPrise = totalPrise + (parseInt(radio.value) * 1000);
      }
   }

   if (ceilings.checked) {
      totalPrise = totalPrise + 1000 + (parseInt(ceilings.value) * parseInt(squareRange2.value));
   }

   totalPriseElement.innerText = formatter.format(totalPrise);
}

calculate();

for (const input of inputs) {
   input.addEventListener('input', function () {
      calculate();
   })
}