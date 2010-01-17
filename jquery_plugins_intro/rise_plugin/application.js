(function($) {
  $(document).ready(function(){
    
    $('a.rise').click(function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      var callout = $(this).attr('href');
      
      $(callout).rise({
        elevation: 10,
        speed: 1,
        onComplete: function ($elem) {
          $elem.prepend($('<a></a>').hide().fadeIn().addClass('fall').click(function(){
            $elem.fall({
              onComplete: function($elem) {
                $elem.find('.fall').fadeOut().remove()
              }
            });
          }))
        }
      })
    });
    
  });
})(jQuery);
