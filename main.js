"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';

    html += '<div>' + coffee.name + '</div>';
    html += '<div>' + coffee.roast + '</div>';
    html += '</div>';

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
        if (coffee.roast  === selectedRoast && coffee.name.toLowerCase().includes(search.value.toLowerCase()))  {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all" && coffee.name.toLowerCase().includes(search.value.toLowerCase())) {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    console.log('test')
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

function stringContains(string) {
    var userInput = string;
    if (userInput.toLowerCase().includes(coffees[0].name.toLowerCase())) {
        return 'It includes!'
    } else {
        return 'It doesnt include'
    }
}

// if (string.includes() (coffees[0].name)){
//     return true
// }else{
//     return false
// }


// function returnSpecificRoast(){
//     var input = document.getElementById('searchbar').value
//     input = input.toLowerCase();
//     var list = document.getElementsByClassName('coffee-type');
//
//     for (var i = 0; i < list.length; i++){
//         if (!list[i].innerText.toLowerCase().includes(input)){
//             list[i].style.display = 'none';
//         }else{
//             list[i].style.display = 'list-item';
//         }
//     }
// }

// function filtersCoffees(coffees) {
//     var html = '';
//     for(var i = 0; i < coffees.length; ++i) {
//         if (coffees[i].roast === 'light') {
//             html += renderCoffee(coffees[i]);
//         }
//     }
//     for(var j = 0; j < coffees.length; ++j) {
//         if (coffees[j].roast === 'medium') {
//             html += renderCoffee(coffees[j]);
//         }
//     }
//     for(var k = 0; k < coffees.length; ++k) {
//         if (coffees[k].roast === 'dark') {
//             html += renderCoffee(coffees[k]);
//         }
//     }
//     return html;
// }



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
var search = document.querySelector("#searchbar");
tbody.innerHTML = renderCoffees(coffees);
search.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
