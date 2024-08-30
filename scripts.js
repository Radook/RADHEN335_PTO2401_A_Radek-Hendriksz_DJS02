const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Set initial message
result.innerText = "No calculation performed"; // {{ edit_1 }}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // Check if dividend or divider is empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again."; // {{ edit_1 }}
    return; // Exit the function early
  }
  
  // Check if divider is zero
  if (divider === "0") {
    console.error(new Error("Division by zero")); // {{ edit_1 }}
    result.innerText = "Division not performed. Invalid number provided. Try again."; // {{ edit_2 }}
    return; // Exit the function early
  }
  
  const dividendNum = parseFloat(dividend); // {{ edit_1 }}
  const dividerNum = parseFloat(divider); // {{ edit_2 }}

  // Check if inputs are not numbers
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    console.error(new Error("Invalid input: not a number")); // {{ edit_3 }}
    document.body.innerText = "Something critical went wrong. Please reload the page"; // {{ edit_4 }}
    return; // Exit the function early
  }
  
  result.innerText = Math.floor(dividend / divider); // {{ floor }}
});

