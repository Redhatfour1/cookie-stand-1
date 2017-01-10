'use strict';

//var randomAndPurchased = function () // make a function to run the randomCustomers and simulatedPurchased functions?

var times = ['6 a.m.:', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

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
    for(index = 0; index <= times.length; index++) {
      var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
      console.log(cookiesPerHour);
      hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
    }
    console.log(hourlyArray);
    return hourlyArray;
  }
};

var firstPikeHourly = firstPike.simulatedPurchased();
var firstPikeDaily = document.getElementById('firstPike');
var sum = firstPikeHourly.reduce(function(a, b){
  return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
}, 0);

for (var index = 0; index < firstPikeHourly.length; index++) {
  console.log(firstPikeHourly[index]);
  var listElement = document.createElement('li');
  //listElement.setAttribute('class', 'average-cookie-per-hour');
  listElement.textContent = times[index] + ': ' + firstPikeHourly[index] + ' cookies';
  //listElement.textContent = 'Total: ' + sum + ' cookies';
  firstPikeDaily.appendChild(listElement);
}

var totalListItem = document.createElement('li');
listElement.textContent = 'Total: ' + sum + ' cookies';
firstPikeDaily.appendChild(totalListItem);

var seaTac = {
  minCust: 3,
  maxCust: 24,
  averageCookiePerSale: 1.2,

  randomCustomers: function() {
    return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
    console.log(randomCustomers);
  },

  simulatedPurchased: function() {
    var hourlyArray = [];   //somehow this is turning into a string!  :(
    for(index = 0; index <= times.length; index++) {
      var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
      console.log(cookiesPerHour);
      hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
    }
    console.log(hourlyArray);
    return hourlyArray;
  }
};

var seaTacHourly = seaTac.simulatedPurchased();
var seaTacDaily = document.getElementById('seaTac');
var sum = seaTacHourly.reduce(function(a, b){
  return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
}, 0);

for (var index = 0; index < seaTacHourly.length; index++) {
  console.log(seaTacHourly[index]);
  var listElement = document.createElement('li');
  //listElement.setAttribute('class', 'average-cookie-per-hour');
  listElement.textContent = times[index] + ': ' + seaTacHourly[index] + ' cookies';
  //listElement.textContent = 'Total: ' + sum + ' cookies';
  seaTacDaily.appendChild(listElement);
}

var totalListItem = document.createElement('li');
listElement.textContent = 'Total: ' + sum + ' cookies';
seaTacDaily.appendChild(totalListItem);

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  averageCookiePerSale: 3.7,

  randomCustomers: function() {
    return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
    console.log(randomCustomers);
  },

  simulatedPurchased: function() {
    var hourlyArray = [];   //somehow this is turning into a string!  :(
    for(index = 0; index <= times.length; index++) {
      var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
      console.log(cookiesPerHour);
      hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
    }
    console.log(hourlyArray);
    return hourlyArray;
  }
};

var seattleCenterHourly = seattleCenter.simulatedPurchased();
var seattleCenterDaily = document.getElementById('seattleCenter');
var sum = seattleCenterHourly.reduce(function(a, b){
  return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
}, 0);

for (var index = 0; index < seattleCenterHourly.length; index++) {
  console.log(seattleCenterHourly[index]);
  var listElement = document.createElement('li');
  //listElement.setAttribute('class', 'average-cookie-per-hour');
  listElement.textContent = times[index] + ': ' + seattleCenterHourly[index] + ' cookies';
  //listElement.textContent = 'Total: ' + sum + ' cookies';
  seattleCenterDaily.appendChild(listElement);
}

var totalListItem = document.createElement('li');
listElement.textContent = 'Total: ' + sum + ' cookies';
seattleCenterDaily.appendChild(totalListItem);

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  averageCookiePerSale: 2.3,

  randomCustomers: function() {
    return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
    console.log(randomCustomers);
  },

  simulatedPurchased: function() {
    var hourlyArray = [];   //somehow this is turning into a string!  :(
    for(index = 0; index <= times.length; index++) {
      var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
      console.log(cookiesPerHour);
      hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
    }
    console.log(hourlyArray);
    return hourlyArray;
  }
};

var capitolHillHourly = capitolHill.simulatedPurchased();
var capitolHillDaily = document.getElementById('capitolHill');
var sum = capitolHillHourly.reduce(function(a, b){
  return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
}, 0);

for (var index = 0; index < capitolHillHourly.length; index++) {
  console.log(capitolHillHourly[index]);
  var listElement = document.createElement('li');
  //listElement.setAttribute('class', 'average-cookie-per-hour');
  listElement.textContent = times[index] + ': ' + capitolHillHourly[index] + ' cookies';
  //listElement.textContent = 'Total: ' + sum + ' cookies';
  capitolHillDaily.appendChild(listElement);
}

var totalListItem = document.createElement('li');
listElement.textContent = 'Total: ' + sum + ' cookies';
capitolHillDaily.appendChild(totalListItem);

var alki = {
  minCust: 2,
  maxCust: 16,
  averageCookiePerSale: 4.6,

  randomCustomers: function() {
    return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
    console.log(randomCustomers);
  },

  simulatedPurchased: function() {
    var hourlyArray = [];   //somehow this is turning into a string!  :(
    for(index = 0; index <= times.length; index++) {
      var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
      console.log(cookiesPerHour);
      hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
    }
    console.log(hourlyArray);
    return hourlyArray;
  }
};

var alkiHourly = alki.simulatedPurchased();
var alkiDaily = document.getElementById('alki');
var sum = alkiHourly.reduce(function(a, b){
  return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
}, 0);

for (var index = 0; index < alkiHourly.length; index++) {
  console.log(alkiHourly[index]);
  var listElement = document.createElement('li');
  //listElement.setAttribute('class', 'average-cookie-per-hour');
  listElement.textContent = times[index] + ': ' + alkiHourly[index] + ' cookies';
  //listElement.textContent = 'Total: ' + sum + ' cookies';
  alkiDaily.appendChild(listElement);
}

var totalListItem = document.createElement('li');
listElement.textContent = 'Total: ' + sum + ' cookies';
alkiDaily.appendChild(totalListItem);
