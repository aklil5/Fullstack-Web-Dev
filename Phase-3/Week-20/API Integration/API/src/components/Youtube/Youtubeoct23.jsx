import React, { useState, useEffect } from 'react'
import './Youtube.css'

export default function Youtubeoct23() {
  const [YoutubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
        const response = await fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmCMFeeg9zUt9EaId3m1B8yk8Aew8qBOk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
        );
        // console.log(response);
        const data = await response.json()
        // console.log(data);
      
        setYoutubeVideos(data.items || []);
    } 
    getVideos();

    // fetch(
    //   "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmCMFeeg9zUt9EaId3m1B8yk8Aew8qBOk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6 kk"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const youTubeVideosData = data.items || [];
    //     setYoutubeVideos(youTubeVideosData);
    //   })
    //   .catch((error) => console.error('YouTube fetch error:', error));
  }, []);

  console.log(YoutubeVideos);

  return (
    <>
      <div className='allVideosWrapper'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-12'>
              <div className='title-wrapper'>
                Latest Videos <br />
                <br />
              </div>
            </div>
          </div>

          <div className='row'>
            {/* use conditional chaining ?.map  */}
            {YoutubeVideos?.map((singleVideo, i) => {
              const vidId = singleVideo.id?.videoId;
            //   base url + specific video
               const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              const thumbnail = singleVideo.snippet?.thumbnails?.medium?.url;
              const title = singleVideo.snippet?.title || 'Untitled Video';
              const description = singleVideo.snippet?.description || 'No description available.';

              return (
                <div key={i} className='col-sm-12 col-md-6 col-lg-4'>
                  <div className='singleVideoWrapper'>
                    <div className='videoThumbnail'>
                      <a href={vidLink} target='_blank' rel='noreferrer'>
                        <img src={thumbnail} alt={title} />
                      </a>
                    </div>
                    <div className='videoInfoWrapper'>
                      <div className='videoTitle'>
                        <a href={vidLink} target='_blank' rel='noreferrer'>
                          {title}
                        </a>
                      </div>
                    </div>
                    <div className='videoDesc'>{description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
