function closeMe() {
	var x = document.getElementById("collapse");

	//option 1: change the style attribute directly
	x.style.display= "none";

	//option 2: change the class
	x.className= "closed";
}

function openMe() {
	var x = document.getElementById("collapse");

	//option 1: change the style attribute directly
	x.style.display= "block";

	//option 2: change the class
	x.className= "open";
}