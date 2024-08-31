import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../api/queries/fetchSong";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = props => {
  const { song, loading } = props.data;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Link onlyActiveOnIndex to="/">
        Back
      </Link>
      <h3>{song.title}</h3>
      <LyricList />
      <LyricCreate songId={song.id} />
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
