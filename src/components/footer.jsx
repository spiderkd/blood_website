import "../Styles/footer.css";
import imgg from "../assets/medical.svg";
import img from "../assets/bnation.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="foot">
        <img className="imagefoot" src={imgg} alt="" />
        <Link to={"/"}>
          <img className="imglogo" src={img} alt="" />
        </Link>
        <div className="vr"></div>
        <div className="link1">
          {" "}
          <p>links</p>
        </div>
        <div className="link2">
          <p>links</p>{" "}
        </div>
      </div>
    </>
  );
}
