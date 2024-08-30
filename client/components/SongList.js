import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSong";

const SongList = ({ data }) => {
  if (data.loading) return <div>Loading...</div>;

  return (
    <div>
      <ul className="collection">
        {data.songs.map(song => (
          <Song key={song.id} song={song} />
        ))}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right" onlyActiveOnIndex>
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

const Song = ({ song }) => {
  return <li className="collection-item">{song.title}</li>;
};

export default graphql(query)(SongList);
