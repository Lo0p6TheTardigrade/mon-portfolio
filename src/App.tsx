// @flow
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Certificate from './pages/Certificate';
import { useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from './types';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Services from './pages/Services';

function App() {
  const window6 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window6);
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            {window6 && (
              <Route
                path="/certificate"
                element={<Certificate />}
              />
            )}
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/services"
              element={<Services />}
            />
            <Route
              path="*"
              element={<Error />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
