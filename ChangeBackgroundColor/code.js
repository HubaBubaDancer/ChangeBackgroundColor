let colors = ["#ffdd00", "#ff0000", "#11ff00","#0026ff", "#000000", "#ff7700", "#ff96ef"];
function randomColor() {
    return Math.floor(Math.random() * Math.floor(7));
  }
function changeBackground() {
    
    document.body.style.backgroundColor = colors[randomColor()];
 }

