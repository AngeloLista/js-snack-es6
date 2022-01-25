/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
    {
        nome: 'Atala',
        weight: 9,
    },
    {
        nome: 'Merida',
        weight: 11,
    },
    {
        nome: 'Marin',
        weight: 7,
    },
]

lightestBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const {weight} = bike;
    if(bike.weight < lightestBike.weight) lightestBike = bike;
}

