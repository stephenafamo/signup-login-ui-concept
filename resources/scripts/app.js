triggerAlternate = document.getElementById('triggerAlternate');
triggerAlternate.addEventListener("click", function(){trigger('alternate', 'default'); moveOverlay('right')})

triggerDefault = document.getElementById('triggerDefault');
triggerDefault.addEventListener("click", function(){trigger('default', 'alternate'); moveOverlay('left')})


function trigger(classtoDisplay, classtoHide){

	var elemsToHide = document.getElementsByClassName(classtoHide)
	for (var i = 0; i < elemsToHide.length; i++) {
		elemsToHide[i].style.display = 'none';
	}

	var elemsToDisplay = document.getElementsByClassName(classtoDisplay)
	for (var i = 0; i < elemsToDisplay.length; i++) {
		elemsToDisplay[i].style.display = 'block';
	}
}

function moveOverlay(direction) {
	if (direction == 'right') {
		document.getElementById('overlay').style.animation = "overlayToRight 0.3s forwards";
	} else if (direction == 'left') {
		document.getElementById('overlay').style.animation = "overlayToLeft 0.3s forwards";
	}
}