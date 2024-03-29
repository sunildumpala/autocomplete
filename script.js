const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	results =  fruit.reduce(function(accumulator, currentValue){

		if (currentValue.toLowerCase().includes(str.toLowerCase())){
			accumulator.push(currentValue);			
		}
		return accumulator;
	}, []);

	return results;
}

function searchHandler(e) {
	// TODO	
	showSuggestions(search(e.target.value), e.target.value);

}

function showSuggestions(results, inputVal) {

	// TODO
	$("ul").empty();
	let ul = document.querySelector('ul');
	results.forEach(element => {		
		let li = document.createElement('li')	;
		li.textContent = element;
		li.addEventListener('mouseover', highlightSuggestion);
		ul.append(li);
	});
	

}

function highlightSuggestion(e){
	$("li").toArray().forEach(element => {
		element.style.backgroundColor = "";
	});	
	e.target.style.backgroundColor = "#DF0707";
}

function useSuggestion(e) {
	// TODO	
	input.value = e.target.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
