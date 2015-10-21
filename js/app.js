$('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-95
        }, 750);
    }
});

$(document).on('ready', function() {  
  var winHeight = $(window).height() + 120, 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */


  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
	 max = docHeight - winHeight;
	 progressBar.attr('max', max);
	 console.log(max);
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



