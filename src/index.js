const cardNameInput = document.querySelector('#card-name-input');
const cardNumberInput = document.querySelector('#card-number-input');
const cardNameOutput = document.querySelector('#card-name-output');
const cardNumberOutput = document.querySelector('#card-number-output');

const cardDetails = document.querySelector('#card-details');
const cardFinal = document.querySelector('#card-final');
const result = document.querySelector('#result');

const btnValidate = document.querySelector('#btn-validate');
const btnAgain = document.querySelector('#btn-again');
//4083952015263


const showInfoCard = (elem) => (e) => {
  elem.textContent = e.target.value;
}

cardNameInput.addEventListener('input', showInfoCard(cardNameOutput));
cardNumberInput.addEventListener('input', showInfoCard(cardNumberOutput));

btnValidate.addEventListener('click', () => {
  result.innerHTML = `
    <div class="text-center p-30">
      <i class="size-icon far ${validation.valid(cardNumberInput.value) === true ? 'fa-check-circle valid-text' : 'fa-times-circle invalid-text'}"></i>
      <p class="font-barlow-sc size-text-val mt-30 ${validation.valid(cardNumberInput.value) === true ? 'valid-text">Tarjeta válida' : 'invalid-text">Tarjeta inválida'}</p>
    </div>
  `
  cardDetails.classList.add('d-none');
  cardFinal.classList.remove('d-none');
  
});

btnAgain.addEventListener('click', () => {
  cardDetails.classList.remove('d-none');
  cardFinal.classList.add('d-none');
})




