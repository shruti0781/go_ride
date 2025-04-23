const seatMap = document.getElementById("seatMap");
const rows = 10;
const reservedSeats = [3, 6, 15, 18, 22, 25, 31, 36];
const selectedSeats = new Set();

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < 4; col++) {
    const seatNum = row * 4 + col;
    const seat = document.createElement("div");
    seat.classList.add("seat");

    seat.innerText = seatNum + 1;

    if (reservedSeats.includes(seatNum)) {
      seat.classList.add("reserved");
    } else {
      seat.classList.add("available");
      seat.addEventListener("click", () => {
        seat.classList.toggle("selected");
        seat.classList.toggle("available");

        if (selectedSeats.has(seatNum)) {
          selectedSeats.delete(seatNum);
        } else {
          selectedSeats.add(seatNum);
        }
      });
    }

    seatMap.appendChild(seat);
  }

  if (row === 4) {
    const aisle = document.createElement("div");
    aisle.className = "aisle";
    seatMap.appendChild(aisle);
  }
}

function confirmSeats() {
  if (selectedSeats.size > 0) {
    alert("You've selected seats: " + [...selectedSeats].map(n => n + 1).join(", "));
  } else {
    alert("Please select at least one seat.");
  }
}
