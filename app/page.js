"use client";

import colors from '../styles/colors.module.scss';
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  return <h1 style={{ color: colors.primaryColor}}>Hello, Next.js!</h1>
}