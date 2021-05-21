import React, { useState } from 'react';
import styled from 'styled-components';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BottomNav = ({setpagenum, pagenum}) => {


    const handleForward = ()=>{
        if(pagenum<3){
            setpagenum(pagenum+1);}
        if(pagenum==3)
        {
            setpagenum(1);
        }
    }
    const handleBackward = ()=>{
        if(pagenum>=1){
        setpagenum(pagenum-1);}
        if(pagenum==1)
        {
            setpagenum(3);
        }
    }

    return(
        <Parent>
            <Child>
            <NavigateBeforeIcon className={ pagenum === 1 ? 'none': ''} className='touch' onClick={handleBackward}/>
            <Circle className={pagenum === 1 ? 'blue': ''}>1</Circle>
            <Circle className={pagenum === 2 ? 'blue': ''}>2</Circle>
            <Circle className={pagenum === 3 ? 'blue': ''}>3</Circle>
            <NavigateNextIcon className={ pagenum === 3 ? 'none': ''}  className='touch' onClick={handleForward}/>
            </Child>
        </Parent>
    )
}

const Parent = styled.div`
    height: 8%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .blue{
        background-color: white;

    }
    .none{
        visibility: hidden;
    }
    .touch{
        cursor: pointer;
    }
`;

const Child= styled.div`

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 20%;
`;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #B1B1B1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`;

export default BottomNav;