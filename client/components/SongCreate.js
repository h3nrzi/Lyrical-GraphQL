import React from "react";
import { withState } from "recompose";

const SongCreate = ({ state, setState, onSubmit }) => {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="song-title">Song Title:</label>
      <input id="song-title" value={state.title} onChange={e => setState({ title: e.target.value })} />
      <button type="submit" className="btn">
        Create Song <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

const enhance = withState("state", "setState", { title: "" });
export default enhance(SongCreate);
