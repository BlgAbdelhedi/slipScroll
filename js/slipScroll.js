$( document ).ready(function(){
  let setLogo = function() {

    $('.moveable').each(function() {
      $(this).css('top',
        $('.default').offset().top -
        $(this).closest('.container').offset().top
      );
    });


  };

  $(document).scroll(function() {
      $('.moveable').css('visibility', 'visible')
      setLogo();
  });

  setLogo();

})
