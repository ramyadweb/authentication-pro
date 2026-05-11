import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, LayoutDashboard, Bell, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-primary-600 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">Auth<span className="text-primary-600">Pro</span></span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <div className="hidden md:flex items-center space-x-1 relative group">
                  <div className="p-2 text-slate-400 hover:text-primary-600 cursor-pointer transition-colors">
                    <Search className="h-5 w-5" />
                  </div>
                  <div className="p-2 text-slate-400 hover:text-primary-600 cursor-pointer transition-colors relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-slate-200 hidden md:block"></div>

                <div className="flex items-center space-x-4">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-sm font-bold text-slate-900 leading-none">{user.name}</span>
                    <span className="text-xs font-medium text-slate-400 mt-1">Verified User</span>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold border-2 border-white shadow-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-slate-400 hover:text-red-600 transition-colors duration-200"
                    title="Logout"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-6">
                <Link
                  to="/login"
                  className="text-slate-600 hover:text-primary-600 transition-colors duration-200 font-bold text-sm"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-sm !py-2.5"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
