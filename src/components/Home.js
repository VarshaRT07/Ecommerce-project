import React from 'react'
import './Home.css'
import {useState} from 'react'
import Modal from "./Modal"; 
let index=1;
  
export default function Home({incre,decre,counter,addtocart}) {
  const [showComp, setShowComp] = useState(false);
  

    
  

  const [mainImage, setMainImage] = useState('/images/image-product-1.jpg');

   const thumbnailImages=[
    {"src":"/images/image-product-1-thumbnail.jpg"},
    {"src":"/images/image-product-2-thumbnail.jpg"},
    {"src":"/images/image-product-3-thumbnail.jpg"},
    {"src":"/images/image-product-4-thumbnail.jpg"}
   ]
  
  const changeMainImage = (image) => {
    setMainImage(image);
  };

  const frontScroll = () => {
    if (index < 5) {
      changeMainImage(`/images/image-product-${index}.jpg`);
    }
    if (index === 5) {
      changeMainImage(`/images/image-product-${1}.jpg`);
      index = 1;
    }
    console.log(index)
    index += 1;
  };

  const backScroll = () => {
    if (index < 5) {
      changeMainImage(`/images/image-product-${index}.jpg`);
    }
    if (index === 0) {
      changeMainImage(`/images/image-product-${4}.jpg`);
      index = 4;
    }
    console.log(index)
    index -= 1;
  };
  
  


  return (
    <div className="home">
        <div className="image-container">
        <div>
          <img src={mainImage}
            onClick={() => setShowComp(true)}
            alt="main"
            className="mainprd"
          />
        </div>
            <div className='container'>
            {thumbnailImages.map((image, index) => (
              <div key={index} onClick={() => changeMainImage(`/images/image-product-${index + 1}.jpg`)}>
            <img src={image.src} alt={`Thumbnail ${index + 1}`} className="thumbnail"/>
          </div>
        ))}
       
        </div>
        </div>
        <div className="product-details">
          <h6 className="sneaker-title">Sneaker Company</h6>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="actual-value">
          <h2>$125.00</h2>
          <h5 id="offer">50%</h5>
        </div>
        <p className="pastvalue">$250.00</p>
        <div className='order-buttons'>
          
          <div className='counter-comp'>
          <button id="decrement" onClick={decre}>-</button>
         <input type="text" id="counter" value={counter}/>
         <button id="increment" onClick={incre}>+</button>
          </div>
         
          <button className="addtocart" onClick={addtocart}>
            Add to cart
            </button>
        </div>  
        </div>

        {showComp && (
        <Modal>
          <div className="modal-component">
           
               <div className="cross" onClick={() => setShowComp(false)}>
              X
            </div>
            <div className="front-scroll" onClick={frontScroll}>{`>`}</div>
            <div className="back-scroll" onClick={backScroll}>{`<`}</div>
            
           
           <div>
              <img src={mainImage} alt="" className="mainprd" />
            </div>
            <div
              className="container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {thumbnailImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() =>
                    changeMainImage(`/images/image-product-${index + 1}.jpg`)
                  }
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
