function selectSeat(elementId) {
  document.getElementById(elementId).style.backgroundColor = "#1DD100";
  document.getElementById(elementId).style.color = "white";
}
function unSelectSeat(elementId) {
  document.getElementById(elementId).style.backgroundColor = "#F2F2F2";
  document.getElementById(elementId).style.color = "#03071280";
}

function discount(elementId) {
  const inputField = document.getElementById("input-field");
  const totalPrice = document.getElementById("total-price").innerText;
  const span = document.createElement("span");
  if (elementId === "NEW15") {
    span.innerHTML = `
    <div class="text-base text-color1 font-medium flex justify-between items-center">
        <p>Discount</p>
        <p>BDT <span id="discount-price">${
          parseInt(totalPrice) * 0.15
        }</span></p>
    </div>`;
    inputField.innerHTML = "";
    inputField.appendChild(span);
  } else {
    span.innerHTML = `
    <div class="text-base text-color1 font-medium flex justify-between items-center">
        <p>Discount</p>
        <p>BDT <span id="discount-price">${
          parseInt(totalPrice) * 0.2
        }</span></p>
    </div>`;
    inputField.innerHTML = "";
    inputField.appendChild(span);
  }
  const discountPrice = document.getElementById("discount-price").innerText;
  document.getElementById("grand-total").innerText =
    parseInt(totalPrice) - parseInt(discountPrice);
}
