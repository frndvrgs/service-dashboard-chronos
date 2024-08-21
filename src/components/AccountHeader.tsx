"use client";

import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { AuthButton } from "./AuthButton";

export const AccountHeader = () => {
  return (
    <header className="text-white h-16 flex items-center">
      <nav className="container mx-auto px-4 flex items-center justify-between whitespace-nowrap">
        <div className="flex space-x-4">
          <HeaderLink href="/account" exact>
            Overview
          </HeaderLink>
          <HeaderLink href="/account/profile">My Profile</HeaderLink>
          <HeaderLink href="/account/subscription">Subscription</HeaderLink>
          <HeaderLink href="/account/settings">Settings</HeaderLink>
        </div>
        <div className="flex space-x-4 items-center">
          <HeaderLink href="/" exact>Back to Home</HeaderLink>
          <Link href="/dashboard">
            <button
              type="button"
              className="w-full bg-white text-black py-2 px-4 rounded"
            >
              Dashboard
            </button>
          </Link>
          <AuthButton action="logout" />
        </div>
      </nav>
    </header>
  );
};
