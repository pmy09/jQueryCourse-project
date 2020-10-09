$(document).ready(function() {
  $("#button-create-item").on('click', function(){
    let name= $('input-create-item').val();
    //console.log(name);
    $('#input-create-item').val('');

    let html= '';
    html += '<div class="item">';
    html += '<div class="name">'+ name + '</div>';
    html += '<img src="assets/beach.jpg"></img>';
    html += '<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>';
    html += '<div class="price">499</div>';
    html += '<button class="item-add">Add to cart</button>';
    html += '<button class="item-remove">Remove</button>';
    html += '<br/>';
    html += '<a href="#">More info</a>';
    html += '<div class="more-info">Lorem ipsum dolor sit amet</div>';
    html += '</div>';

    $('#container').prepend(html)
  });
  $('#container').on('click','.item-remove', function(){
    //console.log('Hello');
    $(this).parent().remove();
  });
});
