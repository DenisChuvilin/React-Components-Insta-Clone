import React from 'react';

const LikeSection = props => {
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i className="far fa-heart" />
        </div>
        <div className="like-section-wrapper" onClick={() => props.setLikes(props.likes + 1)}>
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">likes{props.likes}</p>
    </div>
  );
};

export default LikeSection;
