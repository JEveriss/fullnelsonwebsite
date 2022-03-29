import React from "react";
import style from "./title.module.css";

export default function Title() {
  return (
    <>
      <h1 className={style.title}>
        <span
          style={{
            transform: "translateX(-2px) translateY(75px) rotate(-31deg)",
          }}
        >
          F
        </span>
        <span
          style={{
            transform: "translateX(-5px) translateY(49px) rotate(-25deg)",
          }}
        >
          u
        </span>
        <span
          style={{
            transform: "translateX(-6px) translateY(27px) rotate(-18deg)",
          }}
        >
          l
        </span>
        <span
          style={{
            transform: "translateX(-5px) translateY(12px) rotate(-12deg)",
          }}
        >
          l
        </span>
        <span>&nbsp;</span>
        <span
          style={{
            transform: "translateX(-1px) translateY(1px) rotate(-1deg)",
          }}
        >
          N
        </span>
        <span
          style={{
            transform: "translateX(2px) translateY(2px) rotate(5deg)",
          }}
        >
          e
        </span>
        <span
          style={{
            transform: "translateX(5px) translateY(10px) rotate(11deg)",
          }}
        >
          l
        </span>
        <span
          style={{
            transform: "translateX(6px) translateY(24px) rotate(17deg)",
          }}
        >
          s
        </span>
        <span
          style={{
            transform: "translateX(6px) translateY(44px) rotate(24deg)",
          }}
        >
          o
        </span>
        <span
          style={{
            transform: "translateX(2px) translateY(72px) rotate(30deg)",
          }}
        >
          n
        </span>
      </h1>
      
      <h1 className={style.mobile}>
        <span>Full Nelson</span>
      </h1>
    </>
  );
}
