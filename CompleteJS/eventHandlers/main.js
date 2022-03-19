let btn = document.querySelector('.btn')
let btnDiv = document.querySelector('.nav')

// let a = (event) => {
//     event.target.style.color = 'red';
//     console.log(event.target);
//     btn.removeEventListener('click', a);
// }

// btn.addEventListener('click', a, false);
// btnDiv.addEventListener('click')

// let randomColor = function(min, max){
//     let r = Math.trunc(Math.random()*(max-min+1)) + min;
//     let g = Math.trunc(Math.random()*(max-min+1)) + min;
//     let b = Math.trunc(Math.random()*(max-min+1)) + min;
//     return [r, g, b];
// }

// btnDiv.addEventListener('click', (e) => {
//     e.preventDefault();
//     let resFunc = randomColor(0, 255);
//     console.log(resFunc);
//     btnDiv.style.backgroundColor = `rgb(${resFunc[0]}, ${resFunc[1]}, ${resFunc[2]})`;
// })

// btn.addEventListener('click', (e)=> {
//     e.stopPropagation(); // <--- endi u otasini tanimeydi
//     e.preventDefault();
//     let resFunc = randomColor(0, 255);
//     console.log(resFunc);
//     btn.style.backgroundColor = `rgb(${resFunc[0]}, ${resFunc[1]}, ${resFunc[2]})`;
// })

// const link = document.querySelectorAll('.nav-link') // --> reaturns NodeList (iterable)

// link.forEach(item => {
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         const href = this.getAttribute("href");
//         document.querySelector(href).scrollIntoView({behavior: "smooth"});
//     })
// })

// const links = document.querySelector('.nav-links');

// links.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(e.target.classList.contains("nav-link")){
//         const linkHref = e.target.getAttribute("href");
//         document.querySelector(linkHref).scrollIntoView({behavior: "smooth"})
//     }
// })

btnDiv = document.querySelector('.nav')
btn = document.querySelector('.btn')

console.log(btnDiv.children) // returns HTMLCollection contains all HTML elements bollarini qaytaradi
console.log(btnDiv.lastElementChild); // ohirgi HTML element chiqaradi
console.log(btnDiv.firstElementChild); // birinchi HTML element chiqaradi

console.log(btnDiv.childNodes) // returns Node structure which is contains (comments, Text, Tags ..)

// Parent

console.log(btn.parentElement);
console.log(btn.closest(".nav-links")) // --> ierarxiya buyicha qidiradi (otasi, bobosi ..) lekin amakilariga qarameydi.  returns HTMl element
console.log(btn.parentElement.children) // --> otasini hamma o'g'illarini tanlash

// Sibling Elements

console.log(btn.nextElementSibling) // ukasini tanlab olish return HTML element
console.log(btn.previousElementSibling) // akasini tanlab olish return HTML element

