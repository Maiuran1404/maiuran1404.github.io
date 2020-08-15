import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10% 18%;
    grid-template-areas: "Title Title Title" "Content1 Content2 . ";
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Title = styled.div`
    grid-area: Title;
    margin-left: 5.5%;
    font-size: 24px;
    font-weight: 500;
    margin-top: 2%;
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
        cursor:pointer;
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
        cursor:pointer;
        
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
    font-weight: 10;
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

function Programming() {
    let project = useRef(null);
    let tl = new TimelineLite({delay: .3})

    useEffect(() => {


        // Content VARS
        const projectone = project.children[0];
        const projecttwo = project.children[1];
        const projectthree = project.children[2];
        const projectfour = project.children[3];

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
    
    }, [tl])
    
    return (
        <Container ref={el => project = el} initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Title> Projects </Title>
            <Button href="https://www.maiuran.com"> Home </Button>

                
                    <GreyBox 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    ><Apple href="https://mongodb-digitalbrain.herokuapp.com/">
                        <ProjectTitle > Delta </ProjectTitle>
                        <Desc> A note-taking application with spaced practice algorithm </Desc>
                        <Desc2> Click to see project </Desc2>
                        </Apple>
                    </GreyBox>
                
                
            <GreyBox2
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
                <Apple href="https://music-bnb.herokuapp.com/">
                <ProjectTitle>MusicBnB</ProjectTitle>
                <Desc>A platform to rent out expensive instruments (piano, violin etc.) </Desc>
                <Desc2> Click to see project </Desc2>
                </Apple>
            </GreyBox2>
        </Container>
    );
}

export default Programming
