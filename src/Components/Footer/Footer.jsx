import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <p>@ 2024. All Rights Reserved</p>
      <p>Develpoment by AbdAlRhman</p>
      <div className="GropS">
        <Link >
            <img src="/assets/img/facebook.png" alt="" />
        </Link>
        <Link >
            <img src="/assets/img/instagram.png" alt="" />
        </Link>
        <Link >
            <img src="/assets/img/linkedin.png" alt="" />
        </Link>
        <Link >
            <img src="/assets/img/twitter.png" alt="" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
