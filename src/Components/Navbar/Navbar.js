import Navlist from "./Navlist";
import NavLogo from "./NavLogo";
const Navbar = () => {
    return (
     
<nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 h-14">
  <div className="container flex flex-wrap items-center justify-between mx-auto h-full">
   <NavLogo/>
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <Navlist/>
    </div>
  </div>
</nav>
   


    );
};

export default Navbar;