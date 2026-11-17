import {Route, BrowserRouter, Routes} from 'react-router';

import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Single from './pages/Single';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
