(function($){
  $.fn.extend({
    rise: function(options) {
      var defaults = {
        elevation: 10,
        speed:     0.4,
        
        onComplete: null
      };
      var o = $.extend(defaults, options);
      return $(this).each(function(){
        var $elem = $(this),
            scale = 1 + (o.elevation/100),
            blur  = o.elevation * 4,
            alpha = (blur * 2) / 100;

        $elem.css({
          '-webkit-transform':  'scale(' + scale + ')',
          '-webkit-transition': 'all ' + o.speed + 's',
          '-webkit-box-shadow': '0px 0px ' + blur + 'px rgba(0,0,0,' + alpha + ')'
        });
        
        if (o.onComplete) o.onComplete($elem);
      });
    },
    fall: function(options) {
      var defaults = {
        elevation: 0,
        speed:     0.4,
        
        onComplete: null
      };
      var o = $.extend(defaults, options);
      return $(this).each(function(){
        var $elem = $(this),
            scale = 1 + (o.elevation/100),
            blur  = o.elevation * 4,
            alpha = (blur * 2) / 100;

        $elem.css({
          '-webkit-transform':  'scale(' + scale + ')',
          '-webkit-transition': 'all ' + o.speed + 's',
          '-webkit-box-shadow': '0px 0px ' + blur + 'px rgba(0,0,0,' + alpha + ')'          
        });
        
        if (o.onComplete) o.onComplete($elem);
      });
    }
  });
})(jQuery);
