import React, { useState, useEffect } from "react";

const words = ["Abhilipsa Sahoo.", "into building stuff.", "a literature & pop-culture enthusiast.", "interested in community engagement."];

export default function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 && 
      index !== words.length - 1 && 
      !reverse 
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
      <h1 className="title-font sm:text-5xl text-4xl mb-4 !bg-gradient-to-br !from-pink-300 !via-purple-300 !to-indigo-400 text-5xl font-extrabold inline-block text-transparent bg-clip-text lg:text-6xl" id="intro">
        Hi 👋, I'm {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
  );
}
