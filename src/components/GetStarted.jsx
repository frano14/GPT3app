import React from "react";
import styles, { layout } from "../style";

const GetStarted = () => {
  return (
    <section id="getstarted" className={`${layout.section}`}>
      <div
        className={`${styles.flexStart} md:px-6p px-12 md:py-12 py-6 justify-between md:flex-row flex-col gap-12 rounded-[5px] w-full gradient__bg`}
      >
        <div>
          <p className="font-manrope font-normal text-[12px] pb-6px">
            Request Early Access to Get Started
          </p>
          <p className="font-manrope text-[24px] font-extrabold">
            Register today & start exploring the endless possiblities.
          </p>
        </div>
        <button className="px-8 py-3 bg-black text-white text-[18px] font-manrope fonr-bold rounded-2xl">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
