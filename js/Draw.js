function draw(top, left){                              
  function Crack() {
    this.Edge_List = new Array();
  }
  function Edge() {
    this.Point_List = new Array();
  }
  function Point(top,left) {
    this.top = top;
    this.left = left;
  }                
  var num = Math.floor(4);
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  };
  ctx.lineWidth = 5-2*Math.floor(0.5+Math.random());
  ctx.strokeStyle="color:#000000";
  ctx.beginPath();
  ctx.arc(top,left,3,0,2*Math.PI,true);
  ctx.fill();                
  var val = Math.random();
  {
    var crack = new Crack();
    for (var j = num-1+Math.floor(0.5+val); j >0; j--) {
      var edge1 = new Edge();
      ctx.beginPath();
      ctx.moveTo(top, left);
      var point_1 = new Point(top+(Math.sin((2.09-0.5*Math.floor(0.5+val))*j+val*3))*40,left+(Math.cos((2.09-0.5*Math.floor(0.5+val))*j+val*3))*40);
      var point_2 = new Point(point_1.top+Math.floor((Math.random()-0.5)*70),point_1.left+Math.floor((Math.random()-0.5)*70));
      ctx.lineTo(point_1.top,point_1.left);
      ctx.lineTo(point_2.top,point_2.left);
      ctx.stroke();
      edge1.Point_List.push(point_1);
      edge1.Point_List.push(point_2);
      crack.Edge_List.push(edge1);                      
  };
  Crack_List.push(crack);
  }          
};
