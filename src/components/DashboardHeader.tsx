"use client";

import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { AuthButton } from "./AuthButton";

export const DashboardHeader = () => {
  return (
    <header className="text-white h-16 flex items-center">
      <nav className="container mx-auto px-4 flex items-center justify-between whitespace-nowrap">
        <div className="flex space-x-4">
          <HeaderLink href="/dashboard" exact>
            Overview
          </HeaderLink>
          <HeaderLink href="/dashboard/works">My Works</HeaderLink>
          <HeaderLink href="/dashboard/create-work">Create Work</HeaderLink>
        </div>
        <div className="flex space-x-4 items-center">
          <HeaderLink href="/" exact>Back to Home</HeaderLink>
          <Link href="/account">
            <button
              type="button"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded transition-colors duration-200 ease-in-out"
            >
              My Account
            </button>
          </Link>
          <AuthButton action="logout" />
        </div>
      </nav>
    </header>
  );
};
