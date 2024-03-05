import atlassian from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";
import google from "../assets/google.png";
import shopify from "../assets/shopify.png";
import slack from "../assets/slack.png";
import { layout } from "../style";
import styles from "../style";

const Sponsors = () => {
  return (
    <div
      id="Sponsors"
      className={`${styles.padding} ${layout.section} flex justify-center items-center`}
    >
      <div className="grid md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-10">
        <p className="p-4">
          <img src={atlassian} alt="atlassian" />
        </p>
        <p className="p-4">
          {" "}
          <img src={dropbox} alt="dropbox" />
        </p>
        <p className="p-4 ">
          {" "}
          <img src={google} alt="google" />
        </p>
        <p className="p-4 ">
          {" "}
          <img src={shopify} alt="shopify" />
        </p>
        <p className="p-4 0">
          {" "}
          <img src={slack} alt="slack" />
        </p>
      </div>
    </div>
  );
};

export default Sponsors;
