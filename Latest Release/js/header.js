$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#slider');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#mainNav').css('background', '#2C3E50');
       } else {
          $('#mainNav').css('background', 'transparent');
       }
   });
});