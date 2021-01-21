import React from "react";
import Dashboard from "../src/components/DashBoard/dashboard";

import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

export default function IndexPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <Dashboard></Dashboard>
    </animated.div>
  );
}
