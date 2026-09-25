import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindow from "./windows/MacWindow";
const App = () => {
  return (
    <main>
      <Nav />
      <MacWindow>
        <h1>Hello Shivani</h1>
      </MacWindow>
      <Dock />
    </main>
  );
};

export default App;
