function onReady(){
  let toDos = [];
  let id = 0;
  const ADD_TODO_FORM = document.getElementById('addToDoForm');

  function createNewToDo(){
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if (!NEW_TODO_TEXT.value){return;}
    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false,
      id: id
    });

    id++;
    console.log(toDos);
    NEW_TODO_TEXT.value = '';
    renderTheUI();
  }

  function renderTheUI(){
    const TO_DO_LIST = document.getElementById('toDoList');
    TO_DO_LIST.textContent = '';

    toDos.forEach(function(toDo){
        const NEW_LI = document.createElement('li');
        const CHECK_BOX = document.createElement('input');
        CHECK_BOX.type = 'checkbox';

        const DELETE_BTN = document.createElement('button');
        DELETE_BTN.textContent = "Delete!";

        DELETE_BTN.addEventListener('click', event => {
          toDos = toDos.filter(item =>{
            return item.id !== toDo.id;
        });
        renderTheUI();
      });

        NEW_LI.textContent = toDo.title;
        TO_DO_LIST.appendChild(NEW_LI);
        NEW_LI.appendChild(CHECK_BOX);
        NEW_LI.appendChild(DELETE_BTN);
    });
  }

  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function(){
  onReady();
};
