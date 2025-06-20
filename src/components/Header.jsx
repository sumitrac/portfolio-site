const Header = ({ toggleMobileMenu, isMobileMenuOpen }) => (
    <header id="header" className="bg-slate-50/80 sticky top-0 z-50 backdrop-filter backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">John Doe</h1>
            <nav className="hidden md:flex space-x-8">
                <a href="#about-mobile" onClick={(e) => { e.preventDefault(); scrollToSection('about-mobile'); }} className="text-slate-600 hover:text-amber-600 transition duration-300">About</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="text-slate-600 hover:text-amber-600 transition duration-300">Skills</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-slate-600 hover:text-amber-600 transition duration-300">Projects</a>
                <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="text-slate-600 hover:text-amber-600 transition duration-300">Experience</a>
                <a href="#contact-mobile" onClick={(e) => { e.preventDefault(); scrollToSection('contact-mobile'); }} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition duration-300">Contact</a>
            </nav>
            <button id="mobile-menu-button" onClick={toggleMobileMenu} className="md:hidden text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
    </header>
);
export default Header;