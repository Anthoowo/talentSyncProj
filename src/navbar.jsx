import React from "react";
import { DropdownComponent } from "./dropdown";

export default function NavBar() {
  return (
    // #
    <div className="flex w-screen justify-center">
      <nav className="  h-16 fixed w-10/12 top-8 rounded-full bg-[#f2f4f7] z-20 ">
        <div className="flex p-3 justify-around ">
          <h1 className="mb-3 text-xl font-semibold">
            <div className="group-icon"></div> ClearLink
          </h1>

          <div className="flex">
            <DropdownComponent title='products'/>
            <DropdownComponent  title='solutions'/>
            <DropdownComponent title='Resorces'/>
            <DropdownComponent title='Pricing'/>
          </div>

          <div>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Talk to sales
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-2xl"
            >
              Start your free trail
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
