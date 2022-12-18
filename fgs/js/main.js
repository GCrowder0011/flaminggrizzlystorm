function msg() {
  alert("Button not yet implemented!");
}
//Clickable Rows "In Theory" - Dont know exactly how to get it to work, but works on codepen for another similar table (https://codepen.io/kvana/pen/adMLpb)
$('.emp-list tr').click(function() {
 $(this).children('td').children('input').prop('checked', true);
  
  $('.emp-list tr').removeClass('selected');
  $(this).toggleClass('selected');

});
function login(){
	window.location.href = 'pages/employee.html';
}
function register(){
	window.location.href = '../index.html';
}
function logout(){
	window.location.href = '../index.html';
}
function savesettings(){
	window.location.href = 'employee.html';
}
function discardsettings(){
	window.location.href = 'employee.html';
}
function editemploy(){
	window.location.href = 'editemploy.html';
}