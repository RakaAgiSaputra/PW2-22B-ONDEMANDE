import Link from "next/link";

// Props interface (optional, for TypeScript)
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}:LayoutProps ) => {

    const dest = "Destinations > ";
  
    return (
    <div>
      <header className="px-48 pt-10 align-text-bottom" >
        <Link href={""}>{dest}</Link>
        <Link href={"/all"}>All</Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
