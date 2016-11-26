var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString){
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label =	document.createElement("label");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");
		
	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton. innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

var addTask = function(){
	console.log("Add task...")
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var editTask = function(){
	console.log("edit task...");

	var listItem = this.parentNode;

	var editIput = listItem.querySelector("input[type=text]");

	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");

	if(containsClass){
		label.innerText = editInput.value;
	}else{
		editInput.value = label.innerText;
	}

	listItem.classList.toggle("editMode");
}

var deleteTask = function(){
	console.log("delete task...")
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	ul.removeChild(listItem);
}

var taskCompleted = function(){
	console.log("task complete");
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
}

var taskInComplete = function(){
	console.log("Task incomplete task...")
	var listItem = this.parentNode
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskInComplete)
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("bink list item event");
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	editButton.onclick = editTask;

	deleteButton.onclick = deleteTask;

	checkBox.onchange = checkBoxEventHandler; 
}


addButton.onclick = addTask;

for(var i = 0; i < incompleteTasksHolder.children.length; i++){
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(var i = 0; i < incompleteTasksHolder.children.length; i++){
	bindTaskEvents(completedTasksHolder.children[i], taskInComplete);
}




