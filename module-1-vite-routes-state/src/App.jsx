import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Counter from './pages/Counter.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <header>
        <h1>Module 1 Starter: Routes + State</h1>
        {/* NavLink helps show which page is active. */}
        <nav className="nav-row">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/counter">Counter</NavLink>
        </nav>
      </header>

      {/* Routes choose which page component to show for the URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  )
}
