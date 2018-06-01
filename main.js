//jshint esversion:6
//jQuery and ES6 JS alternatives
// DOM Selection

// jQuery
$('jqDOM');

//ES6  (bling) library allows you to use the $ in JS
document.querySelector('.domJS');
document.querySelectorAll('.domJS li');

//        jQuery	                  ES6 JavaScript
$element.remove();	                element.remove();
$element.prepend(otherElement);	    element.prepend(otherElement);
$element.before(otherElement);	    element.before(otherElement);
$element.addClass('someClass');	    element.classList.add('someClass');
$element.removeClass('someClass');	element.classList.remove('someClass');
$element.toggleClass('someClass');	element.classList.toggle('someClass');
const parent = $element.parent();	  const parent2 = element.parentNode;
const cloned = $element.clone();	  const cloned2 = element.cloneNode(true);

// EVENTS - jQuery
$someElement.on('click', function(e){
  //logic
});
// ES6 JavaScript
someElement.addEventListener('click', e => {
  //logic
});

// HTTP Request/ AJAX - jQuery was *better* than XHR.
// Now we have fetch API and other libs such as axios
fetch('http://api.something.com')   // ES6 Fetch API wraps the HTTP requests well
  .then(res => res.json())
  .then(data => console.log(data));
// axios is a tiny lib that does *one* thing and does it well
// rather bringing in the bigger jQuery lib just to get its HTTP request functions
axios.get('http://api.something.com') // axios does it even better
  .then(res => console.log(res.data));

//Utilities
//jQuery Utilities	        ES6 JavaScript Utilities
$.isArray(someValue);	      Array.isArray(someValue);
$.inArray(item, anArray);	  someArray.indexOf(item); //> -1
$.each(someArray, (index, value) => {} );	
                        someArray.forEach((value, index) => {} );
$.map(someArray, (value, index) => {} );	
                        someArray.map((value, index) => {} );
$.grep(someArray, (index, value) =>	{} );
                        someArray.filter((value, index) => {} );
$.parseJSON(str);           JSON.parse(str);

//DOM Select/Manipulate	querySelector() and Native Browser API
//HTTP Ajax Requests	Fetch or Axios or other 3rd party Library (eg. EaselJS)
//Browser Support	Modern Browsers + Babel & Polyfills