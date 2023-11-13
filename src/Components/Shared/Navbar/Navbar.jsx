import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>CONTACT us</Link></li>
        <li><Link to='/'>DASHBOARD</Link></li>
        <li><Link to='/'>Our Menu</Link></li>
        <li><Link to='/'>Our Shop</Link></li>
    </>
    return (
        <div className="navbar max-w-7xl fixed z-10 bg-black bg-opacity-40 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Boos Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;