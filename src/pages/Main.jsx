import React from "react";
import s from "../styles/Main.module.css";
import avapng from "../assets/img/ava.png";
import coin from "../assets/img/coin.png";
import bunny from "../assets/img/bunny.png";
import faster from "../assets/img/faster.png";
import larger from "../assets/img/larger.png";
import CoinCLick from "../components/shared/CoinCLick";

function Main() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className={s.header_avatar}>
          <img src={avapng} alt="avatar" />
        </div>
        <div className={s.header_content}>
          <div>
            <p>Rating - 2578 / 568 423</p>
          </div>
          <div>
            <p>Claimed - 15 100 679</p>
          </div>
        </div>
      </div>
      <div className={s.coin_count}>
        <img src={coin} alt="count icons" />
        <p>123456</p>
      </div>
      <CoinCLick />
      <div className={s.menu}>
        <div className={s.info_block}>
          <div>
            <span>P - </span>
            <img src={coin} alt="coin icons" />
          </div>
          <p>E - 30 sec</p>
          <p>E - 40 min</p>
        </div>
        <div className={s.menu_btn}>
          <span>Bunny</span>
          <img src={bunny} alt="bunny" />
        </div>
        <div className={s.menu_btn}>
          <span>Faster</span>
          <img src={faster} alt="bunny" />
        </div>
        <div className={s.menu_btn}>
          <span>Larger</span>
          <img src={larger} alt="bunny" />
        </div>
      </div>
    </div>
  );
}

export default Main;
