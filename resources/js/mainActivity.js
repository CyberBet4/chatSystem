var messages = document.getElementById('list');
var send = document.getElementById('send');
var more = document.getElementById('more');
var deleted = document.getElementById('deleted');
var option = document.getElementById('option');

//Event listener for send message
send.addEventListener('click', sendMsg);

//Event listener for keypress
//text.addEventListener('keypressenter', sendMsg)

//Function to send message ....
function sendMsg(){
	var text = document.getElementById('text');
	var list = document.createElement('li');
	if(text.value){
		list.innerHTML = text.value;
		messages.appendChild(list);
	}
	text.value = "";
}

//Event listener for trash to delete message ....

deleted.addEventListener('click', function(){
	var choice = confirm('You are about to delete your chats!');
	if(choice){
		var messages = document.getElementById('list');
		messages.innerHTML = "";
	}
	
});

//Event listener for option toggle ....
more.addEventListener('click', function(){

	if(more.className == "fa fa-times"){
		more.className = "fa fa-bars animated fadeIn";
		option.className += " animated slideOutLeft faster";
		setTimeout(reset, 1000);
		var open = document.getElementsByClassName('option');
		var expand = document.getElementsByClassName('cont');
		setTimeout(function(){
		open[0].style.display = "none";
		expand[0].style.gridTemplateColumns = "100%";
		adjust.style.width = "99%"; 
		setTimeout(bars, 1000);		
		}, 0350);
	
	}
	else if(more.className == "fa fa-bars"){
		more.className = "fa fa-times animated rotateIn";
		var open = document.getElementsByClassName('option');
		var expand = document.getElementsByClassName('cont');
		adjust.style.width = "75%"; 
		open[0].style.display = "inline";
		option.className += " animated slideInLeft faster";
		setTimeout(reset, 1000);
		more.title = "Close";
		expand[0].style.gridTemplateColumns = "25% 75%";
		setTimeout(times, 1000);
	}
})

function reset(){
	option.className = "option";
}
function times(){
	more.className = "fa fa-times";
}

function bars(){
	more.className = "fa fa-bars";
}

function trashAttention(){
	deleted.className += " bounceIn";
}

function remtrashAttention(){
	deleted.className = "animated";
}