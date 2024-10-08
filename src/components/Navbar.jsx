"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data } = useSession();
  console.log(data);
  useEffect(() => {
    if (!data?.user) {
      redirect("/auth");
    }
  }, [data?.user]);
  return (
    <nav className="flex justify-between p-4">
      <div>
        <Link className="navbar-brand" href="/">
          Next Auth
        </Link>
      </div>
      <div>
        {data?.user ? (
          <Button variant={"outline"} onClick={signOut}>
            Logout
          </Button>
        ) : (
          <>
            <div className="flex gap-2">
              <Link className="" href="/register">
                <Button variant={"outline"}>Register</Button>
              </Link>
              <Link className="" href="/login">
                <Button variant={"default"}>Login</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
