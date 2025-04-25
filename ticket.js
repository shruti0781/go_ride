function updateTicket() {
  const fromCity = document.getElementById("fromCity").value.trim().toUpperCase();
  const toCity = document.getElementById("toCity").value.trim().toUpperCase();

  if (fromCity && toCity) {
    document.querySelector(".ticket").style.display = "flex"; // 👈 Show ticket

    document.querySelectorAll(".location")[0].innerText = fromCity;
    document.querySelectorAll(".location")[1].innerText = toCity;
    document.querySelector(".boarding-info p").innerText = "Boarding: " + fromCity + " BUS STAND";

    const ticket = document.getElementById("ticket");

    // Optional: Background change by city
    switch (fromCity) {
      case "DELHI":
        ticket.style.background = "linear-gradient(to right, #ff9a9e, #fad0c4)";
        break;
      case "CHANDIGARH":
        ticket.style.background = "linear-gradient(to right, #a18cd1, #fbc2eb)";
        break;
      case "MUMBAI":
        ticket.style.background = "linear-gradient(to right, #fbc2eb, #a6c1ee)";
        break;
      case "SHIMLA":
        ticket.style.background = "linear-gradient(to right, #b2fefa, #0ed2f7)";
        break;
      default:
        ticket.style.background = "#fff";
    }
  } else {
    alert("Please enter both cities to generate your ticket.");
  }
}
