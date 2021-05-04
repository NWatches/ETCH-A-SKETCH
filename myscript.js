const container = document.querySelector('#container');

// for (let i = 0; i < 16; i++) {
//   for (let i = 0; i < 16; i++) {
//     const div = document.createElement('div');
//     div.style.display = 'inline-block';
//     container.appendChild(div);
//     div.textContent = '-xYz-';
//   };
//   const brk = document.createElement('br');
//   container.appendChild(brk);
// };

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement('div');-
  container.appendChild(div)
  div.textContent = '-xYz-';
  div.id = 'box';
}


const boxes = document.querySelectorAll('#box');

// we use the .forEach method to iterate through each button
boxes.forEach((box) => {

  // and for each one we add a 'click' listener
  box.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'white';
  });
});
