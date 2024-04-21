import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles/DetailWiki.css";
import imgdetail1 from "./imgs/manual-book.png";
import imgdetail2 from "./imgs/sun.png";
import imgdetail3 from "./imgs/cloudy.png";
import imgdetail4 from "./imgs/water.png";
import imgdetail5 from "./imgs/fertilizer.png";
import imgdetail6 from "./imgs/seeding.png";

const DetailWiki = () => {
  const [data, setDetailData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/typecactus/cactus/${id}`
        );
        setDetailData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };
    console.log(data);
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        <Navbar />
        {data ? (
          <div>
            <table>
              <tr>
                <td>
                  <div className="cactus-img">
                    <img src={data.cactus_images} />
                  </div>
                  <div className="text">
                    <h1>{data.cacname}</h1>
                    <br />
                    <h4>{data.cacdescription}</h4>
                  </div>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <div className="cacbox2">
              <img className="cacbox-image2" src={imgdetail1} alt="" />
              <p className="cacbox-text2">วิธีการดูแล</p>
            </div>
            <br />
            <div className="cacbox">
              <img className="cacbox-image" src={imgdetail2} alt="sunlight" />
              <p className="cacbox-text">{data.sunlight}</p>
            </div>
            <div className="cacbox">
              <img className="cacbox-image" src={imgdetail3} alt="weather" />
              <p className="cacbox-text">{data.weather}</p>
            </div>
            <div className="cacbox">
              <img className="cacbox-image" src={imgdetail4} alt="water" />
              <p className="cacbox-text">{data.water}</p>
            </div>
            <div className="cacbox">
              <img className="cacbox-image" src={imgdetail5} alt="fertilizer" />
              <p className="cacbox-text">{data.fertilizer}</p>
            </div>
            <div className="cacbox">
              <img className="cacbox-image" src={imgdetail6} alt="planting" />
              <p className="cacbox-text">{data.planting}</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DetailWiki;
