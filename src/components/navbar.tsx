"use client";
import { Search, Menu, UserCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function FilterButtons() {
  return (
    <div className="px-6">
      <div
        className={`
      flex gap-5 border pl-5 pr-2 rounded-full 
      [&_button]:h-12 
      [&_button_span]:border-r
      [&_button_span]:pr-5
      [&_button]:text-sm
      px-6
      `}
      >
        <button className="font-bold">
          <span>Anywhere</span>
        </button>
        <button className="font-bold">
          <span>Any week</span>
        </button>
        <button className="last:[&_span]:pr-0 last:[&_span]:border-r-0">
          <span className="flex items-center gap-2">
            Add guest{" "}
            <div className="p-2.5 bg-brand rounded-full">
              <Search width={12} height={12} strokeWidth={5.33} color="white" />
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const onBlur = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative flex-grow lg:flex-grow-0">
      <div className="flex justify-end">
        <button
          onClick={toggle}
          onBlur={onBlur}
          className="flex border rounded-full p-2 items-center gap-2 self-end"
        >
          <Menu />
          <div>
            <UserCircle2 width={30} height={30} />
          </div>
        </button>
      </div>
      {isOpen && (
        <div
          className={`
          absolute flex flex-col 
          min-w-[200px] min-h-20 bg-white shadow-lg 
          shadow-black right-0 top-16 rounded-lg
          
          items-start
          py-2
          [&_button]:p-3
          hover:[&_button]:bg-black/10
          [&_button]:w-full
          [&_button]:text-start
          [&_button]:text-sm
          `}
        >
          <button className="font-bold">Sign Up</button>
          <button>Sign Up</button>
          <div className="border-b w-full my-2" />
          <button>Airbnb your home</button>
          <button>Help</button>
        </div>
      )}
    </div>
  );
}

export function Logo() {
  return (
    <div>
      <div className="hidden lg:block">
        <Image src="/airbnb.png" alt="Logo" width="102" height="32" />
      </div>
      <div className="block lg:hidden">
        <Image src="/airbnb.svg" alt="Logo" width="32" height="32" />
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="h-20 w-full flex bg-white text-black items-center px-10 lg:px-20 justify-between">
      <Logo />
      <FilterButtons />
      <AccountDropdown />
    </nav>
  );
}
