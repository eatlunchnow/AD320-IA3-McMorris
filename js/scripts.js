document.getElementById("add").addEventListener("click", function(){
		colorChange(this, '#b4136c');
});

function colorChange(element, diff){
	element.style.color = diff;
}
												
								

var x = document.getElementById("over");
x.addEventListener("mouseover", mOver);
	
function mOver(){
	document.getElementById("demo").innerHTML += "Hello there!";
}


var x = 0;

document.getElementById("randomNum").addEventListener("mousemove", numbersMouse);	
	
function numbersMouse(){
	document.getElementById("rnum").innerHTML = x += 1;
}

/*document.getElementById("clickText").addEventListener("click", clickChange);

function clickChange(){
	document.getElementById("pic").innerHTML += "How are you?";
}*/

document.getElementById("clickText").addEventListener("click", changeImg);

function changeImg(){
	var x = document.getElementById("img");
	if (x.style.display === "none"){
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

document.getElementById("move").addEventListener("contextmenu", rightClick);

function rightClick(){
	document.getElementById("mouseMove").innerHTML += "You did a right click!";
}

