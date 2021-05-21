import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Feeds from './Feeds';

const Home = ({nav, setnav}) => {

    return(
        <Parent>
            <Nav setnav={setnav} nav={nav}/>
            <Feeds setnav={setnav} nav={nav}/>
        </Parent>
    )
}

const Parent = styled.div`
    height: 95vh;
    width: 95%;
    display: flex;
    border-radius: 100px;


`;

export default Home;