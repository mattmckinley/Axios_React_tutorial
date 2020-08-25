import React from "react";

import API from "./Utils/API.js";
import User from "./Utils/User.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    };
  }

  render() {
    const { isLoading, name, avatar, email } = this.state;

    return (
      <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
    );
  }

  async componentDidMount() {
    // Load async data.
    // Update state with new data.
    // Re-render our component.
  }
}

export default App;


