$(document).ready(function(){
    $('body').smoothScroll().scrollspy({target: ".nav", offset: 10});
  $("#navlist a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ 
        scrollTop: $(hash).offset().top.smoothScroll() 
      }, 2000, function(){
        var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
      });
    } 
  });
});  
  