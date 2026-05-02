import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-[120px] md:text-[200px] font-headline font-black text-primary-container/10 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 md:pt-16">
            <h2 className="text-3xl md:text-5xl font-headline font-black mb-4">
              Page not found
            </h2>
            <p className="text-on-surface-variant max-w-sm mb-12">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <Link
              to="/"
              className="bg-primary-container text-background px-8 py-3 rounded-xl font-headline font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,194,0.3)]"
            >
              Go back home
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
