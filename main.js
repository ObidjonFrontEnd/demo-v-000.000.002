let output = document.getElementById('output');
let btn = document.getElementById('btn');
let min = document.getElementById('minNumber');
let max = document.getElementById('maxNumber');



btn.addEventListener('click' , function(){
	output.value = +min.value + Math.floor(Math.random() * (+max.value - +min.value + 1))
})
