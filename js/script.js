// javascript for dynamic-webpage

// create variable to grab container div (that's already present) in html body
var container = document.getElementById('container');

// create variables to store the header tag and h1 tag and nav tag you'll be creating

var header = document.createElement('header');
var title = document.createElement('h1');
var nav = document.createElement('nav');

// inject the header tag/section into the document's overall wrapper 'container' via appendChild method
container.appendChild(header);
// once our header is in place we can now start adding the h1 div and nav elements to the newly created header section
// via same appendChild method
header.appendChild(title);
header.appendChild(nav);

title.innerHTML = 'HighOnCoding';
nav.innerHTML = '<ul><li>Home</li><li>Categories</li></ul>';