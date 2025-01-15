import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <section className="flex flew-row gap-6 h-1/4 bg-primaryColor px-20 pt-20 pb-10 justify-between items-start">
        <div className="w-1/4 flex flex-col text-white">
          <Link href="" className="hover:text-gray-300 pb-3 text-xl font-bold">
            WisataGeh
          </Link>
          <Link href="" className="hover:text-gray-300 py-3">
            Temukan keindahan mempesona dan budaya Lampung yang semarak di
            Indonesia, dengan WisataGeh. Petualangan Anda menanti!
          </Link>
          <Link href="" className="hover:text-gray-300 py-3">
            © Copyright 2025, All Rights Reserved
          </Link>
        </div>
        <div className="flex flex-col text-white">
          <Link href="" className="hover:text-gray-300 font-bold">
            Company
          </Link>
          <Link href="">Destination</Link>
        </div>
        <div className="flex flex-col text-white">
          <Link href="" className="hover:text-gray-300 font-bold">
            Quick Links
          </Link>
          <Link href="">Works</Link>
          <Link href="">Testimonial</Link>
        </div>
        <div className="flex flex-col text-white">
          <Link href="" className="hover:text-gray-300 font-bold">
            Help
          </Link>
          <Link href="">Customer Support</Link>
          <Link href="">Terms & Conditions</Link>
          <Link href="">Privacy Policy</Link>
        </div>
      </section>
    </footer>
  );
}
