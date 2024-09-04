"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const HeroHeaderSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <>
        <div className="hidden lg:block">
          {wordsArray.map((word, idx) => {
            return (
              <div key={`word-${idx}`} className="inline-block">
                {word.text.map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={cn(
                      `uppercase font-rubik text-5xl`,
                      word.className
                    )}
                  >
                    {char}
                  </span>
                ))}
                &nbsp;
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className={cn("flex space-x-1 mt-2 lg:mt-6 mb-2", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <span className="text-snapNewsColor-blue font-rubik text-5xl font-medium uppercase lg:hidden">
        SnapNews
      </span>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "hidden lg:block rounded-sm w-[4px] h-12 bg-snapNewsColor-blue",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
