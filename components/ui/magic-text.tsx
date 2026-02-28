"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export interface MagicTextProps {
  text: string;
  className?: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-1 mt-[12px]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, className }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.42"],
  });

  // Split by newlines first, then by spaces
  const paragraphs = text.split("\n");
  const allWords: { word: string; isLineBreak: boolean }[] = [];

  paragraphs.forEach((paragraph, pIndex) => {
    const words = paragraph.trim().split(" ");
    words.forEach((word) => {
      if (word) allWords.push({ word, isLineBreak: false });
    });
    // Add line break marker after each paragraph except the last
    if (pIndex < paragraphs.length - 1) {
      allWords.push({ word: "", isLineBreak: true });
    }
  });

  const totalWords = allWords.filter((w) => !w.isLineBreak).length;
  let wordIndex = 0;

  return (
    <div
      ref={container}
      className={`flex flex-wrap leading-relaxed ${className || ""}`}
    >
      {allWords.map((item, i) => {
        if (item.isLineBreak) {
          return <div key={`br-${i}`} className="w-full pt-4" />;
        }
        const start = wordIndex / totalWords;
        const end = start + 1 / totalWords;
        wordIndex++;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {item.word}
          </Word>
        );
      })}
    </div>
  );
};
