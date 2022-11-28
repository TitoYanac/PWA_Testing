
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');


init();
function init(){
    if(window.location.href.includes("?")){
    var url = window.location.href.split("=")
    num2.value = url[url.length-1];
    var array = url[url.length-2].split("&");
    num1.value = array[0];
    
    let valor1 =num1.value?num1.value:0;
    let valor2 =num2.value?num2.value:0;
    num3.value = parseFloat(valor1)+parseFloat(valor2);}

}

num1.addEventListener('keyup',(evt)=>{
    let valor1 =num1.value?num1.value:0;
    let valor2 =num2.value?num2.value:0;
    num3.value = parseFloat(valor1)+parseFloat(valor2);
});
num2.addEventListener('keyup',(evt)=>{
    let valor1 =num1.value?num1.value:0;
    let valor2 =num2.value?num2.value:0;
    num3.value = parseFloat(valor1)+parseFloat(valor2);
});
