import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Modal from '../components/Modal'; 
import "../styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/hasaan.masrwe?mibextid=ZbWKwL", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/hasaanmasrwe?igsh=NHExdGhiN2o4d2d6", "_blank");
  };

  return (
    <div className="home-container">

      {/* Slideshow */}
      <div className="slideshow-container">
        <Slider {...settings}>
          <div>
            <img
              src="/assets/pic1.png"
              alt="Slide 1"
              className="slide-image"
            />
          </div>
          <div>
            <img
              src="/assets/pic2.png"
              alt="Slide 2"
              className="slide-image"
            />
          </div>
          <div>
            <img
              src="/assets/pic3.png"
              alt="Slide 3"
              className="slide-image"
            />
          </div>
        </Slider>
      </div>

      {/* Free text section */}
      <div className="free-text-container">
        <img src="/assets/background.png" alt="" />
        <p className="free-text">ברוכים הבאים למוסך שלנו! ב-מוסך חסן,
           אנו מחויבים לספק שירותי רכב מהשורה הראשונה המותאמים לענות על כל הצרכים שלך. 
           בין אם אתה זקוק לתחזוקה שוטפת, תיקונים מורכבים או אבחון מיוחד, הצוות המיומן שלנו 
           כאן כדי לעזור. עם מחויבות למצוינות ולשביעות רצון לקוחות, אנו מבטיחים שהרכב שלך 
           נמצא בידיים הטובות ביותר. חקור את השירותים שלנו, הזמינו פגישות באופן מקוון 
           וסמוך עלינו שנשמור על הרכב שלך בצורה חלקה. ברוכים הבאים למקום שבו
           ריאות הרכב שלך והשקט הנפשי שלך הם בראש סדר העדיפויות שלנו.  
            </p>
            <div className='ripple-background'>
  <div className='circle xxlarge shade1'></div>
  <div className='circle xlarge shade2'></div>
  <div className='circle large shade3'></div>
  <div className='circle mediun shade4'></div>
  <div className='circle small shade5'></div>
</div>
      </div>

      {/* Menu */}
      <div className="menu-container">
        <div className="wrapper">
        <span>ת</span>
        <span>פ</span>
        <span>ר</span>
        <span>י</span>
        <span>ט</span>
        <span> </span>
        <span>מ</span>
        <span>ח</span>
        <span>ל</span>
        <span>ק</span>
        <span>ו</span>
        <span>ת</span>
        </div>
        <ul className="menu-list">
    <li>
      <Link to="/electricity-and-diagnosis"><button className="menu-button">חשמל ואבחון</button></Link>
    </li>
    <li>
      <Link to="/conditioning"><button className="menu-button">מיזוג</button></Link>
    </li>
    <li>
      <Link to="/mechanics"><button className="menu-button">מכונאות</button></Link>
    </li>
    <li>
      <Link to="/lab"><button className="menu-button">מעבדה</button></Link>
    </li>
    <li>
      <Link to="/hybrids"><button className="menu-button">רכבי היבריד (מערכת כיול רדאר)</button></Link>
    </li>
  </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="button-container">
          <div className="title"> 🛠️ הזמנת חלקים / אבזרים 🛠️</div>
          <button className="order-products" onClick={handleModalOpen}>
            מחסן חלקים
          </button>
        </div>
        <div className="button-container">
          <div className="title"> 🚗 רכבים למכירה 🚗</div>
          <div className="social-icons">
            <button className="social-icon" onClick={handleFacebookClick}>
              <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button className="social-icon" onClick={handleInstagramClick}>
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </div>
        </div>
        <div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
  </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
      </Modal>
    </div>
  );
};

export default Home;
