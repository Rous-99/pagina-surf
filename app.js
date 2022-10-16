
/*Cuando hago click en la etiqueta hero__menu añado y quito la clase a nav para mostrar o no el menu*/

const button=document.querySelector('.hero__button')
const nav=document.querySelector('.hero__nav')

button.addEventListener('click', ()=>{
    nav.classList.toggle('no-activo')
})