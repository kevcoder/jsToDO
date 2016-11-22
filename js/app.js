var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

var addTask = function(){
	console.log("Add task...")
}

var editTask = function(){
	console.log("edit task...")
}

var deleteTask = function(){
	console.log("delete task...")
}

var taskCompleted = function(){
	console.log("task complete")
}

var taskInComplete = function(){
	console.log("Task incomplete task...")
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("bink list item event");






}


addButton.onclick = addTask;

for(var i = 0; i < incompleteTasksHolder.children.length; i++){
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(var i = 0; i < incompleteTasksHolder.children.length; i++){
	bindTaskEvents(completedTasksHolder.children[i], taskInComplete);
}




