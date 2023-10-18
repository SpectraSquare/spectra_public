import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loadzilla from "./components/BurgerMenu";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loadzilla />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
