import React from "react";
import { Link } from "react-router";

const SongList = ({ songs, onDelete }) => {
  return (
    <ul className="collection">
      {songs.map(song => (
        <li key={song.id} className="collection-item">
          <Link to={`/songs/${song.id}`} onlyActiveOnIndex>
            {song.title}
          </Link>
          <i className="material-icons red-text right" style={{ cursor: "pointer" }} onClick={() => onDelete(song.id)}>
            delete
          </i>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
