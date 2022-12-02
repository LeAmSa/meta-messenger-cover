import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";
import { unstable_getServerSession } from "next-auth/next";

async function Header() {
  const session = await unstable_getServerSession();

  if (session)
    return (
      <header className="sticky top-0 z-50 backdrop-blur-lg flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2 items-center">
          <div className="relative">
            <Image
              src={session.user?.image!}
              alt="Profile Picture"
              width={50}
              height={10}
              className="rounded-full mx-2 object-contain w-auto h-auto"
            />
            <span className="bottom-0 right-2 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
          </div>

          <div>
            <p className="text-blue-400 ">Logged in as:</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://links.papareact.com/jne"
            width={50}
            height={10}
            alt="Logo"
          />

          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>

        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
