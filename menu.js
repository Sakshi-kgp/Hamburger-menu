const menu_icon=document.querySelector('.menu_icon');
const nav=document.querySelector('nav');
const cross=document.querySelector('.cross');

menu_icon.addEventListener('click',()=>{
nav.style.display='flex';
menu_icon.style.display='none';
})
cross.addEventListener('click',()=>{
  nav.style.display='none';
  menu_icon.style.display='block';
})