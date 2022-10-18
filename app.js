
/*Cuando hago click en la etiqueta hero__menu añado y quito la clase a nav para mostrar o no el menu*/

const button=document.querySelector('.nav__button')
const nav=document.querySelector('.nav__ul')

button.addEventListener('click', ()=>{
    nav.classList.toggle('no-activo')
})