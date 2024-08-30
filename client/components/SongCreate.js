import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  createSongHandler(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title,
      },
    });
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={this.createSongHandler.bind(this)}>
          <label>Song Title:</label>
          <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
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
