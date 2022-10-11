import "./App.css";
import "./components/SearchForm";
import SearchForm from "./components/SearchForm";
import Logo from "./components/Logo";
// import Scroll from "./components/Scroll";

function App() {
  return (
    <div class='main'>
      <Logo />
      {/* <Scroll /> */}
      <SearchForm />
      {/* <Scroll /> */}
    </div>
  );
}

export default App;
