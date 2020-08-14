import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import './Home.scss';

//Assets
// import arrow from '../images/arrow-right.svg';
// import imgGirl from './images/girl.webp';
// import imgBoy from './images/boy.webp';


function Home() {
  
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({delay: .3})

    useEffect(() => {

      //IMAGES VARS
      const girlImage = images.firstElementChild;
      const boyImage = images.lastElementChild;

      // Content VARS
      const headlineFirst = content.children[0].children[0];
      const headlineSecond = headlineFirst.nextSibling;
      const headlineThird = headlineSecond.nextSibling;
      const contentP = content.children[1];
      const contentButton = content.children[2];

      //Removing flash
      TweenMax.to(app, 0, {css: {visibility: 'visibile'}})

      // //Images Animation
      // tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
      //   .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      //   .from(boyImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
      //   .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .1)
      

      //Content Animation
      tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
        y: 44,
        ease: Power3.easeOut, delay: .6
      }, .15, 'Start')
      .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
      .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6);
    
    }, [tl])

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner"> Maiuran Loganathan: </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner"> Effectively building solutions to </div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner"> meaningful challenges </div>
                </div>
              </h1>
              <p>
                Competencies:
              </p>
              <p> Full stack: MERN stack, Firebase + MongoDb, React, Gsap </p>
              {/* <p> Mobile: React Native + Swift </p>
              <p> UI/UX: Figma, Sketch </p> */}
              <div >
                <button className="explore-button" type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/coding';
                          }}> Podcast: 
                  <div className="arrow-icon">
                    
                    {/* <img src={arrow} alt="row"/> */}
                  </div>
                </button>
              </div>
              <div >
                <button className="explore-button" type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/startups';
                          }}> Podcast: 
                  <div className="arrow-icon">
                    
                    {/* <img src={arrow} alt="row"/> */}
                  </div>
                </button>
              </div>
              <div >
                <button className="explore-button" type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/coding';
                          }}> Podcast: 
                  <div className="arrow-icon">
                    
                    {/* <img src={arrow} alt="row"/> */}
                  </div>
                </button>
              </div>
            </div>
            
          </div>
          {/* <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div> */}
        </div>
        <div className="hero-content-inner">
            <h1>Second para</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;