import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from "../../api/queries/fetchSongs";
import deleteSong from "../../api/mutations/deleteSong";
import SongList from "../SongList";

const HomePage = ({ data, mutate }) => {
  if (data.loading) return <div>Loading...</div>;

  function deleteSongHandler(id) {
    mutate({ variables: { id } }).then(() => data.refetch());
  }

  return (
    <div>
      <SongList songs={data.songs} onDelete={deleteSongHandler} />
      <Link to="/songs/new" className="btn-floating btn-large red right" onlyActiveOnIndex>
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};
export default graphql(deleteSong)(graphql(fetchSongs)(HomePage));
