import React, { Fragment, Component } from "react";
import Cardlist from "../components/Cardlist";
import "./app.css";
import Searchbox from "../components/searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfilter: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  makeChanges = e => {
    this.setState({ searchfilter: e.target.value });
  };
  render() {
    const { robots, searchfilter } = this.state;
    const filteredRobots = robots.filter(robo => {
      return robo.name.toLowerCase().includes(searchfilter.toLowerCase());
    });
    return !robots.length ? (
      <Fragment>
        <h1 className="loading">Loading....</h1>
        <Cardlist robots={filteredRobots} />
      </Fragment>
    ) : (
      <Fragment>
        <div className="heading">
          <h1>Robofriends</h1>
          <Searchbox makeChanges={this.makeChanges} />
        </div>
        <Cardlist robots={filteredRobots} />
      </Fragment>
    );
  }
}

export default App;
