import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}

          {/* Footer */}
          {/* <Footer /> */}
          footer

        </div>
      </Router>
    </>
  )
}

export default App