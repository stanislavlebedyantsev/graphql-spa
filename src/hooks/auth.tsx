"use client";

import { PublicRoutes, Routes, User } from "@/types";
import { RedirectType, redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthContextProps {
  user?: User | null;
  handleLogout: () => void;
  handleUpdateUser: (user: User) => void;
}

const getInitialUser = () => {
  if (typeof window !== "undefined") {
    const storedUser = window.localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser) as User;
    }
  }
  return null;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => getInitialUser());
  const pathname = usePathname();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    if (!user) {
      localStorage.removeItem("user");
      if (!PublicRoutes.includes(pathname as Routes)) {
        redirect(Routes.LOGIN, RedirectType.replace);
      }
    }
  }, [pathname, user]);

  const handleLogout = useCallback(() => {
    setUser(null);
    redirect(Routes.LOGIN, RedirectType.replace);
  }, []);

  const handleUpdateUser = useCallback((user: User) => {
    setUser(user);
    redirect(Routes.HOME, RedirectType.replace);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      handleLogout,
      handleUpdateUser,
    }),
    [handleLogout, handleUpdateUser, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { user, handleLogout, handleUpdateUser } = useContext(AuthContext);
  return { user, handleLogout, handleUpdateUser };
};
