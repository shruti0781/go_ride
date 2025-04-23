const buses = [
    {
      operator: "CTU",
      type: "(ROADWAYS)",
      time: "20:30hr",
      route: "CHANDIGARH - DELHI",
      seats: 1,
      price: 1000,
      img: "https://i.pinimg.com/736x/7e/f2/4d/7ef24db3928b30fd17586d85d5c1e912.jpg"
    },
    {
      operator: "PRTC",
      type: "(Express Shuttle)",
      time: "18:00hr",
      route: "CHANDIGARH - LUDHIANA",
      seats: 5,
      price: 400,
      img: "https://i.pinimg.com/736x/7e/f2/4d/7ef24db3928b30fd17586d85d5c1e912.jpg"
    },
    {
      operator: "HRTC",
      type: "(Highway Coach)",
      time: "22:00hr",
      route: "SHIMLA - SOLAN",
      seats: 12,
      price: 550,
      img: "https://i.pinimg.com/736x/7e/f2/4d/7ef24db3928b30fd17586d85d5c1e912.jpg"
    }
  ];
  
  const container = document.getElementById("busCardsContainer");
  
  buses.forEach(bus => {
    const card = document.createElement("div");
    card.className = "bus-card";
  
    card.innerHTML = `
      <div class="bus-logo">
        <img src="${bus.img}" alt="Bus Logo">
      </div>
      <div class="bus-details">
        <h2>${bus.operator} <span>${bus.type}</span></h2>
        <div class="info-grid">
          <div><strong>🕓</strong> ${bus.time}</div>
          <div><strong>🛣️</strong> ${bus.route}</div>
          <div><strong>🪑</strong> <span class="green">${bus.seats} seats left</span></div>
          <div><strong>💵</strong> <span class="green">${bus.price}</span></div>
        </div>
        <div class="actions">
          <button class="book-btn" ${bus.seats === 0 ? "disabled" : ""}>Book Seats</button>
          <a href="#" class="view-gallery">View Gallery</a>
        </div>
      </div>
    `;
  
    container.appendChild(card);
  });
  
