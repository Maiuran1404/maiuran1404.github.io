import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import './Home.scss';
import { motion } from "framer-motion";

//Assets
// import arrow from '../images/arrow-right.svg';
// import imgGirl from './images/girl.webp';
// import imgBoy from './images/boy.webp';


function Home() {
  
    let app = useRef(null);
    // let images = useRef(null);
    let content = useRef(null);
    let tl = new TimelineLite({delay: .3})
    let buttons = useRef(null);

    useEffect(() => {

        //IMAGES VARS
        // const girlImage = images.firstElementChild;
        // const boyImage = images.lastElementChild;

        // Content VARS
        const headlineFirst = content.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentone = content.children[1];
        const contenttwo = content.children[2];
        const contentthree = content.children[3];
        const contentfour = content.children[4];
        const contentfive = content.children[5];
        const contentsix = content.children[6];
        const conotentseven = content.children[7];

        const buttonsone  = buttons.children[0];
        const buttonstwo  = buttons.children[1];
        const buttonsthree  = buttons.children[2];
        

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
        ease: Power3.easeOut, delay: .2
      }, .10, 'Start')
      .from(contentone, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
      .from(contenttwo, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.5)
      .from(contentthree, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
      .from(contentfour, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.7)
      .from(contentfive, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.8)
      .from(contentsix, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.9)
      .from(conotentseven, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 2.0)
      .from(buttonsone, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.6)
      .from(buttonstwo, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.0)
      .from(buttonsthree, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4);
    
    }, [tl])

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} className="hero" ref={el => app = el}>
      <motion.div className="container"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
                <h1>
                <div className="hero-content-line">
                    <div className="hero-content-line-inner"> Maiuran Loganathan </div>
                </div>
                <div className="hero-content-line">
                    <div className="hero-content-line-inner-second"> Effectively building solutions to </div>  
                </div>
                <div className="hero-content-line">
                    <div className="hero-content-line-inner-second"> meaningful challenges </div>
                </div>
                </h1>
                <p> Full stack: MERN stack, Firebase + MongoDb, React, Gsap </p>
                <p> Mobile: React Native + Swift </p>
                <p> UI/UX: Figma, Sketch </p>
                <h3>Tools</h3>
                <p> UI/UX: Figma, Sketch </p>
                <br/>
                
                </div>
            </div>
        <div className="hero-content"  >
        <div className="hero-content-inner" ref={el => buttons = el}>
            <div className="btn-row">
                <button className="explore-button" type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/coding';
                          }}> Coding
                </button>
              </div>
              <div className="btn-row">
                <button className="explore-button" type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/startups';
                          }}> CV stuff
                </button>
              </div>
              <div className="btn-row">
                <button className="explore-button" type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/coding';
                          }}> My story
                </button>
              </div>
        </div>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;