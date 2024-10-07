"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <nav className="flex justify-between p-4">
      <div>
        <Link className="navbar-brand" href="/">
          Next Auth
        </Link>
      </div>
      <div>
        {data?.user ? (
          <button className="btn btn-danger btn-sm" onClick={signOut}>
            Logout
          </button>
        ) : (
          <>
            <div className="flex gap-2">
              <Link className="" href="/register">
                Register
              </Link>
              <Link className="" href="/login">
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
