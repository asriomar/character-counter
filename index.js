const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}

// CHANGE TO THIS CODE IF YOU WANT WORD COUNTER

// const textareaEl = document.getElementById("textarea");
// const totalCounterEl = document.getElementById("total-counter");
// const remainingCounterEl = document.getElementById("remaining-counter");

// textareaEl.addEventListener("keyup", () => {
//   updateCounter();
// });

// updateCounter();

// function updateCounter() {
//   const wordsArray = textareaEl.value.trim().split(/\s+/); // Split by spaces and remove empty entries
//   const totalWords = wordsArray.filter(word => word.length > 0).length; // Count valid words
//   totalCounterEl.innerText = totalWords;
//   const maxWords = 50;
//   remainingCounterEl.innerText = maxWords - totalWords;
// }

