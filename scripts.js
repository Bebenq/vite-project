const toggleButton = document.querySelector(".toggle");
const rulesList = document.querySelector(".rules-list");

toggleButton.addEventListener("click", () => {
  rulesList.classList.toggle("hidden");
});
