

while(true){
  var pizza = prompt('What is your favorite food?');
  if (pizza === 'Pizza'){
    console.log('You are a pizza fan! ');
    break;
  }
}

var prompt = prompt('Hi, Welcome to my website! What is Your Name?');
console.log(prompt);
var randomID = Math.floor(Math.random()*1000);
alert('Hi ' + prompt + ', Your Random Id# is ' + randomID);

var x = 'Hide Video';

$('#hide_button').on('click', function(){
  var btn_text = $('#hide_button').text();
  if(btn_text === 'Hide This Video')
    {
        x = 'Hide This Video';
      	$('#video').slideToggle();
	      $('#hide_button').text(x);
      
    }
  else {
        x = 'Show This Video';
        $('#video').slideToggle();
	      $('#hide_button').text(x);
  }

})


var attr_name = $('#idname').attr('name');
var attr_guest = $('#idname').attr('guest');

if(attr_name === 'guest_name' && attr_guest === 'guest'){
  document.querySelector('#idname').textContent = "Guest Name: " + prompt + " and ID Number: " + randomID;
  $('#idname').css('color', 'black');
}

