const fetch = require('node-fetch');

async function getPersonAsync(id) {
    const response = await fetch(`http://swapi.dev/api/people/${id}`);
    const body = await response.json();
    if(response.status !== 200){
        throw Error(body.detail)
    }
    
    return body;
  }


getPersonAsync(1)
  .then(person => console.log('THEN', person.name)) //Luke Skywalker
  .catch(err => console.error('CATCH', err.message));

getPersonAsync(0)
  .then(person => console.log('THEN', person.name)) 
  .catch(err => console.error('CATCH', err.message));




async function loadPerson2(id) {
  try {
    const person = await getPersonAsync(id);
    console.log(person.name);

  } catch (err) {
    console.error(err.message);
  }
}

loadPerson2(0);
loadPerson2(1);