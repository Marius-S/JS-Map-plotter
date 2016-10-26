function clickableGrid( rows, cols, callback){
  var i = 0;
  var count_x = 0;
  var count_y = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0; r < rows; ++r){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < cols; ++c){

      var cell = tr.appendChild(document.createElement('td'));
      if (count_x != cols){
        cell.innerHTML = arrayY[count_y][count_x];
        addClass(cell, arrayY, count_y, count_x);
        count_x++;
      }else{
        count_x = 0;
        count_y++;
        cell.innerHTML = arrayY[count_y][count_x];
        addClass(cell, arrayY, count_y, count_x);
        count_x++;
      }
      cell.addEventListener('click',(function(el,r,c,i){
        return function(){
          var div_map = document.getElementById('map-plot');
          div_map.innerHTML = "";
          callback(el,r,c,i);
        }
      })(cell,r,c,i),false);
    }
  }
  return grid;
}

function addClass(cell, arrayY, count_y, count_x){
  if (arrayY[count_y][count_x] == 1){
    cell.className = 'first';
  }
  if (arrayY[count_y][count_x] == 2){
    cell.className = 'second';
  }
}
