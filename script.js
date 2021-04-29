// Toevoeg knop
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

// Clear knop
var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems);

// Leegmaken knop
var leegmakenButton = document.getElementById("empty-button");
leegmakenButton.addEventListener("click", emptyList);

// Inputveld
var toDoEntryBox = document.getElementById("todo-entry-box");

// Todo lijst
var toDoList = document.getElementById("todo-list");

function addToDoItem() {
    var entryText = toDoEntryBox.value;
    newToDoItem(entryText);
    document.getElementById("todo-adder").reset();
}

function newToDoItem(entryText) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(entryText);
    toDoItem.appendChild(toDoText);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
    toDoList.appendChild(toDoItem);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");
    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}