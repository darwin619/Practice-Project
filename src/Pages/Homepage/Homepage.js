import React from "react";
import "./Homepage.scss";
import home1 from "../../Assets/Home1.jpg";
import home2 from "../../Assets/Home2.jpg";
import home3 from "../../Assets/Home3.jpg";


const Homepage = ({history}) => {
    return (
      <div className="homepage">
        <div className="homepage__title">Explore the universe with NASA</div>
        <div className="homepage__card-container">
          <div
            className="homepage__card1"
            onClick={() => history.push("pictureoftheday")}
          >
            <img src={home1} alt="card1" className="homepage__card-image" />
            <span className="homepage__card1-title">
              Astronomical Picture Of The Day
            </span>
          </div>
          <div className="homepage__card2"
          onClick={() => history.push("searchpage")}
          >
            <img src={home2} alt="card2" className="homepage__card-image" />
            <span className="homepage__card2-title">
              Search For Images In Nasa Database
            </span>
          </div>
          <div className="homepage__card3">
            <img src={home3} alt="card3" className="homepage__card-image" />
            <span className="homepage__card3-title">
              Images Captured By The Mars Rover
            </span>
          </div>
        </div>
        <div className="homepage__footer">
          <span>Made By Shivam@NASA</span>
        </div>
      </div>
    );
}

export default Homepage;
