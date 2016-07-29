/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 */
(function ($) {
	$.extend($.validator.messages, {
	    required: "This Field is required.",
	    remote: "Please complete this field.",
	    email: "Please enter a valid email.",
	    url: "Please enter a valid URL.",
	    date: "Please enter a valid Date.",
	    dateISO: "Please enter a valid date (ISO).",
	    number: "Localised en-GB Please enter a valid number.",
	    digits: "Please enter only digits.",
	    creditcard: "Please enter a valid card.",
	    equalTo: "Please enter the same value again.",
	    extension: "Please enter a value with an accepted extension.",
	    maxlength: $.validator.format("Please enter less than {0} characters."),
	    minlength: $.validator.format("Please enter more than {0} characters."),
	    rangelength: $.validator.format("Please enter between {0} and {1} characters."),
	    range: $.validator.format("Please enter value between {0} and {1}."),
	    max: $.validator.format("Please enter a value less than or equal to {0}."),
	    min: $.validator.format("Please enter a value greater than or equal to {0}."),
	    nifES: "Please enter a valid NIF.",
	    nieES: "Please enter a valid NIE.",
	    cifES: "Please enter a valid CIF."
	});
}(jQuery));