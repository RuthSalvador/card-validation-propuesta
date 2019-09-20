const cardNameInput = document.querySelector('#card-name-input').value;
const cardNumberInput = document.querySelector('#card-number-input').value;
const cardNameOutput = document.querySelector('#card-name-output');
const cardNumberOutput = document.querySelector('#card-number-output');

const cardDetails = document.querySelector('#card-details');
const cardFinal = document.querySelector('#card-final');
const result = document.querySelector('#result');

const btnValidate = document.querySelector('#btn-validate');
const btnAgain = document.querySelector('#btn-again');

btnValidate.addEventListener('click', () => {
  cardDetails.classList.add('d-none');
  cardFinal.classList.remove('d-none');
  // result.innerHTML = validation.valid(cardNumberInput);
  result.innerHTML = `
    <div class="text-center p-30">
      <i class="size-icon far ${validation.valid(cardNumberInput) === true ? 'fa-check-circle valid-text' : 'fa-times-circle invalid-text'}"></i>
      <p class="font-barlow-sc size-text-val mt-30 ${validation.valid(cardNumberInput) === true ? 'valid-text">Tarjeta válida' : 'invalid-text">Tarjeta inválida'}</p>
    </div>
  `
});

btnAgain.addEventListener('click', () => {
  cardDetails.classList.remove('d-none');
  cardFinal.classList.add('d-none');
})




