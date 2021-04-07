const StarWars = require('./swOld');

function loadDataLooping() {
    const sw = new StarWars();
    
    sw.getFilms().then(responseResults => {
        return responseResults;
    })
    .then(responseResults => {
        const results = responseResults;
        for(result of results){
            let episode_id = result.episode_id
            sw.getPerson(episode_id).then(person => {
                sw.getFilm(episode_id).then(film => {
                    console.log(episode_id)
                    console.log('Person: ')
                    console.log(person['name']) 
                    console.log('Film: ')
                    console.log(film['title'])
                })       
            })
        }
    })
}

loadDataLooping()