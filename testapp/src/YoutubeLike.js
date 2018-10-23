import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchComponent from './components/SearchComponent';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

class YoutubeLike extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            currentVideo: undefined
        };
        
        this.searchVideos();
    }
    
    searchVideos = (term = 'surfboards') => {
        // here goes ur api key
        const API_TOKEN = '';
        console.log(term);
        YTSearch({key: API_TOKEN, term}, videos => {
            this.setState({
                videos,
                currentVideo: videos[0]
            });
        });
    }

    setCurrentVideo = currentVideo => {
        this.setState({
            currentVideo
        });
    }

    render() {
        const { videos, currentVideo } = this.state;

        const searchTerm = _.debounce(term => this.searchVideos(term), 300);

        return (
            <div className='row'>
                <SearchComponent onSearch = { searchTerm }/>
                <VideoPlayer video={ currentVideo }/> 
                <VideoList videos = { videos } 
                    onVideoClick = { video => this.setCurrentVideo(video) }/>
            </div>
        )
    }
};

export default YoutubeLike;
