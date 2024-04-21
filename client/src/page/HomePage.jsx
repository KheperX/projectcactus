import React from "react";
import "./styles/home.css";
import Img2 from "./imgs/photosun.png";
import Img3 from "./imgs/photocactus.png";
import Navbar from "../component/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="hometext">
        <p>
          ง่ายต่อการแยก <br /> สายพันธุ์ !
        </p>
      </h1>
      <h4 className="hometext2">
        การอยู่บ้านก็ยุ่งเกินไปสำหรับมือใหม่อย่างเราต้องศึกษาข้อมูลให้ดีก่อน
        <br />
        คิดจะปลูกหรือหากไม่รู้ว่าสารพันธุ์ที่เลี้ยงอยู่คืออะไรลองใช้เว็ปเรา !
      </h4>
      <a href="/mlearning">
        <button className="homebtn" type="button"> เริ่มเลย </button>
      </a>
      <div className="imghome2">
        <img src={Img2} alt="cactus2" />
      </div>
      <div className="imghome3">
        <img src={Img3} alt="cactus3" />
      </div>
    </div>
  );
};

export default HomePage;
