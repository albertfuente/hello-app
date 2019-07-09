var buttons=document.getElementsByTagName("button");
var inputs=document.getElementsByTagName("input");
var input=inputs[0];

var button=buttons[0]; // asi seleccionas el primero de un array

button.onclick=function(){
    var element = document.getElementById("1");
    element.innerHTML = "Hola, " + input.value + '!';
}