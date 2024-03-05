import React from "react";
import styles, { layout } from "../style";
import women from "../assets/women.png";

const CaseStudies = () => {
  return (
    <section id="casestudies" className={`${layout.section} relative`}>
      <div
        className={`flex gap-16 justify-between items-end md:flex-row flex-col`}
      >
        <div className="absolute z-[10] w-[20%] h-[20%] right-[300px] bottom-[200px] rounded-full violet__gradient" />
        <div className="absolute z-[10] w-[30%] h-[30%] right-[10px] bottom-[100px] rounded-full white__gradient" />

        <img src={women} alt="women on phone" className="w-full relative" />
        <div
          className={`w-full ${styles.flexStart} gap-12 mb-8 ss:flex-row flex-col`}
        >
          <div>
            <p className={`${styles.paragraph}`}>
              Request Early Access to Get Started
            </p>
            <h3 className="my-7 font-manrope font-extrabold text-[34px]  gradient__text max-w-[500px]">
              The possibilities are beyond your imagination
            </h3>
            <div>
              <p className={`${styles.paragraph}`}>
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>
              <p className="tet-[18px] font-manrope font-light mt-6 text-subtext">
                Request Early Access to Get Started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
