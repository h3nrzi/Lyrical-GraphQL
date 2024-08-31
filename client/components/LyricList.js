import React from "react";

const LyricList = ({ lyrics }) => {
  return (
    <ul className="collection">
      {lyrics.map(lyric => (
        <Lyric key={lyric.id} lyric={lyric} />
      ))}
    </ul>
  );
};

const Lyric = ({ lyric }) => {
  return <li className="collection-item">{lyric.content}</li>;
};

export default LyricList;
