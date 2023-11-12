import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useParams } from 'react-router-dom';


const DetailWiki = () => {
  const [detailData, setDetailData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/dbdisease/${id}`);
        setDetailData(response.data);
        console.log(response)
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="detail-container">
        {detailData ? (
          <div>
            <h1>Showdata</h1>
            <h2>{detailData.disname}</h2>
            <h2>{detailData.disname_eng}</h2>
            <h2>{detailData.disdescription}</h2>
            <h2>{detailData.protection}</h2>
            <h2>{detailData.treat}</h2>
            <img src={detailData.images} alt={detailData.disname} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DetailWiki;
