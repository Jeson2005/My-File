function openPage(pageName) {
	var i, tabcontent;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	document.getElementById(pageName).style.display = "flex";
}

function logIn() {
	document.getElementById("form").style.display = "block";
}

function closeIt() {
	document.getElementById("form").style.display = "none";
}


function myAccount() {
	var x = document.getElementById("myForm").elements.namedItem("uname").value;
	document.getElementById("username").innerHTML = "Hello! " + x;

	document.getElementById("form").style.display = "none";
	document.getElementById("signUp").style.display = "none";

	if (x = null) {
		Event.preventDefault();
	}
}

