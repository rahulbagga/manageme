// ******* Created by Sahil ********
"use strict"

var eventCalendar = function(){
    var today = new Date();
    var firstDateOfMonth = new Date(today.getFullYear(),today.getMonth(),1);
    
    this.year = firstDateOfMonth.getFullYear();
    this.month = firstDateOfMonth.getMonth()
    this.monthInString = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
};

eventCalendar.prototype.createCalendar = function(){
    var calendarhtml = "<tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>";
    var firstDayOfWeekOfMonth = this.getFirstDayOfWeekOfMonth();
    var lastDayOfTheMonth = this.getLastDayOfMonth();
    var rows = (lastDayOfTheMonth + firstDayOfWeekOfMonth <= 35)? rows=5 : rows=6;
    var calendarDates = 1;
    for(var i=0; i<rows; i++){
        calendarhtml += "<tr>";
        for(var k = 0; k < 7; k++){
            if(k >= firstDayOfWeekOfMonth && calendarDates <= lastDayOfTheMonth){
                if(calanderEvents.hasEventOnDate(this.year+"/"+this.month+"/"+calendarDates)){
                    calendarhtml += "<td id='"+this.year+"/"+this.month+"/"+calendarDates+"' class='text-right align-text-top bg-success'>" + calendarDates + "</td>";
                }
                else{
                    calendarhtml += "<td id='"+this.year+"/"+this.month+"/"+calendarDates+"' class='text-right align-text-top'>" + calendarDates + "</td>";
                }
                
                calendarDates++;
            }
            else{
                calendarhtml += "<td>" + " " + "</td>";
            }
        }
        firstDayOfWeekOfMonth = 0;
        calendarhtml += "</tr>";
    }

    var eventsofthismonth =  calanderEvents.getAllEvents();
    return calendarhtml;
};

eventCalendar.prototype.getLastDayOfMonth = function(){
    var lastDateOfMonth;
    if(this.month == 11){
        lastDateOfMonth = new Date(this.year+1,0,0);
    }
    else{
        lastDateOfMonth = new Date(this.year,this.month+1,0);
    }
    return lastDateOfMonth.getDate();
};

eventCalendar.prototype.getFirstDayOfWeekOfMonth = function(){
    var day = new Date(this.year, this.month,1);
    return day.getDay();
};

eventCalendar.prototype.nextMonth = function(){
    if(this.month == 11){
        this.month = 0;
        this.year += 1;
    }
    else{
        this.month += 1;
    }
    return this.createCalendar();
}

eventCalendar.prototype.prevMonth = function(){
    if(this.month == 0){
        this.month = 11;
        this.year -= 1;
    }
    else{
        this.month -= 1;
    }
    return this.createCalendar();
}
