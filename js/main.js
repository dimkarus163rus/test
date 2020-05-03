var el = document.querySelector(".menu");
var elv = document.querySelector(".submenu");
el.onmouseover = function(){
	clicking();
}
el.onmouseout = function(){
	clickingoff();
} 
function clicking(){
	target = event.target;
	if(target.closest('a')){
		if(target.classList.contains("activated")==false){
			target.classList.add('activated');
		}
		else {
			clickingoff();
		}
	}
};
function clickingoff(){
	target = event.target;
	if(target.closest('a')){
			target.classList.remove('activated');
	}
};
