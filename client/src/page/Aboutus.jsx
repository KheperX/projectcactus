import React from "react";
import Navbar from "../component/Navbar";
import './styles/aboutus.css'
import logowhite from './imgs/logowhite.png'

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <main>
      <h1 className="abouttext" > เกี่ยวกับเรา </h1>
      <h5 className="abouttext2">
        เราจัดทำเว็บไซต์นี้ขึ้นศึกษาและเพื่อตรวจสอบสายพันธุ์กระบองเพรชสำหรับผู้ใช้
        <br />
        ที่อยากทราบสายพันธุ์กระบองเพชรที่ตนเองปลูกอยู่
        หรืออยากศึกษาข้อมูลเกี่ยวกับ
        <br />
        กระบองเพชรเพิ่มเติม เช่น โรคที่ควรระวังระหว่างปลูกต้นกระบองเพชร
        <br />
        และเราขอขอบคุณ สำหรับผู้ใช้งานที่เข้ามาใช้งานเว็บไซต์เรา
      </h5>
      </main>
      <footer>
        <div className="centered-text">
            <img src={logowhite} alt="cactus" />
          <h6>
            Power By End Project Team @ 2023 Team CACTUS Group Update 13/11/2023
            05:59
          </h6>
        </div>
      </footer>
    </div>
  );
};

export default Aboutus;
