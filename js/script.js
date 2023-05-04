const day = document.querySelector(
  "section:nth-child(1) > div:nth-child(1) > input"
);
const month = document.querySelector(
  "section:nth-child(1) > div:nth-child(2) > input"
);
const year = document.querySelector(
  "section:nth-child(1) > div:nth-child(3) > input"
);

const date = new Date();

function dateRetrieve(day, month, year) {
  let array = [];
  day.addEventListener("change", async (e) => {
    const errorDay = document.getElementById("error-day");
    if (e.target.value != "" && e.target.value <= 31) {
      value = await e.target.value;
      array.push(value);
      errorDay.textContent = "";
    } else if (e.target.value > 31) {
      errorDay.textContent = "Must be a valid day";
    } else {
      errorDay.textContent = "This field is required";
    }
  });
  month.addEventListener("change", async (e) => {
    const errorMonth = document.getElementById("error-month");
    if (e.target.value != "" && e.target.value <= 12) {
      value = await e.target.value;
      array.push(value);
      errorMonth.textContent = "";
    } else if (e.target.value >= 12) {
      errorMonth.textContent = "Must be a valid month";
    } else {
      errorMonth.textContent = "This field is required";
    }
  });
  year.addEventListener("change", async (e) => {
    const errorYear = document.getElementById("error-year");
    if (e.target.value != "" && e.target.value <= date.getFullYear()) {
      value = await e.target.value;
      array.push(value);
      errorYear.textContent = "";
    } else if (e.target.value >= date.getFullYear()) {
      errorYear.textContent = "Must be in the past";
    } else {
      errorYear.textContent = "This field is required";
    }
  });
  return array;
}

const dateArray = dateRetrieve(day, month, year);
