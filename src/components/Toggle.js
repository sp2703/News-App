import React, { useState } from 'react';
import styled from 'styled-components';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const Toggle = ({nav, setnav}) => {

    const [color, setcolor] = useState(false);

    const handleMenuBar = ()=>{
        setcolor(!color);
        setnav('bar')
    }

    const handleMenuGrid = ()=>{
        setcolor(!color);
        setnav('grid')
    }

    return(
        <Parent>
            <h3>View Toggle</h3>
            <ButtonsBox>
                <FormatListBulletedIcon onClick={handleMenuBar} className={color ? 'grey': 'blue'}/>
                <ViewModuleIcon onClick={handleMenuGrid} className={color ? 'blue': 'grey'}/>
            </ButtonsBox>
        </Parent>
    )
}

const Parent = styled.div`
    
    height: 120px;
    min-width: 80%;
    background-color:white;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px #b3b3b3;
    margin-bottom: 20px;
    h3{
        margin: 10px;
        top:0;
    }
    `;


 const ButtonsBox =  styled.div`
        height: 50%;
        width: 100%;
        display:flex;
        align-items: center;
        justify-content:center;
        .MuiSvgIcon-root {
            min-width: 50%;
            height: 100%;
            color: #A5B1AF;
            cursor: pointer;
        }
        .MuiSvgIcon-root:nth-child(1) {
            border-radius: 10px 0 0 10px;
        }
        .MuiSvgIcon-root:nth-child(2) {
            border-radius: 0 10px 10px 0;
        }
        .blue{
            background-color: #23E6A7;
        }
        .grey{
            background-color: #D6DAD9;
        }

    

`;

export default Toggle;