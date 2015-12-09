var goForword = true;   // why set it as true default
var dest_x;
var dest_y;
var slope_cos;
var slope_sin;

function makeNewPosition(top, left){ 
  //what are dest_x dest_y  used for ?
  if(changeDirection(dest_x, dest_y) === true){
    goForword = true;
  }
  if(goForword === true){
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var n_top = Math.floor(Math.random() * h);
    var n_left = Math.floor(Math.random() * w);
    while(n_top === top && n_left == left){
      n_top = Math.floor(Math.random() * h);
      n_left = Math.floor(Math.random() * w);
    }
    dest_x = n_top;
    dest_y = n_left;
    slope_sin = (dest_y - left)/Math.sqrt(Math.pow(dest_y - left, 2) + Math.pow(dest_x - top, 2));
    slope_cos = (dest_x - top)/Math.sqrt(Math.pow(dest_y - left, 2) + Math.pow(dest_x - top, 2));
    goForword = false;
  }
  var nh = top + 20 * slope_cos;
  var nw = left + 20 * slope_sin;
  return [nh, nw];
}