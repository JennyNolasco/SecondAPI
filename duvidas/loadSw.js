const StarWars = require('./sw');

async function loadDataLooping() {
    const sw = new StarWars();
    filmsList = await sw.getFilms()
    for(result of filmsList.results){
        console.log(result['episode_id'])
        console.log('Person: ')
        const person = await sw.getPerson(result['episode_id'])
        console.log(person['name'])
        console.log('Film: ')
        const film = await sw.getFilm(result['episode_id'])
        console.log(film['title'])

    }
    
}

loadDataLooping()