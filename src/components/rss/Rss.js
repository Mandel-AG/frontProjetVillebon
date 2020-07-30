import React, { useState } from 'react';
import axios from 'axios';
import './rss.css';

function Rss(props){
  const [ffbb, setffbb] = useState([]);
  

  return(
    <div className='containerRss'>

      <div className='containerRssFFBB'>
        <div>
          <h3> FFBB </h3>
        </div>
        <div className='divRssFFBB'>
            <ul className='ulRssFFBB'>
              {/* { fluxFFBB } */}

            </ul>
        </div>
      </div>

      <div className='containerRssNBA'>
        <div>
          <h3> NBA </h3>
        </div>
        <div className='divRssNBA'>
            <ul className='ulRssNBA'>
              {/* <li>{ fluxFFBB }</li> */}
            </ul>
        </div>
      </div>
    </div>
  )
}


export default Rss;