
import Link from "next/link";
import { Button } from "./ui/button";

// component
import Nav from "./Nav";
import MobileNav from "./MobileNav";
function Header() {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container max-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">
          Pov<span className="text-accent" >.</span>
          </h1>
          </Link>
          {/* dasktop nav & hire me btn */}
          <div className="hidden xl:flex items-center gap-8">
             <Nav/>
             <Link href="/contact">
             <Button>Hire Me</Button></Link>
          </div>
         <div className="xl:hidden">
          <MobileNav/>
         </div>
      </div>
    </header>
  )
}

export default Header;