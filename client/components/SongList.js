import React, { Component } from "react";
import gql from "graphql-tag";

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

console.log(query);

export default SongList;
