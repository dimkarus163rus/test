var el = document.querySelector(".menu");
el.onclick = function(){
	clicking();
}
function clicking(){
	target = event.target;
	if(target.closest('li')){
		if(target.classList.contains("activated")==false){
			target.classList.add('activated');
			console.log('true');
		}
		else {
			//clicking();
			target.classList.remove('activated');
		}
	}
};
function clicking(){
	target = event.target;
	if(target.closest('li')){
			target.classList.remove('activated');
	}
};