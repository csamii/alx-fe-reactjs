import { NavLink, Outlet } from 'react-router-dom';


const tabStyle = ({ isActive }) => ({
  padding: '6px 10px',
  borderRadius: 8,
  textDecoration: 'none',
  color: isActive ? '#111' : '#333',
  background: isActive ? '#e5e7eb' : 'transparent',
  border: '1px solid #e5e7eb',
  marginRight: 8
})


const Profile = () => {
  return (
    <>
        <h1>Profile</h1>

        <div style={{ margin: '12px 0' }}>
            <NavLink to="details" style={tabStyle}>Details</NavLink>
            <NavLink to="settings" style={tabStyle}>Settings</NavLink>
        </div>

        <div style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
            <Outlet />
        </div>
    </>
  );
};

export default Profile;