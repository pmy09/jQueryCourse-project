$(document).ready(function() {
  $('#snow').parent().find('.title').addClass('highlight');

  console.log($('#snow').closest('.temperature'));
  console.log($('#snow').closest('#container'));
});
