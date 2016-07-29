
// preload the spinner image prior to submission
var spinnerImage = $('<img src="/Files/Templates/Designs/PGLCore/scripts/spinner.gif" />');

$('#submit').on('click', function (e) {

    if ($("#contactForm").valid()) {

        var callbackaction = $('#callbackAction').val();

        $(this).parent().append('<p id="contactFormSpinner" style="font-size:larger;"><img style="width:24px; height:24px; display:inline; position:relative; top: 4px;" src="/Files/Templates/Designs/PGLCore/scripts/spinner-blue.gif" /> Please wait..</p>');
        $(this).hide();
        
        try {
            // send an event to Google Analytics
            // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
            ga('send', 'event', 'contactForm', 'submit', callbackaction);

            // Send PPC event with fake page url
            switch (callbackaction) {
                case 'submitQuoteRequest' : ga('send', 'pageview', '/Contact-Us/Request-a-Quote/Thanks');
                    break;
                case 'submitEnquiry': ga('send', 'pageview', '/Contact-Us/Email-Us/Thanks');
                    break;
                case 'submitBrochureRequest' : ga('send', 'pageview', '/Contact-Us/Brochure-Request/Thanks');
                    break;
            }
        }
        catch (ex) {}

        $.ajax({
            type: "POST",
            dataType: "json",
            url: "/Ajax/ContactForms/ContactFormCallbacks.aspx?callbackaction=" + callbackaction,
            data: $("#contactForm").serialize(),
            success: function (data) {
                $("#contactFormSpinner").hide();
                $("#submitSuccess").show();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#contactFormSpinner").hide();
                $("#submitFail").show();
            }
        });
    }

    return false;
});

function SetupJQueryUI() {
    //$(".datepicker").datepicker({
    //    dateFormat: 'dd/mm/yy'
    //});

    //$(".datepicker").each(function() {
    //    $('#' + this.id).datepicker({
    //        dateFormat: 'dd/mm/yy'
    //    });
    //})

    $(".spinner").spinner();
}

function GetAudience() {
    var audience = 'corporate';
    var url = document.URL.toLowerCase();
    if (url != null) {
        if (url.indexOf("school-trips") > -1) {
            audience = 'schools';
        }
        else if (url.indexOf("group-residentials") > -1) {
            audience = 'groups';
        }
        else if (url.indexOf("adventure-holidays") > -1) {
            audience = 'holidays';
        }
        else if (url.indexOf("family-adventures") > -1) {
            audience = 'families';
        }
        else if (url.indexOf("international") > -1) {
            audience = 'international';
        }
        else if (url.indexOf("about-us") > -1) {
            audience = 'recruitment';
        }
    }
    return audience;
}

function AddPostcodeValidation() {
    jQuery.validator.addMethod("postcodeUK", function (value, element) {
        return this.optional(element) || /[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][ABD-HJLNP-UW-Z]{2}/i.test(value);
    }, "Please specify a valid Postcode");
}

function AddPhoneNumberValidation() {
    jQuery.validator.addMethod('phoneUK', function (phone_number, element) {
        return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/);
    }, 'Please specify a valid phone number');
}

function AddDateValidation() {
    jQuery.validator.addMethod('datepicker', function (value, element) {
        // return this.optional(element) || value.match("/^dd?-dd?-dd$/");
        //return this.optional(element) || /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value);
        return this.optional(element) || value.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    }, 'Please enter a date in the format dd/mm/yyyy.');
}

function PopulateTitles() {
    $.getJSON("/ajax/contactforms/contactformcallbacks.aspx?callbackaction=getTitles",
    function (data) {
        $.each(data, function (index, item) {
            $('#contactTitle').append($('<option>').text(item.Text).attr('value', item.Value));
        })
    });
}

function PopulateCountries() {
    $.getJSON("/ajax/contactforms/contactformcallbacks.aspx?callbackaction=countries",
    function (data) {
        $.each(data, function (index, item) {
            $('#clientCountry').append($('<option>').text(item.Text).attr('value', item.Value));
        })
        // pre-select to United Kingdom
        $("#clientCountry").val("UK");
    });
}

