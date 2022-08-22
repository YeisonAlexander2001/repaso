/**alert("hola")

const  numero = 15;

let numero = 5;
let numero2 = 3;

let nombre =prompt ("hols rancio");
alert ("hola" + nombre);
+=
-=
*=
/=
50 %= 2

resultado = numero 1 / numero2; 
frase1 = "yeison suarez"

frase = " y estoy programando"

document.write()

${}

frutas = ["burro", "vaca", "perro"];

document.write(frutas[2])*/
//array asociativos
/**let pc1 = {
    nombre: "PcYeison",
    procesador: "Inteel core I5",
    ram: "4GB",
    espacio: "512GB"
}; 

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = ["ram"];
let espacion = pc1["espacio"];

frase = ` el nombre de mio PC es: ${nombre} <br>
el procesasor es ${procesador} <br>
`
document.write(frase);*/
/** 
let numero = 0;

while (numero < 6) {
    numero++;
    document.write(numero)
}*/
/** 
let numero = 0;

while(numero < 100){
    numero++;
    document.write(numero);
    if(numero==10){
        break;
    }
}*/

//i = 20;
// tambien se puede inicializar por fuera
/** 
for (let i=6; i >=0; i--){
    document.write(i + "<br>")
}
document.write(i)
*/
/** 
for (let i=1; i <=5; i++){
    if (i == 3){
        continue;
    }
    document.write(i + "<br>");
}
document.write(i)

// FOR IN para el indice de los objetos en un array y FOR OF para el valor de esos objetos
*/
/*
let animales = ["gato", "perro","tiranosaurio rex"];

for (animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>")

for(animal of animales){
    document.write(animal +"<br>");
}
*/
// LABEL PERMITE ASOCIAR UN BUCLE A UN NOMBRE; ES UNA SENTENCIA
/** 
array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio:
for(let array in array 2){
    if(array ==2){

        for(let array of array1){
            if (array == "maria"){
                continue forRancio;
            }
            document.write(array + "<br>");
        }
            }
                    else {
            document.write(array2[array] + "<br>");
        }
}*/
/** 
function saludar(nombre){
    let mellamo = ` Hola  ${nombre} que tal`;
    document.write(mellamo)
}
saludar("yeison")
*/
//funciones flecha

let free = false;

const ingresar = (time) =>{
    let edad= prompt("cual es tu edad?");
    if(edad>18){
        if (time<7 && time>=2 && free == false){
        alert("puedes ingresar");
        free==true;
        } else {alert("puedes pasar pero tienes que pagar la entrada");
        }}
        else {alert("eres menor de edad no puedes pasar");} 

}

ingresar(23)