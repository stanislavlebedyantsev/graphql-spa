"use client";
import { useAuth } from "@/hooks/auth";
import { Routes } from "@/types";
import Link from "next/link";

export const LoginButton = () => {
  const { user, handleLogout } = useAuth();
  const handleLoginClick = () => {
    if (user?.email) {
      handleLogout();
    }
  };
  return (
    <Link
      href={!user?.email ? Routes.LOGIN : "#"}
      onClick={handleLoginClick}
      className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    >
      {!user?.email ? "Log in" : "Log out"}
    </Link>
  );
};
