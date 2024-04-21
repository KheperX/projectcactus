import React from "react";
import Img1 from '../page/imgs/logocactus.png'
import '../page/styles/navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="nav-con">
            <div className="image-container1">
              <img src={Img1} alt="cactus1" />
            </div>
            <ul className="menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/wiki">Wiki</a>
              </li>
              <li>
                <a href="/disease">Disease</a>
              </li>
              <li>
                <a href="/aboutus">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
