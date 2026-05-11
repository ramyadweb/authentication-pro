import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, ShieldCheck, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-[calc(100vh-64px)] p-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Welcome back, <span className="text-primary-600">{user?.name}</span>! 👋
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Here's what's happening with your account today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <div className="flex items-center space-x-6 mb-8">
              <div className="h-24 w-24 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600">
                <User size={48} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{user?.name}</h2>
                <div className="flex items-center text-slate-500 mt-1">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{user?.email}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center text-slate-600 mb-1">
                  <ShieldCheck className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-sm font-medium">Account Status</span>
                </div>
                <p className="text-lg font-bold text-slate-900">Verified</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center text-slate-600 mb-1">
                  <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                  <span className="text-sm font-medium">Member Since</span>
                </div>
                <p className="text-lg font-bold text-slate-900">May 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-primary-50 text-primary-700 rounded-2xl font-semibold hover:bg-primary-100 transition-colors duration-200">
                <span>Update Profile</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 text-slate-700 rounded-2xl font-semibold hover:bg-slate-100 transition-colors duration-200">
                <span>Security Settings</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={logout}
                className="w-full flex items-center justify-between p-4 bg-red-50 text-red-600 rounded-2xl font-semibold hover:bg-red-100 transition-colors duration-200"
              >
                <span>Logout Session</span>
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default Dashboard;
