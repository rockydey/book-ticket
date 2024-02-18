const bookedSeats = [];
function seatId(event) {
  if (bookedSeats.length < 4) {
    bookedSeats.push(event.target);
    console.log(bookedSeats);
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

    // Button enable
    if (bookedSeats.length === 4) {
      document.getElementById("apply-btn").removeAttribute("disabled");
    }

    // Update Value
    document.getElementById("total-price").innerText = bookedSeats.length * 550;
    document.getElementById("available-seat").innerText =
      40 - bookedSeats.length;
    document.getElementById("seat-booked").innerText = bookedSeats.length;

    // Coupon validation
    document.getElementById("apply-btn").addEventListener("click", getCode);
  } else {
    alert("maximum 4 seats only");
  }
}

function getCode() {
  const couponCode = document.getElementById("coupon-code").value;
  if (couponCode === "NEW15") {
    discount(couponCode);
  } else if (couponCode === "Couple 20") {
    discount(couponCode);
  } else {
    alert("Please provide valid coupon");
  }
}
