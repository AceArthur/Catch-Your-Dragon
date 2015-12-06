function crackDetection(top, left){
  var signal = false;
  for(var i = 0; i < Crack_List.length; i++){
    for(var j = 0; j < Crack_List[i].Edge_List.length; j++){
      var point_1 = Crack_List[i].Edge_List[j].Point_List[0];
      var point_2 = Crack_List[i].Edge_List[j].Point_List[1];
	  var safetyDistance = 10;
	  var x2 = point_2.top;
	  var y2 = point_2.left;
	  var x1 = point_1.top;
	  var y1 = point_1.left;
	  var x0 = top;
	  var y0 = left;
	  var distance = (Math.abs((y2 - y1) * x0 +(x1 - x2) * y0 + ((x2 * y1) -(x1 * y2)))) / (Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x1 - x2, 2)));
	  if(distance <= (safetyDistance + 50)){
		signal = true;
		return signal;
	  }
	}
  }
  if(Crack_List.length <= 0){
    return signal;
  }
}