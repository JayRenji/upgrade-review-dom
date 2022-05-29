console.log('Working');
// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let mainList = document.createElement('ul');

countries.forEach(function (element) {
	let list = document.createElement('li');
	list.innerText = element;
	mainList.appendChild(list);
});

document.body.appendChild(mainList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const kill = document.querySelectorAll('[class="fn-remove-me"]');
const auxArray = Array.from(kill);

auxArray.forEach(function (element) {
	document.body.removeChild(element);
});

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let mainList2 = document.createElement('ul');

cars.forEach(function (element) {
	let list2 = document.createElement('li');
	list2.innerText = element;
	mainList2.appendChild(list2);
});

let carDiv = document.querySelector('div[data-function="printHere"]');
carDiv.appendChild(mainList2);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
	{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
	{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
	{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
	{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' },
];

for (const iterator of countries2) {
	let Divs = document.createElement('div');
	Divs.className = 'list';

	let titulo = document.createElement('h4');
	titulo.innerText = iterator.title;
	Divs.appendChild(titulo);

	let img = document.createElement('img');
	img.src = iterator.imgUrl;
	Divs.appendChild(img);

	document.body.appendChild(Divs);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
let btn = document.createElement('button');

btn.onclick = function () {
	let x = document.querySelectorAll('[class=list]');
	let i = Array.from(x);
	document.body.removeChild(i[i.length - 1]);
};
btn.innerText = 'PRESS ME';
document.body.appendChild(btn);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.

let a = document.querySelectorAll('ul');
let b = Array.from(a);

b.forEach(function (element) {
	let btn2 = document.createElement('button');

	btn2.onclick = function () {
		let lists = element.querySelectorAll('li');
		let listsArray = Array.from(lists);
		console.log(listsArray);
		element.removeChild(listsArray[listsArray.length - 1]);
	};
	btn2.innerText = "Let'er Rip!";
	element.appendChild(btn2);
});
