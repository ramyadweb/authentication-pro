import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, ShieldCheck, LogOut, ArrowRight, Settings, Bell } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center p-6 md:p-12">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary-100 text-primary-700 text-sm font-bold tracking-wide uppercase">
            User Dashboard
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Welcome back, <span className="gradient-text">{user?.name}</span>
          </h1>
          <p className="text-slate-500 mt-4 text-xl font-medium max-w-2xl mx-auto">
            Everything you need to manage your secure account and personal settings in one place.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Profile Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 glass-card p-10 overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <User size={160} className="text-primary-600" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 relative z-10">
              <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-primary-500/20">
                <User size={64} />
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{user?.name}</h2>
                    <div className="flex items-center justify-center md:justify-start text-slate-500 mt-2 text-lg">
                      <Mail className="h-5 w-5 mr-2 text-primary-500" />
                      <span>{user?.email}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex space-x-2 justify-center">
                    <div className="p-2 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div className="p-2 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors">
                      <Settings className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-5 bg-green-50/50 rounded-2xl border border-green-100 group/status hover:bg-green-50 transition-colors">
                    <div className="flex items-center text-green-700 mb-2 font-bold">
                      <ShieldCheck className="h-5 w-5 mr-2" />
                      <span>Security Status</span>
                    </div>
                    <p className="text-xl font-black text-slate-900">Level 4 Verified</p>
                  </div>
                  <div className="p-5 bg-primary-50/50 rounded-2xl border border-primary-100 group/date hover:bg-primary-50 transition-colors">
                    <div className="flex items-center text-primary-700 mb-2 font-bold">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>Account Anniversary</span>
                    </div>
                    <p className="text-xl font-black text-slate-900">May 12, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/20 transition-all active:scale-[0.98]">
                  <span>Update Profile</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-[0.98]">
                  <span>Privacy Settings</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-[0.98]">
                  <span>Security Log</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <button
              onClick={logout}
              className="mt-8 flex items-center justify-center space-x-2 text-red-600 font-bold hover:bg-red-50 p-4 rounded-2xl transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout Session</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Analytics Mockup */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-8 glass-card p-10 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Account Protection Active</h3>
            <p className="text-slate-500 max-w-lg">Your account is currently protected by 256-bit encryption and multi-layered security protocols.</p>
            <div className="mt-8 flex space-x-4">
              <div className="h-2 w-24 bg-green-500 rounded-full animate-pulse"></div>
              <div className="h-2 w-24 bg-green-500 rounded-full animate-pulse delay-75"></div>
              <div className="h-2 w-24 bg-green-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
