import React, { useState } from 'react';
import styled from 'styled-components';


const Feedback = ({setshowForm, showForm}) => {

    const [color, setcolor] = useState(false);

    const handleClick = () =>{
        setshowForm(!showForm);
    }

    return(
        <ProfileParent>
            <h4>Have a Feedback?</h4>
            <button onClick={handleClick} className={showForm ? 'red' : 'notred'}>We're Listening</button>
        </ProfileParent>
    )
}

const ProfileParent = styled.div`
    
    height: 70px;
    max-width: 100%;
    min-width: 80%;
    background-color:white;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    align-items: space-between;
    box-shadow: 0 0 10px #b3b3b3;
    cursor: pointer;
    h4{
        margin-bottom: 10px;
    }
    h4, button{
        width: 100%;
        height: 50%;
        margin: 0;
    }
    .notred{
            background-color: #23E6A7;
        }
        .red{
            background-color: red;
        }
    button{
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }


`;

export default Feedback;