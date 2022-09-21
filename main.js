/*
------------------
Project name : To do Application
Use : Vanilla JavaScript dom
Author : Safikur Rahman
Date : 21/09/2022
------------------
*/

// Select Elements
const inputField = document.querySelector('#new-task');
const form = document.querySelector('form');
const itemsContainerUl = document.querySelector('#items');
const completeContainerUl = document.querySelector('.complete-list ul');

// Create Task Function 
function createTask(task) {
    // create li element
    const li = document.createElement('li');
    // create checkbox input
    const checkbox = document.createElement('input');
    // create label element
    const label = document.createElement('label');

    // set label innerText and input checkbox
    label.innerText = task;
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.appendChild(label);
    return li;
}
/// Add New Task Function
function addNewTask(event) {
    event.preventDefault();
    const li = createTask(inputField.value);
    itemsContainerUl.appendChild(li);

    // incomplete function and a argument a complete function
    incompleteTask(li, completeTask);
}
// Complete Task Function
function completeTask() {
    const liContainer = this.parentNode;
    /// create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    // li container here
    liContainer.appendChild(deleteBtn);
    // remove checkbox before send complete container
    const checkbox = liContainer.querySelector('input[type="checkbox"]');
    checkbox.remove();
    // send complete Container ul there
    completeContainerUl.appendChild(liContainer)
    finishTask(liContainer, deleteTask);
}
// Delete Task Function
function deleteTask() {
    const deleteLi = this.parentNode;
    const liUl = deleteLi.parentNode;
    liUl.removeChild(deleteLi)
}
// In Complete Task Function
function incompleteTask(li, onchangeCheckBox) {
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.onchange = onchangeCheckBox;
}
// Finish Task Function
function finishTask(li, deleteBtnClick) {
    const deleteBtn = li.querySelector('.delete');
    deleteBtn.onclick = deleteBtnClick;
}
// Delete By Default Task Use For Loop
for (let i = 0; i < itemsContainerUl.children.length; i++) {
    incompleteTask(itemsContainerUl.children[i], completeTask);
};
for (let i = 0; i < completeContainerUl.children.length; i++) {
    finishTask(completeContainerUl.children[i], deleteTask);
};
// Submit Form
form.addEventListener('submit', addNewTask);