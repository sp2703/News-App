import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../components/Toggle';
import Profile from '../components/Profile';
import Feedback from '../components/Feedback';
import Form from '../components/Form';



const Nav = ({nav, setnav}) => {
    const [showForm, setshowForm] = useState(false)


    return(
        <Parent>
            <NavChild>
                <Profile />
                {!showForm && <Toggle setnav={setnav} nav={nav}/>}
                <Feedback setshowForm={setshowForm} showForm={showForm}/>
             </NavChild>
             {showForm && <FormView >
                <Form setshowForm={setshowForm} showForm={showForm}/>
                 </FormView>}
        </Parent>
    )
}

const Parent = styled.div`
    max-height: 100%;
    width: 20%;
    background-color: #ECF4F9;
    padding: 20px;
    box-shadow: 10px 0 10px -2px #b3b3b3;
    display: flex;

    .w0{
        width: 0px;
    }
    .w1{
        width: 500px;
    }
    `;


const NavChild = styled.div`
        max-height: 70%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
       
    `;

const FormView = styled.div`
    position:absolute;
    width: 78.9vw;
    height: 95vh;
    top:0;
    left:21.1%;
    display: flex;
    align-items: center;
    margin: 2.5vh 0;


    &:after{
    content:'';
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    position: absolute;
    opacity:0.5;
    background-color: black;

}



.w0{
    width: 0px;
}
.w1{
    width: 500px;
}


`;
    



export default Nav;