// ******* Created by Sahil ********
"use strict"

$(document).ready(function(){
    var cal = new eventCalendar();
    var eventDate; // To capture the date on which user has clicked on the calander.
    $("#calendar").html(cal.createCalendar());

    $("#btnprevMonth").click(function(){
        $("#calendar").html(cal.prevMonth());
        $("#monthYear").html(cal.monthInString[cal.month] + " " + cal.year);
        clickableDate();
    });
    $("#btnnextMonth").click(function(){
        $("#calendar").html(cal.nextMonth());
        $("#monthYear").html(cal.monthInString[cal.month] + " " + cal.year);
        clickableDate();
    });
    $("#btnAddEvent").click(function(){
        var eventTitle =  $("#txtEventTitle").val();
        var eventDescription = $("#txtEventDescription").val();
        if(eventTitle == "" || eventDescription == ""){
            alert("Both the fields can not be empty!");
        }else{
            calanderEvents.addEvent(eventDate, eventTitle, eventDescription);
            $("#allEvents").html(calanderEvents.displayEventForDate(eventDate));
            $("#txtEventTitle").val("");
            $("#txtEventDescription").val("");
            $("#calendar").html(cal.createCalendar());
            clickableDate();
        }
    });
    $("#btnAllEvents").click(function(){
        $("#allEvents").html(calanderEvents.displayAllEvents());
    });

    function clickableDate(){
        $("td[id]").click(function(){
            eventDate = $(this).attr("id"); // capturing date clicked on the calander
            var splitEventDate = eventDate.split("/");
            var splitDate = new Date(splitEventDate[0],splitEventDate[1],splitEventDate[2]);
            $("#addEventDate").html(cal.monthInString[splitDate.getMonth()] + " " + splitDate.getDate() + ", " + splitDate.getFullYear());
            $("#allEvents").html(calanderEvents.displayEventForDate(eventDate));
            $("#addEventForm").show();
        });
    };
    $("#allEvents").html(calanderEvents.displayAllEvents());
    clickableDate();
    $("#addEventForm").hide();
});
    