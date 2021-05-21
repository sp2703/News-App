import React, { useState } from 'react';
import styled from 'styled-components';
import FeedBox from './FeedBox';
import BottomNav from '../components/BottomNav';

const Nav = ({setnav, nav}) => {

    const [pagenum, setpagenum] = useState(1);

    return(
        <Parent>
            <FeedBox setnav={setnav} nav={nav} pagenum={pagenum} setpagenum={setpagenum}/>
            <BottomNav pagenum={pagenum} setpagenum={setpagenum}/>
            {/* <FeedBox />
            <BottomNav /> */}
            
        </Parent>
    )
}

const Parent = styled.div`
    
    height: 100%;
    width: 100%;
    background-color: #E0EDF6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export default Nav;