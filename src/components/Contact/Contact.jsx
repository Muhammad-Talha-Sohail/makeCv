import React from 'react'
import './contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Contact = () => {
  return (
<>

<ul className='listC'>
<h1>Contact</h1>
        <hr />
     
<li><PhoneIcon/> : 0321-2180984</li>
<li><EmailOutlinedIcon/> : 
  muhammadsohailmuhammadtalha@gmail.com</li>
<li><GitHubIcon/> : github.com/Muhammad-Talha-Sohail</li>
</ul>
</>
  )
}

export default Contact