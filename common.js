
$(function(){

  $('.depth1').mouseover(function() {
    $(this).find('.depth2').stop().slideDown();
  }).mouseout(function() {
    $(this).find('.depth2').stop().slideUp();
  });
  $('.depth2').mouseover(function(){
    $(this).removeClass('on');
    $(this).addClass('on');
  });
////////////////////////
});