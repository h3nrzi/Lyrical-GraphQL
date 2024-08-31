import React, { useState } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";
import { withState } from "recompose";
import query from "../queries/fetchSongs";

const SongCreate = ({ mutate, state, setState }) => {
  function createSongHandler(e) {
    e.preventDefault();

    mutate({
      variables: { title: state.title },
      refetchQueries: [{ query }],
    }).then(() => hashHistory.push("/"));
  }

  return (
    <div className="">
      <Link to="/" onlyActiveOnIndex className="btn btn-flat">
        Back
      </Link>
      <h3>Create a New Song</h3>
      <form onSubmit={createSongHandler}>
        <label>Song Title:</label>
        <input value={state.title} onChange={e => setState({ title: e.target.value })} />
        <button type="submit" className="btn">
          Create Song <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

const enhance = withState("state", "setState", { title: "" });
const EnhancedSongCreate = enhance(SongCreate);

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(EnhancedSongCreate);
