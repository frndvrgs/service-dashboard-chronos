"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { HeaderLink } from "./HeaderLink";
import { AuthButton } from "./AuthButton";

export const HomeHeader = () => {
  const { user } = useUser();

  return (
    <header className="text-white h-16 flex items-center">
      <nav className="container mx-auto px-4 flex items-center justify-between whitespace-nowrap">
        <div className="flex space-x-4">
          <HeaderLink href="/" exact>
            Home
          </HeaderLink>
          <HeaderLink href="/features">Features</HeaderLink>
          <HeaderLink href="/pricing">Pricing</HeaderLink>
        </div>
        <div className="flex space-x-4 items-center">
          {!user ? (
            <>
              <AuthButton action="login" />
              <AuthButton action="signup" />
            </>
          ) : (
            <>
              <Link href="/account">
                <button
                  type="button"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded transition-colors duration-200 ease-in-out"
                >
                  My Account
                </button>
              </Link>
              <Link href="/dashboard">
                <button
                  type="button"
                  className="bg-white hover:bg-slate-200 text-black py-2 px-4 rounded-md"
                >
                  Dashboard
                </button>
              </Link>
              <AuthButton action="logout" />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
