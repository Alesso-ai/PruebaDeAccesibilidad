/*
Alejandro Ruiz Prieto
*/


const nombre=document.getElementById("nombre");
const validarNombre=nombre=>{
    
    if(nombre.value===""){
        console.log("Ingrese su nombre");
        alert("Ingrese su nombre");
         return false;
        }
    return true;
 }



const validarContraseña=contraseña=>{

    if(contraseña.length<8){
        console.log("Ingrese una contraseña mayor a 8 caracteres");
        alert("Ingrese una contraseña mayor a 8 caracteres");
        
    }
    return true;
}
 