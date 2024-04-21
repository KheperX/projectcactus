import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import axios from "axios";


const Disease = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/dbdisease"
        ); // แทน URL ของ API ที่ใช้ดึงข้อมูล
        setData(response.data);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="textclanwiki">โรคที่ควรระวัง</h1>
      </div>
      <div className="card-list">
        {data.map((item) => (
          <Card
            key={item.iddis}
            imageUrl={item.images}
            title={item.disname}
            titleeng={item.disname_eng}
            description={item.disdescription}
            protection={item.protection}
            treat={item.treat}
            link={`/detaildisease/${item.iddis}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Disease;
