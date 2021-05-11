'use strict'
const marvel = [
    { name: ' Quicksilver', team: 'X-men', team2: 'Avengers' },
    { name: 'Capitan America', team: 'Avengers' },
    { name: ' Arcángel', team: 'X-men' },
    { name: '  Doctor Victor von Doom', team: 'X-men', team2: 'Avengers' },
    { name: 'Spider-Man,', team: 'Avengers' },
    { name: ' Bestia', team: 'X-men' },
    { name: 'Iron Man', team: 'Avengers' },
    { name: ' Wolverine ', team: 'X-men' },
    { name: 'Thor', team: 'Avengers' },
    { name: ' Magneto ', team: 'X-men' },
    { name: 'Hulk', team: 'Avengers' },
    { name: ' Quicksilver', team: 'X-men', team2: 'Avengers' },
    { name: ' Jean Grey ', team: 'X-men' },
    { name: 'Loki', team: 'Avengers' },
    { name: ' Cíclope ', team: 'X-men' }

];

const both_team = marvel.filter((marvel) => { return marvel.team === 'X-men' });
document.write(` <h1> Son de los X-men: </h1>`);
both_team.forEach((na) => {
    document.write(` <p> • ${na.name}</p>`);
})




const Avengers = [
    { name: 'Quicksilver', team: 'Avengers/X-men' },
    { name: 'Capitan America', team: 'Avengers' },
    { name: ' Doctor Victor von Doom', team: 'Avengers/X-men' },
    { name: 'Spider-Man,', team: 'Avengers' },
    { name: 'Iron Man', team: 'Avengers' },
    { name: 'Thor', team: 'Avengers' },
    { name: 'Hulk', team: 'Avengers' },
    { name: 'Bruja Escarlata', team: 'Avengers/X-men' },
    { name: 'Loki', team: 'Avengers' },

];


const x_men = [
    { name: 'Quicksilver', team: 'Avengers/X-men' },
    { name: 'Arcángel', team: 'X-men' },
    { name: 'Doctor Victor von Doom', team: 'Avengers/X-men' },
    { name: 'Bestia', team: 'X-men' },
    { name: 'Wolverine', team: 'X-men' },
    { name: 'Magneto', team: 'X-men' },
    { name: 'Bruja Escarlata', team: 'Avengers/X-men' },
    { name: 'Cíclope', team: 'X-men' }

];

const teams = marvel.concat(x_men);
const ambos = teams.filter((item) => { return item.team === 'Avengers/X-men' });
document.write(` <h1> Ambos bandos: </h1>`);
ambos.forEach((na) => {
    document.write(` <p> • ${na.name}</p>`);
})