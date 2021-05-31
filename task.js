'use strict'
const marvel = [
    { name: ' Quicksilver', team: 'X-men', team2: 'Avengers' },
    { name: 'Capitan America', team: 'Avengers' },
    { name: ' Arcángel', team: 'X-men' },
    { name: '  Doctor Victor von Doom', team: 'X-men', team2: 'Avengers' },
    { name: 'Spider-Man', team: 'Avengers' },
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
    { name: 'Quicksilver', team: 'Avengers/X-men', date: '1964/03/12' },
    { name: 'Capitan America', team: 'Avengers', date: '1941/05/17' },
    { name: ' Doctor Victor von Doom', team: 'Avengers/X-men', date: '1962/09/01' },
    { name: 'Spider-Man', team: 'Avengers', date: '1962/08/10' },
    { name: 'Iron Man', team: 'Avengers', date: '1963/03/05' },
    { name: 'Thor', team: 'Avengers', date: '1962/08/25 ' },
    { name: 'Hulk', team: 'Avengers', date: '1962/05/01 ' },
    { name: 'Bruja Escarlata', team: 'Avengers/X-men', date: '1964/03/12 ' },
    { name: 'Loki', team: 'Avengers', date: '1949/08/01' },

];


const x_men = [
    { name: ' Doctor Victor von Doom', team: 'Avengers/X-men' },
    { name: 'Quicksilver', team: 'Avengers/X-men' },
    { name: 'Arcángel', team: 'X-men' },
    { name: 'Bestia', team: 'X-men' },
    { name: 'Wolverine', team: 'X-men' },
    { name: 'Magneto', team: 'X-men' },
    { name: 'Bruja Escarlata', team: 'Avengers/X-men' },
    { name: 'Cíclope', team: 'X-men' }

];



document.write(` <h1> Ambos bandos: </h1>`);
Avengers.forEach((p1) => {
    x_men.forEach((p2) => {
        if (p1.name === p2.name) {
            document.write(`<p> • ${p1.name}</p>`);
        }
    });
});


function fecha(a) {
    return new Date(a);
};


Avengers.sort((a, b) => { return fecha(a.date) - fecha(b.date) });




document.write(` <h1> El orden por fecha es: </h1>`);
Avengers.forEach((p1) => {

    document.write(`<p> •${p1.name} - ${p1.date}</p>`);


});



const waitThreeSeconds = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(marvel.map((n) => {
                return n.name
            }));
        }, 3000);
    });
};

const waitSevenSeconds = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(marvel.map((t) => {
                return t.team
            }));
        }, 7000);
    });
};

document.write('<h1>Promise</h1>')
Promise.all([waitThreeSeconds(), waitSevenSeconds()]).then(get => console.log(get));