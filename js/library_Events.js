// ******* Created by Sahil ******** 
"use strict"

var calanderEvents = {
    eventArry : [],
    eventArrayIndex : 0,
    eventId : 0,
    monthInString : ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    
    addEvent : function(dateOfEvent, titleOfEvent, descriptionOfEvent){
        if(sessionStorage.savedEvents == undefined){
            sessionStorage.savedEvents = "";
        }
        sessionStorage.savedEvents +=  this.eventId +"::"+ titleOfEvent + "::" + descriptionOfEvent + "::" + dateOfEvent + "|";
        this.eventId += 1;

    },

    getAllEvents : function(){
        var allEvents = [];
        var temp = sessionStorage.savedEvents;
        if(temp == undefined){return false;}
        var eventsInSession = temp.split("|");
        for(var i=0; i<eventsInSession.length; i++){
            var result = eventsInSession[i].split("::");
            var eachEvent = {
                eId : result[0],
                etitle : result[1],
                eDescription : result[2],
                eDateOfEvent : result[3],
            };
            allEvents[i] = eachEvent;
        }
        return allEvents;
    },

    displayAllEvents : function(){
        var allEvents = this.getAllEvents();
        if(allEvents.length > 0){
            var eventHtml = "";
            for(var i=0; i<allEvents.length-1; i++){
                eventHtml += "<div class='border mb-2'><div class='bg-light p-2'>";
                eventHtml += "<h4>"+this.getDisplaybleDate(allEvents[i].eDateOfEvent)+"</h4>";
                eventHtml += "</div><div class='p-2'>";
                eventHtml += "<h4 class='mb-1'>"+allEvents[i].etitle+"</h4>";
                eventHtml += "<p class='mb-1'>"+allEvents[i].eDescription+"</p>";
                eventHtml += "</div></div>";
            }
            return eventHtml;
        }else{
            return "<h4>No Events available</h4>";
        }
        
    },

    displayEventForDate : function(dateforEvent){
        var allEvents = this.getAllEvents();
        if(allEvents.length > 0){
            var eventHtml = "";
            for(var i=0; i<allEvents.length-1; i++){
                if(allEvents[i].eDateOfEvent == dateforEvent){
                    eventHtml += "<div class='border mb-2'><div class='bg-light p-2'>";
                    eventHtml += "<h4>"+this.getDisplaybleDate(allEvents[i].eDateOfEvent)+"</h4>";
                    eventHtml += "</div><div class='p-2'>";
                    eventHtml += "<h4 class='mb-1'>"+allEvents[i].etitle+"</h4>";
                    eventHtml += "<p class='mb-1'>"+allEvents[i].eDescription+"</p>";
                    eventHtml += "</div></div>";
                }
            }
            if(eventHtml == ""){
                return "<h4>No Events available</h4>";
            }else{
                return eventHtml;
            }
            
        }else{
            return "<h4>No Events available</h4>";
        }
    },

    hasEventOnDate : function(dateforEvent){
        var allEvents = this.getAllEvents();
        if(allEvents.length > 0){
            for(var i=0; i<allEvents.length-1; i++){
                if(allEvents[i].eDateOfEvent == dateforEvent){
                    return true
                }
            }
            return false;
        }else{
            return false;
        }
    },

    getDisplaybleDate : function(date){
        var splitEventDate = date.split("/");
        var splitDate = new Date(splitEventDate[0],splitEventDate[1],splitEventDate[2]);
        return this.monthInString[splitDate.getMonth()] + " " + splitDate.getDate() + ", " + splitDate.getFullYear()
    }
};

//Demo data for events.
if(sessionStorage.savedEvents == undefined){
    sessionStorage.savedEvents = "0::JavaScript group project deadline::I need to submit it before 11:59pm :-(::2020/3/15|"
                            +"0::Responsive Final Exam::Download lockdown browser::2020/3/14|"
                            +"0::Walmart Interview::Do print resumes::2020/3/16|"
                            +"0::Secret Assignment::Finish All of them on time::2020/3/16|"
                            +"0::JavaScript Final Project::Hold on, Keep it up::2020/3/24|"
                            +"0::JavaScript Penguin Project::Finish and upload before time::2020/3/9|"
                            +"0::Sem 2 starts::Online delivery semester::2020/4/16|";
}



