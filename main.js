function addItem(name, description, price, moreInfo){
  let html= '';
  html += '<div class="item">';
  html += '<div class="name">'+ name + '</div>';
  html += '<img src="assets/beach.jpg"></img>';
  html += '<div class="description">'+ description +'</div>';
  html += '<div class="price">'+ price +'</div>';
  html += '<button class="item-add">Add to cart</button>';
  html += '<button class="item-remove">Remove</button>';
  html += '<br/>';
  html += '<a class="more-info-link" href="#">More info</a>';
  html += '<div class="more-info">'+ moreInfo +'</div>';
  html += '</div>';

  $('#container').prepend(html);
}


$(document).ready(function() {
  $('#container').on('click','.more-info-link', function(event){
    event.preventDefault();
    //$(this).parent().find('.more-info').toggle('fast');
    //$(this).parent().find('.more-info').fadeToggle('slow');
    $(this).parent().find('.more-info').slideToggle('slow');
    $(this).animate({"opacity": 0.5, "margin-left": 10}, 'fast').animate({"opacity": 1.0, "margin-left": 0}, 'fast');
  })

  $('#container').on('click','.item-remove', function(){
    //console.log('Hello');
    $(this).parent().remove();
  });

  $.ajax('data/item.json',{
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  }).done(function(response){
    //console.log(response);
    let items = response.items;
    //console.log(items);
    items.forEach(function(item){
      console.log(item);
      addItem(item.name, item.description, item.price, item.moreInfo);

    });

  }).fail(function(request, errorType, errorMessage){
    console.log(errorMessage);
  }).always(function(){

  })
});
