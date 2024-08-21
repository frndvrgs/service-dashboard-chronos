import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { HeaderLink } from './HeaderLink';

export function AuthButton({ action }: { action: string }) {
  const { isLoading } = useUser();

  return (
    action === 'logout' ? (
      <Link href="/api/auth/logout">
      <button
        type="button"
        disabled={isLoading}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors duration-200 ease-in-out"
      >
        Logout
      </button>
        </Link>
    ) : action === 'signup' ? (
      <Link href="/api/auth/login?screen_hint=signup">
      <button
        type="button"
        disabled={isLoading}
        className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded transition-colors duration-200 ease-in-out"
      >
        Sign Up
      </button>
        </Link>
    ) : (
      <HeaderLink href="/api/auth/login">Log In</HeaderLink>
    )
  );
}