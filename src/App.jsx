import {
  About,
  Classes,
  Contact,
  Footer,
  Hero,
  Instructor,
  Navbar,
} from "./Pages";

function App() {
  return (
    <div className="min-h-screen flex justify-center ">
      <div className="w-full m-2 md:w-[90vw]">
        <Navbar />
        <Hero />
        <About />
        <Classes />
        <Instructor />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

// instructor
// contact
// footer
