import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link } from "react-router";

const SongDetail = props => {
  const { song, loading } = props.data;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Link onlyActiveOnIndex to="/">
        Back
      </Link>
      <h3>{song.title}</h3>
    </div>
  );
};

export default graphql(
  //
  fetchSong,
  {
    options: props => ({
      variables: { id: props.params.id },
    }),
  },
)(SongDetail);
