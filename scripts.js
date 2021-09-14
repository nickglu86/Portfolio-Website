const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
/* Map practice */

const namesArr = characters.map( character => character.name);
const heightsArr = characters.map( character => character.height)
const reducedArr = characters.map( character => {
    temp =  {name : character.name, height : character.height};
    return temp;
});

//console.log(reducedArr);

/* filter Practice */
const greateThan100 = characters.filter( character => character.mass > 100);
const getMales = characters.filter( character => character.gender == 'male');
console.log(getMales);