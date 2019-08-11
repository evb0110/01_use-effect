import React, { useEffect, useState } from 'react';
import Name from './Name';
import axios from 'axios';

export default function List({ handleInfo }) {
  const [names, setNames] = useState([]);

  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_INITIAL_URL + 'users.json')
      .then(res => res.data)
      .then(d => setNames(d))
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  function handleChosen(id, name) {
    setChosen(id);
    handleInfo(id, name.name);
  }

  return (
    <div className="list-names">
      {names.map(name => (
        <Name
          name={name.name}
          handleChosen={id => handleChosen(id, name)}
          isChosen={name.id === chosen}
          key={name.id}
          id={name.id}
        />
      ))}
    </div>
  );
}
