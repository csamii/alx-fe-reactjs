import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';


export default function App() {
  return (
    <BrowserRouter>
        <div style={{ fontFamily: 'system-ui, Arial', padding: 16 }}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />git 

              {/* Login */}
              <Route path="/login" element={<Login />} />

              {/* Protected + Nested */}
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />}>
                  <Route index element={<ProfileDetails />} />
                  <Route path="details" element={<ProfileDetails />} />
                  <Route path="settings" element={<ProfileSettings />} />
                </Route>
              </Route>

            </Routes>
          </AuthProvider>
        </div>
      </BrowserRouter>
  );
}
