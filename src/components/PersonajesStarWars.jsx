const PersonajesStarWars = ({ personaje, eliminarPersonaje }) => {

  return (
    <div key={personaje.url} className="col-sm-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{personaje.name}</h5>
          <p className="card-text">{`Año de nacimiento: ${personaje.birth_year}`}</p>
            <p className="card-text">{`Color de ojos: ${personaje.eye_color}`}</p>
            <p className="card-text">{`Género: ${personaje.gender}`}</p>
            <p className="card-text">{`Color de cabello: ${personaje.hair_color}`}</p>
            <p className="card-text">{`Altura: ${personaje.height}`}</p>
            <p className="card-text">{`Masa: ${personaje.mass}`}</p>
          <button className='btn btn-danger' onClick={() => eliminarPersonaje(personaje.url)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default PersonajesStarWars;