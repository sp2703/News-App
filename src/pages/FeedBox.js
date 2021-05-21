import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeedGrid from '../components/FeedGrid';
import FeedBar from '../components/FeedBar';
import axios from 'axios';

const FeedBox = ({setnav, nav, setpagenum, pagenum}) => {
    var bari=1;

    const [News, setNews] = useState([]);
    const [FinalNews, setFinalNews] = useState([]);
    const [show, setshow] = useState(false);
    const temp1=[];
    useEffect(() => {
        axios.get('https://api.first.org/data/v1/news')
        .then(response => {
            var index=1;
            var val =0;
            var end =0;
            nav === 'bar' ? val=(5*(pagenum-1)+1) : val=(6*(pagenum-1)+1);
            nav === 'bar' ? end=val+4 : end=val+5;
            console.log(pagenum, val);
            response.data.data.map(New =>
                {
                    // const index = response.data.data.findIndex(x => x.id === New.id)+1;
                    
                    if(index>=val && index<=end)
                    {
                        temp1.push(New);
                    }
                    index+=1;
                    
                });
                 setNews(temp1)
                 console.log(temp1);})
        .catch(error => console.log(error));
        
                console.log(nav);
        setshow(true);
    }, [pagenum, nav])
    
    return(
        <FeedBoxParent>
            {nav==='grid' && show &&<Parent >
                {News.map((New) =>(
                 <FeedGrid src={New.image} published={New.published} title={New.title}
                     summary={New.summary} link={New.link}/>
                      ))}

            </Parent>}

            {nav==='bar' && show && <Parent >
            {News.map((New) =>(
               
                    <FeedBar src={New.image} published={New.published} title={New.title}
                     summary={New.summary} link={New.link}/>
                ))}
            </Parent>}
        </FeedBoxParent>
    )
}
const FeedBoxParent=styled.div`
    height: 90%;
    min-width: 80%;
`;
const Parent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 90%;
    min-width: 80%;
    padding: 10px 80px;
    flex: 2 0 35%;

    .closeDiv{
        display: none;
    }
`;

export default FeedBox;