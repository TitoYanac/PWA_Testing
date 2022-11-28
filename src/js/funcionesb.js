const btn = document.querySelector('#btn');
const numa = document.querySelector('#numa');
const numb = document.querySelector('#numb');

btn.addEventListener('click',(evt)=>{
    console.log("sehizoclick");
    window.location.href =("pageC.html?numa="+(numa.value==""?"0":numa.value)+"&numb="+((numb.value==""?"0":numb.value)));
});