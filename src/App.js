import Company from "./components/Company/Company";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery/Gallery";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import News from "./components/news/News";
import Testimoni from "./components/Testimoni/Testimoni";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Company />
      <News />
      <Gallery />
      <Testimoni />
      <Footer />
    </div>
  );
}

export default App;
