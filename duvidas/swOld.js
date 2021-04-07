const fetch = require('node-fetch');

class StarWars {

  getPerson(id) {
    return new Promise(function(resolve, reject) {
      fetch(`http://swapi.dev/api/people/${id}`)
      .then(response => {
          resolve(response.json())
      });
    });
  }

  getFilm(id) {
    return new Promise(function(resolve, reject) {
      fetch(`http://swapi.dev/api/films/${id}`)
      .then(response => {
        resolve(response.json())
      });
    });
  }

  getFilms(){
    return new Promise(function(resolve, reject) {
        fetch(`http://swapi.dev/api/films`)
        .then(response => {
            return response.json()
        }).then(results => {
            resolve(results.results)
        });
    })
  }
}

module.exports = StarWars;