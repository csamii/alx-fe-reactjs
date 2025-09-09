import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Blog from './components/Blog';
import Post from './components/BlogPost';
// import ProtectedRoute from './routes/ProtectedRoute';


export default function App() {
  return (
    <BrowserRouter>
        <div style={{ fontFamily: 'system-ui, Arial', padding: 16 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Post />} />git 

            {/* Login */}
            {/* <Route path="/login" element={<Login />} /> */}

            {/* Protected + Nested */}
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/profile" element={<Profile />}>
                <Route index element={<ProfileDetails />} />
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>
            {/* </Route> */}

            {/* Not Found */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
  );
}
