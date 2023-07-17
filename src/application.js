/* eslint-disable no-param-reassign */
// @ts-check

// BEGIN (write your solution here)
function setFocus(el) {
  el.focus();
}

function render(state, formEl, inputEl, resultEl) {
  resultEl.textContent = state;
  formEl.reset();
  setFocus(inputEl);
}

export default function () {
  let state = 0;
  
  const formEl = document.querySelector('.form-inline');
  const resetBtn = document.querySelector('.form-inline > button[type="reset"]');
  const inputEl = document.querySelector('.form-inline > input[type="number"]');
  const resultEl = document.getElementById('result');
  
  setFocus(inputEl);
  
  function handlePlus (e) {
    e.preventDefault();
    const formElement = e.target;
    const formData = new FormData(formElement);
    const submittedInputValue = formData.get('number');
    const numToSum = submittedInputValue ? Number.parseInt(submittedInputValue, 10) : 0;
    state += numToSum;
    render(state, formEl, inputEl, resultEl);
  }
  
  function handleReset(e) {
    state = 0;
    render(state, formEl, inputEl, resultEl);
  }
  
  formEl.addEventListener('submit', handlePlus);
  
  resetBtn.addEventListener('click', handleReset);
}
// END
