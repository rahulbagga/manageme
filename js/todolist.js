$(document).ready(function(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();

    if(sessionStorage.todolist == undefined){
        sessionStorage.todolist = "";
    }
    function addTask(tasktitle,priority){
        sessionStorage.todolist += tasktitle + "::"+priority+"::" +year+"/"+month+"/"+date+"|";
    }
    function getAllTask(){
        var allTask = sessionStorage.todolist.split("|");
        var taskHTML = ""
        for(var i=0; i<allTask.length-1; i++){
            var individualTask = allTask[i].split("::");
            if(individualTask[1] == 1){
                taskHTML += "<div class='border mb-2'><div class='bg-light bg-danger text-white p-2'>";
            }
            else if(individualTask[1] == 2){
                taskHTML += "<div class='border  mb-2'><div class='bg-light bg-warning text-white p-2'>";
            }
            else{
                taskHTML += "<div class='border  mb-2'><div class='bg-light bg-secondary text-white p-2'>";
            }
            
            taskHTML += "<h4>"+individualTask[0]+"</h4>";
            taskHTML += "</div></div>";
        }
        return taskHTML;
    }
    $("#btnAddTask").click(function(){
        var taskTitle =  $("#txtTaskTitle").val();
        if(taskTitle == ""){
            alert("Tast title is rquired!");
        }
        else{
            var priority = $("#ddPriority").val();
            addTask(taskTitle,priority);
            $("#allTasks").html(getAllTask());
            $("txtTaskTitle").val("").focus();
            alert("Task Added");
        }
    })
    $("#allTasks").html(getAllTask());
});