import FooterLi from "./FooterLi";

const Footer = () => {
    return (
        
<footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Testing</a>. All Rights Reserved.
    </span>
   <FooterLi/>
</footer>           
    );
};

export default Footer;