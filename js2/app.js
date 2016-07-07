

$(document).on('ready', function() {

	$('a[href^="#"]').on('click', function(event) {
		var target = $($(this).attr('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top-95
			}, 750);
		}
	});


 	var winHeight = $(window).height() + 120, 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

	$(window).scroll(function(){
    var top = ($(window).scrollTop() > 0) ? $(window).scrollTop() : 1;
    $('.fade').stop(true, true).fadeTo(0, 1 / top);
    $('.fade').css('top', top * 0.5);             
	});
  /* Set the max scrollable area */


	$(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
	 max = $(document).height() - $(window).height();
	 progressBar.attr('max', max);
	 console.log(max);
	});
	
	   $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

	$('.remodal-close').click(function () {
		
	});


	$('body').scrollspy({
	   offset: 135
	});

	var offsetHeight = 135;

	$('#sidebar').scrollspy({
		offset: offsetHeight
	});

	$('>li a').click(function (event) {
		var scrollPos = $('body > .container').find($(this).attr('href')).offset().top - (offsetHeight-1);
		$('body,html').animate({
			scrollTop: scrollPos
		}, 500, function () {
			$(".btn-navbar").click();
		});
		return false;
	});

	
});
