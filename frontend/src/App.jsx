import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <div className="main-section">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Projects />
                    <Contact />
                  </>
                }
              />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
