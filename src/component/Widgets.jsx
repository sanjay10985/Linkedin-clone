import React from 'react'
import '../style/Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        <NewsArticle heading="LinkedIn is been Created" subtitle="at the end of the day we have done it."/>
        <NewsArticle heading="Diwali has arrived" subtitle="why do we celebrate diwali?."/>
        <NewsArticle heading="Buva ka ghar ban gaya" subtitle="diwali aa gai hai to chalo khusiya manaye."/>
        <NewsArticle heading="Mommy made diwali sweets" subtitle="the sweets are more sweeter when mom makes it."/>
        <NewsArticle heading="Happy makarsakrant in advance" subtitle="ae kayy po chhe...."/>
        <NewsArticle heading="React Redux Firebase" subtitle="the project is been created using RRF."/>
    </div>
  )
}

const NewsArticle = ({heading,subtitle}) =>{
    return(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon sx={{fontSize: '15px'}}/>
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default Widgets