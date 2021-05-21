import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"
import {FormAnimate, FormAnimateOp} from '../utils/motion';

const Form = ({setshowForm, showForm}) =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const FormRef = useRef(null);



    useEffect(() => {
        document.addEventListener('mousedown', (event)=>{
            if(FormRef.current && !FormRef.current.contains(event.target))

            {
                setshowForm(false);
            }
            
        })})

    return(
        <Parent animate='show' variants={FormAnimate} ref={FormRef} className={showForm ? 'w0' : 'w1'}>
            <h4>Thank you so much for taking time!</h4>
            <p>Please provide teh below details</p>
            <StyledForm action="" onSubmit={handleSubmit}>
                <StyledDiv>
                    <label htmlFor="">First Name</label>
                    <StyledInput type="text" placeholder='John'/>
                </StyledDiv>
                <StyledDiv>
                    <label htmlFor="">Last Name</label>
                    <StyledInput type="text" placeholder='Doe'/>
                </StyledDiv>
                <StyledDiv>
                    <label htmlFor="">Address</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter ypur full Postal Address'>
                    </textarea>
                </StyledDiv>
                <StyledDiv>
                    <label htmlFor="">Email ID:</label>
                    <StyledInput type="text" placeholder='example@sample.com'/>
                </StyledDiv>
                <StyledDiv>
                    <label htmlFor="">Phone No.</label>
                    <div>
                        <input className='input1' type="text" placeholder='+91'/>
                        <input className='input2' type="text" placeholder='123456789'/>
                    </div>
                    
                </StyledDiv>
                <StyledButton>Submit</StyledButton>
            </StyledForm>
        </Parent>
    )
}

const Parent = styled(motion.div)`
    max-height: 100%;
    width: 0px;
    background-color: #ECF4F9;
    z-index: 10;
    
    padding-left: 40px;
    padding: 32px;
    border-radius: 0 10px 10px 0;
    transition: all 1.5s ease;


    h4,p{
        margin: 2px;
    }
    p{
        margin-bottom: 30px;
    }

    textarea{
        width: 70%;
        height: 60px;
        padding: 5px;
        box-shadow: 0 0 10px #b3b3b3;
        border: none;
        outline: none;
        border-radius: 5px;
        resize: none;

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #D0CBCB;
  font-size: 85%;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #D0CBCB;
  font-size: 85%;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #D0CBCB;
  font-size: 85%;
}
:-moz-placeholder { /* Firefox 18- */
  color: #D0CBCB;
  font-size: 85%;
}
    }
`;

const StyledForm = styled.form`
    width: 100%;
    max-height: 80%;
    background-color: #ECF4F9;
`;

const StyledDiv = styled.div`

    display: flex;
    flex-direction: column;
    
    label{
        margin: 10px 0;
    }

    div{
        width: 50%;
        display: flex;
        justify-content: space-between;

        input{
            padding: 5px;
            box-shadow: 0 0 10px #b3b3b3;
            border: none;
            outline: none;
            border-radius: 5px;
        }

        .input1{
            width: 20%;

        }
        .input2{
            width: 70%;

        }


    }

`;

const StyledInput = styled.input`

    width: 50%;
    padding: 5px;
    box-shadow: 0 0 10px #b3b3b3;
    border: none;
    outline: none;
    border-radius: 5px;
    
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #D0CBCB;
  font-size: 85%;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #D0CBCB;
  font-size: 85%;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #D0CBCB;
  font-size: 85%;
}
:-moz-placeholder { /* Firefox 18- */
  color: #D0CBCB;
  font-size: 85%;
}

`;

const StyledButton = styled.button`
    margin-top: 20px;
    width: 40%;
    padding: 5px;
    box-shadow: 0 0 10px #b3b3b3;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #23E6A7;
    cursor: pointer;

`;

export default Form;