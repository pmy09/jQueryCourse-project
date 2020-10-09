$(document).ready(function() {
  $('#input-name').on('keyup', function(){
    console.log('Press!');
    let name= $(this).val();
    $('#feedback-message').text('Pleased to meet you, '+ name);
  })
  $('a').on('click', function(event){
    event.preventDefault();
    $('#feedback-message').text("That's fine");
  })
});
