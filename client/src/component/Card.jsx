import React from "react";
import { Link } from "react-router-dom";
import '../page/styles/Card.css';

const Card = ({ imageUrl, title, link, titleeng }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="testedit">{title}<br/>({titleeng})</h2>
        <Link to={link}>
          <button type="button">อ่านเพิ่มเติม</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
