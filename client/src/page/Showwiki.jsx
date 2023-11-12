// ShowWiki.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowWiki = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/typecactus/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.cacname}</h2>
          <p>{data.cacdescription}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowWiki;
