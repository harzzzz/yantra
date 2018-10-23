import React, { Component } from 'react';

import VideoListItem from './VideoListItem';

class VideoList extends Component {
    render() {
        const { videos } = this.props;

        return (
            <div className='video-list col-4 col-md-4'>
                <ul className = 'list-unstyled'>  
                { 
                    videos.map((video, i) =>
                        (<VideoListItem 
                            video={video} 
                            key={i} 
                            onThumbClicked = { video => this.props.onVideoClick(video) }
                        />) 
                    )
                }
                </ul>
            </div>
        )
    }
}

export default VideoList;
