import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// initial state
number.innerText = 0;

// 고유한 액션 타입을 정의하는 방법
const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer: 액션을 받아서 새로운 상태를 만드는 함수
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// store: 상태를 저장하는 객체
const countStore = createStore(countModifier);

// dispatch: action을 reducer에 전달
add.addEventListener('click', () => countStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));

// subscribe: 변경된 상태를 처리하는 함수
countStore.subscribe(() => (number.innerText = countStore.getState()));
