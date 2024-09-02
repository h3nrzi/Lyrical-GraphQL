import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../../api/queries/fetchSong";
import { Link } from "react-router";
import LyricCreate from "../LyricCreate";
import LyricList from "../LyricList";
import addLyricToSong from "../../api/mutations/addLyricToSong";

const SongDetailPage = ({ data, mutate }) => {
  if (data.loading) return <div>Loading...</div>;

  function addLyricToSongHandler(state) {
    return mutate({
      variables: {
        content: state.content,
        songId: data.song.id,
      },
    });
  }

  function likeLyricHandler(id) {
    console.log(id);
  }

  return (
    <div>
      <Link onlyActiveOnIndex to="/">
        Back
      </Link>
      <h3>{data.song.title}</h3>
      {data.song.lyrics.length > 0 && <LyricList lyrics={data.song.lyrics} onLike={likeLyricHandler} />}
      <LyricCreate onSubmit={addLyricToSongHandler} />
    </div>
  );
};

export default graphql(addLyricToSong)(
  graphql(fetchSong, {
    options: props => ({
      variables: { id: props.params.id },
    }),
  })(SongDetailPage),
);
