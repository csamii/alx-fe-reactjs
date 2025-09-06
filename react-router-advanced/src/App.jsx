import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

export default function App() {
  return (
    <BrowserRouter>
        <div style={{ fontFamily: 'system-ui, Arial', padding: 16 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileDetails />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
