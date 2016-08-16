//Tabs

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

//Listen

$(document).ready(function() {

    //Default Action
    $(".listen_tab_content").hide(); //Hide all content
    $("ul.listen_tabs li:first").addClass("listen_active").show(); //Activate first tab
    $(".listen_tab_content:first").show(); //Show first tab content
    
    //On Click Event
    $("ul.listen_tabs li").click(function() {
        $("ul.listen_tabs li").removeClass("listen_active"); //Remove any "active" class
        $(this).addClass("listen_active"); //Add "active" class to selected tab
        $(".listen_tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});

//Plan

$(document).ready(function() {

    //Default Action
    $(".plan_tab_content").hide(); //Hide all content
    $("ul.plan_tabs li:first").addClass("plan_active").show(); //Activate first tab
    $(".plan_tab_content:first").show(); //Show first tab content
    
    //On Click Event
    $("ul.plan_tabs li").click(function() {
        $("ul.plan_tabs li").removeClass("plan_active"); //Remove any "active" class
        $(this).addClass("plan_active"); //Add "active" class to selected tab
        $(".plan_tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});

//Deliver

$(document).ready(function() {

    //Default Action
    $(".deliver_tab_content").hide(); //Hide all content
    $("ul.deliver_tabs li:first").addClass("deliver_active").show(); //Activate first tab
    $(".deliver_tab_content:first").show(); //Show first tab content
    
    //On Click Event
    $("ul.deliver_tabs li").click(function() {
        $("ul.deliver_tabs li").removeClass("deliver_active"); //Remove any "active" class
        $(this).addClass("deliver_active"); //Add "active" class to selected tab
        $(".deliver_tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});
