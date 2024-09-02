import React from "react";

const LyricList = ({ lyrics }) => {
  return (
    <ul className="collection">
      {lyrics.map(lyric => (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
        </li>
      ))}
    </ul>
  );
};

export default LyricList;
