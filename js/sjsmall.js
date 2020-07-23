//
// Made by Steven Small, 2020.06.11
// Copyright 2020
// All Rights Reserved
//

var header;
var headerInner;
var portrait;
var preHeaderExists;
var sticky;
var quoteShow1;
var quoteShow2;

//Listen for a click of the hamburger menu:
window.onload = function () {
    $(".hamburger").click(function() {
        $(this).toggleClass("open");
        $(".dropdown-content").toggleClass("menuShow");
        $(".drop-links").toggleClass("menuShow");
    })
    // Get the header
        header = document.getElementById("stickyHeader");
        headerInner = document.getElementById("realHeader");
        portrait = document.getElementById("myPortrait");
		quoteShow1 = document.getElementById("quoteID1");
		quoteShow2 = document.getElementById("quoteID2");
        preHeaderExists = document.getElementById("preHeaderID");
        
        //Get the offset position of the navbar
        //  If no preheader exists, adjust the offset to not stutter at the top
        if (preHeaderExists == null) {
            sticky = header.offsetTop; //some browser need an extra -8 here
        } else {
            sticky = header.offsetTop;
        }
}


window.onscroll = function() {syickyHeaders()};


function syickyHeaders() {
          //if (window.pageYOffset < 7) {
          //    alert(sticky);
          //}
          //eHeaderExists);
          if (window.pageYOffset > sticky) {
			  if (portrait != null) {
				header.classList.add("sticky");
				portrait.classList.add("stickyPortrait");
			  }
            headerInner.classList.add("shadow");
			quoteShow1.classList.add("quoteShow");
			quoteShow2.classList.add("quoteShow");
          } else {
			  if (portrait != null) {
				header.classList.remove("sticky");
				portrait.classList.remove("stickyPortrait");
			  }
            headerInner.classList.remove("shadow");
            
          }
        }
          

//Listen for a click outside of the hamburger - close the menu if so:
$(document).click(function(event) { 
    $target = $(event.target);
    if(!$target.closest('.hamburger').length && 
    $('.dropdown-content').is(":visible")) {
        $(".hamburger").removeClass("open");
        $(".dropdown-content").removeClass("menuShow");
        $(".drop-links").removeClass("menuShow");
    }   
});
