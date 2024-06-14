import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
// import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Submit from "./components/gemail/gemail";




function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Intro/>
      <Skills/>
      {/* <Works/> */}
      {/* <Contact/> */}
      <Submit/>
      <Footer/>
      
      
      
      

    </div>
  );
}

export default App;
