import "./App.css";
import Header from "./components/Header";
import RamadanTable from "./components/Table";
import { RAHMAT, MAGFIRAT, NAZAT } from "./components/data";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <RamadanTable data={RAHMAT} header={"RAHMAT"} />
        <RamadanTable data={MAGFIRAT} header={"MAGFIRAT"} />
        <RamadanTable data={NAZAT} header={"NAZAT"} />
      </div>
      <footer className="footer">
        <a href="https://github.com/siddique000/ramadan-calender2021" target='_blank'><i class="fab fa-github"></i></a>
      </footer>
    </>
  );
}

export default App;
