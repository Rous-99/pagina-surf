
/*Cuando hago click en la etiqueta hero__menu añado y quito la clase a nav para mostrar o no el menu*/

const button=document.querySelector('.nav__button')
const nav=document.querySelector('.nav__ul')


// const pago=document.getElementById('total__pago').innerHTML=result

// const surf=10

button.addEventListener('click', ()=>{
    nav.classList.toggle('no-activo')
})

//creamos una función que me obtenga el valor de la actividad seleccionada cada vez que se cambie en el select
function obtener__actividad(){
    let actividad=document.getElementById('form__select').value;
    return actividad
}

function calcular__pago(){

    //declaro las variables necesarias para obtener los valores que necesito para el resultado del pago
    let actividad=document.getElementById('form__select').value;
    let clase = document.getElementById('form__class').value;
    let personas=document.getElementById('form__person').value;
    
    
    if (actividad=="surf"){
        if (clase=="1d"){
            precio=25*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="2d"){
            var precio=50*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="3d"){
            var precio=65*personas;
            document.getElementById('total__pago').innerHTML=precio;        
        }
        else if (clase=="5d"){
            var precio=100*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else{
            var mensaje="Opción incorrecta, revisa las opciones de clase para esta actividad"
            document.getElementById('total__pago').innerHTML=mensaje;

        }
    }
    else if (actividad=="cata"){
        if (clase=="1d"){
            precio=25*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="2d"){
            var precio=70*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="3d"){
            var precio=95*personas;
            document.getElementById('total__pago').innerHTML=precio;        
        }
        else if (clase=="5d"){
            var precio=125*personas;
            document.getElementById('total__pago').innerHTML=precio; 
        }
        else{
            var mensaje="Opción incorrecta, revisa las opciones de clase para esta actividad"
            document.getElementById('total__pago').innerHTML=mensaje;
        }
    }
    else if (actividad=="paddle"){
        if (clase=="1d"){
            precio=25*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="2d"){
            var precio=45*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="3d"){
            var precio=65*personas;
            document.getElementById('total__pago').innerHTML=precio;        
        }
        else if (clase=="5d"){
            var precio=80*personas;
            document.getElementById('total__pago').innerHTML=precio; 
        }
        else{
            var mensaje="Opción incorrecta, revisa las opciones de clase para esta actividad"
            document.getElementById('total__pago').innerHTML=mensaje;
        }
    }
    else if (actividad=="wind"){
        if (clase=="1d"){
            precio=30*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="2d"){
            var precio=50*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="3d"){
            var precio=70*personas;
            document.getElementById('total__pago').innerHTML=precio;        
        }
        else if (clase=="5d"){
            var precio=100*personas;
            document.getElementById('total__pago').innerHTML=precio; 
        }
        else{
            var mensaje="Opción incorrecta, revisa las opciones de clase para esta actividad"
            document.getElementById('total__pago').innerHTML=mensaje;
        }
    }
    else if (actividad=="kayak"){
        if (clase=="1h"){
            precio=15*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="2h"){
            var precio=25*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="3h"){
            var precio=35*personas;
            document.getElementById('total__pago').innerHTML=precio;        
        }
        else if (clase=="4h"){
            var precio=45*personas;
            document.getElementById('total__pago').innerHTML=precio; 
        }
        else{
            var mensaje="Opción incorrecta, revisa las opciones de clase para esta actividad"
            document.getElementById('total__pago').innerHTML=mensaje;
        } 
    }
    else{
        if (clase=="1dg"){
            precio=65*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="4dg"){
            var precio=170*personas;
            document.getElementById('total__pago').innerHTML=precio;
        }
        else if (clase=="1di"){
            var precio=75*personas;
            document.getElementById('total__pago').innerHTML=precio;        
        }
        else if (clase=="4di"){
            var precio=190*personas;
            document.getElementById('total__pago').innerHTML=precio; 
        }
        else{
            var mensaje="Opción incorrecta, revisa las opciones de clase para esta actividad"
            document.getElementById('total__pago').innerHTML=mensaje;
        } 
    }

    console.log(actividad)
    console.log(clase)
    console.log(personas)
}