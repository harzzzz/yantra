import React from 'react';

const VideoPlayer = ({ video }) => {
    if (!video) {
        return <div>Loading....</div>
    }

    const title = video.snippet.title;
    const description = video.snippet.description;
    const id = video.id.videoId;
    let url  = `https://www.youtube.com/embed/${id}`;

    return (
        <div className='video-player col-8 col-md-8'>
            <div>
                <iframe src={ url } />
            </div>
            <div className='video-player-description'>
                <div>{ title }</div>
                <div>{ description }</div>
            </div>
        </div>
    )
};

export default VideoPlayer;
