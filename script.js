document.addEventListener("DOMContentLoaded", function () {
  const authCard = document.getElementById("authCard");
  const toggleBtns = document.querySelectorAll(".toggle-btn");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      authCard.classList.toggle("flipped");
    });
  });
})
