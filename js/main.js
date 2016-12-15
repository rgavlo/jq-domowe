
$(function () {
    var mojPrzycisk = $("#mojPrzycisk");
    var mojKwadrat = $("#mojKwadrat");
    
    mojPrzycisk.button();
    mojKwadrat.css({"height": "200px", "width": "200px", "color": "red"});
    
    function animacja () {
            mojPrzycisk.click(function () {

        mojKwadrat.css({"marging-right": '100px' , "width": '100px', "height": '100px'});


    });
        
    }
    
    
});