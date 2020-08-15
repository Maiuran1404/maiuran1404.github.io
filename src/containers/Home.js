import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import './Home.scss';
import { motion } from "framer-motion";
import Mayoo from './mayoo.png'
import styled from 'styled-components';

//Assets
// import arrow from '../images/arrow-right.svg';
// import imgGirl from './images/girl.webp';
// import imgBoy from './images/boy.webp';
let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const Image = styled(motion.img)`
  margin-left: 70%;
`

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
        // const headlineSecond = headlineFirst.nextSibling;
        // const headlineThird = headlineSecond.nextSibling;
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
      tl.staggerFrom([headlineFirst.children], 1, {
        y: 44,
        ease: Power3.easeOut, delay: .2
      }, .10, 'Start')
      .from(contentone, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.0)
      .from(contenttwo, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.2)
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
                <div>
                </div>
                </h1>
                <p> I'm a full-stack developer and serial-entrepreneur from Oslo, Norway. I just graduated from <a href="https://www.minerva.kgi.edu"> Minerva Schools</a> studying Venture Initiation, CS and Philosophy. </p>
                <p> I am currently obsessed with becoming the fastest prototyper I can become, and improving my feedback-iteration time. </p>
                <p> On my freetime I run ultramarathons, play the piano and watch motivational clips of Kobe Bryant. </p>
                <br/>
                <p> You can find me on <a href="https://www.linkedin.com/in/maiuran-loganathan-472ba893/">LinkedIn</a>, <a href="https://github.com/Maiuran1404">GitHub</a> or <a href="https://www.youtube.com/channel/UCXoV5_-c5bx8SLDyHk3eJqQ/featured">Youtube</a> </p>
                <Image 
                    src={Mayoo} width={150}
                    /> 
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
                          }}> Projects
                </button>
              </div>
              {/* <div className="btn-row">
                <button className="explore-button" type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/startups';
                          }}> Skills
                </button>
              </div>
              <div className="btn-row">
                <button className="explore-button" type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/coding';
                          }}> Story
                </button>
              </div> */}
        </div>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;