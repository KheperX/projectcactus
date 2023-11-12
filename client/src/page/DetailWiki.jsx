import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useParams } from 'react-router-dom';


const DetailWiki = () => { 
  const [data, setDetailData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/typecactus/cactus/${id}`);
        setDetailData(response.data);
        console.log(response)
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };
    console.log(data)
    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div>
        {data ? ( 
          <div>
            <h1>Showdata</h1>
            <h2>{data.cacname}</h2>
            <img src={data.cactus_images} alt={data.cacname} />
            
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DetailWiki;