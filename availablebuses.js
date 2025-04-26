document.addEventListener("DOMContentLoaded", () => {
    const from = localStorage.getItem('fromLocation');
    const to = localStorage.getItem('toLocation');
  
    if (from && to) {
      // Update all route elements
      document.querySelectorAll('.bus-card p:nth-of-type(2)').forEach(routePara => {
        routePara.innerHTML = `<strong>Route:</strong> ${from} ➔ ${to}`;
      });
    }
  });
  
