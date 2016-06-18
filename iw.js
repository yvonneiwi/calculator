$(document).ready(function(){
    var num1=0;
    var calflag="+";
    var point=false;
    
    for(var i=0;i<10;i++){
        $("#btn"+i).click({id:i},function(e){
            if($("#resline").html()=="0"){
                $("#resline").html(e.data.id);
            }else if($("#resline").html().length>=12){
                alert("no");
            }else{
                $("#resline").html($("#resline").html()+e.data.id);
                lineChange();
            }
        });
    };
    
    function lineChange(){
        if($("#resline").html().length>=9){
            $("#resline").css("font-size","36px");
        }
    };    
    
    $("#btnp").click(function(){
        num1=parseFloat($("#resline").html());
        calflag="+";
        $("#resline").html("0");
    });
    
    $("#btnm").click(function(){
        num1=parseFloat($("#resline").html());
        calflag="-";
        $("#resline").html("0");
    });
    
    $("#btncheng").click(function(){
        num1=parseFloat($("#resline").html());
        calflag="*";
        $("#resline").html("0");
    });
    
    $("#btnchu").click(function(){
        num1=parseFloat($("#resline").html());
        calflag="/";
        $("#resline").html("0");
    });
    
    $("#btnd").click(function(){
       switch(calflag){
           case "+":
               var num2=parseFloat($("#resline").html());
               $("#resline").html((num1*1000+num2*1000)/1000);
               break;
               
           case "-":
               var num2=parseFloat($("#resline").html());
               $("#resline").html((num1*1000-num2*1000)/1000);
               break;
               
           case "*":
               var num2=parseFloat($("#resline").html());
               $("#resline").html(num1*num2);
               break;
               
           case "/":
               var num2=parseFloat($("#resline").html());
               if (num2=="0"){
                   alert("no");
               }else{
                   $("#resline").html(num1/num2);
               }
               break;
               }
    });
    
    $("#btnc").click(function(){
        $("#resline").html("0");
    });
    
    $("#btnb").click(function(){
        var num1=$("#resline").html();
        num1=num1.substring(0,num1.length-1);
        $("#resline").html(num1);
    });
    
    $("#btnf").click(function(){
        var num1=parseFloat($("#resline").html());
        $("#resline").html(-1*num1);

    });
    
    $("#btnpoint").click(function(){
        var num1=parseFloat($("#resline").html());
        if(point == false){
            $("#resline").html(num1+".");
            point = true;
        }       
    });
});