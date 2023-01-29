import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import locations from "./data";

function App() {
  const travelLocations = locations.map((location) => {
    return (
      <Main 
        key={location.key}
        {...location}
      />
    )
  });
  return (
    <div className="App">
      <Navbar />
      <section>
        {travelLocations}
      </section>
      <Footer />
    </div>
  );
}

export default App;
