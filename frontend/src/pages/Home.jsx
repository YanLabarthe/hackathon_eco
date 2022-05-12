import imagerecycle from "@assets/images/logo-vert.png";
import logobiom from "@assets/images/Biom-logo.png";
import { Link } from "react-router-dom";

// import SpringDemo from "@components/SpringDemo";

export default function Home() {
  return (
    <div className="Home-page">
      <div className="flex-logo">
        <div>
          {" "}
          <img className="logobiom" img src={logobiom} />{" "}
        </div>
      </div>
      <div className="flexmoi">
        <Link to="/Scan">
          {" "}
          <img className="plante" src={imagerecycle} alt="" />{" "}
        </Link>
      </div>
    </div>
  );
}
