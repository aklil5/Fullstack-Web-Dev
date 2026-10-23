import React, { useState, useEffect } from 'react'
import './Youtube.css'

export default function Youtubeoct23() {
    const [YoutubeVideos, setYoutubeVideos] = useState([]);
    
    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmCMFeeg9zUt9EaId3m1B8yk8Aew8qBOk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6").then((response) => response.json()).then((data) => {
                const youTubeVideosData = data.items;
                setYoutubeVideos(youTubeVideosData)
            })
    }, []);

    console.log(YoutubeVideos)
    
  return (
    <>
      <div className='allVideosWrapper'>
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <div  className='col-12'>
                    <div className='title-wrapper'>
                        Latest Videos <br />
                        <br />
                    </div>
                </div>
            </div>
            {YoutubeVideos.map((singleVideo) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                return (
                    <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                    <div className="singleVideoWrapper">
                        <div className="videoThumbnail">
                        <a href={vidLink} target="_blank">
                            <img src={singleVideo.snippet.thumbnails.high.url} />
                        </a>
                        </div>
                    </div>
                    </div>
                    );
            })}
        </div> 
      </div>
    </>
  )
}

