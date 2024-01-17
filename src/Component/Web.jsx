import { React, useState} from "react";
import "../css/Web.css";
import img1 from "../images/pinkgreenplant.jpg.jpg";
import img2 from "../images/pinkplant.jpg.jpg";
import img4 from "../images/shaljam.jpg.jpg";
import img5 from "../images/tree.jpg.jpg";
import img3 from "../images/Sea.jpg.jpg";
import img6 from "../images/sky.jpg.jpg";
import img7 from "../images/bottle (1).jpg";
import img8 from "../images/bottle2.jpg.jpg";
import VideoFile from "../images/back.mp4";
import LocomotiveScroll from "locomotive-scroll";
import {gsap} from "gsap";
import HoverVideoPlayer from "react-hover-video-player";

const Web = () => {
 
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const onMouseOverCaptureHandler = () => {
    setIsVideoPlaying(true)
    // console.log("onMouseOverCapture Event!");  
  };
  setTimeout(() => {
    setIsVideoPlaying(false)
  }, 9000);

  return (
    <div className="main">
      <div className="home">
        <div className="nav1">
          <div className="nleft">
            <a className="nlink" href="#">
              Home
            </a>
            <a className="nlink" href="#">
              Pricing
            </a>
            <a className="nlink" href="#">
              Products
            </a>
          </div>
          <a className="nlink" id="centeratag" href="#">
            Sheriyans
          </a>
          <div className="nright">
            <a className="nlink" href="#">
              Our Journey
            </a>
          </div>
        </div>
        <div className="hero">
          <div className="sustain">
            <h1>01.</h1>
            <h2>Sustainability.</h2>
            <p>
              {" "}
              commited to sustainability, eco-friendly choices for a better
              tomorrow.
            </p>
            <div className="susimage">
              <img id="img1" src={img1} />
            </div>
          </div>
          <div className="ephemeral">
            <div className="heading">
              <h1>E</h1>
              <h3>phemeral</h3>
              <h3>quilibrium.</h3>
            </div>
            <div className="imgntext">
              <img id="img2" src={img2} />
              <p>
                commited to sustainability, eco-friendly choices for a better
                tomorrow.
              </p>{" "}
            </div>
          </div>
          <div className="visit">
            <div className="circle">
              <i class="ri-arrow-down-line"></i>
            </div>
            <h5>Visit our gallery.</h5>
          </div>
        </div>
        <div className="motive">
          <h6>our motive</h6>
          <p>
            At Sheriyans, we are deeply commited to sustainability. we belive in
            a greener, more sustainable future,
            <span id="onespan"></span> and it's at the core of everything wo do.
            Our practices are designed with enviormental
            <span>
              <img id="img4" src={img4} />
            </span>{" "}
            responsibility in mind, from sourcing eco-friendly{" "}
            <span>
              <img id="img5" src={img5} />
            </span>{" "}
            materials to reducing our carbon footprint.
          </p>
        </div>
        <div className="middle">
          <div className="synimg">
            <img id="img3" src={img3}></img>
            <div className="synpara">
              <h5>Synergy.</h5>
              <p>
                commited to sustainability, eco-friendly choices for a better
                tomorrow.
              </p>{" "}
            </div>
          </div>

          <div className="harmony">
            <div className="harimg">
              <img id="img6" src={img6}></img>
              <div className="harpara">
                <h2>Harmony.</h2>
                <p>
                  commited to sustainability, eco-friendly choices for a better
                  tomorrow.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="bimg">
            <img id="img7" src={img7}></img>
            {/* <img id="img8" src={img8}></img> */}
          </div>
          <div className="btext">
            <h1>Biodegradable</h1>
            <h2>Packaging</h2>
            <p>
              {" "}
              commited to sustainability, eco-friendly choices for a better
              tomorrow.
            </p>
          </div>
        </div>
        <div className="future">
         {isVideoPlaying? <video src={VideoFile} autoPlay loop muted></video>:""}
          <div className="ftext">
            <h1>Think Of Future</h1>
            < button  onMouseOverCapture={onMouseOverCaptureHandler} autoPlay loop muted>
              Join The Movement
            </button>
            <HoverVideoPlayer
              videoSrc={VideoFile}
              focused={isVideoPlaying}
              disableDefaultEventHandling
              loop
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
