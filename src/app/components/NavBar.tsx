import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const NavBar = () => {
  const links = [{ lable: "", href: "" }];

  return (
    <nav className="flex items-center py-2 px-4 shadow-[0 0 10px 0]">
      <div className="flex gap-x-4">
        <Link href="/">
          <Image src={logo} width="150" height="50" alt="logo" />
        </Link>
        <ul className="flex items-center gap-x-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/issues">issues</Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <Link href="/sing in">sign in</Link>
      </div>
    </nav>
  );
};

export default NavBar;
