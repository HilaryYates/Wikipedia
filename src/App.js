import { Component } from "react";
import "./index.css";
import "./components/SearchForm";
import SearchForm from "./components/SearchForm";
import Logo from "./Logo";
// import Scroll from "./components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div class='main'>
        <Logo />
        {/* <Scroll /> */}
        <SearchForm />
        {/* <Scroll /> */}
      </div>
    );
  }
  // return (
  //   <div class='main'>
  //     <Logo />
  //     {/* <Scroll /> */}
  //     <SearchForm />
  //     {/* <Scroll /> */}
  //   </div>
  // );
}

export default App;
