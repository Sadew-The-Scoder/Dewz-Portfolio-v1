import { Route, Routes } from "react-router"
import Nav from "./components/Nav.jsx"
import HomePage from "./pages/HomePage.jsx"
import TerminalPage from "./pages/TerminalPage.jsx"
import NotFound from "./pages/NotFound.jsx"
import Contact from "./pages/Contact.jsx"


function App() {
  return (
    <>
      <section className="bg-zinc-950 min-h-screen w-full text-white container">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/console" element={<TerminalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </>
  )
}

export default App