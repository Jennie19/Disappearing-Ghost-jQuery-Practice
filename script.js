$("#hide-button").click(
    function(){
        $("#ghost1").hide();        
    }
);


$("#show-button").click(
    function(){
        $("#ghost1").show();  
        
    }
);

$("#say-boo").click(
    function(){
        $("#text").text("Say Boo");  
        
    }
);
$("#say-bye").click(
    function(){
        $("#text").text("Say Bye");  
        
    }
);

$("#make-yellow").click(
    function(){
        $("body").css("background-color","yellow");  
        
    }
);
$("#make-aqua").click(
    function(){
        $("body").css("background-color","aqua");  
        
    }
);

$("#happy-ghost").click(
    function(){
        $("#ghost1").attr("src","https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/chubby-happy-ghost-sticker-13206-20782-300x300.png");
        
    }
);
$("#cool-ghost").click(
    function(){
        $("#ghost1").attr("src","https://ih1.redbubble.net/image.481329259.1953/ap,550x550,12x12,1,transparent,t.u1.png");
        
    }
);





