const bookedSeats = [];
function seatId(event) {
  if (bookedSeats.length < 4) {
    bookedSeats.push(event.target);
    selectSeat(event.target.id);
    const showSeat = document.getElementById("show-seat");
    const span = document.createElement("span");
    span.innerHTML = `
    <div class="text-base text-color6 font-medium flex justify-between items-center">
      <p>
      ${event.target.id}
      </p>
      <p>Economy</p>
      <p>550</p>
    </div>`;
    showSeat.appendChild(span);
    if (bookedSeats.length === 4) {
      document.getElementById("apply-btn").removeAttribute("disabled");
    }
    document.getElementById("total-price").innerText = bookedSeats.length * 550;
  } else {
    alert("maximum 4 seats only");
  }
}
