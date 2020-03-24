// target the email div in print screen

var printPanel = document.querySelector('.ms-Panel-content');
var innerPrintPanel = printPanel.querySelector('.x_no-mail-styles');
var textBlocks = innerPrintPanel.querySelectorAll('p');

// Create Array from  node list
var btnsArr = Array.prototype.slice.call(textBlocks);


//Loop through each element
// El here is a paragraph

btnsArr.forEach( function(el) {
  if(el.lastElementChild.innerText == '') {
    el.lastElementChild.parentElement.remove();
  }
});