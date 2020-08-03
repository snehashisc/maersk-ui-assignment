let shuffleBtn = document.querySelector('#shuffleBtn');
let sortBtn = document.querySelector('#sortBtn');
let containerLayout = document.getElementById("gridLayout");
const colorValues = ['#6F98A8','#2B8EAD','#2F454E','#2B8EAD','#2F454E','BFBFBF','#BFBFBF','#6F98A8','#2F454E']

generateGrid('sort');

shuffleBtn.addEventListener('click',function display() {
	containerLayout.querySelectorAll('*').forEach(n => n.remove());
	generateGrid('shuffle');

});

sortBtn.addEventListener('click',function display() {
	containerLayout.querySelectorAll('*').forEach(n => n.remove());
	generateGrid('sort')
});

function generateGrid(decide) {
	let a =  [0,1, 2, 3, 4,5,6,7,8];
	if(decide == 'shuffle') {
		for (a, i = a.length; i--; ) {
			let random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
			constructElement(random);
		}
	}else{

		for (let i = 0;i < a.length; i++) {
			constructElement(i);
		}
	}
}

function constructElement(i){
	let divElement = document.createElement("p");
	divElement.classList.add("gridValues");
	divElement.setAttribute("style", `color:white;
						border: 1px solid black;
						text-align:center;
						width:100%;
						height:100%;
						background-color:${colorValues[i]}`
					)
	divElement.innerHTML = i+1;
	containerLayout.appendChild(divElement);
	return
}