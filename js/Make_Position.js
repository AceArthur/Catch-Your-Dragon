var goForword = true;   // why set it as true default
var dest_x;
var dest_y;
var slope_cos = 0.866;
var slope_sin = 0.5;

function makeNewPosition(top, left){ 
  //if it doesn't change the direction
  
  if(changeDirection(dest_x, dest_y) === true){
    goForword = true;
  }
  if(goForword === true){
    var h = 800 - 50;
    var w = 1400 - 50;
    var n_top = Math.floor(Math.random() * h);
    var n_left = Math.floor(Math.random() * w);
    while(n_top === top && n_left == left){
      n_top = Math.floor(Math.random() * h);
      n_left = Math.floor(Math.random() * w);
    }
    dest_y = n_top;
    dest_x = n_left;
    slope_sin = (dest_y - top)/Math.sqrt(Math.pow(dest_y - top, 2) + Math.pow(dest_x - left, 2));
    slope_cos = (dest_x - left)/Math.sqrt(Math.pow(dest_y - top, 2) + Math.pow(dest_x - left, 2));
    goForword = false;
  }
  
  var nh = top + 10 * slope_sin;
  var nw = left + 10 * slope_cos;
  return [nh, nw];
}