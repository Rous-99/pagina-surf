
/*Cuando hago click en la etiqueta hero__menu añado y quito la clase a nav para mostrar o no el menu*/

const button=document.querySelector('.nav__button')
const nav=document.querySelector('.nav__ul')
var surf=10
var mensaje="no"
// const pago=document.getElementById('total__pago').innerHTML=result

// const surf=10

button.addEventListener('click', ()=>{
    nav.classList.toggle('no-activo')
})

//creamos una función que me obtenga el valor de la actividad seleccionada cada vez que se cambie en el select
function obtener__actividad(){
    let actividad=document.getElementById('form__select').value;
    console.log(actividad)
}

result=surf*3
// print(result)

// if (actividad.value=="surf"){
//     mensaje=print("Tienes clase de surf")
// }
// else{
//     mensaje=print("No tienes clase de surf") 
// }


const pago=document.getElementById('total__pago').innerHTML=mensaje