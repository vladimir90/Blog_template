$(document).ready(function(){


	//BURGER STYLE
	$(".hamburger").on('click',function(){

		$(".is-active").removeClass("is-active");
		$(this).addClass("is-active");

	});

	$(".site-overlay").on('click',function(){

		$(".hamburger").removeClass("is-active");
		
	});

	





});


//smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



//scroll reveal

window.sr = ScrollReveal();
sr.reveal('p');





