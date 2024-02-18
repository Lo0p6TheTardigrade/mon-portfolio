// @flow
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Certificate from './pages/Certificate';
import { useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from './types';
import Error from './pages/Error';

function App() {
  const window6 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window6);
  return (
    <div className="App">
      <BrowserRouter>
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
            path="*"
            element={<Error />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
