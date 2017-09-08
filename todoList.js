var toDo = [];

$(document).ready(function () {
    $("#todo").click(function () {

        var input = prompt("What would you like to do?");
        while (input !== "quit") {
            if (input === "list") {
                listToDos();
            }

            if (input === "new") {
                newToDo();
            }
            if (input === "delete") {
                deleteToDo();
            }
            input = prompt("What would you like to do?")
        }

        alert("Goodbye!");

    });

});

function listToDos() {
    console.log("**********");
    for (var i = 0; i < toDo.length; ++i) {
        console.log(i + ": " + toDo[i]);
    }
    console.log("**********");
    alert("Check the console for your list of todos");
}

function deleteToDo() {
    var indexToDel = prompt("Enter the index of the todo you want to delete");
    alert("Okay, the task " + "\"" + toDo[indexToDel] + "\"" + " has been deleted from the list!");
    toDo.splice(indexToDel, 1);
}

function newToDo() {
    var newTodo = prompt("Enter a new todo");
    toDo.push(newTodo);
    alert("Okay, the task " + "\"" + newTodo +
        "\"" + " has been added to the list!");
}
