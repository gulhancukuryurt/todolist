const addTaskButton = document.querySelector('.btn');
const addTask = document.querySelector('.form-control');
const taskTable = document.querySelector('.table1');
const deleteButton = document.querySelector('.deleteAll')

addTaskButton.addEventListener('click', eventClick);
taskTable.addEventListener('click', deleteClick);

addTask.addEventListener('mouseenter', eventMouse);
addTask.addEventListener('mouseleave', eventMouse1);



function eventClick(e){

   if(addTask.value == ''){
       alert('Add Task Please!')
       e.preventDefault();
   }else {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = addTask.value;
    
     
    
    tr.appendChild(th);
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'deleteTask');
    a.innerHTML = '<i class="fa fa-close"></i>';
 
    th.appendChild(a);
    console.log(tr);
 
    taskTable.appendChild(tr);

 
    
 
 
    e.preventDefault();
    addTask.value= '';
 
 
   }
   
   
}

function deleteClick(e){
    var secim = confirm("Are you sure?");
    if(e.target.className === 'fa fa-close' && secim === true){
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
    
}

function eventMouse (e){
    e.target.style.backgroundColor = 'lavender';

}

function eventMouse1 (e){
    e.target.style.backgroundColor = 'white';
}

