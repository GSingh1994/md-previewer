import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
function App() {
  return (
    <div className="App">
      <h1>MD-Previewer</h1>
      <Previewer />
      <Editor />
    </div>
  );
}

export default App;
