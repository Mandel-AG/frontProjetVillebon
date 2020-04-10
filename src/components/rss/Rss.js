import React from 'react';
import './rss.css';

function Rss(props){
  const oui = 'oui' ;
  return(
    <div className='containerRss'>

      <div className='containerRssFFBB'>
        <div>
          <h3> FFBB </h3>
        </div>
        <div className='divRssFFBB'>
            <ul className='ulRssFFBB'>
              <li>{ oui }</li>
            </ul>
        </div>
      </div>

      <div className='containerRssNBA'>
        <div>
          <h3> FFBB </h3>
        </div>
        <div className='divRssNBA'>
            <ul className='ulRssNBA'>
              <li>{ oui }</li>
            </ul>
        </div>
      </div>
    </div>
  )
}


export default Rss;