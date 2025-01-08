import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
      <>
        <nav className="flex justify-between gap-5 items-center px-20 pt-10  border border-e-2 border-blue-500 p-2">
          <div className="border border-e-2 p-2">
            <Link href={""} className="text-2xl font-bold">
              WisataGeh
            </Link>
          </div>
          <div className="border border-e-2 p-2">
            <ul className="flex gap-4">
              <li>
                <Link className="font-light hover:font-bold" href={""}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-light hover:font-bold" href={""}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="font-light hover:font-bold" href={""}>
                  Destinations
                </Link>
              </li>
              <li>
                <Link className="font-light hover:font-bold" href={""}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="font-light hover:font-bold" href={""}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="border border-e-2 p-2 bg-red-400 rounded-lg">
            <button>
              <img src="assets\icons\ic_profile.png" width={30}/>
            </button>
          </div>
        </nav>
      </>
    );
}

export default Navbar;
