const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // Check if dividend or divider is empty
  if (!dividend || !divider) {
    result.innerText = "No calculation performed";
    return; // Exit the function early
  }
  
  result.innerText = dividend / divider;
});