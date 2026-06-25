function calculateInterest() {
  let principal = parseFloat(document.getElementById("principal").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let time = parseFloat(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
    alert("Please enter valid positive values in all fields.");
    return;
  }

  let simpleInterest = (principal * rate * time) / 100;
  let totalAmount = principal + simpleInterest;

  document.getElementById("si").textContent = simpleInterest.toFixed(2);
  document.getElementById("amount").textContent = totalAmount.toFixed(2);
}