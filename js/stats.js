$(document).ready(function() {

	var waypoint = new Waypoint({
		element: document.getElementById('stats'),
		handler: function(direction) {

			if (direction == "down") {
				startCount();
			}

		},
		offset: 'bottom-in-view'
	});

});

function startCount() {

	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

}


/* Commented out existing code exactly as-is

$( document ).ready(function() {
	
	  startCount();
	
	  $(window).scroll(function(){
    
	    var elem = $('#footer');
    
	    if ( elem.viewportOffset().top > $(window).height() ) {
	      // elem is below the fold.
	      $('#stats').css( 'background', '#e8e9ea' );
		  $('.count').css( 'color', '#55c6d4' );
		  $('#shiva').css( 'color', '#cccccc' );
		  $('.stat1').css( 'color', '#55c6d4' );
		  $('.stat2').css( 'color', '#55c6d4' );
		  $('.stat3').css( 'color', '#55c6d4' );
	    } else {
	      // elem is above the fold.
	      $('#stats').css( 'background', '#e8e9ea' );
		  $('.count').css( 'color', '#55c6d4' );
		  $('.stat1').css( 'color', '#55c6d4' );
		  $('.stat2').css( 'color', '#55c6d4' );
		  $('.stat3').css( 'color', '#55c6d4' );
	    }
	  });
});

function startCount() {

	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 1000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
	
}

*/