import React from "react";
import { withState } from "recompose";
import { graphql } from "react-apollo";
import addLyricToSong from "../api/mutations/addLyricToSong";

const LyricCreate = ({ state, setState, mutate, songId }) => {
  function createLyricHandler(e) {
    e.preventDefault();
    mutate({
      variables: {
        content: state.content,
        songId,
      },
    }).then(() => setState({ content: "" }));
  }

  return (
    <form onSubmit={createLyricHandler}>
      <label htmlFor="song-lyric">Add a Lyric</label>
      <input id="song-lyric" value={state.content} onChange={e => setState({ content: e.target.value })} />
      <button type="submit" className="btn">
        Create Lyric <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

const enhance = withState("state", "setState", { content: "" });
const EnhancedLyricCreate = enhance(LyricCreate);

export default graphql(addLyricToSong)(EnhancedLyricCreate);
