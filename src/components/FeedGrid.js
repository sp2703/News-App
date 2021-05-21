import React, { useState, useEffect, useRef  } from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';

const FeedGrid = ({src, title, summary, published, link}) => {

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
    
        const handleModal = () =>{
            setModalOpen(true);
        }

    const handleClose =()=>{
        setclose('closeDiv');
        console.log(close);
    }
    

    return( 
        <Parent className={close} onClick={handleModal}>
            <Close><ClearIcon onClick={handleClose} className='close'/></Close>
            <h5 className='line-clamp'>{title}</h5>
            <p className='line-clamp'>{summary}</p>
            <p className='date'>{published}</p>
            <img src={src} alt="" />

            {ModalOpen && 
            <ModelView>
                <Stylediframe src={link} ref = {ModalRef} /> 
                </ModelView>}
            
        </Parent>
    )
}

const Parent = styled.div`
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px #b3b3b3;
    height: 200px;
    width: 26%;
    padding: 5px 10px 10px 10px;
    cursor: pointer;
    p{
        margin-top: 5px;
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
img{
    height:45%;
    width: 100%;
    object-fit: fill;
}

`;

const Close = styled.div`

    height: 9%;
    width: 100%;
    
    .close{
        float: right;
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
    border: 2px solid white;
    border-radius: 20px;

`;

export default FeedGrid;