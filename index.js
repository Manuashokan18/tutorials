// accessing elements using id class name and tag name
document.getElementById('h1').innerHTML = "hai manu";
document.getElementById('h2').innerHTML = "hai libin";
document.getElementsByClassName('h3')[0].innerHTML = "hai streben";
document.getElementsByClassName('h3')[1].innerHTML = "hai wesearch";

// accessing properties of css
document.getElementById('h1').style.color = "yellow";
document.getElementById('h2').style.color = "blue  ";
document.getElementsByClassName('h3')[0].style.color = "pink";
document.getElementsByClassName('h3')[1].style.color = "green";    

//variables
var text = document.getElementById('h1');
text.innerHTML = "hai manu ashokan";
text.style.color = "red";
text.style.fontSize = "55px";

//arithmetic operations
var a = 10;
var b = 15;
var c = a + b;
//var c = a - b;
//var c = a * b;
//var c = a / b;
document.write(a);
document.write(b);
document.write(c);
