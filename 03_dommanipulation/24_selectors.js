 //document.getelementById
 console.log(document.getElementById('task-title'));
 //get things from the element
 console.log(document.getElementById('task-title').id);
 console.log(document.getElementById('task-title').className);
 const taskTitle = document.getElementById('task-title');
 //change styling
 taskTitle.style.background = '#333';
 taskTitle.style.color = '#fff';
 taskTitle.style.padding = '5px';
 //change content
 taskTitle.textContent = 'Task List ';
 taskTitle.innerText = 'My Tasks';
 taskTitle.innerHTML = '<span style="color:red">Task List</span>';
 //querySelector
 console.log(document.querySelector('#task-title'));
 console.log(document.querySelector('.card-title'));
 console.log(document.querySelector('h5'))
 document.querySelector('li').style.color = 'red';
 document.querySelector('li:last-child').style.color = 'orange';
 document.querySelector('li:nth-child(odd)').style.background = 'blue';
 document.querySelector('li:nth-child(even)').style.background = 'yellow';