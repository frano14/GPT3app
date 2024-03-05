import React from "react";
import styles, { layout } from "../style";
import img1 from "../assets/img1.png";

const Line = () => {
  return <div className="gradient__bg h-[3px] w-[40px]"></div>;
};

const OpenAI = () => {
  return (
    <section id="openai" className={`${layout.section} gap-24`}>
      <div className="w-2/5">
        <h3 className="ss:min-w-[450px] min-w-[300px] font-manrope font-extrabold text-[34px]  gradient__text max-w-[500px]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h3>
        <p className={`${styles.paragraph} mt-8 text-subtext`}>
          Request Early Access to Get Started
        </p>
      </div>

      <div className={`flex flex-col`}>
        <div
          className={`w-full ${styles.flexStart} gap-12 mb-8 ss:flex-row flex-col`}
        >
          <div>
            <Line />
            <h4 className="font-manrope font-extrabold text-[18px] min-w-[200px] text-white">
              Improving end distrusts instantly
            </h4>
          </div>
          <div>
            <p className={`${styles.paragraph}`}>
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded.
            </p>
          </div>
        </div>
        <div
          className={`w-full ${styles.flexStart} gap-12 mb-8 ss:flex-row flex-col`}
        >
          <div>
            <Line />
            <h4 className="font-manrope font-extrabold text-[18px] text-white min-w-[200px]">
              Become the tended active
            </h4>
          </div>
          <div>
            <p className={`${styles.paragraph}`}>
              Considered sympathize ten uncommonly occasional assistance
              sufficient not. Letter of on become he tended active enable to.
            </p>
          </div>
        </div>
        <div
          className={`w-full ${styles.flexStart} gap-12 mb-8 ss:flex-row flex-col`}
        >
          <div>
            <Line />
            <h4 className="font-manrope font-extrabold text-[18px] min-w-[200px] text-white">
              Message or am nothing
            </h4>
          </div>
          <div>
            <p className={`${styles.paragraph}`}>
              Led ask possible mistress relation elegance eat likewise debating.
              By message or am nothing amongst chiefly address.
            </p>
          </div>
        </div>
        <div
          className={`w-full ${styles.flexStart} gap-12 mb-8 ss:flex-row flex-col`}
        >
          <div>
            <Line />
            <h4 className="font-manrope font-extrabold text-[18px] min-w-[200px] text-white">
              Really boy law county
            </h4>
          </div>
          <div>
            <p className={`${styles.paragraph}`}>
              Really boy law county she unable her sister. Feet you off its like
              like six. Among sex are leave law built now. In built table in an
              rapid blush.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAI;
