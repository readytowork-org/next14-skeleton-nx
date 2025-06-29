'use client';

import NextTopLoader from 'nextjs-toploader';
import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  user: any | null;
  setUser: React.Dispatch<React.SetStateAction<any | null>>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (isLoading && !user) return <div>Loading...</div>;
  return (
    <>
      <NextTopLoader color="#8E6749" />
      <AuthContext.Provider value={{ user, setUser, isLoading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
