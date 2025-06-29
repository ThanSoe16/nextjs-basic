// app/dashboard/template.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()} // ensures remount on navigation
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="p-4"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
