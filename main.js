// Ethan lawrence
// April 29 2024
// JS array basics Evidence report
document.getElementById("btn").addEventListener("click", start);

function start() {
    // Imput
    // Starting Array
    const contries = ['Canada', 'Mexico', 'Brazil', 'France', 'South Africa'];
    console.log ('***Script Written by Ethan Lawrence of Grand Traverce Academy***');
    console.log('\n');

    console.log ('My contries array');
    console.log (contries);
    console.log (`Length of countries array: ${contries.length} elements`);

    console.log('\n');
    // Process 
        // Removing 'South Africa' using Pop() Method
    console.log ('Removing \'South Africa\' using Pop() Method');
    contries.pop();
    console.log (contries);

    console.log('\n');
        // Adding 'Poland' using Push() Method
    console.log ('Adding \'Poland\' using Push() Method');
    contries.push('Poland');
    console.log (contries);
    
    console.log('\n');
        // Adding 'Hungary' using Unshift
    console.log ('Adding \'Hungary\' using Unshift');
    contries.unshift('Hungary');
    console.log (contries);

    console.log('\n');
        // Finding 'brazils' index # then using it to replace it with 'Turkey'
    console.log ('Finding \'Brazils\' index # then using it to replace it with \'Turkey\'')
    const brazil = contries.indexOf('Brazil');
    contries[brazil] = 'Turkey';
    console.log (contries);

    // Output
    console.log('\n');
    console.log ('Final array');
    console.log (contries);
}