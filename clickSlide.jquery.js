(function($){
  $.fn.clickSlide = function(){
  //Set blockTitle var as child of THIS.
    var blockTitle = $(this).children('li').children('.blockTitle');
  //function to generate data-height attribute and default height to 0.
    blockTitle.siblings('ul').each(function(){
      $(this).attr('data-height',$(this).height());
    }).height('0');
  //Read More Hover Fade
    blockTitle.hover(function(){
      $(this).children('.readMore').fadeIn();
    }, function(){
      $(this).children('.readMore').fadeOut();
    });
  //Bind Click event to all .blockTitle elements
    blockTitle.click(function(){
  //UL are used as the inside drawer. 
      var ul = $(this).siblings('ul'),
          height = ul.attr('data-height');
  //Close any drawers that have selected class then remove class on click.
<<<<<<< HEAD
    $('.selected').siblings().animate({height:'0'},200).css('padding','0').removeClass('selected');
=======
    $('.selected').siblings().removeClass('selected').animate({height:'0'},200).css('padding','0');
>>>>>>> eff149900ac896541c71f3a9e000bce06bb5800a
  //Open and close the drawer based on height.
    if(ul.height() > 0){
      ul.animate({height: '0'}).css('padding','0');
      $(this).removeClass('selected');
    } else {
      $(this).addClass('selected');
      ul.animate({height: ''+height+''}).css('padding','15px 10px');
    }
    });
  };
}(jQuery));