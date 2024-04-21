import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import axios from "axios";
import { useParams } from 'react-router-dom';


const DetailClan = () => {
  const [data, setDetailData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/typecactus/clan/${id}`);
        setDetailData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <h1 className="textclanwiki">สกุลของแคคตัส</h1>
      <div className="card-list">
        {data !== null ? (
          data.map((item) => (
            <div key={item.idwiki}>
              <Card
                imageUrl={item.cactus_images}
                title={item.cacname}
                titleeng={item.clan}
                link={`/detailwiki/${item.idcactus}`}
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DetailClan;
