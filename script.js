window.addEventListener("load", function () {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        document.getElementById("list").innerHTML = savedTasks;
        attachRemoveListeners();
    }
});

window.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }   
});

window.addEventListener("keypress", function (e) { 
    if (e.key !== "Enter" && e.key.toLowerCase !== "e") {
        document.getElementById("input").focus();
    }
});


function clearList() {
    document.getElementById("list").innerHTML = "";
    localStorage.removeItem("tasks");
}

function addTask() {
    event.preventDefault();
    var content = document.getElementById("input").value;
    var node_index = document.getElementById("list").childElementCount;
    if (content !== "") {
        document.getElementById("list").innerHTML +=
            '<li class="p-2 hover:bg-gray-300" id="' +
            node_index +
            '">' +
            content +
            "</li>";
        attachRemoveListeners();
        saveTasks();
    }
    document.getElementById("input").value = "";
}

function attachRemoveListeners() {
    var tasks = document.getElementById("list").getElementsByTagName("li");
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("click", function () {
            this.remove();
            saveTasks();
        });
    }
}

function saveTasks() {
    var tasks = document.getElementById("list").innerHTML;
    localStorage.setItem("tasks", tasks);
}
