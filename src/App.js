import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home"
import Header from "./components/header"
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
