window.addEventListener("load", init);

function init(){

  var grid = document.querySelectorAll(".overwiew-grid_items");
  
  grid.forEach(function(item){
    var parent = item.parentElement;
    var widthParent = parent.offsetWidth;
    var result = widthParent / 6;
    parent.style.cssText = "grid-template-columns: repeat(" + 6 +", " + result + "px ); grid-auto-rows: " + result + "px;";
    
  })
}