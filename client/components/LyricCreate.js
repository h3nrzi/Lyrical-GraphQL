import React from "react";

const LyricCreate = () => {
  return (
    <form>
      <label htmlFor="lyric">Add a Lyric</label>
      <input id="lyric" name="lyric" />
      <button type="submit" className="btn">
        Create Lyric <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

export default LyricCreate;
