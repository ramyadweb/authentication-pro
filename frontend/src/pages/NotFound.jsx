import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-red-100 text-red-600 mb-8"
        >
          <AlertCircle size={48} />
        </motion.div>
        <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-8">Page Not Found</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-12">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <Home className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
