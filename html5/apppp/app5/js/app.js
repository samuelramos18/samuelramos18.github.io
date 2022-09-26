//defino las variables
var n1, n2, resta, multiplicacion, divicion;
//capturar los datos del usuario
n1=parseFloat(prompt("ingrese el 1mer numero"));
n2=parseFloat(prompt("ingrese el 2do numero"));
//proceso de las operaciones matematicas
suma=n1+n2;
resta=n1-n2;
multiplicacion=n1*n2;
divicion=n1/n2;
//mensaje que se muestra en la consola 
//console.log(n1+ "+n2+" es:"suma)
//mensaje de salida
document.write("la suma es:"+suma+"; la resta es:"+resta+"; la multiplicacion es"+multiplicacion+"; dla divicion es:"+divicion);
//mensaje de alerta
//alerta