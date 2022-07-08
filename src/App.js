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
import LinksSlider from "./components/LinksSlider/LinksSlider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LinksSlider />

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
