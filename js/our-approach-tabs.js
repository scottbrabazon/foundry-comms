$(document).ready(function() {

    //Default Action
    $(".section_tab_content").hide(); //Hide all content
    $("ul.section_tabs li:first").addClass("section_active").show(); //Activate first section tab
    $(".section_tab_content:first").show(); //Show first section tab content
    
    //On Click Event
    $("ul.section_tabs li").click(function() {
        $("ul.section_tabs li").removeClass("section_active"); //Remove any "active" class
        $(this).addClass("section_active"); //Add "active" class to selected section tab
        $(".section_tab_content").hide(); //Hide all section tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active section tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});

$(document).ready(function() {

    //Default Action
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content
    
    //On Click Event
    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});
