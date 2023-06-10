import React from 'react'

import About from '../components/About/About'
import Work from '../components/Work/Work';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';
import Skill from '../components/Skills/Skill';

import './style.css';


const Cv = () => {
  return (
    <>
     <div className="contaner">
    <div className='header'>
      <div>
     <h1 style={{fontSize:'50px'}}>Muhammad Talha</h1>
        
        </div>
        <div>
        <h2 id='msd'style={{fontSize:'40px'}}>&lt; Mern Stack Developer &#8725; &gt; </h2>
        </div>
        </div>
    
   
       
  <div><About/></div>
  <div><Education/></div>
  <div><Work/> </div>
  <div><Skill/></div>
<div><Contact/></div>
</div>
    </>
  )
}

export default Cv