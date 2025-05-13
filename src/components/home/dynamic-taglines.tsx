'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const taglines = [
  "Qual o tom de voz do seu cliente?",
  "O que seu cliente realmente sente?",
  "Seus dados falam. Você escuta?",
  "Transforme conversas em estratégia.",
  "Insights além do óbvio.",
  "Entenda 100% das suas interações.",
];

const DynamicTaglines = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000); // Change tagline every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={taglines[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-outfit-regular tracking-tight text-primary"
        >
          {taglines[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default DynamicTaglines;
