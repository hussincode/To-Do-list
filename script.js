const inputbox = document.getElementById('input');
const list = document.getElementById('todoList');

function addtask() {
    const value = inputbox.value.trim();
    if (value === '') {
        alert('Please enter a task');
        return;
    }

    let li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = "\u00D7";
    li.appendChild(span);

    inputbox.value = '';
    savedata();
}

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
});

function savedata() {
    localStorage.setItem('data', list.innerHTML);
}
function showdata() {
    list.innerHTML = localStorage.getItem('data') || '';
}
showdata();