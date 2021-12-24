import { configureStore, createSlice } from '@reduxjs/toolkit';

// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// * createReducer()에서는 새로운 state를 리턴하거나 state를 mutate할 수 있다.
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
// * mutate/immutate 둘 다 가능
//    // return [{ text: action.payload, id: Date.now() }, ...state];
//     state.unshift({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

// * createSlice()에서는 모든 것들이 캡슐화 되어있다.
const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
