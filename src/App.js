import logo from "./logo.svg";
import "./App.css";
import Brand from "./Brand/Brand";
import EachBrandDetails from "./EachBrandDetails/EachPhoneDetails";
import EachPhoneDetails from "./EachBrandDetails/EachPhoneDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Brand />
      <Routes>
        <Route path="phone/:phone" element={<EachPhoneDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
