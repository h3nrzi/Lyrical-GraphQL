import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../api/queries/fetchSongs";
import gql from "graphql-tag";

const SongList = ({ data, mutate }) => {
  if (data.loading) return <div>Loading...</div>;

  function deleteSongHandler(id) {
    mutate({ variables: { id } }).then(() => data.refetch());
  }

  return (
    <div>
      <ul className="collection">
        {data.songs.map(song => (
          <Song key={song.id} song={song} onDelete={deleteSongHandler} />
        ))}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right" onlyActiveOnIndex>
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

const Song = ({ song, onDelete }) => {
  return (
    <li className="collection-item">
      <Link to={`/songs/${song.id}`} onlyActiveOnIndex>
        {song.title}
      </Link>
      <i className="material-icons red-text right" style={{ cursor: "pointer" }} onClick={() => onDelete(song.id)}>
        delete
      </i>
    </li>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      title
    }
  }
`;

export default graphql(mutation)(
  //
  graphql(query)(
    //
    SongList,
  ),
);
