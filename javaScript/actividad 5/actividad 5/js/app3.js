var a,b
var i 

i=2
a=parseInt(prompt("ingrese el valor inicial"))
b=parseInt(prompt("ingrese el valor final"))


for(i=a; i<=b; i++){

    if (i%2==0) {
        document.write(i)
    }else{
        document.write("<br>")
    }
}
