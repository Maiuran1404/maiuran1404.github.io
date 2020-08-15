import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 10% 18%;
    grid-template-areas: "Title Title Title Title" "Pro1 Pro2 Pro3 ." ". . . .";
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Title = styled.div`
    grid-area: Title;
    margin-left: 5.5%;
    font-size: 24px;
    font-weight: 500;
    margin-top: 3%;
    @media (max-width: 800px) {
        margin-top: 5%;
    }
`


const GreyBox = styled(motion.div)`
    grid-area: Content1;
    background: #FAFAFA;
    width: 150%;
    height: 120%;
    border-radius: 10%;
    padding: 0%;
    align-content: center;
    margin-left: 30%;
    margin-top: 0%;
    &:hover{
        /* cursor:pointer; */
    }
`

const GreyBox2 = styled(motion.div)`
    grid-area: Content2;
    background: #FAFAFA;
    width: 150%;
    height: 120%;
    border-radius: 10%;
    padding: 0%;
    align-content: left;
    margin-left: 30%;
    margin-top: 0%;
    &:hover{
        /* cursor:pointer; */
        
    }
`

const GreyBox3 = styled(motion.div)`
    grid-area: Content3;
    background: #FAFAFA;
    width: 150%;
    height: 120%;
    border-radius: 10%;
    padding: 0%;
    align-content: left;
    margin-left: 30%;
    margin-top: 0%;
    &:hover{
        /* cursor:pointer; */
        
    }
`

const ProjectTitle = styled.div`
    font-size: 18px;
    font-weight: 400;
    margin-left: 15%;
    margin-top: 10%;
    align-content: center;
`

const Button = styled.a`
    text-decoration: none;
    color: black;
    border: none;
    background: none;
    outline:none;
    grid-area: Title;
    width: 5%;
    height: 10%;
    align-content: center;
    margin-top: 2%;
    margin-left: 2%;
`

const Desc = styled.p`
    margin-left: 20%;
    margin-top: 0;
    font-weight: 10;
    font-size: 14px;
    
`

const Desc2 = styled.p`
    margin-left: 20%;
    font-weight: 10;
    font-size: 12px;
`
const Apple = styled.a`
    text-decoration: none;
    color: black;
`

const Pro1 = styled.div`
     grid-area: Pro1;
     width: 200%;
`

const Pro2 = styled.div`
     grid-area: Pro2;
     width: 200%;
`

const Pro3 = styled.div`
     grid-area: Pro3;
     width: 200%;
`

function Programming() {
    let project = useRef(null);
    let tl = new TimelineLite({delay: .3})

    useEffect(() => {


        // Content VARS
        const projectone = project.children[0];
        const projecttwo = project.children[1];
        const projectthree = project.children[2];
        const projectfour = project.children[3];
        const projectfive = project.children[4];

      //Removing flash
      TweenMax.to(project, 0, {css: {visibility: 'visibile'}})

      // //Images Animation
      // tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
      //   .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      //   .from(boyImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
      //   .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .1)
      

      //Content Animation
      tl.staggerFrom([], 1, {
        y: 44,
        ease: Power3.easeOut, delay: .2
      }, .10, 'Start')
      .from(projectone, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.4)
      .from(projecttwo, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.2)
      .from(projectthree, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.4)
      .from(projectfour, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.5)
      .from(projectfive, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.6)
    
    }, [tl])
    
    return (
        <Container ref={el => project = el} initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Title> Skills </Title>
            <Button href="https://www.maiuran.com"> Home </Button>
            <Pro1>
            <ProjectTitle>Product Development</ProjectTitle>
                <br/>
                <Desc> Full-stack: MERN stack (MongoDB, Firebase, AWS) </Desc>
                <Desc> Mobile: React Native + Swift </Desc>
                <Desc> UI / UX: Figma + Sketch </Desc>
            </Pro1>
            <Pro2>
            <ProjectTitle>Business Strategy</ProjectTitle>
                <br/>
                <Desc> Open-source white paper with DoLittle / Wilhemsen (Norway's largest shipping company) </Desc>
                <Desc> Strategy for cutting-edge tech with BA-HR (Norway's leading law firm)  </Desc>
                
            </Pro2>
            <Pro3>
            <ProjectTitle>Public Speaking</ProjectTitle>
                <br/>
                <Desc> Norway's largest corporate conference for PM, Crown Prince and 1'200 executives (NHO Oslo, 2017) </Desc>
                <Desc> World's largest educational tech conference (BETT London 2016) </Desc>
                <Desc> World's largest real-estate conference (MIPIM Cannes, 2017) </Desc>
            </Pro3>


        </Container>
    );
}

export default Programming
