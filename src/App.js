import { Component } from "react";
import "./index.css";
import "./components/SearchForm";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import SearchForm from "./components/SearchForm";
import Logo from "./Logo";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = { route: "signed-out" };
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    return (
      <div class='main'>
        {this.state.route === "signed-out" ? (
          <div>
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <SearchForm />
          </div>
        )}
      </div>
    );
  }
}

export default App;

// register button triggers register form
