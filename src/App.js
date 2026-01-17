import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App h-screen flex items-center justify-center w-screen bg-[#eef5ff]">
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    </div>
  );
}

export default App;
