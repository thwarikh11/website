
const checkOut = document.querySelector("#checkout");
const checkIn = document.querySelector("#checkin");

const form = document.querySelector("form");

let checkInDate = null;
let checkOutDate = null;

function displayDate() {
  let day = Math.ceil(
    Math.abs(checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
  );
  let month = checkOutDate.toDateString().split(" ")[1];
  let startDate = checkInDate.getDate();
  let endDate = checkOutDate.getDate();
  let year = checkOutDate.getFullYear();
  localStorage.setItem("date", day);
  localStorage.setItem("month", month);
  localStorage.setItem("SDate", startDate);
  localStorage.setItem("EDate", endDate);
  localStorage.setItem("year", year);
}

checkIn.addEventListener("change", (e) => {
  checkInDate = e.target.valueAsDate;
});

checkOut.addEventListener("change", (e) => {
  checkOutDate = e.target.valueAsDate;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkInDate && checkOutDate) {
    displayDate();
    location.href = "result.html";
  }
});
