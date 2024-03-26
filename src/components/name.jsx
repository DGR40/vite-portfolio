import { useRef, useEffect, useState } from "react";

export default function Name({ text, jumble, second = false, handleStop }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const iterations = useRef(0);
  const [stop, setStop] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const originalText = text;

  useEffect(() => {
    if (second) {
      setTimeout(() => {
        setFirstTime(false);
      }, 500);
    } else {
      setFirstTime(false);
    }
  }, []);

  useEffect(() => {
    if (!stop && !firstTime) {
      const intervalId = setInterval(() => {
        nameRef.current.innerText = nameRef.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations.current) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iterations.current >= originalText.length) {
          setStop(true);
          return;
        }

        iterations.current += 1 / 7;
      }, 30);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [stop, firstTime]);

  function scrambleOnHover() {
    let iterations = 0;
    const intervalId = setInterval(() => {
      nameRef.current.innerText = nameRef.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return originalText[index];
          } else if (letter == " ") {
            return " ";
          } else {
            return letters[Math.floor(Math.random() * 26)];
          }
        })
        .join("");
      if (iterations >= nameRef.current.innerText.length) {
        clearInterval(intervalId);
        return;
      }

      iterations += 1 / 3;
    }, 30);
  }

  const nameRef = useRef();
  return (
    <div className="name">
      <h1 ref={nameRef} onMouseEnter={scrambleOnHover}>
        {jumble}
      </h1>
    </div>
  );
}
