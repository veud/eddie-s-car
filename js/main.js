$(".q_part__questions").on("click", function(){
  var answer = $(this).next();


  $(".q_part__answers").not(answer).slideUp(1000);
  answer.slideToggle(1000);
});


$('.header_button').click(function() { 
  
  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign').fadeOut();
  }
});


$(function($){
	$('[name="phone"]').mask("+9(999) 999-9999");
});
