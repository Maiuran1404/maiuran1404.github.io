import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Site1 from './Site1.png';
import Site2 from './Site2.png';

const Container = styled(motion.div)`
    display: grid;
    color: black;
    background: #2A2A39;
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* gap: 10% 18%; */
    grid-template-areas: "Title Title" "Content1  Content2" "Content3 Content3" "Content4 Content4";
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Title = styled.div`
    grid-area: Title;
    color: white;
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
    background: #FFF;
    width: 100%;
    height: 120%;
    padding: 0%;
    
    margin-left: 0%;
    margin-top: 0%;
    &:hover{
        cursor:pointer;
    }
`

const ProjectTitle = styled.div`
    color: black;
    font-size: 18px;
    font-weight: 400;
    margin-left: 15%;
    margin-top: 10%;
    align-content: center;
`

const Button = styled.a`
    color: white;
    text-decoration: none;
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
    color: black;
`

const Desc2 = styled.p`
    color: black;
    margin-left: 20%;
    font-weight: 10;
    font-size: 12px;
`
const Apple = styled.a`
    text-decoration: none;
    color: black;
`

const PartOne = styled.div`
    grid-area: Content1;
    background: white;
    color: black;
`

const PartTwo = styled.div`
    grid-area: Content2;
    background: white;
    color: black;
`

const PartThree = styled.div`
    grid-area: Content3;
    background: white;
`

const PartFour = styled.div`
    grid-area: Content4;
    background: white;
`

const Image = styled(motion.img)`
  margin-left: 10%;
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
    //   .from(projectthree, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.4)
    //   .from(projectfour, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.5)
    
    }, [tl])
    
    return (
        <Container ref={el => project = el} initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Title> Delta </Title>
            <Button href="https://www.maiuran.com"> Home </Button>

            <PartOne>
                <h3>Project Vision</h3>
                <p> Delta is a note-taking and reviewing platform based on spaced practice. Each note is limited to a tweet size and
                    is shown to you at set time intervals to maximise knowledge retention.  </p>
            </PartOne>
            
            <PartTwo>
            <h3> Challenges: </h3>
                <p> 1. Build efficient data structure for Topics -> Subtopics -> Notes </p>
                <p> 2. Create an intuitive User Experience </p>
                <p> 3. Build an algorithm to show notes at set time intervals (from Spaced Practice) </p>
            </PartTwo>

            <PartThree>
                <Image src={Site1} width={450} />
                <Image src={Site2} width={450} />
            </PartThree>
            
            <PartFour>
                    <p> Link to project  </p>
            </PartFour>
                
        </Container>
    );
}

export default Programming
