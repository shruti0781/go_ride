function handleContinue() {
  const fromLocation = document.querySelector('input[placeholder="Enter departure city"]').value;
  const toLocation = document.querySelector('input[placeholder="Enter destination city"]').value;

  // Save in localStorage
  localStorage.setItem('fromLocation', fromLocation);
  localStorage.setItem('toLocation', toLocation);

  window.location.href = "buses.html";
  return false;
}

