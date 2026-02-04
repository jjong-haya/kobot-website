import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRoles?: UserRole[];
  requireAuth?: boolean;
}

export default function ProtectedRoute({ 
  children, 
  requiredRoles = [], 
  requireAuth = true 
}: ProtectedRouteProps) {
  const { isAuthenticated, hasRole } = useAuth();

  // Check if authentication is required
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Check if user has required role
  if (requiredRoles.length > 0 && !hasRole(requiredRoles)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">403</h1>
          <p className="text-xl text-gray-600 mb-4">접근 권한이 없습니다</p>
          <p className="text-gray-500">이 페이지에 접근할 수 있는 권한이 없습니다.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
