var dragonTurn; 



function animateDiv(){
  var oldq = $('#dragon').offset();
  //why 64 59?
  var center_top = oldq.top + 64;
  var center_left = oldq.left + 59;
  
  if(crackDetection(center_top, center_left) === true)
  {
    alert(" Danger!");
	//store the positions and change direction
	storePosition(center_top, center_left);
	
	var newq = makeNewPosition(oldq.top, oldq.left);
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('#dragon').animate({ top: newq[0], left: newq[1] }, speed,
    function(){
      animateDiv();
    });
	//animateDiv();
	//computeArea();
	//compute the region space where the dragon changes positions in recent 5 times
  }
  else
  {
	var newq = makeNewPosition(oldq.top, oldq.left);
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
function storePosition(center_top, center_left){
	function Edge() {
		this.Point_List = new Array();
	}
	function Point(top,left) {
		this.top = top;
		this.left = left;
	}  
	dragonTurn = new Edge();
	var turnPosition = new Point(center_top, center_left);
	dragonTurn.Point_List.push(turnPosition);
};