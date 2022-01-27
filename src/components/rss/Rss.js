import React, {useState, useEffect} from 'react';
import RSSParser from 'rss-parser';
import './rss.css';




const RssFeed = () => {
  const [FFBB, setFFBB] = useState([])
  const [NBA, setNBA] = useState([])

  useEffect(() => {
    // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let parser = new RSSParser();
    parser.parseURL(`https://www6.lequipe.fr/rss/actu_rss_Basket.xml`, function (err, feed) {
      // parser.parseURL(`${CORS_PROXY}http://www.ffbb.com/rss2.xml`, function (err, feed) {
      if (err) throw err;
      console.log('feed',feed)
      setFFBB(feed.items)
    })
    
    parser.parseURL(`https://www.parlons-basket.com/feed/`, function (err, feed) {
      // parser.parseURL(`${CORS_PROXY}https://www.parlons-basket.com/feed/`, function (err, feed) {
        if (err) throw err;
      setNBA(feed.items)

    })
  }, [])
  
  return (
    
    <div className='containerRss'>

        {console.log('ffbb',FFBB)}
        {console.log('nba',NBA)}
        <div className='containerRssFFBB'>
          <div>
            <h3> FFBB </h3>
          </div>
          <div className='divRssFFBB'>
              <ul className='ulRssFFBB'>
              {FFBB.map((item, i) => (
                <a href={item.link} key={i} >
              <li >
              <strong>{item.pubDate.replace('+0100','')}</strong> - {item.contentSnippet} 
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
                <a href={item.link} key={i} >
                  <li >
                    <strong>{item.pubDate.replace('+0000','')}</strong> - {item.contentSnippet} 
                  </li>
              </a>
              ))}
          </ul>

        </div>
      </div>

    </div>
      
    );
  }

export default RssFeed