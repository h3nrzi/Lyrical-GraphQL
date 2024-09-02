import React from "react";
import { graphql } from "react-apollo";
import { hashHistory, Link } from "react-router";
import query from "../../api/queries/fetchSongs";
import createSong from "../../api/mutations/createSong";
import SongCreate from "../SongCreate";

const SongCreatePage = ({ mutate }) => {
  function createSongHandler(state) {
    mutate({
      variables: { title: state.title },
      refetchQueries: [{ query }],
    }).then(() => hashHistory.push("/"));
  }

  return (
    <div className="">
      <Link onlyActiveOnIndex to="/">
        Back
      </Link>
      <h3>Create a New Song</h3>
      <SongCreate onSubmit={createSongHandler} />
    </div>
  );
};

export default graphql(createSong)(SongCreatePage);
