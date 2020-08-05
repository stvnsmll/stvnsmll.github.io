//
// Made by Steven Small, 2020.06.11
// Copyright 2020
// All Rights Reserved
//

var header;
var mainContent;
var headerInner;
var portrait;
var preHeaderExists;
var sticky;
var quoteShow1;
var quoteShow2;
//Get the scroll back to the top button
var scrollUpBtn;
var scrollUpShow;

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
		scrollUpBtn = document.getElementById("toTopBtn");
		mainContent = document.getElementById("mainContent");
        
        //Get the offset position of the navbar
        //  If no preheader exists, adjust the offset to not stutter at the top
        if (preHeaderExists == null) {
            sticky = header.offsetTop; //some browser need an extra -8 here
			scrollUpShow = (sticky * 3);
        } else {
            sticky = header.offsetTop;
			scrollUpShow = (sticky * 3);
        }
}


window.onscroll = function() {syickyHeaders()};


function syickyHeaders() {
	//if (window.pageYOffset < 7) {
	//    alert(sticky);
	//}
	//eHeaderExists);
	if (window.pageYOffset > sticky) {
		//for sub-pages not to display the big portrait:
		if (portrait != null) {
			header.classList.add("sticky");
			portrait.classList.add("stickyPortrait");
		}
		headerInner.classList.add("shadow");
		mainContent.classList.add("offsetPreHeader");
		if (window.pageYOffset > scrollUpShow){
			scrollUpBtn.classList.remove("topHide");
		} else {
			scrollUpBtn.classList.add("topHide");
		}
		
		//special item for the pre-header
		quoteShow1.classList.add("quoteShow");
		quoteShow2.classList.add("quoteShow");
	} else {
		if (portrait != null) {
			header.classList.remove("sticky");
			portrait.classList.remove("stickyPortrait");
		}
		headerInner.classList.remove("shadow");
		mainContent.classList.remove("offsetPreHeader");
		scrollUpBtn.classList.add("topHide");
	}
}
 
 function topFunction() {
	window.scrollTo({top: (sticky + 1), behavior: 'smooth'});
	//document.body.scrollTop = sticky;
	//document.documentElement.scrollTop = sticky;
}

function scrollOnce() {
	var myElement = document.getElementById('PortfolioSection');
	var topPos = myElement.offsetTop;
	window.scrollTo({top: topPos, behavior: 'auto'});
}

function bumpPageDown(){
	mainContent.classList.remove("offsetPreHeader");
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


function noEmailYet() {
	alert("\nYeah, sooo... I haven't set up the email PHP script yet...\nYou're just going to have to click the email icon button for now if you want to send me an email.\n\nsry.");
}

function showCMIpwd() {
	alert("\nIMPORTANT!!\n\nThe password to view the engineering efficiency tools is:   worksamples\n\nAfter the password entry, click 'Open in ONLYOFFICE'\n");
	var win = window.open("https://nextcloud.kleinefamilie.tk/s/N9cs6iNaxDWecbQ", '_blank');
	win.focus();
}
