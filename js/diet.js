var fod = document.getElementById("food");

//document.getElementById("fdata").addEventListener("submit", function myFunction() {
    $("#submit").click( function my(){
        
        
        var fday = document.fdata.fday.value;
        var ftime = document.fdata.ftime.value;
        
        
        
        if((fday=="Sunday") && (ftime =="8")){
            
            localStorage.setItem("sun8", fod.value);
            document.getElementById("sun8").innerHTML= window.localStorage.getItem('sun8');
        }
        else if((fday=="Sunday") && (ftime =="10")){
            localStorage.setItem("sun10", fod.value);
            document.getElementById("sun10").innerHTML= window.localStorage.getItem('sun10');
        }
        else if((fday=="Sunday") && (ftime =="12")){
            localStorage.setItem("sun12", fod.value);
            document.getElementById("sun12").innerHTML= window.localStorage.getItem('sun12');
        }
        else if((fday=="Sunday") && (ftime =="2")){
            localStorage.setItem("sun2", fod.value);
            document.getElementById("sun2").innerHTML= window.localStorage.getItem('sun2');
        }
        else if((fday=="Sunday") && (ftime =="4")){
            localStorage.setItem("sun4", fod.value);
            document.getElementById("sun4").innerHTML= window.localStorage.getItem('sun4');
        }
        else if((fday=="Sunday") && (ftime =="6")){
            localStorage.setItem("sun6", fod.value);
            document.getElementById("sun6").innerHTML= window.localStorage.getItem('sun6');
        }
        else if((fday=="Monday") && (ftime =="8")){
            localStorage.setItem("mon8", fod.value);
            document.getElementById("mon8").innerHTML= window.localStorage.getItem('mon8');
        }
        else if((fday=="Monday") && (ftime =="10")){
            localStorage.setItem("mon10", fod.value);
            document.getElementById("mon10").innerHTML= window.localStorage.getItem('mon10');
        }
        else if((fday=="Monday") && (ftime =="12")){
            localStorage.setItem("mon12", fod.value);
            document.getElementById("mon12").innerHTML= window.localStorage.getItem('mon12');
        }
        else if((fday=="Monday") && (ftime =="2")){
            localStorage.setItem("mon2", fod.value);
            document.getElementById("mon2").innerHTML= window.localStorage.getItem('mon2');
        }
        else if((fday=="Monday") && (ftime =="4")){
            localStorage.setItem("mon4", fod.value);
            document.getElementById("mon4").innerHTML= window.localStorage.getItem('mon4');
        }
        else if((fday=="Monday") && (ftime =="6")){
            localStorage.setItem("mon6", fod.value);
            document.getElementById("mon6").innerHTML= window.localStorage.getItem('mon6');
        }
        else if((fday=="Tuesday") && (ftime =="8")){
            localStorage.setItem("tue8", fod.value);
            document.getElementById("tue8").innerHTML= window.localStorage.getItem('tue8');
        }
        else if((fday=="Tuesday") && (ftime =="10")){
            localStorage.setItem("tue10", fod.value);
            document.getElementById("tue10").innerHTML= window.localStorage.getItem('tue10');
        }
        else if((fday=="Tuesday") && (ftime =="12")){
            localStorage.setItem("tue12", fod.value);
            document.getElementById("tue12").innerHTML= window.localStorage.getItem('tue12');
        }
        else if((fday=="Tuesday") && (ftime =="2")){
            localStorage.setItem("tue2", fod.value);
            document.getElementById("tue2").innerHTML= window.localStorage.getItem('tue2');
        }
        else if((fday=="Tuesday") && (ftime =="4")){
            localStorage.setItem("tue4", fod.value);
            document.getElementById("tue4").innerHTML= window.localStorage.getItem('tue4');
        }
        else if((fday=="Tuesday") && (ftime =="6")){
            localStorage.setItem("tue6", fod.value);
            document.getElementById("tue6").innerHTML= window.localStorage.getItem('tue6');
        }
        else if((fday=="Wednesday") && (ftime =="8")){
            localStorage.setItem("wed8", fod.value);
            document.getElementById("wed8").innerHTML= window.localStorage.getItem('wed8');
        }
        else if((fday=="Wednesday") && (ftime =="10")){
            localStorage.setItem("wed10", fod.value);
            document.getElementById("wed10").innerHTML= window.localStorage.getItem('wed10');
        }
        else if((fday=="Wednesday") && (ftime =="12")){
            localStorage.setItem("wed12", fod.value);
            document.getElementById("wed12").innerHTML= window.localStorage.getItem('wed12');
        }
        else if((fday=="Wednesday") && (ftime =="2")){
            localStorage.setItem("wed2", fod.value);
            document.getElementById("wed2").innerHTML= window.localStorage.getItem('wed2');
        }
        else if((fday=="Wednesday") && (ftime =="4")){
            localStorage.setItem("wed4", fod.value);
            document.getElementById("wed4").innerHTML= window.localStorage.getItem('wed4');
        }
        else if((fday=="Wednesday") && (ftime =="6")){
            localStorage.setItem("wed6", fod.value);
            document.getElementById("wed6").innerHTML= window.localStorage.getItem('wed6');
        }
        else if((fday=="Thursday") && (ftime =="8")){
            localStorage.setItem("thu8", fod.value);
            document.getElementById("thu8").innerHTML= window.localStorage.getItem('thu8');
        }
        else if((fday=="Thursday") && (ftime =="10")){
            localStorage.setItem("thu10", fod.value);
            document.getElementById("thu10").innerHTML= window.localStorage.getItem('thu10');
        }
        else if((fday=="Thursday") && (ftime =="12")){
            localStorage.setItem("thu12", fod.value);
            document.getElementById("thu12").innerHTML= window.localStorage.getItem('thu12');
        }
        else if((fday=="Thursday") && (ftime =="2")){
            localStorage.setItem("thu2", fod.value);
            document.getElementById("thu2").innerHTML= window.localStorage.getItem('thu2');
        }
        else if((fday=="Thursday") && (ftime =="4")){
            localStorage.setItem("thu4", fod.value);
            document.getElementById("thu4").innerHTML= window.localStorage.getItem('thu4');
        }
        else if((fday=="Thursday") && (ftime =="6")){
            localStorage.setItem("thu6", fod.value);
            document.getElementById("thu6").innerHTML= window.localStorage.getItem('thu6');
        }
        else if((fday=="Friday") && (ftime =="8")){
            localStorage.setItem("fri8", fod.value);
            document.getElementById("fri8").innerHTML= window.localStorage.getItem('fri8');
        }
        else if((fday=="Friday") && (ftime =="10")){
            localStorage.setItem("fri10", fod.value);
            document.getElementById("fri10").innerHTML= window.localStorage.getItem('fri10');
        }
        else if((fday=="Friday") && (ftime =="12")){
            localStorage.setItem("fri12", fod.value);
            document.getElementById("fri12").innerHTML= window.localStorage.getItem('fri12');
        }
        else if((fday=="Friday") && (ftime =="2")){
            localStorage.setItem("fri2", fod.value);
            document.getElementById("fri2").innerHTML= window.localStorage.getItem('fri2');
        }
        
        else if((fday=="Friday") && (ftime =="4")){
            localStorage.setItem("fri4", fod.value);
            document.getElementById("fri4").innerHTML= window.localStorage.getItem('fri4');
        }
        else if((fday=="Friday") && (ftime =="6")){
            localStorage.setItem("fri6", fod.value);
            document.getElementById("fri6").innerHTML= window.localStorage.getItem('fri6');
        }
        else if((fday=="Saturday") && (ftime =="8")){
            localStorage.setItem("sat8", fod.value);
            document.getElementById("sat8").innerHTML= window.localStorage.getItem('sat8');
        }
        else if((fday=="Saturday") && (ftime =="10")){
            localStorage.setItem("sat10", fod.value);
            document.getElementById("sat10").innerHTML= window.localStorage.getItem('sat10');
        }
        else if((fday=="Saturday") && (ftime =="12")){
            localStorage.setItem("sat12", fod.value);
            document.getElementById("sat12").innerHTML= window.localStorage.getItem('sat12');
        }
        else if((fday=="Saturday") && (ftime =="2")){
            localStorage.setItem("sat2", fod.value);
            document.getElementById("sat2").innerHTML= window.localStorage.getItem('sat2');
        }
        else if((fday=="Saturday") && (ftime =="4")){
            localStorage.setItem("sat4", fod.value);
            document.getElementById("sat4").innerHTML= window.localStorage.getItem('sat4');
        }
        else if((fday=="Saturday") && (ftime =="6")){
            localStorage.setItem("sat6", fod.value);
            document.getElementById("sat6").innerHTML= window.localStorage.getItem('sat6');
        }
    
    });

$("#submit").click( function mya(){
$('#food').val('');
});



var ls= window.localStorage;
$("#sun8").html(ls.getItem('sun8'));
$("#sun10").html(ls.getItem('sun10'));
$("#sun12").html(ls.getItem('sun12'));
$("#sun2").html(ls.getItem('sun2'));
$("#sun4").html(ls.getItem('sun4'));
$("#sun6").html(ls.getItem('sun6'));
$("#mon8").html(ls.getItem('mon8'));
$("#mon10").html(ls.getItem('mon10'));
$("#mon12").html(ls.getItem('mon12'));
$("#mon2").html(ls.getItem('mon2'));
$("#mon4").html(ls.getItem('mon4'));
$("#mon6").html(ls.getItem('mon6'));
$("#tue8").html(ls.getItem('tue8'));
$("#tue10").html(ls.getItem('tue10'));
$("#tue12").html(ls.getItem('tue12'));
$("#tue2").html(ls.getItem('tue2'));
$("#tue4").html(ls.getItem('tue4'));
$("#tue6").html(ls.getItem('tue6'));
$("#wed8").html(ls.getItem('wed8'));
$("#wed10").html(ls.getItem('wed10'));
$("#wed12").html(ls.getItem('wed12'));
$("#wed2").html(ls.getItem('wed2'));
$("#wed4").html(ls.getItem('wed4'));
$("#wed6").html(ls.getItem('wed6'));
$("#thu8").html(ls.getItem('thu8'));
$("#thu10").html(ls.getItem('thu10'));
$("#thu12").html(ls.getItem('thu12'));
$("#thu2").html(ls.getItem('thu2'));
$("#thu4").html(ls.getItem('thu4'));
$("#thu6").html(ls.getItem('thu6'));
$("#fri8").html(ls.getItem('fri8'));
$("#fri10").html(ls.getItem('fri10'));
$("#fri12").html(ls.getItem('fri12'));
$("#fri2").html(ls.getItem('fri2'));
$("#fri4").html(ls.getItem('fri4'));
$("#fri6").html(ls.getItem('fri6'));
$("#sat8").html(ls.getItem('sat8'));
$("#sat10").html(ls.getItem('sat10'));
$("#sat12").html(ls.getItem('sat12'));
$("#sat2").html(ls.getItem('sat2'));
$("#sat4").html(ls.getItem('sat4'));
$("#sat6").html(ls.getItem('sat6'));

/*
    
if($("td").html() == ''){
        $("td").css("background-color", "white");
    }
else{
    $("td").css("background-color", "orange");
}
*/