/* const seattle = {
  minCust: 23,
  maxCust: 65,
  avgSold: 6.3,

  actualCust: function avgCust() {
    min = Math.ceil(minCust);
    max = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust) + min);
  },
};
console.log(seattle.avgCust());
 */
const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

seattle.calculateSales();

const shopLocations = document.getElementById("shopLocations");

const article = document.createElement("article");

const h2 = document.createElement("h2"); // <h2></h2>
h2.textContent = seattle.location; // <h2>seattle</h2>
article.appendChild(h2); // <article><h2>seattle</h2></article>

const ul = document.createElement("ul"); //creates list
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li"); //creates each li
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`; //input for each list item
  ul.appendChild(li);
}
article.appendChild(ul);

shopLocations.appendChild(article);
