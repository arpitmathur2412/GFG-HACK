import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";

function App() {
  return (
      <div className="App">

        <div className="app">
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/service'} element={<Service/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
