import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'visitor' | 'member' | 'exec-core' | 'exec-finance' | 'exec-promo' | 'exec-plan' | 'exec-equipment' | 'exec-external';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  position?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  hasRole: (roles: UserRole[]) => boolean;
  switchRole: (role: UserRole) => void; // For demo purposes
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
const mockUsers: Record<string, User> = {
  'visitor': {
    id: '0',
    name: '방문자',
    email: '',
    role: 'visitor'
  },
  'member@kookmin.ac.kr': {
    id: '1',
    name: '김부원',
    email: 'member@kookmin.ac.kr',
    role: 'member'
  },
  'president@kookmin.ac.kr': {
    id: '2',
    name: '이회장',
    email: 'president@kookmin.ac.kr',
    role: 'exec-core',
    position: '회장'
  },
  'finance@kookmin.ac.kr': {
    id: '3',
    name: '박총무',
    email: 'finance@kookmin.ac.kr',
    role: 'exec-finance',
    position: '총무'
  },
  'promo@kookmin.ac.kr': {
    id: '4',
    name: '최홍보',
    email: 'promo@kookmin.ac.kr',
    role: 'exec-promo',
    position: '홍보팀장'
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(mockUsers['visitor']);

  const login = async (email: string, password: string) => {
    // Mock login - in production, this would call a real API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const foundUser = mockUsers[email];
    if (foundUser) {
      setUser(foundUser);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(mockUsers['visitor']);
  };

  const isAuthenticated = user !== null && user.role !== 'visitor';

  const hasRole = (roles: UserRole[]) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  const switchRole = (role: UserRole) => {
    // Demo function to switch between roles for testing
    const userByRole = Object.values(mockUsers).find(u => u.role === role);
    if (userByRole) {
      setUser(userByRole);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, hasRole, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
