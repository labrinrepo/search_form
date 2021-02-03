const country_list = document.querySelector(".country-list");

let countries = [
  "ABŞ",
  "Almaniya",
  "Avstraliya",
  "Avstriya",
  "BƏƏ",
  "Böyük Britaniya",
  "Çexiya",
  "Çin",
  "Danimarka",
  "Fransa",
  "Hollandiya",
  "İrlandiya",
  "İspaniya",
  "İsveç",
  "İsveçrə",
  "İtaliya",
  "Kanada",
  "Sinqapur",
  "Türkiyə",
  "Yeni Zelandiya",
  "Malayziya",
  "Tailand",
  "Malta",
];

const renderCountries = () => {
  let i = 0;
  let countriesLength = countries.length;
  for (i; i <= countriesLength - 1; i++) {
    country_list.insertAdjacentHTML(
      "beforeend",
      `<div class="checkbox">
      <input type="checkbox" />
      <label>${countries[i]}</label>
      </div>`
    );
  }
};

renderCountries();
