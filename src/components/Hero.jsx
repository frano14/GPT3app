import React from "react";
import styles from "../style";
import { layout } from "../style";
import illustration from "../assets/Illustration.png";

const Hero = () => {
  return (
    <div id="home">
      <div className={` ${layout.section} ${styles.flexCenter} w-full`}>
        <div className="absolute z-[0] w-[40%] h-[40%] -top-[100px] -left-[200px] blue__gradient" />

        <div className="">
          <h1 className="w-full gradient__text font-manrope font-extrabold md:text-[58px] text-[52px] leading-[75px] mb-8">
            Let’s Build Something <br className="sm:flex hidden" />
            amazing with GPT-3
            <br className="sm:flex hidden" /> OpenAI
          </h1>
          <p className={`${styles.paragraph} w-4/5 mb-8`}>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div>
            <p className="px-8 py-4 bg-input w-3/5 relative text-white">
              Your email adress...
              <button className="block bg-orange font-manrope font-extralight px-6 h-full text-white  md:text-[16px] text-[12px] absolute right-0 top-0">
                Sign up
              </button>
            </p>
          </div>
        </div>
        <div
          className={`xl:min-w-[660px] min-w-[520px] xl:max-w-[660px] max-w-[520px]`}
        >
          <div className="absolute z-[10] w-[40%] h-[40%] top-[0px] right-[0px] left-0 bottom-0 rounded-full white__gradient" />

          <img
            src={illustration}
            alt="ai face"
            className="mt-16 w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
