import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import './styles/model.css'
import mam from './imgs/mam.png';
import ast from './imgs/ast.png';
import meto from './imgs/meto.png';
import asm from './imgs/asm.png';

const ML = () => {
  const [breedPrediction, setBreedPrediction] = useState('');
  const [showCards, setShowCards] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      fetch('http://localhost:5000/upload', {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          setBreedPrediction(data.classification);
          setShowCards(true);
          const selectedImage = document.getElementById('selectedImage');
          selectedImage.src = URL.createObjectURL(file);
        })
        .catch(error => console.error(error));
    }
  };

  const cards = [
    { title: "Mammillaria", description: "...", img: mam },
    { title: "Astrophytum_Asterias", description: "...", img: ast },
    { title: "Astrophytum_Myriostigma", description: "...", img: asm },
    { title: "Melocactus", description: "...", img: meto },
    // ... เพิ่ม Card ต่อไปตามต้องการ
  ];

  return (
    <body>
      <div>
        <div>
          <Navbar />
              <h1 className="h1ML">
                ใส่รูปกระบองเพรชที่ต้องการตรวจสอบสายพันธุ์
              </h1>
              <section class="layout">
              <div className="divbox" style={{ maxWidth: '100%', width: '300px', height: '300px', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <img id="selectedImage" src="#" alt="รูปของคุณ" style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: 'auto', borderRadius: '15px' }} />
                <div>
                  <input type="file" id="imageInput" onChange={handleImageChange} className="form-control" />
                  <div className='perdic' id="breedPrediction">{breedPrediction}</div>
                </div>

              </div>
              <div className="arrow"></div>
              <div className='showcard'>
                
              {showCards && (
                <>
                  {cards.map((card, index) => (
                    (card.title === breedPrediction) && (
                      <div key={index} className="container2">
                        <div className="card1">
                          <img src={card.img} alt={card.title} />
                          <div className="intro">
                            <h1 className="h1model">{card.title}</h1>
                            <p className="pmodel">The <span className="span1">{card.title}</span>{card.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </>
              )}
              </div>
              </section>
            
        </div>

      </div>
    </body>
  );
};

export default ML;
