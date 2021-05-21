import React, { useState } from 'react';
import styled from 'styled-components';
import RD from '../images/RD.jpg';


const Profile = () => {

    const [color, setcolor] = useState(false);

    return(
        <ProfileParent>
            <img src={RD} alt="" />
            <div>
                <h4>Hi Reader!</h4>
                <p>Here's your News!</p>
            </div>
        </ProfileParent>
    )
}

const ProfileParent = styled.div`
    
    height: 60px;
    max-width: 100%;
    min-width: 80%;
    background-color:white;
    display: flex;
    text-align: center;
    border-radius: 5px;
    padding: 10px 0 10px 20px;
    font-size: 70%;
    box-shadow: 0 0 10px #b3b3b3;
    margin-bottom: 20px;
    img{
        height: 100%;
        width: 40%;
        border-radius: 50%;
    }
    div{
        height: 100%;
        width: 60%;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content:center;

        h4,p{
            margin:2px 8px;
        }
    }

`;

export default Profile;