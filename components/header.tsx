"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 px-6 bg-black">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            <span className="text-white">ZaBa</span>
            <span className="text-red-600">DeV</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          {socialNetworks.map(({ logo, src, id }) => (
            <Link
              key={id}
              href={src}
              target="_blank"
              className="text-gray-400 hover:text-red-500"
            >
              {logo}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
