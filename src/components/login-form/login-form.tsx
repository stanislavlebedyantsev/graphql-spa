"use client";
import { useAuth } from "@/hooks/auth";
import { Routes } from "@/types";
import Link from "next/link";
import { RedirectType, redirect } from "next/navigation";
import { FormEventHandler, useEffect } from "react";

export const LoginForm = () => {
  const { user, handleUpdateUser } = useAuth();

  useEffect(() => {
    if (user) {
      redirect(Routes.HOME, RedirectType.replace);
    }
  }, [user]);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    handleUpdateUser({ fullName: "Test", email: "test@test.co" });
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit} >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800"
        >
          Email
        </label>
        <input
          type="email"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-800"
        >
          Password
        </label>
        <input
          type="password"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <Link href="/forget" className="text-xs text-blue-600 hover:underline">
        Forget Password?
      </Link>
      <div className="mt-2">
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Sign In
        </button>
      </div>
    </form>
  );
};
