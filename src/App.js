import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import UserRecommendation from "./pages/UserRecommendations/UserRecommendation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/user-recommendations"
            element={<UserRecommendation />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
