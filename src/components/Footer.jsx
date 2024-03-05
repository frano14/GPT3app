import React from "react";
import styles, { layout } from "../style";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className={`bg-input w-full`}>
      <div className={`${styles.flexCenter} flex-col sm:pt-16 pt-6 pb-2`}>
        <h3 className=" text-center max-w-[700px] font-manrope font-extrabold sm:text-[62px] text-[48px]  gradient__text mb-12 leading-[75px]">
          Do you want to step in to the future before others
        </h3>
        <button className=" mb-32 bg-transparent border text-white px-8 py-6 text-[18px] font-manrope">
          Request Early Access
        </button>
        <div className="w-full items-start text-start footer-grid mb-20">
          <div className=" px-8 py-4">
            <img src={logo} alt="logo" />
            <p className="font-manrope text-[12px] pt-8 text-white">
              Crechterwoord K12 182 DK
              <br />
              Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="px-8 py-4 text-white">
            <ul className="flex flex-col gap-4">
              <li className="font-manrope text-[12] font-semibold mb-6">
                Links
              </li>
              <li className="font-manrope text-[12]">Overons</li>
              <li className="font-manrope text-[12]">Social Media</li>
              <li className="font-manrope text-[12]">Counters</li>
              <li className="font-manrope text-[12]">Contact</li>
            </ul>
          </div>
          <div className="px-8 py-4 text-white">
            <ul className="flex flex-col gap-4">
              <li className="font-manrope text-[12] font-semibold mb-6">
                Company
              </li>
              <li className="font-manrope text-[12]">Terms & Conditions</li>
              <li className="font-manrope text-[12]">Privacy Policy</li>
              <li className="font-manrope text-[12]">Contact</li>
            </ul>
          </div>
          <div className="px-8 py-4 text-white">
            <ul className="flex flex-col gap-4">
              <li className="font-manrope text-[12] font-semibold mb-6">
                Get in touch
              </li>
              <li className="font-manrope text-[12]">
                Crechterwoord K12
                <br /> 182 DK Alknjkcb
              </li>
              <li className="font-manrope text-[12]">085-132567</li>
              <li className="font-manrope text-[12]">info@payme.net</li>
            </ul>
          </div>
        </div>
        <p className={`${styles.paragraph} text-white`}>
          © 2021 GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
