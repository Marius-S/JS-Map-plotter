function read() {
var div = document.getElementById('map');
div.innerHTML = "";
var x_line = document.getElementById("x_size").value;
var y_line = document.getElementById("y_size").value;
var lines = document.getElementById("text_zone").value.split('\n');
console.log(x_line);
console.log(y_line);
console.log(lines);

//building array
arrayX = new Array();
arrayY = new Array();

//reading text zone part
for(var i = 0;i < lines.length;i++) {
  var temp = lines[i];
  temp = parseInt(temp);
  //console.log(temp);

  if (arrayX.length != x_line){
  arrayX.push(temp);
  }
  else{
    arrayY.push(arrayX);
    arrayX = [];
    arrayX.push(temp);
  }
}

//Adding last digits of not free array
if (arrayX != null){
  arrayY.push(arrayX);
}

//console.log(arrayX);
console.log(arrayY);
//div.innerHTML = div.innerHTML + "keistai";

//Adding grid drawing functionallity
var lastClicked;
var grid = clickableGrid(y_line,x_line,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
});

document.body.appendChild(grid);

//Returning results
return arrayY;
}
