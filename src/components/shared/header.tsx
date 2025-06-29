import type { NavItems } from '@/types';
import { Link } from 'react-router';

const Header = () => {
  const navItems: NavItems[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/',
    },
    {
      name: 'Services',
      path: '/',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <header className="w-full py-4 shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          MySite
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-black transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-black transition">
            Login
          </button>
          <button className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
