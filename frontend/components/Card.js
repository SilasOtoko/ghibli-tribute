import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.post.title}</h2>
      </div>
    );
  }
}

export default Card;
