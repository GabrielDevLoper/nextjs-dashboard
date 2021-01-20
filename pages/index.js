import React from "react";
import Dashboard from "../src/components/DashBoard/dashboard";

import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <motion.div animate={{ stdDeviation: [0, 5, 0] }}>
      <Dashboard>olá</Dashboard>
    </motion.div>
  );
}
