import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1px 1px;
    grid-template-areas: "Title Title" ". .";
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Title = styled.div`
    grid-area: Title;
`


const GreyBox = styled.div`
    background: #EAEAEA;
    width: 50%;
    height: 300%;
    border-radius: 5%;
    padding: 1%;
    align-content: center;
    margin: auto;
`

const ProjectTitle = styled.div`
    font-size: 22px;
    margin-left: 10%;
    margin-top: 10%;
    align-content: center;
`


function Programming() {
    let project = useRef(null);
    let tl = new TimelineLite({delay: .3})

    useEffect(() => {


        // Content VARS
        const projectone = project.children[0];
        const projecttwo = project.children[1];
        const projectthree = project.children[2];

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
      .from(projecttwo, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.6)
      .from(projectthree, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.8)
    
    }, [tl])
    
    return (
        <Container ref={el => project = el}>
            <Title> Coding </Title>
            <GreyBox>
                <ProjectTitle> Delta.io </ProjectTitle>
            </GreyBox>
            <GreyBox>
                <ProjectTitle>MusicBnB</ProjectTitle>
            </GreyBox>
        </Container>
    );
}

export default Programming
