const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAddClick = () => {
  count++;
  updateText();
};

const handleMinusClick = () => {
  count--;
  updateText();
};

add.addEventListener('click', handleAddClick);
minus.addEventListener('click', handleMinusClick);
