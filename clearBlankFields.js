// Target the inner print panel and grab all the paragraphs

var printPanel = document.querySelector('.ms-Panel-content');
var innerPrintPanel = printPanel.querySelector('.x_no-mail-styles');
var textBlocks = innerPrintPanel.querySelectorAll('p');

// Create Array from  node list of paragraphs
var btnsArr = Array.prototype.slice.call(textBlocks);


//Loop through each element and check to see if the span has content.  If not, remove the parent element 


btnsArr.forEach( function(el) {
  if(el.lastElementChild.innerText == '') {
    el.lastElementChild.parentElement.remove();
  }
});