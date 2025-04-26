document.addEventListener("DOMContentLoaded", () => {
  const from = localStorage.getItem('fromLocation') || 'Unknown';
  const to = localStorage.getItem('toLocation') || 'Unknown';
  const travelDate = localStorage.getItem('travelDate') || 'Date Not Selected';

  const busCards = document.querySelectorAll('.bus-card');

  busCards.forEach((card, index) => {
    // Update Route
    const routePara = card.querySelector('p:nth-of-type(2)');
    if (routePara) {
      routePara.innerHTML = `<strong>Route:</strong> ${from} ➔ ${to}`;
    }

    // Update Time
    const timePara = card.querySelector('p:nth-of-type(1)');
    const exampleTimes = ["08:30", "12:00", "16:00", "19:30", "22:00"];
    if (timePara) {
      timePara.innerHTML = `<strong>Time:</strong> ${exampleTimes[index % exampleTimes.length]} hr`;
    }

    // Check if card already has a Date paragraph
    let datePara = card.querySelector('p strong')?.innerText.includes('Date') 
      ? card.querySelector('p') 
      : null;

    if (!datePara) {
      // If no date, create a new date paragraph at top
      const newDatePara = document.createElement('p');
      newDatePara.innerHTML = `<strong>Date:</strong> ${travelDate}`;
      card.insertBefore(newDatePara, card.querySelector('p'));
    } else {
      // If date already exists, update it
      datePara.innerHTML = `<strong>Date:</strong> ${travelDate}`;
    }
  });
});
