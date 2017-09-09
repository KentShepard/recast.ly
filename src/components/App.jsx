class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: 0
    };
  }

  componentDidMount() {
    this.handleSearch('cats');
  }

  handleSearch(query) {
    var object = {
        q: query,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }

    searchYouTube(object, (data) => {
      this.setState({
        videoList: data.items
      });
    })
  }


  handleSelectVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
          <Search handleSearch={this.handleSearch.bind(this)} />
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
       <VideoPlayer video={this.state.videoList[this.state.currentVideo]}/>
          </div>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} handleSelectVideo={this.handleSelectVideo.bind(this)} />
        </div>
      </div>
    </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;