const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You should put your text into the field!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }

    inputBox.value = "";

    addData()
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        addData();
    }
})

function addData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData()