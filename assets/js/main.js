jQuery(document).ready(function($) {


	var mastheadheight = $('.header').outerHeight();
	//console.log(mastheadheight);
	$(".banner,.main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.header').addClass('fixed-header');
	    }
	    else {
	        $('.header').removeClass('fixed-header');
	    }
	}).scroll();


});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "assets/images/Resume.png";
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var div = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
div.onclick = function() {
  modal.style.display = "none";
}