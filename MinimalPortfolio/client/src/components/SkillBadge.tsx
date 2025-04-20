import { useState } from "react";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`px-4 py-2 border border-[#EEEEEE] text-sm transition-colors ${
        isHovered ? "bg-black text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {name}
    </motion.span>
  );
}
