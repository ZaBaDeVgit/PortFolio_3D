"use client";

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dock = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
        {itemsNavbar.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link
              key={item.id}
              href={item.link}
              className={`p-3 rounded-full transition-colors ${
                isActive
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
              title={item.tooltip}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Dock;
