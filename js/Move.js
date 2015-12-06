function animateDiv(){
	//var newq = makeNewPosition();
	var oldq = $('#dragon').offset();
	var center_top = oldq.top + 64;
	var center_left = oldq.left + 59;
	//alert("dragon_offset:");
	//alert(center_top);
	var newq = makeNewPosition(oldq.top, oldq.left);
	if(crackDetection(center_top, center_left) == true){
		alert(" Danger!");
	}
	else
	{
		var speed = calcSpeed([oldq.top, oldq.left], newq);
        $('#dragon').animate({ top: newq[0], left: newq[1] }, speed,
			function(){
				animateDiv();
			});
	}
};
            
function calcSpeed(prev, next) {
	var x = Math.abs(prev[1] - next[1]);
	var y = Math.abs(prev[0] - next[0]);
	var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
};