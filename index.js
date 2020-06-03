// console.log("in index.js");
endPoint = "http://localhost:3000/api/v1/games"

document.addEventListener('DOMContentLoaded', () => {
    getGames()
});

function getGames(){
    fetch(endPoint)
    .then(resp => resp.json())
    .then(games => {
        // console.log(games);

        games.data.forEach(game =>{
            const gameMarkup = 
            `<div data-id=${game.id}>
                <h3> ${game.attributes.player.name} </h3>
            </div>`;

            document.querySelector('#game-container').innerHTML += gameMarkup
        })

    })
}