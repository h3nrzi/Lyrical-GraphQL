import React from "react";
import { withState } from "recompose";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const LyricCreate = ({ state, setState }) => {
  function createLyricHandler(e) {
    e.preventDefault();
    console.log(state);
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

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(EnhancedLyricCreate);
