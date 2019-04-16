
let submitBtn = document.getElementById('btn-generate');
let container = document.getElementById('container');

let randomColor = (min, max) => (Math.floor(Math.random() * max) + min)

let generate = () => {
	let inputNum = parseInt(document.getElementById('txt-number').value);
	
	for (let i = 1; i <= inputNum; i++) {
		let div = document.createElement('div');
		div.id = i;
		div.style.height = '20px';
		div.style.backgroundColor = 'rgb(' + randomColor(0, 255) + ',' + randomColor(0, 255) + ',' + randomColor(0, 255) + ')';

		div.addEventListener('click', () => {
			alert(i);
		});

		container.appendChild(div);	
	}
}

submitBtn.addEventListener('click', generate);