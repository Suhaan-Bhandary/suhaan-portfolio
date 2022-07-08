import {
  About,
  Education,
  Footer,
  Home,
  MainProject,
  OtherProject,
  Skills,
} from "./screens";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <About />
      <Skills />
      <MainProject />
      <OtherProject />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
