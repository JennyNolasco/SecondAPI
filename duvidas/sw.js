const fetch = require('node-fetch');

class StarWars {
  async getPerson(id) {
    const response = await fetch(`http://swapi.dev/api/people/${id}`);
    return await response.json();
  }

  async getFilm(id) {
    const response = await fetch(`http://swapi.dev/api/films/${id}`);
    return await response.json();
  }

  async getFilms() {
    const response = await fetch(`http://swapi.dev/api/films`);
    return await response.json();
  }
}

module.exports = StarWars;