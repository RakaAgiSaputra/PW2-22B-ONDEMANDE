import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
      <>
        <nav className="flex justify-between gap-5 items-center px-20 pt-10 pb-5 border border-b-2 p-2 shadow-custom">
          <div className="p-2">
            <Link href={""} className="text-2xl font-bold">
              WisataGeh
            </Link>
          </div>
          <div className="p-2">
            <ul className="flex gap-8">
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
          <div className="p-2 bg-primaryColor rounded-xl">
            <button>
              <img src="assets\icons\ic_profile.png" width={20}/>
            </button>
          </div>
        </nav>
      </>
    );
}

export default Navbar;
