import React, { useState, useRef } from "react";
import clickCoin from "../../assets/img/click-coin.png";
import s from "../../styles/Click.module.css";

export default function CoinClick() {
  const [transformStyle, setTransformStyle] = useState("");
  const coinRef = useRef(null);

  const handleClick = (e) => {
    const { top, left, height, width } =
      coinRef.current.getBoundingClientRect();
    const clickY = e.clientY - top; // Y координата клика относительно изображения
    const clickX = e.clientX - left; // X координата клика относительно изображения
    const relativeClickY = clickY / height; // Относительная Y координата клика
    const relativeClickX = clickX / width; // Относительная X координата клика

    let transform = "";

    if (relativeClickY < 0.33) {
      transform = "rotateX(15deg)"; // Верхняя часть
    } else if (relativeClickY > 0.66) {
      transform = "rotateX(-15deg)"; // Нижняя часть
    }

    if (relativeClickX < 0.33) {
      transform += " rotateY(-15deg)"; // Левая часть
    } else if (relativeClickX > 0.66) {
      transform += " rotateY(15deg)"; // Правая часть
    }

    if (
      relativeClickY >= 0.33 &&
      relativeClickY <= 0.66 &&
      relativeClickX >= 0.33 &&
      relativeClickX <= 0.66
    ) {
      transform = "scale(0.95)";
    }

    setTransformStyle(transform);

    setTimeout(() => {
      setTransformStyle("");
    }, 100);
  };

  return (
    <div className={s.coin_click} onClick={handleClick}>
      <img
        ref={coinRef}
        src={clickCoin}
        alt="click coin"
        style={{ transform: transformStyle, transition: "transform 0.3s ease" }}
      />
    </div>
  );
}
