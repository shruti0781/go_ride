function handleContinue() {
  const fromLocation = document.querySelector('input[placeholder="Enter departure city"]').value;
  const toLocation = document.querySelector('input[placeholder="Enter destination city"]').value;
  const travelDateRaw = document.querySelector('input[type="date"]').value;

  // Format the date to DD-MM-YYYY
  const dateParts = travelDateRaw.split("-");
  const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

  // Save user inputs into localStorage
  localStorage.setItem('fromLocation', fromLocation);
  localStorage.setItem('toLocation', toLocation);
  localStorage.setItem('travelDate', formattedDate);

  // Redirect to available buses page
  window.location.href = "buses.html";
  
  return false; // Prevent form from actually submitting
}
