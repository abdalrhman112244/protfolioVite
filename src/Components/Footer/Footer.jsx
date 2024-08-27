import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <p>@ 2024. All Rights Reserved</p>
      <p>Develpoment by AbdAlRhman</p>
      <div className="GropS">
        <Link to="https://www.facebook.com/abdbero" >
            <img src="/protfolioVite/assets/img/facebook.png" alt="" />
        </Link>
        <Link to="https://www.instagram.com/abdalrhman__berkdar?igsh=MXRrcWR6NmQ0N2Vkdw==" >
            <img src="/protfolioVite/assets/img/instagram.png" alt="" />
        </Link>
        <Link to="https://www.linkedin.com/in/abd-al-rhman-berkdar-43b8b227a/">
            <img src="/protfolioVite/assets/img/linkedin.png" alt="" />
        </Link>
        <Link >
            <img src="/protfolioVite/assets/img/twitter.png" alt="" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
