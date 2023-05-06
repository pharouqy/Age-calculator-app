const day = document.querySelector(
  "section:nth-child(1) > div:nth-child(1) > input"
);
const month = document.querySelector(
  "section:nth-child(1) > div:nth-child(2) > input"
);
const year = document.querySelector(
  "section:nth-child(1) > div:nth-child(3) > input"
);

const button = document.getElementsByTagName("svg")[0];

const resultYears = document.querySelector(
  "section:nth-child(3) > div:nth-child(1) > span"
);
const resultMonths = document.querySelector(
  "section:nth-child(3) > div:nth-child(2) > span"
);
const resultDays = document.querySelector(
  "section:nth-child(3) > div:nth-child(3) > span"
);

const label = document.getElementsByTagName("label");

const now = new Date();
const annees = now.getFullYear();
const mois = now.getMonth();
const jours = now.getDate();

async function handelDate(day, month, year) {
  day.addEventListener("change", async (e) => {
    const errorDay = document.getElementById("error-day");
    if (e.target.value != "" && e.target.value <= 31) {
      value = await e.target.value;
      errorDay.textContent = "";
      label[0].style.color = "unset";
      day.style.border = "1px solid hsl(0, 0%, 86%)";
    } else if (e.target.value > 31) {
      label[0].style.color = "hsl(0, 100%, 67%)";
      day.style.border = "1px solid hsl(0, 100%, 67%)";
      errorDay.textContent = "Must be a valid day";
    } else {
      label[0].style.color = "hsl(0, 100%, 67%)";
      day.style.border = "1px solid hsl(0, 100%, 67%)";
      errorDay.textContent = "This field is required";
    }
  });
  month.addEventListener("change", async (e) => {
    const errorMonth = document.getElementById("error-month");
    if (e.target.value != "" && e.target.value <= 12) {
      value = await e.target.value;
      errorMonth.textContent = "";
      label[1].style.color = "unset";
      month.style.border = "1px solid hsl(0, 0%, 86%)";
    } else if (e.target.value >= 12) {
      label[1].style.color = "hsl(0, 100%, 67%)";
      month.style.border = "1px solid hsl(0, 100%, 67%)";
      errorMonth.textContent = "Must be a valid month";
    } else {
      label[1].style.color = "hsl(0, 100%, 67%)";
      month.style.border = "1px solid hsl(0, 100%, 67%)";
      errorMonth.textContent = "This field is required";
    }
  });
  year.addEventListener("change", async (e) => {
    const errorYear = document.getElementById("error-year");
    if (e.target.value != "" && e.target.value <= now.getFullYear()) {
      value = await e.target.value;
      errorYear.textContent = "";
      label[2].style.color = "unset";
      year.style.border = "1px solid hsl(0, 0%, 86%)";
    } else if (e.target.value >= now.getFullYear()) {
      label[2].style.color = "hsl(0, 100%, 67%)";
      year.style.border = "1px solid hsl(0, 100%, 67%)";
      errorYear.textContent = "Must be in the past";
    } else {
      label[2].style.color = "hsl(0, 100%, 67%)";
      year.style.border = "1px solid hsl(0, 100%, 67%)";
      errorYear.textContent = "This field is required";
    }
  });
}

handelDate(day, month, year);

function calculateAge() {
  button.addEventListener("click", (e) => {
    let d = jours - day.value;
    let m = mois - month.value;
    let y = annees - year.value;
    if (m < 0 || (m === 0 && jours < parseInt(day.value))) {
      y--;
      m += 12;
    }
    if (d < 0) {
      m--;
      d += 31;
    }
    if (m < 0) {
      m = 11;
      y--;
    }
    if (d != jours && m != month && y != annees) {
      resultDays.textContent = d;
      resultMonths.textContent = m;
      resultYears.textContent = y;
    }
  });
}

calculateAge();
