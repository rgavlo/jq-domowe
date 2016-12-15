$(function () {
 var mojPrzycisk = $("#mojPrzycisk");
 var mojKwadrat = $("#mojKwadrat");

mojKwadrat.css({
"height": "200px",
"width": "200px",
"background-color": "red"
});

mojPrzycisk.click(function () {

mojKwadrat.animate({
"marging-right": '100px', "width": '100px', "height": '100px'

});   function () {
                    
  }
});

