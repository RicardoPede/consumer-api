import React, { useState } from 'react'
import PersonajesStarWars from './components/PersonajesStarWars';

function App() {

  const [personajes, setPersonajes] = useState([])

  // name: "Luke Skywalker"
  // birth_year: "19BBY"
  // created: "2014-12-09T13:50:51.644000Z"
  // edited: "2014-12-20T21:17:56.891000Z"
  // eye_color: "blue"
  // films: Array(4) [ "https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", … ]
  // gender: "male"
  // hair_color: "blond"
  // height: "172"
  // homeworld: "https://swapi.dev/api/planets/1/"
  // mass: "77"
  // skin_color: "fair"
  // species: Array []
  // starships: Array [ "https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/" ]
  // url: "https://swapi.dev/api/people/1/"
  // vehicles: Array [ "https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/" ]

  const aMiJuegoMeLlamaron = async () => {
    const API = 'https://swapi.dev/api/people';
    try {
      const response = await fetch(API)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      console.log(data)
      setPersonajes(data.results)
    } catch (error) {
      console.log(error.message);
    }
  }

  const eliminarPersonaje = (url) => {
    setPersonajes(personajes.filter((personaje) => personaje.url !== url))
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Consumer API</h1>
      <p className="text-center mb-4">Esta es una app para consumir una API</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mb-4"
          onClick={aMiJuegoMeLlamaron}
        >Obtener Datos</button>
      </div>
      <div className="row">
        {personajes.length === 0 && <p className="text-center">No hay personajes</p>}
        {personajes.map((personaje) => (
          <PersonajesStarWars
            key={personaje.url}
            personaje={personaje}
            eliminarPersonaje={eliminarPersonaje} />
        ))}
      </div>
    </div>
  )
}

export default App
