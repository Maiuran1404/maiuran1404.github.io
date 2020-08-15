import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px 30px;
    grid-template-areas: "Title Title" ". .";
`

const GreyBox = styled.div`
    background: grey;
`

const Title = styled.div`
    grid-area: Title;
`

class Programming extends Component {
    render() {
        return (
            <Container>
                <Title> Coding </Title>
                <GreyBox>
                    <h2>Delta</h2>
                </GreyBox>
                <GreyBox>
                    <h2>MusicBnB</h2>
                </GreyBox>
            </Container>
        )
    }
}

export default Programming
