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
    this.state = { route: "signed-out", user: { id: "", name: "", email: "" } };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  loadUser = (data) => {
    this.setState({
      user: { id: data.id, name: data.name, email: data.email },
    });
  };
  render() {
    return (
      <div class='main'>
        {this.state.route === "home" ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <SearchForm />
          </div>
        ) : this.state.route === "signed-out" ? (
          <div>
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <Register onRouteChange={this.onRouteChange} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
