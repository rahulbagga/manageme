"use strict"

$(document).ready(function(){

    //Events starts
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    $("#allEvents").html(calanderEvents.displayEventForDate(year + "/" + month + "/" + date));
    //Event ends

    //Diet starts
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dname = days[new Date().getDay()];
    
   if(dname == "Sunday"){
       $("#ddname").html("Day Name: Sunday" );
       $("#8").html(window.localStorage.getItem('sun8') );
       $("#10").html(window.localStorage.getItem('sun10') );
       $("#12").html(window.localStorage.getItem('sun12') );
       $("#2").html(window.localStorage.getItem('sun2') );
       $("#4").html(window.localStorage.getItem('sun4') );
       $("#6").html(window.localStorage.getItem('sun66') );
   } 
    else if(dname == "Monday"){
       $("#ddname").html("Monday's Diet Plan" );
       $("#8").html(window.localStorage.getItem('mon8') );
       $("#10").html(window.localStorage.getItem('mon10') );
       $("#12").html(window.localStorage.getItem('mon12') );
       $("#2").html(window.localStorage.getItem('mon2') );
       $("#4").html(window.localStorage.getItem('mon4') );
       $("#6").html(window.localStorage.getItem('mon6') );
   }
    else if(dname == "Tuesday"){
       $("#ddname").html("Tuesday's Diet Plan" );
       $("#8").html(window.localStorage.getItem('tue8') );
       $("#10").html(window.localStorage.getItem('tue10') );
       $("#12").html(window.localStorage.getItem('tue12') );
       $("#2").html(window.localStorage.getItem('tue2') );
       $("#4").html(window.localStorage.getItem('tue4') );
       $("#6").html(window.localStorage.getItem('tue6') );
   }
    else if(dname == "Wednesday"){
       $("#ddname").html("Wednesday's Diet Plan" );
       $("#8").html(window.localStorage.getItem('wed8') );
       $("#10").html(window.localStorage.getItem('wed10') );
       $("#12").html(window.localStorage.getItem('wed12') );
       $("#2").html(window.localStorage.getItem('wed2') );
       $("#4").html(window.localStorage.getItem('wed4') );
       $("#6").html(window.localStorage.getItem('wed6') );
   }
    else if(dname == "Thursday"){
       $("#ddname").html("Thursday's Diet Plan" );
       $("#8").html(window.localStorage.getItem('thu8') );
       $("#10").html(window.localStorage.getItem('thu10') );
       $("#12").html(window.localStorage.getItem('thu12') );
       $("#2").html(window.localStorage.getItem('thu2') );
       $("#4").html(window.localStorage.getItem('thu4') );
       $("#6").html(window.localStorage.getItem('thu6') );
   }
    else if(dname == "Friday"){
       $("#ddname").html("Friday's Diet Plan" );
       $("#8").html(window.localStorage.getItem('fri8') );
       $("#10").html(window.localStorage.getItem('fri10') );
       $("#12").html(window.localStorage.getItem('fri12') );
       $("#2").html(window.localStorage.getItem('fri2') );
       $("#4").html(window.localStorage.getItem('fri4') );
       $("#6").html(window.localStorage.getItem('fri6') );
   }
    else if(dname == "Saturday"){
       $("#ddname").html("Saturday's Diet Plan" );
       $("#8").html(window.localStorage.getItem('sat8') );
       $("#10").html(window.localStorage.getItem('sat10') );
       $("#12").html(window.localStorage.getItem('sat12') );
       $("#2").html(window.localStorage.getItem('sat2') );
       $("#4").html(window.localStorage.getItem('sat4') );
       $("#6").html(window.localStorage.getItem('sat6') );
   }
   //Diet Ends
});
