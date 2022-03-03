"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function returnSpecificRoast(){
    var input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    var list = document.getElementsByClassName('coffee-type');

    var dropdown = document.getElementById('roast-selection').value;
    dropdown = dropdown.toLowerCase();
    var selectRoast = document.getElementsByClassName('roast-type');

    for (var i = 0; i < selectRoast.length; i++){
        if (!selectRoast[i].innerText.toLowerCase().includes(dropdown)){
            selectRoast[i].style.display = 'none';
        } else {
            selectRoast[i].style.display = 'option';
        }
    }

    for (var i = 0; i < list.length; i++){
        if (!list[i].innerText.toLowerCase().includes(input)){
            list[i].style.display = 'none';
        }else{
            list[i].style.display = 'list-item';
        }
    }
}



// function returnRoast(){
//    var input = document.getElementById('submit')
//    var coffeeRoasts = document.getElementsByClassName('roast');
//
//    for (var i = 0; i < coffeeRoasts.length; i++){
//        if (!coffeeRoasts[i].innerText.includes(input)){
//            coffeeRoasts[i].style.display = 'none'
//        }
//        else{
//            coffeeRoasts[i].style.display = 'list-item';
//        }
//    }
// }

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
