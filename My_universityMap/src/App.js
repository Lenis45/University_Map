import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import Header from "./header/Header";
import { DialogSearcher } from "./components/Searcher/DialogSearcher/DialogSearcher";


const App = () => {
  return (
    <>
      <DialogSearcher />
      <Header />
      <Routes>
        <Route path="mtuci-svg-map/" element={<Home />}>
        </Route>
      </Routes>
    </>
  )
}

export default App;


