import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSong";
import gql from "graphql-tag";

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
  return (
    <div>
      <li className="collection-item">{song.title}</li>
      <button className="btn btn-small">
        <i className="material-icons">delete</i>
      </button>
    </div>
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
