function read() {
  var div_map = document.getElementById('map-plot');
  div_map.innerHTML = "";
//var table = $('table.grid');
if($('table.grid').length){

    $('table.grid').remove();
    // exists
}


  var x_line = document.getElementById("x_size").value;
  var y_line = document.getElementById("y_size").value;
  var lines = document.getElementById("text_zone").value.split('\n');
  arrayX = new Array();
  arrayY = new Array();

  if(lines.length > x_line * y_line - x_line){

    for(var i = 0;i < lines.length;i++) {
      var temp = lines[i];
      temp = parseInt(temp);
      if (arrayX.length != x_line){
        arrayX.push(temp);
      }
      else{
        arrayY.push(arrayX);
        arrayX = [];
        arrayX.push(temp);
      }
    }
  }
  else{
    div_map.innerHTML = div_map.innerHTML + "Sorry, array too small";
  }
  if (arrayX != null){
    arrayY.push(arrayX);
  }
  console.log(arrayY);
  var lastClicked;
  var grid = clickableGrid(y_line,x_line,function(el,row,col,i){
    div_map.innerHTML = div_map.innerHTML + "You clicked on row: " + row + "<br>";
    div_map.innerHTML = div_map.innerHTML + "You clicked on col: " + col + "<br>";
    div_map.innerHTML = div_map.innerHTML + "Item value: " + arrayY[row][col];
  });
  document.body.appendChild(grid);
  return arrayY;
}
