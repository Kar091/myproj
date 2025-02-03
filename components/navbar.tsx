import Image from "next/image";
import Link from "next/link";
import Login from "./Login"; // Import the Login component

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Center the navbar links */}
      <ul className="hidden lg:flex w-full justify-center gap-12">
        <li><Link href="/" className="regular-16 text-black-500 hover:font-bold">Home</Link></li>
        <li><Link href="/sibunag" className="regular-16 text-black-500 hover:font-bold">How Hlink Work?</Link></li>
        <li><Link href="/services" className="regular-16 text-black-500 hover:font-bold">Services</Link></li>
        <li><Link href="/pricing" className="regular-16 text-black-500 hover:font-bold">Pricing</Link></li>
        <li><Link href="/contact" className="regular-16 text-black-500 hover:font-bold">Contact</Link></li>
      </ul>

      {/* Login Button */}
      <div className="lg:flexCenter hidden">
        <Login />
      </div>

      <Image 
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
