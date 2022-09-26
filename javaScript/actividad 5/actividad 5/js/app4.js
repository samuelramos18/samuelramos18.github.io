var a,b
var i 

i=2
a=parseInt(prompt("ingrese el valor inicial"))
b=parseInt(prompt("ingrese el valor final"))

i=a
while(i<=b){
    if (i%2==0) {
        document.write(i+"<br>")
    }
    
    i++
}