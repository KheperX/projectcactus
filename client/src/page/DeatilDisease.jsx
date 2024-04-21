import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles/DetailDisease.css";
import Plant from "./imgs/plant.png";
import Herbs from "./imgs/herbs.png";

const DetailWiki = () => {
  const [data, setDetailData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/dbdisease/${id}`
        );
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
      {data ? (
        <div>
          <table>
            <tr>
              <td>
                <div className="cactus-img">
                  <div className="cactustestimg"></div>
                  <img src={data.images} alt="" />
                </div>
                <div className="text">
                  <h1>
                    {data.disname}({data.disname_eng})
                  </h1>
                  <h2></h2>
                  <h4>{data.disdescription}</h4>
                </div>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <br />
          <div className="cacbox2">
            <img className="cacbox-image2" src={Plant} alt="" />
            <p className="cacbox-text2">ป้องกันโรคยังไง?</p>
          </div>
          <br />
          <div className="cacbox">
            <p className="cacbox-text">{data.protection}</p>
          </div>
          <br />
          <div className="cacbox3">
            <img className="cacbox-image2" src={Herbs} alt="" />
            <p className="cacbox-text2">รักษาโรคยังไง?</p>
          </div>
          <br />
          <br />
          <br />
          <div className="cacbox">
            <p className="cacbox-text">{data.treat}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailWiki;
