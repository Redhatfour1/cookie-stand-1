'use strict';

var firstPike = {
  minCust: 23,
  maxCust: 65,
  averageCookiePerSale: 6.3,

  randomCustomers: function() {
    return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
    console.log(randomCustomers);
  },

  simulatedPurchased: function() {
    var hourlyArray = [];   //somehow this is turning into a string!  :(
    for(index = 0; index < 15; index++) {
      var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
      console.log(cookiesPerHour);
      hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
    }
    console.log(hourlyArray);
    return hourlyArray;
  }
};

var times = ['6 a.m.:', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

var firstPikeHourly = firstPike.simulatedPurchased();
var firstPikeDaily = document.getElementById('firstPike');
var sum = firstPikeHourly.reduce(function(a, b){
  return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
}, 0);
// var seaTac.simulatedPurchased =ˆ document.getElementById('seaTac');
// var seattleCenter.simulatedPurchased = document.getElementById('seattleCenter');
// var capitolHill.simulatedPurchased = document.getElementById('capitolHill');
// var alki.simulatedPurchased = document.getElementById('alki');

//Get firstPike working, then apply to the other locations!

for (var index = 0; index < firstPikeHourly.length; index++) {
  console.log(firstPikeHourly[index]);
  var listElement = document.createElement('li');
  //listElement.setAttribute('class', 'average-cookie-per-hour');
  listElement.textContent = times[index] + ': ' + firstPikeHourly[index] + ' cookies';
  //listElement.textContent = 'Total: ' + sum + ' cookies';
  firstPikeDaily.appendChild(listElement);
}

var totalListItem = document.createElement('li');
listElement.textContent = 'Total: ' + sum + 'cookies';
firstPikeDaily.appendChild(totalListItem);   //this is replacing 8p.m., not adding to it :(

var seaTac = {
  minCust: 3,
  maxCust: 24,
  averageCookiePerSale: 1.2,

  randomCustomers: function(minCust, maxCust) {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  simulatedPurchased: function() {
    array: [];
    for(index = 0; index < 15; index++ ) {
      this.averageCookiePerSale * this.randomCustomers;
      array.push;
    }
  }

};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  averageCookiePerSale: 3.7,

  randomCustomers: function(minCust, maxCust) {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  simulatedPurchased: function() {
    array: [];
    for (index = 0; index < 15; index++) {
      this.averageCookiePerSale * this.randomCustomers;
      array.push;
    }
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  averageCookiePerSale: 2.3,

  randomCustomers: function(minCust, maxCust) {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  simulatedPurchased: function() {
    array: [];
    for (index = 0; index < 15; index++) {
      this.averageCookiePerSale * this.randomCustomers;
      array.push;
    }
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  averageCookiePerSale: 4.6,

  randomCustomers: function(minCust, maxCust) {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  simulatedPurchased: function() {
    array: [];
    for(index = 0; index < 15; index++) {
      this.averageCookiePerSale * this.randomCustomers;
      array.push;
    }
  }
};
