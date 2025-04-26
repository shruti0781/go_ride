// Read from localStorage
const fromCity = localStorage.getItem('fromCity');
const toCity = localStorage.getItem('toCity');

// Update all routes dynamically
const routeElements = document.querySelectorAll('.bus-card p:nth-of-type(2)'); // second <p> inside each bus card

routeElements.forEach(route => {
  if (fromCity && toCity) {
    route.innerHTML = `<strong>Route:</strong> ${fromCity} - ${toCity}`;
  }
});
