import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  createSongHandler(e) {
    e.preventDefault();

    this.props
      .mutate({
        variables: { title: this.state.title },
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div className="">
        <Link to="/" onlyActiveOnIndex className="btn btn-flat">
          Back
        </Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.createSongHandler.bind(this)}>
          <label>Song Title:</label>
          <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
          <button type="submit" className="btn">
            Create Song <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
