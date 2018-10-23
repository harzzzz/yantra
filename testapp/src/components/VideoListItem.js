import React from 'react';

const VideoListItem = ({video, onThumbClicked}) => {
    const thumb = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li className='video-list-item media'>
            <img className="mr-3"
                src= { thumb } alt = { title } 
                onClick = { () => onThumbClicked(video) }
            />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{ title }</h5>
            </div>
        </li>
    )
}

export default VideoListItem;
