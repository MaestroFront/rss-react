import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { AboutUs } from "./pages/about-us/AboutUs";
import { ErrorPage } from "./pages/error/ErrorPage";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
