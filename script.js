function add() {

    var input = document.getElementById("input");
    var list = document.getElementById("list");

    if (input.value == "") {
        alert(" enter a task");
        return;
    }

    var li = document.createElement("li");

    li.innerHTML = input.value +
        ' <button onclick="remove(this)">Delete</button>';

    list.appendChild(li);

    input.value = "";
}

function remove(button) {
    button.parentElement.remove();
}