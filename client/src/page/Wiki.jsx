import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import axios from "axios";


const Wiki = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/dbwiki"
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
      <Navbar/>
      
        <h1 className="textclanwiki">ตระกูลของแคคตัส</h1>
      
      <div className="card-list">
        {data.map((item) => (
          <Card
            key={item.idwiki}
            imageUrl={item.wiki_images}
            title={item.wikiname_th}
            titleeng={item.wikiname_eng}
            link={`/detailclan/${item.idwiki}`} // ส่ง URL ไปยังหน้า พร้อมกับ ID
          />
        ))}
      </div>
    </div>
  );
};

export default Wiki;
