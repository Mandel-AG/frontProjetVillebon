import React, {useState, useEffect} from 'react';
import RSSParser from 'rss-parser';
import './rss.css';
import { Link } from "react-router-dom";




const RssFeed = () => {
  const [FFBB, setFFBB] = useState([])
  const [NBA, setNBA] = useState([])

  useEffect(() => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let parser = new RSSParser();
    parser.parseURL(`${CORS_PROXY}http://www.ffbb.com/rss2.xml`, function (err, feed) {
      if (err) throw err;
      setFFBB(feed.items)
    })

    parser.parseURL(`${CORS_PROXY}https://nba-infos.webnode.fr/rss/actualites.xml`, function (err, feed) {
      if (err) throw err;
      setNBA(feed.items)
      console.log(feed.items)

    })



  }, [])

    return (

      <div className='containerRss'>

      <div className='containerRssFFBB'>
        <div>
          <h3> FFBB </h3>
        </div>
        <div className='divRssFFBB'>
            <ul className='ulRssFFBB'>
            {FFBB.map((item, i) => (
              <a href={item.link} key={i} >
            <li >
             {item.contentSnippet} 
             </li></a>
        ))}
            </ul>
        </div>
      </div>



      <div className='containerRssNBA'>
        <div>
          <h3> NBA </h3>
        </div>
        <div className='divRssNBA'>
            <ul className='ulRssNBA'>
              {NBA.map((item, i) => (
                <li key={i}> {item.contentSnippet} </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
      
    // <div>
    //     <h1>RSS Feed</h1>
    //     <p>{feed.title}</p>

    //     {feed.map((item, i) => (
    //         <div key={i}>
    //             <h1>{item.title}</h1>
    //             <p>{item.description}</p>
    //         </div>
    //     ))}
        
    // </div>
    );
  }

export default RssFeed