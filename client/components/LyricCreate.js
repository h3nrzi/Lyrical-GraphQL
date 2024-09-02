import React from "react";
import { withState } from "recompose";

const LyricCreate = ({ state, setState, onSubmit }) => {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(state).then(() => setState({ content: "" }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="song-lyric">Add a Lyric</label>
      <input id="song-lyric" value={state.content} onChange={e => setState({ content: e.target.value })} />
      <button type="submit" className="btn">
        Create Lyric <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

const enhance = withState("state", "setState", { content: "" });
export default enhance(LyricCreate);
