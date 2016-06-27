import React from 'react';
import Video from '../components/video';
import Controls from '../components/controls';

const App = React.createClass({
  render() {
    return (
      <div className="player">
        <Video  />
        <Controls { ...this.props } />
        
      </div>
    )
  }
});

export default App;