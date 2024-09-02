import React from "react";

const LyricList = ({ lyrics, onLike }) => {
  return (
    <ul className="collection">
      {lyrics.map(lyric => (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
          <i
            className="material-icons blue-grey-text right"
            style={{ cursor: "pointer" }}
            onClick={() => onLike(lyric.id)}
          >
            thumb_up
          </i>
        </li>
      ))}
    </ul>
  );
};

export default LyricList;
