'use strict';

var formEl = document.getElementById('first-form');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();

  renderUsername(event.target.username.value);   //can create a separate var = event.target.username.value but not necessary

  console.log(event.target.username.value);      //'name=""' given in HTML correlates with target here, will print the input from the username field
  console.log(event.target.password.value);     // logs the characters put into password field, even though it's a PW field
}, false);                                      //use --  }, true);  -- to tell older browsers to bubble, not capture
                                                //false by default in newer browsers
function renderUsername(username) {             // can access username when the function runs
  var sectionEl = document.getElementById('form-section');

  var usernameEl = document.createElement('p');
  usernameEl.setAttribute('class', 'entered-username');
  usernameEl.textContent = username;

  sectionEl.appendChild(usernameEl);
}
