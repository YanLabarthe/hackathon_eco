import logobiom from "@assets/images/Biom-logo.png";
import { Link } from "react-router-dom";
import LogoAnime from "./LogoAnime";
// import SpringDemo from "@components/SpringDemo";

export default function Home() {
  return (
    <div className="Home-page">
      <div className="flexmoi">
        <div className="header"></div>
        <div>
          <img className="logobiom" img src={logobiom} alt="plante" />
          <h1>Recylez Facilement</h1>
        </div>
        <div>
          <Link to="/photomode">
            <LogoAnime />
          </Link>
        </div>
        <div>
          <Link className="Linktoprofile" to="/Userprofile">
            <h2>User Profil</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
