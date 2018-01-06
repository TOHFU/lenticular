 (function($) {
  'use strict';

  var $window = $(window);
  var $document = $(document);

  $(function() {
    lenticular.init();
  });

  var lenticular = {
    target: '.lenticular',
    $items: null,
    x: 0,
    y: 0,
    z: 0,
    isPortrait: true,
    init: function() {
      if (window.DeviceOrientationEvent && window.requestAnimationFrame) {
        this.$items = $(this.target).children();
        this.updateOrientation();
        this.draw();
        window.addEventListener('deviceorientation', this.updateTilt, false);
        window.addEventListener('resize', this.updateOrientation, false);
      } else {
        $('.debug').text("Not Supported!");
      }
    },
    updateTilt: function(event) {
      lenticular.x = Math.round(event.beta);
      lenticular.y = Math.round(event.gamma);
      lenticular.z = Math.round(event.alpha);
    },
    updateOrientation: function() {
      lenticular.isPortrait = $window.width() < $window.height();
    },
    draw: function() {
      $('.debug').text('x: ' + lenticular.x
                    + ' y: ' + lenticular.y
                    + ' z: ' + lenticular.z
                    + ' isPortrait: ' + lenticular.isPortrait);
      var degree = (lenticular.isPortrait)? lenticular.y : lenticular.x;
      lenticular.$items.removeClass('is-show');
      $(lenticular.$items.get(Math.floor((degree + 90)/(180 / lenticular.$items.length)))).addClass('is-show');
      window.requestAnimationFrame(lenticular.draw);
    }
  };


})(jQuery);