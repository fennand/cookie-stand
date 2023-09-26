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

// random number generator

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function City(
  location,
  minCust,
  maxCust,
  avgCookiesPerCust,
  customersPerHour,
  cookiesPerHour,
  totalCookieSold,
  calculateSales
) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookieSold = totalCookieSold;
  this.calculateSales = calculateSales;
  function calculateSales() {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  }

  this.calculateSales();
}

City.prototype.render = function () {
  const shopLocations = document.getElementById("shopLocations");

  const article = document.createElement("article");

  const h2 = document.createElement("h2");
  h2.textContent = this.location;
  article.appendChild(h2);
  const ul = document.createElement("ul");
  for (let i = 0; i < hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    ul.appendChild(li);
  }
  article.appendChild(ul);
  const h3 = document.createElement("h3");
  h3.textContent = `Total cookies sold: ${this.totalCookieSold}`;
  article.appendChild(h3);
  shopLocations.appendChild(article);
};

const seattle = new City("seattle", 23, 65, 6.3, [], [], 0);

const tokyo = new City("tokyo", 3, 24, 1.2, [], [], 0);

const dubai = new City("dubai", 11, 38, 3.7, [], [], 0);

const paris = new City("paris", 20, 38, 2.3, [], [], 0);

const lima = new City("lima", 2, 16, 4.6, [], [], 0);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// table
const salesTable = document.getElementById("salesTable");

const table = document.createElement("table");

// table header

const trHead = document.createElement("tr"); // creates row
const tdHead = document.createElement("td"); // alienates first cell
tdHead.textContent = ""; // makes first cell blank
trHead.appendChild(tdHead); // adds first cell to row
for (let i = 0; i < hours.length; i++) {
  // initiates for loop for row
  const th = document.createElement("th"); // creates header cells as part of loop

  th.textContent = `${hours[i]}`; // sets content of each cell as an hour, starting at 6 am and going up by 1
  trHead.appendChild(th); // adds cells to header row
}
const tdTotal = document.createElement("td"); // creates Total cell at end of row
tdTotal.textContent = "Daily Location Total"; // makes content of this cell as the text "Total Sales"
trHead.appendChild(tdTotal); // adds cell to header row
table.appendChild(trHead); // adds header row to table

// seattle results in table

const trSeattle = document.createElement("tr");
const tdSeattle = document.createElement("td");
tdSeattle.textContent = "Seattle";
trSeattle.appendChild(tdSeattle);
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");

  th.textContent = `${seattle.cookiesPerHour[i]}`;
  trSeattle.appendChild(th);
}
const tdSeattleTotal = document.createElement("td");
tdSeattleTotal.textContent = `${seattle.totalCookieSold}`;
trSeattle.appendChild(tdSeattleTotal);
table.appendChild(trSeattle);

// tokyo results in table

const trTokyo = document.createElement("tr");
const tdTokyo = document.createElement("td");
tdTokyo.textContent = "Tokyo";
trTokyo.appendChild(tdTokyo);
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");

  th.textContent = `${tokyo.cookiesPerHour[i]}`;
  trTokyo.appendChild(th);
}
const tdTokyoTotal = document.createElement("td");
tdTokyoTotal.textContent = `${tokyo.totalCookieSold}`;
trTokyo.appendChild(tdTokyoTotal);
table.appendChild(trTokyo);

// dubai results in table

const trDubai = document.createElement("tr");
const tdDubai = document.createElement("td");
tdDubai.textContent = "Dubai";
trDubai.appendChild(tdDubai);
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");

  th.textContent = `${dubai.cookiesPerHour[i]}`;
  trDubai.appendChild(th);
}
const tdDubaiTotal = document.createElement("td");
tdDubaiTotal.textContent = `${dubai.totalCookieSold}`;
trDubai.appendChild(tdDubaiTotal);
table.appendChild(trDubai);

// Paris results in table

const trParis = document.createElement("tr");
const tdParis = document.createElement("td");
tdParis.textContent = "Paris";
trParis.appendChild(tdParis);
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");

  th.textContent = `${paris.cookiesPerHour[i]}`;
  trParis.appendChild(th);
}
const tdParisTotal = document.createElement("td");
tdParisTotal.textContent = `${paris.totalCookieSold}`;
trParis.appendChild(tdParisTotal);
table.appendChild(trParis);

// Lima results in table

const trLima = document.createElement("tr");
const tdLima = document.createElement("td");
tdLima.textContent = "Lima";
trLima.appendChild(tdLima);
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");

  th.textContent = `${lima.cookiesPerHour[i]}`;
  trLima.appendChild(th);
}
const tdLimaTotal = document.createElement("td");
tdLimaTotal.textContent = `${lima.totalCookieSold}`;
trLima.appendChild(tdLimaTotal);
table.appendChild(trLima);

salesTable.appendChild(table);

/* const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

seattle.calculateSales();

const shopLocations = document.getElementById("shopLocations"); // puts all this into the div on the sales page

const article = document.createElement("article"); // creates the article element that this info goes into

const h2Seattle = document.createElement("h2"); // <h2></h2>
h2Seattle.textContent = seattle.location; // <h2>seattle</h2>
article.appendChild(h2Seattle); // <article><h2>seattle</h2></article>

const ulSeattle = document.createElement("ul"); //creates list
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li"); //creates each li
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`; //input for each list item
  ulSeattle.appendChild(li);
}
article.appendChild(ulSeattle);

const h3Seattle = document.createElement("h3");
h3Seattle.textContent = `Total cookies sold: ${seattle.totalCookieSold}`;
article.appendChild(h3Seattle);

shopLocations.appendChild(article); */

// tokyo

/* const tokyo = {
  location: "tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

tokyo.calculateSales();

const h2Tokyo = document.createElement("h2"); // <h2></h2>
h2Tokyo.textContent = tokyo.location; // <h2>tokyo</h2>
article.appendChild(h2Tokyo); // <article><h2>tokyo</h2></article>

const ulTokyo = document.createElement("ul"); //creates list
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li"); //creates each li
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`; //input for each list item
  ulTokyo.appendChild(li);
}
article.appendChild(ulTokyo);

const h3Tokyo = document.createElement("h3");
h3Tokyo.textContent = `Total cookies sold: ${tokyo.totalCookieSold}`;
article.appendChild(h3Tokyo);

shopLocations.appendChild(article);

// dubai

const dubai = {
  location: "dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

dubai.calculateSales();

const h2Dubai = document.createElement("h2"); // <h2></h2>
h2Dubai.textContent = dubai.location; // <h2>dubai</h2>
article.appendChild(h2Dubai); // <article><h2>dubai</h2></article>

const ulDubai = document.createElement("ul"); //creates list
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li"); //creates each li
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]} cookies`; //input for each list item
  ulDubai.appendChild(li);
}
article.appendChild(ulDubai);

const h3Dubai = document.createElement("h3");
h3Dubai.textContent = `Total cookies sold: ${dubai.totalCookieSold}`;
article.appendChild(h3Dubai);

shopLocations.appendChild(article);
 */
