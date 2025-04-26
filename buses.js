function handleContinue() {
  const fromInput = document.querySelector('input[placeholder="Enter departure city"]').value;
  const toInput = document.querySelector('input[placeholder="Enter destination city"]').value;

  // Save to localStorage
  localStorage.setItem('fromCity', fromInput);
  localStorage.setItem('toCity', toInput);

  // Redirect to available buses page
  window.location.href = 'availablebuses.html'; // Correct your file name
  return false; // prevent form submission default
}
