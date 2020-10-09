$(document).ready(function() {
  $('.box').on('click', '.box-button', function() {
    //console.log('Hello')
    $(this).parent().toggleClass('highlight');
  });


});
