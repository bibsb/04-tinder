import { useState } from 'react';

import './App.css';

function App() {
  const [people, setPeople] = useState(
    [...Array(24).keys()].map((i) => i + 1).sort(() => Math.random() - 0.5)
  );
  // crea un array de 24 elementos sin tener q poner tu uno a uno
  // y como queremos de 1 a 24 le decimos q cada elemento sume uno para q no empiece de 0
  const [liked, setLiked] = useState(0);

  const like = (type) => {
    if (type === 'si') {
      setLiked(liked + 1);
    }
  };

  return (
    <>
      <div
        id="contenedor-imagen"
        style={{ backgroundImage: `url('../images/1.png')` }}
      />
      <div id="contenedor-botones">
        <input
          type="button"
          id="si"
          value="Me gusta"
          onClick={() => like('si')}
        />
        <input
          type="button"
          id="no"
          value="No me gusta"
          onClick={() => like('no')}
        />
      </div>
      <div id="te-gustan">
        Te gustan <b>{liked}</b> personas.
      </div>
    </>
  );
}

export default App;
