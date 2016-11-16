function createCookie(name,value,days) {
	if (days) {
		var date					= new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires					= "; expires="+date.toGMTString();
	}
	else var expires				= "";
	document.cookie					= name+"="+value+expires+"; path=/";
}

function eraseCookie(name) { createCookie(name,"",-1); }

function readCookie(name) {
	var nameEQ						= name + "=";
	var ca							= document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c						= ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function supportsFlash() {
	// Simple test for Flash support, irrespective of version
	var hasFlash					= false;
	try {
		var fo						= new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		if(fo) hasFlash				= true;
	}
	catch(e) {
		if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;
	}
	return hasFlash;
}

function supportsInput(inputtype) {
	var input						= document.createElement('input');
	input.setAttribute('type',inputtype);
	if (input.type == 'text') {
		return false;
	} else {
		return true;
	}
}

function supportsSVG() {
	/*
	Test whether SVG is supported
	IE8 and below doesn’t support it
	Older versions of Android are not the droids we’re looking for
	*/
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg',"svg").createSVGRect;
}

// Navigation dropdowns in header and footer on ajax load
function PglDropdownMenu(value) {
    if(value ==0)
    { return; }
    window.location = value;
}

// Patching CSS last-child and nth-child support for IE8
function iePatchCSS() {
	if ($("html").hasClass("ie")) {
		// Remove existing classes
		$(".ie-last").removeClass("ie-last");
		$(".ie-application-last").removeClass("ie-application-last");
		$(".ie-application-stage-report-odd").removeClass("ie-application-stage-report-odd");
		$(".ie-application-stage-report-even").removeClass("ie-application-stage-report-even");
		$(".ie-application-stage-report-first").removeClass("ie-application-stage-report-first");
		$(".ie-application-stage-report-third").removeClass("ie-application-stage-report-third");
		$(".ie-favourite-last").removeClass("ie-favourite-last");
		$(".ie-groupfour-content-first").removeClass("ie-groupfour-content-first");
		$(".ie-groupthree-content-odd").removeClass("ie-groupthree-content-odd");
		$(".ie-groupthree-content-first").removeClass("ie-groupthree-content-first");
		$(".ie-groupthree-content-second").removeClass("ie-groupthree-content-second");
		$(".ie-groupthree-content-third").removeClass("ie-groupthree-content-third");
		$(".ie-grouptwo-content-first").removeClass("ie-grouptwo-content-first");
		$(".ie-mastheadfull-info-last").removeClass("ie-mastheadfull-info-last");
		$(".ie-mastheadfull-info-haspager-last").removeClass("ie-mastheadfull-info-haspager-last");
		// Add classes
		$("img:last-child").addClass("ie-last");
		$("li:last-child").addClass("ie-last");
		$("p:last-child").addClass("ie-last");
		$(".application:last-child").addClass("ie-application-last");
		$(".application-stage-report:nth-child(2n+1)").addClass("ie-application-stage-report-odd");
		$(".application-stage-report:nth-child(2n+2)").addClass("ie-application-stage-report-even");
		$(".application-stage-report:nth-child(3n+1)").addClass("ie-application-stage-report-first");
		$(".application-stage-report:nth-child(3n+3)").addClass("ie-application-stage-report-third");
		$(".favourite:last-child").addClass("ie-favourite-last");
		$(".groupfour-content:nth-child(4n+1)").addClass("ie-groupfour-content-first");
		$(".groupthree-content:nth-child(2n+1)").addClass("ie-groupthree-content-odd");
		$(".groupthree-content:nth-child(3n+1)").addClass("ie-groupthree-content-first");
		$(".groupthree-content:nth-child(3n+2)").addClass("ie-groupthree-content-second");
		$(".groupthree-content:nth-child(3n+3)").addClass("ie-groupthree-content-third");
		$(".grouptwo-content:nth-child(2n+1)").addClass("ie-grouptwo-content-first");
		$(".mastheadfull-info:last-child").addClass("ie-mastheadfull-info-last");
		$(".mastheadfull-info-haspager").addClass("ie-mastheadfull-info-haspager-last");
	}
}

$(document).ready(function() {

	//------------------------------------------------------------------------------- Browser

	// By removing the "nojs" class from the HTML element, CSS can target situations where JS is unavailable
	$("html").removeClass("nojs");

	iePatchCSS();

	// Datepicker fallback where HTML5 native field is unsupported
	yepnope([
	{
		test : supportsInput('date'),
		nope  : ['/Files/Templates/Designs/PGLCore/scripts/libraries/jquery.ui.js','/Files/Templates/Designs/PGLCore/themes/core/css/libraries/jquery-ui-smoothness.css'],
		callback : function (url) {
			if (url === '/Files/Templates/Designs/PGLCore/themes/core/css/libraries/jquery-ui-smoothness.css') { // Only callback once
				if ($(".adventureholidays-datepicker").length) {
					// Reformat initial yy-mm-dd value of field to dd/mm/yy, and apply datepicker
					$(".adventureholidays-datepicker").val($(".adventureholidays-datepicker").val().split('-').reverse().join("/")).datepicker({
						defaultDate: +1,
						dateFormat: "dd/mm/yy",
						minDate: +1,
						maxDate: "+3Y",
						changeMonth: true,
						changeYear: true,
						showOn: "button",
						buttonImage: "/Files/Templates/Designs/PGLCore/res/img/themes/core/datepicker/calendar.gif",
						buttonImageOnly: true,
						buttonText: 'Select a leaving date, from tomorrow',
				    });
				}
			}
		}
	}
	]);

	// By adding the "noflash" class to the HTML element, CSS and JavaScript can target situations where Flash is unavailable
	if (!supportsFlash()) { $("html").addClass("noflash"); }

	/*
	Default assumption is SVGs are supported
	http://caniuse.com/#feat=svg
	*/
	if (!supportsSVG()) {

		// Replace in-page SVGs with their specified fallback, where SVGs are unsupported 
		$('img[src*="svg"]').attr("src",function() { $(this).attr("src",$(this).attr("data-nosvg")); });
		$('input[src*="svg"]').attr("src",function() { $(this).attr("src",$(this).attr("data-nosvg")); });

		// By adding the "nosvg" class to the HTML element, CSS can provide a fallback background where SVGs are unsupported
		$("html").addClass("nosvg");

	}

	//------------------------------------------------------------------------------- Functionality

	// Carousel

	var haspager					= false;

	if($(".l-masthead > .rslides > li").length) { // Mastheads that swap both text and image have a pager

		haspager					= true;

		$(".mastheadfull-info").addClass("mastheadfull-info-haspager");

		if (!$(".mastheadsplit-info").hasClass("mastheadsplit-info-image")) { // Mastheads with double images are not fixed-height
			$(".mastheadsplit-info").addClass("mastheadsplit-info-haspager");
		}

	}

	$(".rslides").responsiveSlides({
		auto: true,					// Boolean: Animate automatically, true or false
		speed: 600,					// Integer: Speed of the transition, in milliseconds
		timeout: 5000,				// Integer: Time between slide transitions, in milliseconds
		pager: haspager,			// Boolean: Show pager, true or false
		nav: false,					// Boolean: Show navigation, true or false
		random: false,				// Boolean: Randomize the order of the slides, true or false
		pause: false,				// Boolean: Pause on hover, true or false
		pauseControls: true,		// Boolean: Pause when hovering controls, true or false
		prevText: "Previous",		// String: Text for the "previous" button
		nextText: "Next",			// String: Text for the "next" button
		maxwidth: "",				// Integer: Max-width of the slideshow, in pixels
		navContainer: "",			// Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",			// Selector: Declare custom pager navigation
		namespace: "rslides",		// String: Change the default namespace used
		before: function(){},		// Function: Before callback
		after: function(){}			// Function: After callback
	});

	// Cookie notice
	
	var cookies_accepted			= readCookie('cookies_accepted');

	if (cookies_accepted == null) { $(".cookienotice").removeClass("cookienotice-hidden"); }

	$(".cookienotice-accept").bind("click",function(){
		createCookie('cookies_accepted','yes',365);
		$(".cookienotice").addClass("cookienotice-hidden");
		return false;
	});

	// Divide
	$(".divide-toggle").bind("click",function(){
		$(this).closest(".divide").toggleClass("is-divide-closed");
		return false;
	});

	// Divides are closed by default on “smaller mobile” view
	if ($(".toggle-navigation").css("visibility") !== "hidden") { $(".divide-toggle").closest(".divide").addClass("is-divide-closed"); }

	// Divides inside searchwidgets and subnavs are closed by default on “larger mobile” view
	if ($(".logo").css("margin-top") == "0px") {
		$(".searchwidget .divide-toggle").closest(".divide").addClass("is-divide-closed");
		$(".subnav .divide-toggle").closest(".divide").addClass("is-divide-closed");
	}

	// Drop-down menus
	$('.navigation-submenu-toggle').click(function(event) {
        event.stopPropagation();
		var highlightme			= false;
		if (!$(this).parent(".navigation-top-hassubmenu").hasClass("navigation-top-hassubmenu-isactive")) { highlightme = true; }
		$(".navigation-top-hassubmenu-isactive").removeClass("navigation-top-hassubmenu-isactive"); // Make all menus inactive – handles hiding one menu as another is shown
		if (highlightme) { // Show menu
			$(this).parent(".navigation-top-hassubmenu").addClass("navigation-top-hassubmenu-isactive");
			return false; // Suppress link – a second click on the same link will go through
		}
    });
    $(document).click(function() {
		$('.navigation-top-hassubmenu-isactive').removeClass("navigation-top-hassubmenu-isactive");
    });

	// Flash content lightboxes

	$("a[href*='/360/']").magnificPopup({
	    type: 'iframe',
	    callbacks: {
	        open: function () {
                // send an event to Google Analytics
	            // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
	            ga('send', 'event', 'video', 'click', $.magnificPopup.instance.currItem.src);
	        }
	    }
	});

	if ($(".logo").css("margin-top") != "0px") {
		$("a[href*='/virtual-tour/']").magnificPopup({
		    type: 'iframe',
		    callbacks: {
		        open: function () {
		            // send an event to Google Analytics
		            // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
		            ga('send', 'event', 'video', 'click', $.magnificPopup.instance.currItem.src);
		        }
		    }
		});
	}

	// Gallery lightbox
	$(".gallery").magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		},
		callbacks: {
		    open: function () {
		        // send an event to Google Analytics
		        // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
		        ga('send', 'event', 'gallery', 'click', $.magnificPopup.instance.currItem.src);
		    }
		}
	});

	// Map tooltips
	$.fn.tipsy.defaults = {
		delayIn: 0,					// delay before showing tooltip (ms)
		delayOut: 0,				// delay before hiding tooltip (ms)
		fade: true,					// fade tooltips in/out?
		fallback: '',				// fallback text to use when no tooltip text
		gravity: 's',				// gravity
		html: false,				// is tooltip content HTML?
		live: true,					// use live event support?
		offset: 0,					// pixel offset of tooltip from element
		opacity: 0.9,				// opacity of tooltip
		title: 'title',				// attribute/callback containing tooltip text
		trigger: 'hover'			// how tooltip is triggered - hover | focus | manual
	};
	$(".centres-map-point").tipsy();

	// Navigation dropdowns in header and footer
	$('.navselection').change(function () {
	    if ($(this).val() == 0)
	    { return; }
		window.location = $(this).val();
	});

	// Toggle help panels
	$(".help").addClass("is-help-closed");
	$(".toggle-help").bind("click",function(){
		$(this).parent().next(".help").toggleClass("is-help-closed");
		return false;
	});

	// Toggle mailing list opt-ins
	$("#register_subscribe").change(function () {
		$(".field-mailinglists").removeClass("field-mailinglists-isactive");
		if ($(this).is(':checked')) { $(".field-mailinglists").addClass("field-mailinglists-isactive"); }
	});
	
	// Toggle section (MyPGL)
	$(".toggle-section").bind("click",function(){
		var mytoggle			= "#" + $(this).attr("href").split("#")[1];
		$(mytoggle).removeClass("is-divide-closed");
	});

	// Toggle section jump
	$(".toggle-jump").bind("click",function(){
		$(this).toggleClass("toggle-jump-isactive");
		$(".jump").toggleClass("jump-isactive");
		return false;
	});

	// Toggle status item
	$(".toggle-icon").bind("click",function(){
		var mytoggle			= $(this).attr("data-toggle"); // Using a data attribute instead of href because DW adds a slash and breaks link
		if (!$(this).hasClass("toggle-navigation")) { // If the clicked toggle isn’t the navigation toggle
			$(".toggle-status a").removeClass("toggle-icon-isactive"); // Make status toggles inactive – handles deactivating one toggle as another is activated
			$(this).addClass("toggle-icon-isactive");
			$(".status-item").removeClass("status-item-isactive");
			$(mytoggle).addClass("status-item-isactive");
		} else {
			$(this).toggleClass("toggle-icon-isactive");
			$(mytoggle).toggleClass("navigation-isactive");
		}
		return false;
	});

	// Toggle table column
	$(".toggle-table-col").bind("click",function(){
		$(this).siblings().removeClass("toggle-table-col-isactive");
		$(this).addClass("toggle-table-col-isactive");
		var cellIndex = $(this).index();
		var headerIndex = $(this).index() + 1;
		$(this).parent().parent().next("table").find("tr").each(function(){
			$(this).find(".table-col-isactive").removeClass("table-col-isactive");
			$(this).find("td:eq(" + cellIndex + ")").addClass("table-col-isactive");
			$(this).find("th:eq(" + headerIndex + ")").addClass("table-col-isactive");
		});
		return false;
	});

	// Toggle table column for jtable (unbinds toggle table column function – like this so classes are reused)
	$(".toggle-jtable-col").unbind().bind("click",function(){
		$(this).siblings().removeClass("toggle-table-col-isactive");
		$(this).addClass("toggle-table-col-isactive");
		var cellIndex = $(this).index();
		$(this).parent().parent().next("div").find(".jtable-main-container table tr").each(function(){
			$(this).find(".jtable-col-isactive").removeClass("jtable-col-isactive");
			$(this).find("td:eq(" + cellIndex + ")").addClass("jtable-col-isactive");
			$(this).find("th:eq(" + cellIndex + ")").addClass("jtable-col-isactive");
		});
		return false;
	});

	$(".toggle-jtable-col:first-child").addClass("toggle-jtable-col-isinactive"); // The first toggle is always inactive

	$(".toggle-jtable").each(function(){ // Make the first toggle that isn’t hidden active
		$(this).find("a:not(.toggle-jtable-col-isinactive):first").trigger("click");
	});

	// Validation

	$("#login").validate({
		rules: {
			login_email: {
				email: true,
				required: true
			},
			login_password: {
				minlength: 5,
				required: true
			}
		},
		messages: {
			login_email: {
				email: "Please enter a valid email address",
				required: "Please enter your email address"
			},
			login_password: {
				minlength: "Must be at least 5 characters long",
				required: "Please enter your password"
			}
		}
	});

	$("#register_step1").validate({
		rules: {
			register_email: {
				email: true,
				required: true
			},
			register_email_confirm: {
				required: true,
				equalTo: "#register_email"
			},
			register_name_first: "required",
			register_name_last: "required",
			register_password: {
				minlength: 5,
				required: true
			},
			register_password_confirm: {
				required: true,
				equalTo: "#register_password"
			},
			register_security_answer: "required",
			register_security_question: "required"
		},
		messages: {
			register_email: {
				email: "Please enter a valid email address",
				required: "Please enter a valid email address"
			},
			register_email_confirm: {
				required: "Please enter a valid email address",
				equalTo: "Please confirm the same email address"
			},
			register_name_first: "Please enter your first name",
			register_name_last: "Please enter your last name",
			register_password: {
				minlength: "Must be at least 5 characters long",
				required: "Please enter a password"
			},
			register_password_confirm: {
				required: "Please enter a password",
				equalTo: "Please confirm the same password"
			},
			register_security_answer: "Please enter the answer for your security question",
			register_security_question: "Please choose a security question"
		}
	});

	$("#register_step2").validate({
		rules: {
			register_terms: "required"
		},
		messages: {
			register_terms: "You must agree with PGL’s Terms & Conditions"
		},
		errorPlacement: function(error, element) {
			if (element.attr("type") == "checkbox" || element.attr("type") == "radio") {
				error.insertAfter(element.parent().parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

});