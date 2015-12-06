function makeNewPosition(top, left){
                                      
	// Get viewport dimensions (remove the dimension of the div)
	//var h = top + 50;
	//var w = left + 50;
                                      
	if(changeDirection(dest_x, dest_y) == true){
		goForword = true;
	}
	if(goForword == true){
		//alert("NEW DIRECTION");
		var h = $(window).height() - 50;
		var w = $(window).width() - 50;
		var n_top = Math.floor(Math.random() * h);
		var n_left = Math.floor(Math.random() * w);
		while(n_top == top && n_left == left){
			var n_top = Math.floor(Math.random() * h);
			var n_left = Math.floor(Math.random() * w);
		}
		//var newGoal = setNewDirection();
		//dest_x = newGoal.n_top;
		//dest_y = newGoal.n_left;
        dest_x = n_top;
        dest_y = n_left;
        //alert(dest_x);
        slope_sin = (dest_y - left)/Math.sqrt(Math.pow(dest_y - left, 2) + Math.pow(dest_x - top, 2));
        slope_cos = (dest_x - top)/Math.sqrt(Math.pow(dest_y - left, 2) + Math.pow(dest_x - top, 2));
        goForword = false;
	}
                                      
                                      
		//alert(slope_cos, slope_sin);
		var nh = top + 20 * slope_cos;
		var nw = left + 20 * slope_sin;
		//COUNT--;
		return [nh, nw];
}