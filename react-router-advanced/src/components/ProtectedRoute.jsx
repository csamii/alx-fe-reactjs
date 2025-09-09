import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

/**
 * ProtectedRoute:
 * Wraps around routes that require authentication.
 * If user is not logged in → redirect to /login
 */
export default function ProtectedRoute() {
  const { user } = useAuth()

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />
  }

  // If authenticated → render child routes
  return <Outlet />
}

