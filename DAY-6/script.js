// Types of memory
// Stack memory: primitive values, function calls, local variables, Execution Context
// Heap memory: Objects, Array, functions, Sets, Dates, etc

// Primitive type: Number, boolean, string, undefined, null, symbol, bigint

// const a = Symbol("abc");
// const b = Symbol("abc");
// console.log(a===b);

// console.log(Number.MAX_SAFE_INTEGER); // check the maximum value the can be inserted inside a variable using Number data type.
// const num = 9007199254740991n; // Bigint
// console.log(typeof num);

// new Date(year, month, day, hours, minutes, seconds, miliseconds);
// const myDate = new Date();
// console.log(myDate.getMonth());
// console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());

// console.log(Date(Date.now()));


// getElementsByClassName
// const box = document.getElementsByClassName('box');
// for (let i = 0; i < box.length; i++) {
//     box[i].style.backgroundColor = 'purple';
//     box[i].style.color = 'white';
//     box[i].style.height = '100px';
//     box[i].style.width = '100px';
//     box[i].style.border = '1px groove black';
//     box[i].style.borderRadius = '20px';
//     box[i].style.margin = '10px';
// }

// for (const item of box) {
//     item.style.backgroundColor = 'purple';
//     item.style.color = 'white';
//     item.style.height = '100px';
//     item.style.width = '100px';
//     item.style.border = '1px groove black';
//     item.style.borderRadius = '20px';
//     item.style.margin = '10px';
// }

// const boxArr = Array.from(box);
// boxArr.forEach(item => {
//     item.style.backgroundColor = 'purple';
//     item.style.color = 'white';
//     item.style.height = '100px';
//     item.style.width = '100px';
//     item.style.border = '1px groove black';
//     item.style.borderRadius = '20px';
//     item.style.margin = '10px';
// });

// getElementsByTagName

// const paras = document.getElementsByTagName('p');
// for (const item of paras) {
//     item.style.backgroundColor = 'maroon';
//     item.style.color = 'white';
//     item.style.fontSize = '20px';
// }

// QuerySelector

// document.querySelector('h1').style.backgroundColor = "green";
// document.querySelector('#head2').style.backgroundColor = 'aqua';
// document.querySelector('.box').style.backgroundColor = 'navy';

// QuerySelectorAll

// const box = document.querySelectorAll('.box');
// console.log(box); // returns a nodelist

// for (const item of box) {
//     item.style.backgroundColor = 'navy';
//     item.style.margin = '10px';

// }

// Changing Attributes
// const img = document.querySelector('img');
// img.setAttribute('src', 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg');
// img.removeAttribute('alt');
// console.log(img.getAttribute('src'));

// Working with classes
// img.classList.add('invert'); // to add a class in the element
// img.classList.remove('invert'); // to remove a class from the element
// img.classList.toggle('invert'); // adds, if absent, removews if present
// if (img.classList.contains('invert')) {
//     console.log("Invert is present");
// }
// else{
//     console.log("Invert is present");
// }

// Create elements

// const h1 = document.createElement('h1');
// h1.innerText = "This is heading from JavaScript";
// document.body.append(h1); // insert the element in the DOM

// const div = document.createElement('div');
// document.body.append(div);

// const para1 = document.createElement('p');
// para1.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, exercitationem ad culpa cum nemo numquam sunt ea commodi, necessitatibus quae voluptas voluptatum nesciunt sint. Cupiditate nulla animi recusandae eius minus.';
// div.appendChild(para1); // insert the child element inside the parent element

// h1.remove(); // remove the said element

// const para2 = document.createElement('p');
// para2.innerText = "This is the replacement paragraph";
// div.replaceChild(para2, para1); // replace the child element. replaceChild(newNode, oldNode);

// Event listeners

const button = document.querySelector('button');
const inp = document.querySelector('#inp');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    h1.innerText = inp.value;
});
button.addEventListener('dblclick', function () {
    h1.innerText = '';
});

// 1. Mouse events - click, dblclick, mouseup, moudedown, mouseleave, mouseover, contextmenu, wheel
// 2. Keyboard events: keydown, keyup, keypress
// 3. form events: submit, reset, input, change, blur, invalid, focus
// 4. Window events: load, resize, scroll, unload
// 5. Clipboard events: copy, cut, paste