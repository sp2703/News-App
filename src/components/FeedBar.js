import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';

const FeedBar = ({src, title, summary, published, link}) => {

    const [close, setclose] = useState('');
    const [ModalOpen, setModalOpen] = useState(false)

    const ModalRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', (event)=>{
            if(ModalRef.current && !ModalRef.current.contains(event.target))

            {
                setModalOpen(false);
            }
            
        })})

    const handleClose =()=>{
        setclose('closeDiv');
        console.log(close);
    }

    const handleModal = () =>{
        setModalOpen(true);
    }

    return( 
        <Parent className={close} onClick={handleModal}>
            <Content>
            <img src={src} alt="" />
                <div className='content'>
                    <h5 className='line-clamp'>{title}</h5>
                    <p className='line-clamp'>{summary}</p>
                    <p className='date'>{published}</p>
                </div>
                
            </Content>
            {ModalOpen && 
            <ModelView>
                <Stylediframe src={link} ref = {ModalRef} /> 
                </ModelView>}
                
            <Close><ClearIcon onClick={handleClose} className='close'/></Close>
        </Parent>
    )
}

const Parent = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    .closeDiv{
        display: none;
    }
    p{
        margin:0;
        margin-top: 2px;
        font-size: 80%;
    }
    .date
    {
        margin-top: 5px;
        margin-bottom: 5px;
        color: #848484;
    }
    h5{
        font-size: 70%;
        margin: 0;
    }
    .line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}


`;

const Content = styled.div`
    height: 100%;
    min-width: 95%;
    background-color: white;
    box-shadow: 0 0 10px #b3b3b3;
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    .content{
        width: 90%;
    }

    img{
        margin-right: 10px;
    height:50px;
    width: 50px;
    object-fit: fill;
    border-radius: 50%;
}
`;
const Close = styled.div`

    height: 30px;
    min-width: 30px;
    margin-left: 10px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .close{
        color: red;
    }
`;

const ModelView = styled.div`
    position:absolute;
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:after{
    content:'';
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    position: absolute;
    opacity:0.5;
    background-color: #202020;

}

`;

const Stylediframe = styled.iframe`

    height: 80vh;
    width: 60vw;

`;
export default FeedBar;