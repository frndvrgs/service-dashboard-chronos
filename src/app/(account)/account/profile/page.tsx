'use client'
import { useUser } from "@auth0/nextjs-auth0/client";

const AccountProfile = () => {
  const { user, isLoading } = useUser()
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold">My Profile</h1>
      <p className="mt-4">{user?.name}</p>
    </section>
  );
};

export default AccountProfile;
