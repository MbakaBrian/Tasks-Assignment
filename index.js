const submit = document.getElementById('submitButton');
const newTask= document.getElementById("textInput");

newTask.addEventListener('input', function () {
    submit.disabled = newTask.value.trim() === '';
});

document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();
    var entered_data = newTask.value.trim();
    console.log(entered_data);
    if (entered_data === '') {
        alert("Cannot enter an blank field");
        newTask.value = '';
        submit.disabled = true;

    } else {
        const li = document.createElement("li");
        li.textContent = entered_data;
        document.querySelector("#firstEntry").appendChild(li);
        newTask.value = '';
        submit.disabled = true;
    }
});
