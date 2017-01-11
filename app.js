'use strict';

//var randomAndPurchased = function () // make a function to run the randomCustomers and simulatedPurchased functions?

function Stores (name, minCust, maxCust, averageCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookiePerSale = averageCookiePerSale;
}

var firstPike = new Stores('firstPike', 23, 65, 6.3);
var seaTac = new Stores('seaTac', 3, 24, 1.2);
var seattleCenter = new Stores('seattleCenter', 11, 38, 3.7);
var capitolHill = new Stores('capitolHill', 20, 38, 2.3);
var alki = new Stores('alki', 2, 16, 4.6);

var times = ['6 a.m.:', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.', 'Total'];
var totalRow = ['Totals:'];
var locations = ['', 'First & Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki Beach', 'Totals:'];

Stores.prototype.randomCustomers = function() {
  return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
  console.log('random customers:' + randomCustomers);
},

Stores.prototype.simulatedPurchased = function() {
  var hourlyArray = [];   //somehow this is turning into a string!  :(
  for(var index = 0; index <= times.length - 1; index++) {
    var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
    console.log('cookies per hour: ' + cookiesPerHour);
    hourlyArray.push(parseInt(cookiesPerHour.toFixed(0)));
  }
  console.log('hourly array:' + hourlyArray);
  return hourlyArray;
};

function hourlyData(x) {
  console.log(x.name);
  var hourly =  x.simulatedPurchased();
  var daily = document.getElementById(x.name);  //will allow me to call the function for each object
  console.log(daily);
  var sum = hourly.reduce(function(a, b){
    return parseInt(a) + parseInt(b);
  }, 0);

  var timesArray = [];

  for(var index = 0; index < hourly.length; index++) {
    console.log('Hourly: ' + hourly[index]);
    var listElement = document.createElement('li');

    listElement.textContent = times[index] + ' : ' + hourly[index] + ' cookies';

    daily.appendChild(listElement);

    timesArray.push(hourly[index]);
  }

  var totalListItem = document.createElement('li');
  listElement.textContent = 'Total: ' + sum + ' cookies';
  //daily.appendChild(totalListItem);
  return timesArray;
};

var firstPikeArray = hourlyData(firstPike);
var seaTacArray = hourlyData(seaTac);
var seattleCenterArray = hourlyData(seattleCenter);
var capitolHillArray = hourlyData(capitolHill);
var alkiArray = hourlyData(alki);

//code to take this information and put in into the table

var tableData = [times, firstPikeArray, seaTacArray, seattleCenterArray, capitolHillArray, alkiArray, totalRow];
console.log('tableData:' + tableData);

var tableEl = document.getElementById('table-data');
console.log('tableEl: ' + tableEl);

for(var i = 0; i < tableData.length; i++) {
  var rowData = tableData[i];
  console.log('rowData: ' + rowData);

  var rowEl = document.createElement('tr');
  console.log('rowEl: ' + rowEl);

  for (var j = 0; j < rowData.length; j++) {
    var rowContent = rowData[j];
    console.log('rowContent: ' + rowContent);

    var dataEl = document.createElement('td');
    dataEl.textContent = rowContent;

    rowEl.appendChild(dataEl);
  }

  tableEl.appendChild(rowEl);
}

//ATTEMPT TO ADD TOTALS, DIDN'T WORK THOUGH
// var columnTotals = function() {
//   var tableTotals = document.getElementsByTagName('td');
//   for (m = 1; m < times.length; m++) {  //access index 1 because index 0 is the time of day
//     var eachColumnTotal = tableTotals[m];
//     function(m) {
//       var sum = sum + td[m];
//       var columIndex = document.createElement('td');
//       columnIndex.textContent = sum[m];
//
//       eachColumnTotal.appendChild(columnIndex);
//     }
//   }
// }

//TRIED TO ADD LEFT-SIDE COLUMN WITH NAMES
//        use locations array....
function addFirstColumn() {
  var row = document.getElementsByClass('column-headers');
  for (var k = 0; k < tableData.length; k++){
    var y = row.insertCell(k);
    y.innerHTML = x;
  }
}

// OLD CODE FROM MONDAY
// var firstPikeHourly = firstPike.simulatedPurchased();
//
// var firstPikeDaily = document.getElementById('firstPike');
//
// var sum = firstPikeHourly.reduce(function(a, b){
//   return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
// }, 0);
//
// for (var index = 0; index < firstPikeHourly.length; index++) {
//   console.log(firstPikeHourly[index]);
//   var listElement = document.createElement('li');
//   //listElement.setAttribute('class', 'average-cookie-per-hour');
//   listElement.textContent = times[index] + ' : ' + firstPikeHourly[index] + ' cookies';
//   //listElement.textContent = 'Total: ' + sum + ' cookies';
//   firstPikeDaily.appendChild(listElement);
// }
//
// var totalListItem = document.createElement('li');
// listElement.textContent = 'Total: ' + sum + ' cookies';
// firstPikeDaily.appendChild(totalListItem);
// // var firstPike = {
// //   minCust: 23,
// //   maxCust: 65,
// //   averageCookiePerSale: 6.3,
//
//   // randomCustomers: function() {
//   //   return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
//   //   console.log(randomCustomers);
//   // },
//   //
//   // simulatedPurchased: function() {
//   //   var hourlyArray = [];   //somehow this is turning into a string!  :(
//   //   for(index = 0; index <= times.length; index++) {
//   //     var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
//   //     console.log(cookiesPerHour);
//   //     hourlyArray.push(parseInt(cookiesPerHour.toFixed(0)));
//   //   }
//   //   console.log(hourlyArray);
//   //   return hourlyArray;
//   // },
//
//   // dailySum: function () {
//   //   sum = 0;
//   //   for (var i = 0; i < this.hourlyArray.length; i++) {
//   //     sum += this.hourlyArray[i];
//   //   }
//   //   this.hourlyArray.push(sum);
//   //   console.log(sum);
//   // }
// //};
//
//
//
// // var seaTac = {
// //   minCust: 3,
// //   maxCust: 24,
// //   averageCookiePerSale: 1.2,
//
//   randomCustomers: function() {
//     return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
//     console.log(randomCustomers);
//   },
//
//   simulatedPurchased: function() {
//     var hourlyArray = [];   //somehow this is turning into a string!  :(
//     for(index = 0; index <= times.length; index++) {
//       var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
//       console.log(cookiesPerHour);
//       hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
//     }
//     console.log(hourlyArray);
//     return hourlyArray;
//   }
// };
//
// var seaTacHourly = seaTac.simulatedPurchased();
// var seaTacDaily = document.getElementById('seaTac');
// var sum = seaTacHourly.reduce(function(a, b){
//   return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
// }, 0);
//
// for (var index = 0; index < seaTacHourly.length; index++) {
//   console.log(seaTacHourly[index]);
//   var listElement = document.createElement('li');
//   //listElement.setAttribute('class', 'average-cookie-per-hour');
//   listElement.textContent = times[index] + ' : ' + seaTacHourly[index] + ' cookies';
//   //listElement.textContent = 'Total: ' + sum + ' cookies';
//   seaTacDaily.appendChild(listElement);
// }
//
// var totalListItem = document.createElement('li');
// listElement.textContent = 'Total: ' + sum + ' cookies';
// seaTacDaily.appendChild(totalListItem);
//
// // var seattleCenter = {
// //   minCust: 11,
// //   maxCust: 38,
// //   averageCookiePerSale: 3.7,
//
//   randomCustomers: function() {
//     return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
//     console.log(randomCustomers);
//   },
//
//   simulatedPurchased: function() {
//     var hourlyArray = [];   //somehow this is turning into a string!  :(
//     for(index = 0; index <= times.length; index++) {
//       var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
//       console.log(cookiesPerHour);
//       hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
//     }
//     console.log(hourlyArray);
//     return hourlyArray;
//   }
// };
//
// var seattleCenterHourly = seattleCenter.simulatedPurchased();
// var seattleCenterDaily = document.getElementById('seattleCenter');
// var sum = seattleCenterHourly.reduce(function(a, b){
//   return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
// }, 0);
//
// for (var index = 0; index < seattleCenterHourly.length; index++) {
//   console.log(seattleCenterHourly[index]);
//   var listElement = document.createElement('li');
//   //listElement.setAttribute('class', 'average-cookie-per-hour');
//   listElement.textContent = times[index] + ' : ' + seattleCenterHourly[index] + ' cookies';
//   //listElement.textContent = 'Total: ' + sum + ' cookies';
//   seattleCenterDaily.appendChild(listElement);
// }
//
// var totalListItem = document.createElement('li');
// listElement.textContent = 'Total: ' + sum + ' cookies';
// seattleCenterDaily.appendChild(totalListItem);
//
// // var capitolHill = {
// //   minCust: 20,
// //   maxCust: 38,
// //   averageCookiePerSale: 2.3,
//
//   randomCustomers: function() {
//     return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
//     console.log(randomCustomers);
//   },
//
//   simulatedPurchased: function() {
//     var hourlyArray = [];   //somehow this is turning into a string!  :(
//     for(index = 0; index <= times.length; index++) {
//       var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
//       console.log(cookiesPerHour);
//       hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
//     }
//     console.log(hourlyArray);
//     return hourlyArray;
//   }
// };
//
// var capitolHillHourly = capitolHill.simulatedPurchased();
// var capitolHillDaily = document.getElementById('capitolHill');
// var sum = capitolHillHourly.reduce(function(a, b){
//   return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
// }, 0);
//
// for (var index = 0; index < capitolHillHourly.length; index++) {
//   console.log(capitolHillHourly[index]);
//   var listElement = document.createElement('li');
//   //listElement.setAttribute('class', 'average-cookie-per-hour');
//   listElement.textContent = times[index] + ' : ' + capitolHillHourly[index] + ' cookies';
//   //listElement.textContent = 'Total: ' + sum + ' cookies';
//   capitolHillDaily.appendChild(listElement);
// }
//
// var totalListItem = document.createElement('li');
// listElement.textContent = 'Total: ' + sum + ' cookies';
// capitolHillDaily.appendChild(totalListItem);
//
// // var alki = {
// //   minCust: 2,
// //   maxCust: 16,
// //   averageCookiePerSale: 4.6,
//
//   randomCustomers: function() {
//     return Math.round(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
//     console.log(randomCustomers);
//   },
//
//   simulatedPurchased: function() {
//     var hourlyArray = [];   //somehow this is turning into a string!  :(
//     for(index = 0; index <= times.length; index++) {
//       var cookiesPerHour = this.averageCookiePerSale * this.randomCustomers();
//       console.log(cookiesPerHour);
//       hourlyArray.push(parseInt(cookiesPerHour.toFixed(0))); //math.floor?
//     }
//     console.log(hourlyArray);
//     return hourlyArray;
//   }
// };
//
// var alkiHourly = alki.simulatedPurchased();
// var alkiDaily = document.getElementById('alki');
// var sum = alkiHourly.reduce(function(a, b){
//   return parseInt(a) + parseInt(b);  //hack from Adam to convert back to integers
// }, 0);
//
// for (var index = 0; index < alkiHourly.length; index++) {
//   console.log(alkiHourly[index]);
//   var listElement = document.createElement('li');
//   //listElement.setAttribute('class', 'average-cookie-per-hour');
//   listElement.textContent = times[index] + ' : ' + alkiHourly[index] + ' cookies';
//   //listElement.textContent = 'Total: ' + sum + ' cookies';
//   alkiDaily.appendChild(listElement);
// }
//
// var totalListItem = document.createElement('li');
// listElement.textContent = 'Total: ' + sum + ' cookies';
// alkiDaily.appendChild(totalListItem);
