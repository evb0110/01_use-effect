import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function Details({ info }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!info.id) return;
    const currentData = data;

    if (currentData) {
      return setData(currentData);
    } else {
      axios
        .get(process.env.REACT_APP_INITIAL_URL + info.id + '.json')
        .then(res => res.data)
        .then(d => {
          setData(d);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }, [info.id, data]);

  if (!data) return null;

  return (
    <div className="list-names">
      <img
        className="list-name-image"
        src={
          data.avatar +
          Math.random()
            .toString()
            .slice(2, 3)
        }
        alt="pravatar"
      />
      <div>city: {data.details.city} </div>
      <div>company: {data.details.company} </div>
      <div>position: {data.details.position} </div>
    </div>
  );
}
