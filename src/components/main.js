import React from 'react';
import Video from './video';
import Controls from './controls';

const Main = React.createClass({
  render() {
    return (
      <div className="player">
        <Video />
        <Controls />
        {React.cloneElement(this.props.children, this.props)}  
      </div>
    )
  }
});

export default Main;