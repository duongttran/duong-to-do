let masterTodoList = [];

updateTodoList = () => {
    let item = document.getElementById("itemInput").value;

    masterTodoList.push({
        text: `${item}`,
        isDone: false
    });
    console.log(masterTodoList)
    document.getElementById("itemInput").value = "";
    updateList2();

}

function updateList2() {
    let html = '<ul id="myList">';
    for (let i = 0; i < masterTodoList.length; i++) {
        if (masterTodoList[i].isDone == false) {
            html = html + `<li class="taskItem">${masterTodoList[i].text} <a href='#' onclick='remove(${i})'>x</a> <a href='#' onclick='toggleDone(${i})' class="progress">Undone</a></li>`;
        } else {
            html = html + `<li style="text-decoration: line-through" class="taskItem">${masterTodoList[i].text} <a href='#' onclick='remove(${i})'>x</a> <a href='#' onclick='toggleDone(${i})' style="text-decoration: line-through; color: green" class="progress">Done</a></li>`;
        }
    }
    html = html + '</ul>';
    document.getElementById("todoList").innerHTML = html;
}


function remove(i) {
    masterTodoList.splice(i, 1);
    updateList2();
    console.log(masterTodoList);
}

function toggleDone(i) {
    masterTodoList[i].isDone = !(masterTodoList[i].isDone)

    if (masterTodoList[i].isDone) {
        console.log(`${masterTodoList[i].text} is Done`)
        document.getElementsByClassName("progress")[i].innerHTML = "Done"
        document.getElementsByClassName("progress")[i].style.color = "green"
        document.getElementsByClassName("taskItem")[i].style.textDecoration = "line-through"
            //return document.getElementsByClassName("taskItem")[i].strike();
    } else {
        console.log(`${masterTodoList[i].text} is Undone`)
        document.getElementsByClassName("progress")[i].innerHTML = "Undone"
        document.getElementsByClassName("progress")[i].style.color = "goldenrod"
        document.getElementsByClassName("taskItem")[i].style.textDecoration = "none"
    }
    console.log(masterTodoList)
}

function showUndoneTasks() {
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true) {
        console.log("check box is checked")
        unDone = masterTodoList.filter(task => task.isDone = false);
        // text.style.display = "block";
    } else {
        console.log("NONE")
            //text.style.display = "none";
    }
}