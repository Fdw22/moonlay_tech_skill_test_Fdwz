import React, { Component } from "react";
import "../App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// export default function Nav() {
//   return (
//     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-gray-800">
//       <div className="grid place-items-center h-20">
//         <h2 className="text-white text-2xl font-bold">Moonlay Technology</h2>
//         <h3 className="text-white text-xl font-normal">
//           <a
//             href="https://www.linkedin.com/in/fauzi-dzulfiqar-wibowo-45a655120/"
//             target="_blank"
//           >
//             by Fauzi Dzulfiqar Wibowo
//           </a>
//         </h3>
//       </div>
//       <nav className="flex xs:justify-center sm:justify-between space-x-4">
//         {[
//           ["Home", "/"],
//           ["Planet", "/planet"],
//           ["Starship", "/starship"],
//           ["People", "/people"],
//         ].map(([title, url]) => (
//           <a
//             href={url}
//             className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900"
//           >
//             {title}
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// }

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "People", href: "/people", current: false },
  { name: "Starship", href: "/starship", current: false },
  { name: "Planet", href: "/planet", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="block lg:hidden text-white font-bold">
                    Moonlay Technologies
                  </h1>
                  <h1 className="hidden lg:block text-white font-bold">
                    Moonlay Technologies
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
