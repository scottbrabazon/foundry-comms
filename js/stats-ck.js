function startCount(){$(".count").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:1e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})})}$(document).ready(function(){startCount();$(window).scroll(function(){var e=$("#footer");if(e.viewportOffset().top>$(window).height()){$("#stats").css("background","#e8e9ea");$(".count").css("color","#55c6d4");$("#shiva").css("color","#cccccc");$(".stat1").css("color","#55c6d4");$(".stat2").css("color","#55c6d4");$(".stat3").css("color","#55c6d4")}else{$("#stats").css("background","#e8e9ea");$(".count").css("color","#55c6d4");$(".stat1").css("color","#55c6d4");$(".stat2").css("color","#55c6d4");$(".stat3").css("color","#55c6d4")}})});