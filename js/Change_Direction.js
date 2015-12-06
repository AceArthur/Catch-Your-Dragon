function changeDirection(top, left){
  var oldq = $('#dragon').offset();
  var x1 = oldq.top + 64;
  var y1 = oldq.left + 59;
  var x2 = top;
  var y2 = left;
  var distance = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
  if(distance <= 100){
    return true;
  }
  return false;
}