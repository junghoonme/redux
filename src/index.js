import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]; 
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleteToDo = (e) => {
  // html에서 받아온 값은 string이므로 숫자로 변환해야함
  const id = parseInt(e.target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, id });
};

const paintToDos = () => {
  ul.innerHTML = '';
  const toDos = store.getState();
  
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.innerText = '❌';
    btn.addEventListener('click', deleteToDo);

    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  addToDo(toDo);
  input.value = '';
};

form.addEventListener('submit', handleSubmit);
