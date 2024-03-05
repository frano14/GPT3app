import React from "react";
import styles, { layout } from "../style";

const Line = () => {
  return <div className="gradient__bg h-[3px] w-[40px]"></div>;
};

const WhatIsGPT = () => {
  return (
    <section id="whatisgpt" className={`${layout.section}`}>
      <div className="bg-input p-16 w-full relative overflow-hidden">
        <div className="absolute z-[10] w-[40%] h-[40%] -top-[10px] -right-[10px] rounded-full violet__gradient" />
        <div className="absolute z-[10] w-[40%] h-[40%] left-[10px] bottom-[10px] rounded-full violet__gradient" />
        <Line />
        <div className="flex md:flex-row flex-col justify-between items-start gap-20">
          <h3 className="font-manrope font-extrabold text-[24px] min-w-[150px] text-white w-1/5">
            What is GPT
          </h3>
          <p className={`${styles.paragraph}`}>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-start gap-20 mt-32">
          <h3 className="font-manrope font-extrabold text-[34px]  gradient__text max-w-[500px]">
            The possibilities are beyond your imagination
          </h3>
          <p className={`${styles.paragraph} text-subtext`}>
            Explore The Libery
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-start mt-32 gap-8">
          <div>
            <Line />
            <h4 className="font-manrope font-extrabold text-[24px] text-white">
              Chatbots
            </h4>
            <p className={`${styles.paragraph} mt-4`}>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div>
            <Line />
            <h4 className="font-manrope font-extrabold text-[24px] text-white">
              Knowledgebase
            </h4>
            <p className={`${styles.paragraph} mt-4`}>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
          <div>
            <Line />
            <h4 className="font-manrope font-extrabold text-[24px] text-white">
              Education
            </h4>
            <p className={`${styles.paragraph} mt-4`}>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGPT;
